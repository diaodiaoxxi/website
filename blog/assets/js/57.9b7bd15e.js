(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{629:function(t,s,a){"use strict";a.r(s);var n=a(22),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),a("h2",{attrs:{id:"三个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三个阶段"}},[t._v("#")]),t._v(" 三个阶段")]),t._v(" "),a("p",[t._v("捕获、目标、冒泡\n低版本IE（IE8及以下版本）不支持捕获阶段")]),t._v(" "),a("ul",[a("li",[t._v("捕获事件流：NetScape提出的事件流，即事件由页面元素window接收，传播到最具体的元素")]),t._v(" "),a("li",[t._v("冒泡事件流：IE提出的事件流，即事件由最具体的元素接收，逐级向上，传播到页面")])]),t._v(" "),a("h2",{attrs:{id:"处理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理程序"}},[t._v("#")]),t._v(" 处理程序")]),t._v(" "),a("p",[t._v("DOM2")]),t._v(" "),a("ul",[a("li",[t._v("target.addEventListener(event,listener,useCapture)")]),t._v(" "),a("li",[t._v("target.removeEventListener(event, listener, useCapture)")])]),t._v(" "),a("p",[t._v("阻止冒泡：stopPropagation")]),t._v(" "),a("p",[t._v("IE(只能冒泡)")]),t._v(" "),a("ul",[a("li",[t._v("target.attacEvent(type,listener)")]),t._v(" "),a("li",[t._v("target.detachEvent(event,listener)")])]),t._v(" "),a("p",[t._v("阻止冒泡：cancelBubble")]),t._v(" "),a("h2",{attrs:{id:"事件的代理-委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件的代理-委托"}},[t._v("#")]),t._v(" 事件的代理/委托")]),t._v(" "),a("p",[t._v("原理：靠事件的冒泡机制来实现的")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("可以大量节省内存空间，减少事件注册")]),t._v(" "),a("li",[t._v("针对一些动态新增子节点的场景，新增节点无需在设置绑定事件")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("如果把所有事件都代理就可能会出现事件误判，即本不应用触发事件的被绑上了事件")])]),t._v(" "),a("h2",{attrs:{id:"自定义事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义事件"}},[t._v("#")]),t._v(" 自定义事件")]),t._v(" "),a("ul",[a("li",[t._v("CustomEvent")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兼容 IE CustomEvent")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CustomEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If not IE")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CustomEvent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    params "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bubbles"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cancelable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" detail"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" evt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CustomEvent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    evt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initCustomEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bubbles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" evt\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CustomEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CustomEvent\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"事件广播-dispatchevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件广播-dispatchevent"}},[t._v("#")]),t._v(" 事件广播(dispatchEvent)")]),t._v(" "),a("ul",[a("li",[t._v("实现在特定的情况下手动在代码层面需要触发指定事件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  vue 实现模拟focus事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focusin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" detail"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focus'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实现自定义focus事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件触发")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.$refs.reference.focus()")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"不会捕获和冒泡的事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不会捕获和冒泡的事件"}},[t._v("#")]),t._v(" 不会捕获和冒泡的事件")]),t._v(" "),a("ul",[a("li",[t._v("focus、blur")]),t._v(" "),a("li",[t._v("mouseover、mouseout")])]),t._v(" "),a("p",[t._v("如果需要冒泡的话")]),t._v(" "),a("ul",[a("li",[t._v("focusin、fouseout")]),t._v(" "),a("li",[t._v("mouseenter、mouseleave")])])])}),[],!1,null,null,null);s.default=e.exports}}]);