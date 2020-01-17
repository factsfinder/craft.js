(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),d=(n(0),n(151)),a=n(152),c={id:"useEditor",title:"useEditor()",sidebar_label:"useEditor()"},i={id:"api/useEditor",title:"useEditor()",description:'import {API, Badge} from "./API";',source:"@site/docs/api/useEditor.md",permalink:"/r/docs/api/useEditor",sidebar_label:"useEditor()",sidebar:"docs",previous:{title:"<Canvas />",permalink:"/r/docs/api/canvas"},next:{title:"useNode()",permalink:"/r/docs/api/useNode"}},s=[{value:"Reference",id:"reference",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Collecting state information",id:"collecting-state-information",children:[]},{value:"Updating props",id:"updating-props",children:[]},{value:"Hiding and Deleting a Node",id:"hiding-and-deleting-a-node",children:[]},{value:"Moving a Node",id:"moving-a-node",children:[]},{value:"Creating and Adding a new Node",id:"creating-and-adding-a-new-node",children:[]},{value:"Getting the currently selected Node's descendants",id:"getting-the-currently-selected-nodes-descendants",children:[]},{value:"Displaying Drop Indicator for the best possible drop location",id:"displaying-drop-indicator-for-the-best-possible-drop-location",children:[]}]},{value:"Legacy API",id:"legacy-api",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Injected Props",id:"injected-props",children:[]},{value:"Example",id:"example",children:[]}]}],l={rightToc:s},p="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(d.b)(p,Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(d.b)(a.b,{type:"hook",mdxType:"Badge"}),Object(d.b)("p",null,"A Hook that provides methods and state information associated with the entire editor."),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"const { connectors, actions, query, ...collected } = useEditor(collector);\n")),Object(d.b)("blockquote",null,Object(d.b)("p",{parentName:"blockquote"},"Note: This hook can only be used within a User Component. ")),Object(d.b)("h2",{id:"reference"},"Reference"),Object(d.b)("h3",{id:"parameters"},"Parameters"),Object(d.b)(a.a,{items:[["collector","(state: ManagerState, query: Query) => Collected","A function that collects relevant state information from the editor state. The component will re-render when the values returned by this function changes."]],mdxType:"API"}),Object(d.b)("h3",{id:"returns"},"Returns"),Object(d.b)(a.a,{items:[[null,"Object",[["connectors","Object",[["select","(dom: HTMLElement, nodeId: NodeId) => HTMLElement","Specifies the DOM that when clicked will in turn click the specified Node's user component"],["hover","(dom: HTMLElement, nodeId: NodeId) => HTMLElement","Specifies the DOM that when hovered will in turn hover the specified Node's user component"],["drag","(dom: HTMLElement, nodeId: NodeId) => HTMLElement","Specifies the DOM that when dragged will move the specified Node's user component. Only applicable if the component is rendered as an immediate child of a &lt;Canvas /&gt; component."],["create","(dom: HTMLElement, userElement: React.ReactElement) => HTMLElement","Specifies the DOM that when dragged will create a new instance of the specified User Element at the drop location."]]],["actions","Object",[["add","(nodes: Node | Node[], parentId?: NodeId) => void","Add Node(s) to the given parent node ID. By default the parentId is the ROOT_ID"],["delete","(nodeID: NodeId) => void","Delete the specified Node"],["deserialize","() => String","Recreate Nodes from JSON. This will clear all the current Nodes in the editor state with the recreated Nodes"],["move","(nodeId: NodeId, targetParentId: NodeId, index: number) => void","Move a Node to the specified parent Node at the given index."],["setProp","(nodeId: NodeId, update: (props: Object) => void) => void","Manipulate the props of the given Node"],["setHidden","(nodeId: NodeId, bool: boolean) => void","When set to true, the User Component of the specified Node will be hidden, but not removed"],["setCustom","(nodeId: NodeId, custom: (custom: Object) => void","Update the given Node's custom properties"],["setOptions","(options: Object) => void","Update the editor's options. The options object passed is the same as the &lt;Editor /&gt; props."]]],["query","Query",[["createNode","(child: React.ReactElement) => Node","Create a Node from a React element"],["serialize","() => String","Return the current Nodes in JSON"],["getOptions","() => Object","Get the options specified in the &lt;Editor /&gt; component"],["getDropPlaceholder","(sourceNodeId: NodeId, targetNodeId: NodeId, pos: {x: number, y: number}, nodesToDOM?: (node: Node) => HTMLElement = node => node.dom)","Given the target Node and mouse coordinates on the screen, determine the best possible location to drop the source Node. By default, the Node's DOM property is taken into consideration."],["node","(id: NodeId) => NodeHelpers","Returns an object containing helper methods to describe the specified Node. Click <a href='/craft.js/r/docs/api/helpers/'>here</a> for more information."]]],["inContext","boolean","Returns false if the component is rendered outside of the `<Editor />`. This is useful if you are designing a general component that you also wish to use outside of Craft.js."],["...collected","Collected","The collected values returned from the collector"]]]],mdxType:"API"}),Object(d.b)("h2",{id:"examples"},"Examples"),Object(d.b)("h3",{id:"collecting-state-information"},"Collecting state information"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import {useEditor} from "@craftjs/core";\n\nconst Example = () => {\n  const { hoveredNodeId } = useEditor((state) => ({\n    hoveredNodeId: state.events.hovered\n  }));\n\n  return (\n    <div>\n      The ID of the node currently being hovered is: {hoveredNodeId}\n    </div>\n  )\n}\n')),Object(d.b)("h3",{id:"updating-props"},"Updating props"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import {useEditor} from "@craftjs/core";\n\nconst Example = () => {\n  const { selectedNodeId, actions: {setProp} } = useEditor((state) => ({\n    selectedNodeId: state.events.selected\n  }));\n\n  return (\n    <a\n      onClick={_ => {\n        setProp(selectedNodeId, props => {\n          props.text = "new value";\n        });\n      }}\n    >\n      Update\n    </a>\n  )\n}\n')),Object(d.b)("h3",{id:"hiding-and-deleting-a-node"},"Hiding and Deleting a Node"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const Example = () => {\n  const {selectedNodeId, actions} = useEditor((state) => ({\n    selectedNodeId: state.events.selected\n  }));\n  return selectedNodeId && (\n    <div>\n      <h2>Node selected: {selectedNodeId}</h2>\n      <a onClick={() => actions.hide(selectedNodeId)}>Hide</a>\n      <a onClick={() => actions.delete(selectedNodeId)}>Delete</a>\n    </div>\n  )\n}\n")),Object(d.b)("h3",{id:"moving-a-node"},"Moving a Node"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const Example = () => {\n  const [sourceId, setSourceId] = useState();\n  const [targetId, setTargetId] = useState();\n  \n  const {selectedNodeId, actions, query} = useEditor((state) => ({\n    selectedNodeId: state.events.selected\n  }));\n\n  return selectedNodeId && (\n    <div>\n      <h2>Node selected: {selectedNodeId}</h2>\n      <div>\n        <input type="text" value={sourceId} placeholder="Source" disabled />\n        <button onClick={() => selectedNodeId && setSourceId(selectedNodeId)}>Set selected Node as source</button>\n      </div>\n      <div>\n        <input type="text" value={targetId} placeholder="Target" disabled />\n        <button onClick={() => selectedNodeId && setTargetId(selectedNodeId)}>Set selected Node as target</button>\n      </div>\n      {\n        sourceId && targeId ? (\n          <button onClick={() => {\n            try {\n              // .canDropInParent will throw an error message if the conditions failed\n              query.canDropInParent(sourceId, targetId); \n              actions.move(sourceId, targetId);\n            } catch (e) {\n              console.error(e.message);\n            } \n          }}>Move Node</button>\n        )\n      }\n    </div>\n  )\n}\n')),Object(d.b)("h3",{id:"creating-and-adding-a-new-node"},"Creating and Adding a new Node"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import {useEditor} from "@craftjs/core";\n\nconst Example = () => {\n  const { query, actions } = useEditor((state, query) => ({\n    hoveredNodeId: state.events.hovered\n  }));\n\n  return (\n    <div>\n      <a onClick={() => {\n        const node = query.createNode(<h2>Hi</h2>);\n        actions.add(node);\n      }}>Click me to add a new Node</a>\n    </div>\n  )\n}\n')),Object(d.b)("h3",{id:"getting-the-currently-selected-nodes-descendants"},"Getting the currently selected Node's descendants"),Object(d.b)("blockquote",null,Object(d.b)("p",{parentName:"blockquote"},"Query methods are also accessible from within the collector function.")),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import {useEditor} from "@craftjs/core";\n\nconst Example = () => {\n  const { selectedDescendants } = useEditor((state, query) => ({\n    selectedDescendants: state.events && query.getDeepNodes(state.events.selected).map(node => node.id)\n  }));\n\n  return (\n    <ul>\n      {\n        selectedDescendants && selectedDescendants.map(id => <li>{id}</li> )\n      }\n    </ul>\n  )\n}\n')),Object(d.b)("h3",{id:"displaying-drop-indicator-for-the-best-possible-drop-location"},"Displaying Drop Indicator for the best possible drop location"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const Example = () => {\n  const [screenClick, setScreenClick] = useState(false);\n  const [sourceId, setSourceId] = useState();\n  const [targetId, setTargetId] = useState();\n  \n  const {selectedNodeId, actions, query} = useEditor((state) => ({\n    selectedNodeId: state.events.selected\n  }));\n\n  const disableScreenClick = useEffect((e) => {\n     if(e.key === "Escape") {\n       setScreenClick(false);\n    }\n  }, [screenClick]);\n\n  const clickOnScreen = useEffect((e) => {\n    const {clientX: x, clientY: y} = e;\n    const dropIndicator = query.getDropIndicator(sourceId, targetId, {x, y});\n    actions.setDropIndicator(dropIndicator);\n  }, [screenClick]);\n  \n\n  useEffect(() => {\n    window.addEventListener("click", clickOnScreen);\n    window.addEventListener("keyup", disableScreenClick);\n    return (() => {\n      window.removeEventListener("click", clickOnScreen);\n      window.removeEventListener("keyup", disableScreenClick);\n    })\n  }, [clickOnScreen, disableScreenClick]);\n\n  return selectedNodeId && (\n    <div>\n      <h2>Node selected: {selectedNodeId}</h2>\n      <div>\n        <input type="text" value={sourceId} placeholder="Source" disabled />\n        <button onClick={() => selectedNodeId && setSourceId(selectedNodeId)}>Set selected Node as source</button>\n      </div>\n      <div>\n        <input type="text" value={targetId} placeholder="Target" disabled />\n        <button onClick={() => selectedNodeId && setTargetId(selectedNodeId)}>Set selected Node as target</button>\n      </div>\n      {\n        sourceId && targeId ? (\n          <button onClick={() => {\n            setScreenClick(true);\n          }}>\n            {screenClick ? "Click anywhere on the screen to display indicator" : "Start"}\n          </button>\n        )\n      }\n    </div>\n  )\n}\n')),Object(d.b)("h2",{id:"legacy-api"},"Legacy API"),Object(d.b)("p",null,"For Class Components, use ",Object(d.b)("inlineCode",{parentName:"p"},"connectEditor")," instead."),Object(d.b)(a.b,{type:"hoc",title:!1,mdxType:"Badge"}),Object(d.b)("h3",{id:"parameters-1"},"Parameters"),Object(d.b)(a.a,{items:[["collector","(node: Node) => Collected","A function that collects relevant state information from the corresponding Node. The component will re-render when the values returned by this function changes."]],mdxType:"API"}),Object(d.b)("h3",{id:"injected-props"},"Injected Props"),Object(d.b)(a.a,{items:[["...useEditor(collector)","Object","Identical return values as the useEditor() hook above"]],mdxType:"API"}),Object(d.b)("h3",{id:"example"},"Example"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import { connectEditor } from "@craftjs/core";\n\nclass SidebarInner extends React.Component {\n  render() {\n    const { actions, query, enabled, currentSelectedNodeId } = this.props;\n    return (\n      <div>\n        <input type="checkbox" value={enabled} onChange={\n          e => actions.setOptions(options => options.enabled = !enabled)\n        } />\n        <button \n          onClick={() => {\n            console.log(query.serialize())\n          }}\n        >\n            Serialize JSON to console\n        </button>\n      </div>\n    )\n  }\n}\n\nexport const Sidebar = connectEditor((state) => ({\n  currentSelectedNodeId: state.events.selected\n}))(SidebarInner);\n')))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},d=Object.keys(e);for(o=0;o<d.length;o++)n=d[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)n=d[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,d=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,m=p["".concat(a,".").concat(u)]||p[u]||b[u]||d;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var d=n.length,a=new Array(d);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<d;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var o=n(0),r=n.n(o),d=function(e){var t=e.item,n=t[0],o=t.length>1&&"string"==typeof t[1]&&t[1],d=3==t.length?"string"==typeof t[2]&&t[2]:4==t.length&&"string"==typeof t[3]&&t[3],c=t.length>1&&Array.isArray(t[t.length-1])&&t[t.length-1];return r.a.createElement("li",{className:"api-item"},r.a.createElement("div",null,n&&r.a.createElement("code",{className:"api-title"},n),o&&r.a.createElement("strong",{className:"api-type"},o)),d&&r.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:d}}),c&&r.a.createElement(a,{items:c}))},a=function(e){var t=e.items;return r.a.createElement("ul",null,t&&t.map((function(e,t){return r.a.createElement(d,{item:e,key:t})})))},c=function(e){var t,n=e.type,o=e.title,d=void 0===o||o,a=e.noMargin,c=void 0===a||a;switch(n){case"hoc":t="Higher-Order Component";break;default:t=n[0].toUpperCase()+n.substring(1)}return r.a.createElement("div",{className:"badge-wrapper"},r.a.createElement("span",{className:"badge badge-"+n+" "+(d?"badge-title":"")+" "+(c?"badge-no-margin":"")},t))}}}]);