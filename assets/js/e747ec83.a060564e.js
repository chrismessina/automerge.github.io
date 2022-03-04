"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2291],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5309:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:1e3},c="Glossary",l={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"CRDTs",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/glossary.md",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/api"}},h=[{value:"CRDTs",id:"crdts",children:[],level:2},{value:"Eventual Consistency",id:"eventual-consistency",children:[],level:2},{value:"Documents",id:"documents",children:[],level:2},{value:"Types",id:"types",children:[],level:2},{value:"Changes",id:"changes",children:[],level:2},{value:"History",id:"history",children:[],level:2},{value:"Compaction",id:"compaction",children:[],level:2},{value:"Synchronization",id:"synchronization",children:[],level:2}],u={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary"},"Glossary"),(0,r.kt)("h2",{id:"crdts"},"CRDTs"),(0,r.kt)("p",null,"Automerge is a type of CRDT (Conflict-Free Replicated Datatype). A CRDT is a data structure that simplifies multi-user applications. We can use them to synchronize data between two devices in a way that both devices see the same application state.  In many systems, copies of some data need to be stored on multiple computers. Examples include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mobile apps that store data on the local device, and that need to sync that data to other devices belonging to the same user (such as calendars, notes, contacts, or reminders);"),(0,r.kt)("li",{parentName:"ul"},"Distributed databases, which maintain multiple replicas of the data (in the same datacenter or in different locations) so that the system continues working correctly if some of the replicas are offline;"),(0,r.kt)("li",{parentName:"ul"},"Collaboration software, such as Google Docs, Trello, Figma, or many others, in which several users can concurrently make changes to the same file or data;"),(0,r.kt)("li",{parentName:"ul"},"Large-scale data storage and processing systems, which replicate data in order to achieve global scalability.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://crdt.tech/"},"Read more about CRDTs"))),(0,r.kt)("h2",{id:"eventual-consistency"},"Eventual Consistency"),(0,r.kt)("p",null,"Applications built with Automerge are ",(0,r.kt)("em",{parentName:"p"},"eventually consistent.")," This means if several users are working together, they will ",(0,r.kt)("em",{parentName:"p"},"eventually")," all see the same application state, but at any given moment it's possible for the users to be temporarily out of sync."),(0,r.kt)("p",null,"Eventual consistency allows applications to work offline: even if a user is disconnected from the internet, Automerge allows that user to view and modify their data. If the data is shared between several users, they may all update their data independently. Later, when a network is available again, Automerge ensures that those edits are cleanly merged. See the page on ",(0,r.kt)("a",{parentName:"p",href:"cookbook/conflicts"},"conflicts")," for more detail on these merges."),(0,r.kt)("h2",{id:"documents"},"Documents"),(0,r.kt)("p",null,"A document is a collection of data that holds the current state of the application. A document in Automerge is represented as an object. Each document has a set of keys which can be used to hold variables that are one of the Automerge datatypes."),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,"All collaborative data structures conform to certain rules. Each variable in the document must be of one of the implemented types. Each type must conform to the rules of CRDTs. Automerge comes with a set of ",(0,r.kt)("a",{parentName:"p",href:"types/values"},"pre-defined types")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),", and so on."),(0,r.kt)("h2",{id:"changes"},"Changes"),(0,r.kt)("p",null,"A change describes some update to a document; think of it like a commit in Git. A change could perform several operations, for example setting several properties or updating several objects within the document, and these will all be executed atomically. Changes are commutative, which means that the order in which they are applied does not matter. When the same set of changes has been applied to two documents, Automerge guarantees that they will be in the same state."),(0,r.kt)("p",null,"To do this, typically each change depends upon a previous change. Automerge creates a directed acyclic graph (DAG) of changes. To learn more about how automerge works internally, see the ",(0,r.kt)("a",{parentName:"p",href:"how-it-works/backend"},"Internals")," section."),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("p",null,"Each change that is made to a data structure builds upon other changes to create a shared, materialized view of a document. Each change is dependent on a previous change, which means that all replicas are able to construct a history of the data structure. This is a powerful property in multi-user applications, and can be implemented in a way that is storage and space efficient."),(0,r.kt)("h2",{id:"compaction"},"Compaction"),(0,r.kt)("p",null,"Compaction is a way to serialize the current state of the document without the history. You might want to do this when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You don't want to replicate the entire history because of bandwidth or resource concerns on the target device. This might be useful in embedded systems or mobile phones."),(0,r.kt)("li",{parentName:"ul"},"A deleted element contains some sensitive information that you would like to be purged from the history.")),(0,r.kt)("p",null,"The downsides of compacting the history of a document include not being able to synchronize that compacted document with another document that doesn't have a common ancestor. "),(0,r.kt)("h2",{id:"synchronization"},"Synchronization"),(0,r.kt)("p",null,"When two or more  devices make changes to a document, and then decide to exchange those changes to come to a consistent state, we call that ",(0,r.kt)("em",{parentName:"p"},"synchronization"),". Synchronization can, in the most simple implementation, consist of sending the full list of changes in the history to all connected devices. To improve performance, devices may negotiate which changes are missing on either end and exchange only those changes which are missing, rather than the entire change history."))}d.isMDXComponent=!0}}]);