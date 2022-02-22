"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[97],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2171:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Folder Structure",sidebar_position:3},s=void 0,c={unversionedId:"frontend/folder-structure",id:"frontend/folder-structure",title:"Folder Structure",description:"This describes the folder layout of the Next.js WordPress starter:",source:"@site/docs/frontend/folder-structure.md",sourceDirName:"frontend",slug:"/frontend/folder-structure",permalink:"/nextjs-wordpress-starter/docs/frontend/folder-structure",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/docs/frontend/folder-structure.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1645564089,formattedLastUpdatedAt:"2/22/2022",sidebarPosition:3,frontMatter:{title:"Folder Structure",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/nextjs-wordpress-starter/docs/frontend/overview"},next:{title:"Coding Standards",permalink:"/nextjs-wordpress-starter/docs/frontend/coding-standards"}},d=[{value:"<code>.storybook</code>",id:"storybook",children:[],level:2},{value:"<code>components</code>",id:"components",children:[],level:2},{value:"<code>functions</code>",id:"functions",children:[],level:2},{value:"<code>lib</code>",id:"lib",children:[],level:2},{value:"<code>pages</code> and <code>public</code>",id:"pages-and-public",children:[],level:2},{value:"<code>__tests__</code>",id:"__tests__",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This describes the folder layout of the Next.js WordPress starter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 __tests__\n\u251c\u2500\u2500 .storybook\n\u251c\u2500\u2500 components\n|  \u251c\u2500\u2500 atoms\n|  \u251c\u2500\u2500 blocks\n|  \u251c\u2500\u2500 common\n|  \u251c\u2500\u2500 documentation\n|  \u251c\u2500\u2500 molecules\n|  \u2514\u2500\u2500 organisms\n\u251c\u2500\u2500 functions\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 pages\n|  \u251c\u2500\u2500 api\n|  \u251c\u2500\u2500 profile\n|  \u2514\u2500\u2500 team\n\u251c\u2500\u2500 public\n\u251c\u2500\u2500 styles\n")),(0,i.kt)("h2",{id:"storybook"},(0,i.kt)("inlineCode",{parentName:"h2"},".storybook")),(0,i.kt)("p",null,"This folder holds the configuration for ",(0,i.kt)("a",{parentName:"p",href:"/docs/storybook"},"Storybook"),"."),(0,i.kt)("h2",{id:"components"},(0,i.kt)("inlineCode",{parentName:"h2"},"components")),(0,i.kt)("p",null,"This folder contains the various React components that make up the\nwebsite. They are organized into folders based on their complexity:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"atoms")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"molecules")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"organisms"))),(0,i.kt)("p",null,"Of the remaining folders, ",(0,i.kt)("inlineCode",{parentName:"p"},"documentation")," contains information for\nStorybook. The ",(0,i.kt)("inlineCode",{parentName:"p"},"common")," folder contains components that define the\ngeneral structure of pages."),(0,i.kt)("p",null,"Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"blocks")," folder contains the components directly\nresponsible for displaying individual blocks from the WordPress\nBlock Editor. They are organized by the source of the block."),(0,i.kt)("h2",{id:"functions"},(0,i.kt)("inlineCode",{parentName:"h2"},"functions")),(0,i.kt)("p",null,"This folder contains useful functions for the frontend. Of note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"displayBlock.js")," handles which Component will display for which block"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"formatBlockData.js")," handles the initial processing of the blockJSON")),(0,i.kt)("h2",{id:"lib"},(0,i.kt)("inlineCode",{parentName:"h2"},"lib")),(0,i.kt)("p",null,"This folder contains the functions for communicating with the different\nAPIs in the project. There is a folder for each distinct API with a\n",(0,i.kt)("inlineCode",{parentName:"p"},"connector.js")," file for managing that connection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wordpress"),": for communicating with the headless WordPress install. The\nmajority of work will be in this folder."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"frontend"),": for allowing the browser to communicate with the Next.js API\nendpoints. More on this setup is in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/backend"},"Overview")," section."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"algolia"),": for communicating with the Algolia search API.")),(0,i.kt)("p",null,"Within the folders, files are organized by feature. A typical feature will\nhave a GraphQL query and a function to handle calling that query. That\nfunction will be called by the appropriate page elsewhere in the project."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"wordpress")," folder, there are two folders worth pointing out:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_partials")," contains fragments of GraphQL queries that are used in\nmultiple places."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_global")," contains functions that are not tied to particular features,\nespecially ones used in the creation of pages.")),(0,i.kt)("p",null,"For more on how a Next.js project is set up, the Next.js ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started"},"documentation")," is\na great place to start."),(0,i.kt)("h2",{id:"pages-and-public"},(0,i.kt)("inlineCode",{parentName:"h2"},"pages")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"public")),(0,i.kt)("p",null,"These are the folders essential to Next.js. The ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder contains\nstatic files meant to be copied directly to the deployed server. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," folder contains files that are processed by Next.js according\nto their name."),(0,i.kt)("p",null,"On the surface level, ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," will correspond to ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," in the deployed\nwebsite, ",(0,i.kt)("inlineCode",{parentName:"p"},"search.js")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/search"),", and so on. Files in brackets, such\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"[...slug].js"),', are dynamically interpreted by Next.js. For example,\na page titled "Example page" will be mapped by ',(0,i.kt)("inlineCode",{parentName:"p"},"/[...slug].js"),"\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"/example-page")," in the finished website."),(0,i.kt)("h2",{id:"__tests__"},(0,i.kt)("inlineCode",{parentName:"h2"},"__tests__")),(0,i.kt)("p",null,"This folder contains the Jest tests for the frontend."))}u.isMDXComponent=!0}}]);