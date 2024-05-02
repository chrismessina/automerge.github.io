---
sidebar_position: 3
---

# Why Peritext was not enough

The rich model Automerge exposes is based on two primitives, formatting spans, and block markers. Some readers may wonder why we need block markers, Peritext made no mention of this. [Peritext](https://www.inkandswitch.com/peritext/) was our first stab at supporting rich text and is supported in automerge via the various `"marks"` APIs. Peritext allows you to annotate a sequence of characters with formatting spans. For example, creating a bold span looks like this:

```typescript
import { next as automerge } from "@automerge/automerge"
let doc = automerge.from({ text: "hello world" })
doc = automerge.change(doc, d => {
    automerge.mark(d, ["text"], {start: 0, end: 5}, "bold", true)
})
```

This will create a document with the text "hello world" where the "hello" is bold. These spans merge nicely when concurrently modified:

<!--- Video demo of concurrently creating some inline formatting and merging it --->

This is great, but it's not enough. Real text also contains structural elements such as paragraphs, lists, and blockquotes. Representing these features using formatting spans does not work well in the face of concurrent edits. To see why, imagine that we represent formatting using spans with unique IDs, such as `paragraph-<id>`. Splitting a paragraph is achieved by removing the original span from one hald of the text and adding a new paragraph span with a different ID. Now consider this example: 

```
<paragraph-one>
A most important paragraph. A following paragraph. The end.
</paragraph-one>
```

Now let's say that two users concurrently split this paragraph in different places. One user like so:

```
<paragraph-one>
A most important paragraph. A following paragraph.
<paragraph-one>
<paragraph-two>
The end.
</paragraph-two>
```

And another like so:

```
<paragraph-one>
A most important paragraph..
</paragraph-one>
<paragraph-three>
A following paragraph. The end.
</paragraph-three>
```

When we merge these changes we will end up with this scenario:

```
<paragraph-one>
A most important paragraph..
<paragraph-one>
<paragraph-three>
A following paragraph.
<paragraph-two>
The end.
</paragraph-three>
A following paragraph. The end.
</paragraph-two>
```

Paragraph two and three now overlap. We could solve this by splitting the text every time the paragraph spans on that text change, but now how do we handle joining the split paragraph? If we remove the `paragraph-three` marker this will not reinstate the `paragraph-one` marker, instead we will have to reinstate it manually. In general, using marks for block elements is a poor fit because there are many ways of applying marks which don't correspond to any particular block structure.

Instead, we need a way of representing blocks which captures the original user intent well and which has an unambiguous mapping to the block structure of the document. To achieve this we have introduced "block markers".

### Blocks

Consider some common block editing operations:

* Splitting a paragraph
* Merging two paragraphs
* Increasing the indentation level of a list item

We can represent all of these as operations on special block markers. Block markers are just maps which appear inline in the text and which have the following schema:

```typescript
type BlockMarker = {
  type: string,
  parents: string[]
  attrs: any,
  isEmbed: boolean 
}
```

Splitting a paragraph is achieved by inserting a block marker with a `type` of `paragraph`. Merging two paragraphs is achieved by removing the block marker which separates them. Increasing the indentation level of a list item is achieved by changing the `parents` field of the block marker which represents the list item.

All the text following a block marker is considered to be part of the block until the next block marker is encountered. For example, the following document:

```typescript
[
    { type: "ordered-list-item", parents: [], attrs: {}, isEmbed: false} ,
    "item one",
    { type: "ordered-list-item", parents: [], attrs: {}, isEmbed: false} ,
    "item two",
]
```

Represents a list with two items. Note that there is no "containing" `li` element, instead whenever we encounter block markers with the same type and parents we know to place them within the same containing element.

If we were now to increase the nesting level of the second item, to nest it within the first item, we would do this:

```typescript
[
    { type: "ordered-list-item", parents: [], attrs: {}, isEmbed: false} ,
    "item one",
    { type: "ordered-list-item", parents: ["ordered-list-item"], attrs: {}, isEmbed: false} ,
    "item two",
]
```

The attributes of a block marker can contain data which is specific to the type of block. For example, a `heading` block could have a `level: number` attribute.

Finally, if `isEmbed: true` then the block is assumed to be self closing - the text following it should be considered to be part of the previous block marker - this is mostly useful for images and other non-textual elements.

The advantage of this model is that the changes that a user makes whilst editing the document map to single operations on the automerge document. This means that these changes merge more cleanly and are easier to present as a diff when comparing versions.
