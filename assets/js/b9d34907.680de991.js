"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[299],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},764:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],l={title:"CSS Modules"},i=void 0,c={unversionedId:"frontend/component-css-module",id:"frontend/component-css-module",title:"CSS Modules",description:"Style components using CSS modules and Tailwind's @apply directive.",source:"@site/docs/frontend/component-css-module.md",sourceDirName:"frontend",slug:"/frontend/component-css-module",permalink:"/nextjs-wordpress-starter/docs/frontend/component-css-module",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/canary/docs/frontend/component-css-module.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1641829794,formattedLastUpdatedAt:"1/10/2022",frontMatter:{title:"CSS Modules"},sidebar:"tutorialSidebar",previous:{title:"Block Handler Components",permalink:"/nextjs-wordpress-starter/docs/frontend/component-block-handler"},next:{title:"JavaScript",permalink:"/nextjs-wordpress-starter/docs/frontend/component-js"}},p=[{value:"Example",id:"example",children:[],level:2},{value:"Applying Classes",id:"applying-classes",children:[{value:"Gotchas",id:"gotchas",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Style components using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS modules")," and ",(0,s.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/functions-and-directives#apply"},"Tailwind's ",(0,s.kt)("inlineCode",{parentName:"a"},"@apply")," directive"),"."),(0,s.kt)("p",null,"CSS modules are scoped to the component only. This means there is no need to worry about another component's CSS conflicting and should make naming things a little easier."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss-nested"},"PostCSS Nested")," is installed by default to allow nesting. Be aware that the syntax is slightly different than SCSS."),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},".component {\n  @apply mb-24 bg-blue-200; /* This applies Tailwind's utility classes */\n\n  &:hover {\n    /* .component:hover {} */\n  }\n\n  &.large {\n    /* .component.large {} */\n  }\n\n  & .content {\n    /* .component .content {} */\n  }\n}\n")),(0,s.kt)("h2",{id:"applying-classes"},"Applying Classes"),(0,s.kt)("p",null,"To apply the classes to your component first import the styles."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import styles from './Breadcrumbs.module.css'\n")),(0,s.kt)("p",null,"Next apply the styles to elements in your component. If applying multiple classes, use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/JedWatson/classnames"},(0,s.kt)("inlineCode",{parentName:"a"},"classnames")),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import cn from 'classnames'\n...\nreturn (\n    <section\n      className={cn(\n        styles.mediaText,\n        mediaLeft ? styles.mediaLeft : null\n      )}\n    >\n    ...\n    </section>\n)\n...\n")),(0,s.kt)("h3",{id:"gotchas"},"Gotchas"),(0,s.kt)("p",null,"PurgeCSS will remove unused classes in order to optimize the size of CSS files. PurgeCSS looks for the full class name in your source files. As long as the full class name exists, it will not be purged. As a general rule of thumb, do not use string interpolation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"return (\n  <>\n    <div className={styles[props.color]}>...</div> // This will not work\n    <div className={props.color === 'blue' && styles.blue}>...</div> // This will\n    work\n  </>\n)\n")))}d.isMDXComponent=!0}}]);