(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),a=(r(0),r(150)),c={id:"acknowledgements",title:"Acknowledgements"},i={id:"acknowledgements",title:"Acknowledgements",description:"A huge thank you to the authors and contributors of the following libraries/frameworks:",source:"@site/docs/acknowledgements.md",permalink:"/craft.js/r/docs/acknowledgements",sidebar:"docs",previous:{title:"Overview",permalink:"/craft.js/r/docs/overview"},next:{title:"Nodes",permalink:"/craft.js/r/docs/concepts/nodes"}},s=[],u={rightToc:s},l="wrapper";function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)(l,Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A huge thank you to the authors and contributors of the following libraries/frameworks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/react-dnd/react-dnd"}),"react-dnd"))," The React drag-n-drop library.\nAlthough it is not actually used here, many aspects of Craft.js are written with react-dnd as a reference along with some utilities and functions being borrowed. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/artf/grapesjs"}),"Grape.js"))," The HTML web builder framework. This has served as an inspiration for Craft.js. The element positioning logic used in Craft.js is borrowed from Grape.js"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/pelotom/use-methods"}),"use-methods"))," A super handy hook when dealing with reducers. Craft.js uses a modified version of use-methods that works with Redux instead of ",Object(a.b)("inlineCode",{parentName:"li"},"useReducer"))))}p.isMDXComponent=!0},150:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(b,i({ref:t},u,{components:r})):o.a.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);