(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{289:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(){function e(e,a){for(var l=0;l<a.length;l++){var t=a[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,l,t){return l&&e(a.prototype,l),t&&e(a,t),a}}(),n=function(e){return e&&e.__esModule?e:{default:e}}(l(0)),s=l(7);function r(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function c(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function u(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}var m=function(e){function a(e){r(this,a);var l=c(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return l.state={show:!1},l}return u(a,n.default.Component),t(a,[{key:"handleCollapse",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){return n.default.createElement("div",null,n.default.createElement("button",{onClick:this.handleCollapse.bind(this),id:"intro4"},"Collapse toggle"),n.default.createElement(s.Collapse,{in:this.state.show},n.default.createElement("div",{style:{background:"red"}},"啦啦啦啦",n.default.createElement("br",null),"lalala",n.default.createElement("br",null),"666666"),n.default.createElement("div",{style:{background:"red"}},"啦啦啦啦",n.default.createElement("br",null),"lalala",n.default.createElement("br",null),"666666"),n.default.createElement("div",{style:{background:"red"}},"啦啦啦啦",n.default.createElement("br",null),"lalala",n.default.createElement("br",null),"666666")))}}]),a}(),d=function(e){function a(e){r(this,a);var l=c(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return l.state={},l}return u(a,n.default.Component),t(a,[{key:"handleToggleCode",value:function(e){var a={};a["showCode"+e]=!this.state["showCode"+e],this.setState(a)}},{key:"render",value:function(){return n.default.createElement("div",{className:"doc"},n.default.createElement("h2",{id:"collapse"},n.default.createElement("a",{className:"header-anchor",href:"#collapse","aria-hidden":"true"},"¶")," Collapse"),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode3?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement(m,null)),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-js"},n.default.createElement("span",{className:"hljs-class"},n.default.createElement("span",{className:"hljs-keyword"},"class")," ",n.default.createElement("span",{className:"hljs-title"},"CollapseWrap")," ",n.default.createElement("span",{className:"hljs-keyword"},"extends")," ",n.default.createElement("span",{className:"hljs-title"},"React"),".",n.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",n.default.createElement("br",null),"    ",n.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"show"),": ",n.default.createElement("span",{className:"hljs-literal"},"false"),n.default.createElement("br",null),"        ","}",";",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    handleCollapse() ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-attr"},"show"),": !",n.default.createElement("span",{className:"hljs-keyword"},"this"),".state.show",n.default.createElement("br",null),"        ","}",");",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"    ",n.default.createElement("br",null),"    render() ","{",n.default.createElement("br",null),"        ",n.default.createElement("span",{className:"hljs-keyword"},"return")," (",n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"xml"},n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"div"),">"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"button")," ",n.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",n.default.createElement("span",{className:"hljs-string"},"{","::this.handleCollapse","}")," ",n.default.createElement("span",{className:"hljs-attr"},"id"),"=",n.default.createElement("span",{className:"hljs-string"},'"intro4"'),">"),"Collapse toggle",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"button"),">"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"Collapse")," ",n.default.createElement("span",{className:"hljs-attr"},"in"),"=",n.default.createElement("span",{className:"hljs-string"},"{","this.state.show","}"),">"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"div")," ",n.default.createElement("span",{className:"hljs-attr"},"style"),"=",n.default.createElement("span",{className:"hljs-string"},"{","{","background:")," '",n.default.createElement("span",{className:"hljs-attr"},"red"),"'","}","}",">"),n.default.createElement("br",null),"                        啦啦啦啦",n.default.createElement("br",null),"                        ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),n.default.createElement("br",null),"                        lalala",n.default.createElement("br",null),"                        ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),n.default.createElement("br",null),"                        666666",n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"div")," ",n.default.createElement("span",{className:"hljs-attr"},"style"),"=",n.default.createElement("span",{className:"hljs-string"},"{","{","background:")," '",n.default.createElement("span",{className:"hljs-attr"},"red"),"'","}","}",">"),n.default.createElement("br",null),"                        啦啦啦啦",n.default.createElement("br",null),"                        ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),n.default.createElement("br",null),"                        lalala",n.default.createElement("br",null),"                        ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),n.default.createElement("br",null),"                        666666",n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">"),n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"div")," ",n.default.createElement("span",{className:"hljs-attr"},"style"),"=",n.default.createElement("span",{className:"hljs-string"},"{","{","background:")," '",n.default.createElement("span",{className:"hljs-attr"},"red"),"'","}","}",">"),n.default.createElement("br",null),"                        啦啦啦啦",n.default.createElement("br",null),"                        ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),n.default.createElement("br",null),"                        lalala",n.default.createElement("br",null),"                        ",n.default.createElement("span",{className:"hljs-tag"},"<",n.default.createElement("span",{className:"hljs-name"},"br"),"/>"),n.default.createElement("br",null),"                        666666",n.default.createElement("br",null),"                    ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">"),n.default.createElement("br",null),"                ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"Collapse"),">"),n.default.createElement("br",null),"            ",n.default.createElement("span",{className:"hljs-tag"},"</",n.default.createElement("span",{className:"hljs-name"},"div"),">")),n.default.createElement("br",null),"        );",n.default.createElement("br",null),"    ","}",n.default.createElement("br",null),"}",n.default.createElement("br",null))),n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<CollapseWrap/>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,3)},n.default.createElement("i",null)))),n.default.createElement("h3",{id:"props"},n.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"in (bool|isRequired)")," 是否显示"),n.default.createElement("li",null,n.default.createElement("code",null,"...rest"))))}}]),a}();a.default=d}}]);
//# sourceMappingURL=48.c1c8647e.bundle.js.map