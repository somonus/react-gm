webpackJsonp([18],{571:function(e,l,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function s(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function r(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}Object.defineProperty(l,"__esModule",{value:!0});var u=function(){function e(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(l,a,t){return a&&e(l.prototype,a),t&&e(l,t),l}}(),c=a(1),m=t(c),d=a(22),f=a(3),E=t(f),o=function(e){function l(e){n(this,l);var a=s(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e)),t=E.default.map(E.default.range(8),function(e){return{value:e,name:"item"+e}});return a.state={list:t,value:t[0].value},a.handleChange=a.handleChange.bind(a),a}return r(l,e),u(l,[{key:"handleChange",value:function(e){console.log(e),this.setState({value:e})}},{key:"render",value:function(){var e=this.state,l=e.list,a=e.value;return console.log(l,a,"---"),m.default.createElement("div",null,m.default.createElement(d.Select,{value:a,onChange:this.handleChange},E.default.map(l,function(e){return m.default.createElement(d.Option,{key:e.value,value:e.value},e.name)})))}}]),l}(m.default.Component),h=function(e){function l(e){n(this,l);var a=s(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e)),t=E.default.map(E.default.range(8),function(e){return{value:e,name:"item"+e}});return a.state={list:t,value:t[0].value},a.handleChange=a.handleChange.bind(a),a}return r(l,e),u(l,[{key:"handleChange",value:function(e){console.log(e),this.setState({value:e})}},{key:"render",value:function(){var e=this.state,l=e.list,a=e.value;return m.default.createElement("div",null,m.default.createElement(d.Select,{value:a,onChange:this.handleChange,disabled:!0},E.default.map(l,function(e){return m.default.createElement(d.Option,{key:e.value,value:e.value},e.name)})))}}]),l}(m.default.Component),i=function(e){function l(e){n(this,l);var a=s(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e)),t=E.default.map(E.default.range(5),function(e){return{value:e,name:"item"+e}});return a.state={list:t,value:[t[0].value]},a.handleChange=a.handleChange.bind(a),a}return r(l,e),u(l,[{key:"handleChange",value:function(e){console.log(e),this.setState({value:e})}},{key:"render",value:function(){var e=this.state,l=e.list,a=e.value;return m.default.createElement("div",null,m.default.createElement(d.Select,{multiple:!0,value:a,onChange:this.handleChange},E.default.map(l,function(e){return m.default.createElement(d.Option,{key:e.value,value:e.value},e.name)})))}}]),l}(m.default.Component),p=function(e){function l(e){n(this,l);var a=s(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return a.state={},a}return r(l,e),u(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return m.default.createElement("div",{className:"doc"},m.default.createElement("h2",{id:"select"},m.default.createElement("a",{className:"header-anchor",href:"#select","aria-hidden":"true"},"¶")," Select"),m.default.createElement("p",null,"原生select在onChange的时候是字符串，经常要转换，累。"),m.default.createElement("p",null,"同时隐藏了多选的特别处理逻辑"),m.default.createElement("p",null,"一定要配合",m.default.createElement("code",null,"Option"),"使用"),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode12?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(o,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-description"},m.default.createElement("p",null,"单选，提供value的原始值出来，而非原生的字符串。")),m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"Component")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"const")," list = _.map(_.range(",m.default.createElement("span",{className:"hljs-number"},"8"),"), v => (","{",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"value"),": v,",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"name"),": ",m.default.createElement("span",{className:"hljs-string"},"'item'")," + v",m.default.createElement("br",null),"        ","}","));",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",m.default.createElement("br",null),"            list,",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"value"),": list[",m.default.createElement("span",{className:"hljs-number"},"0"),"].value",m.default.createElement("br",null),"        ","}",";",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange = ::",m.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange;",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    handleChange(value)","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-built_in"},"console"),".log(value);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",m.default.createElement("br",null),"            value",m.default.createElement("br",null),"        ","}",");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"const")," ","{","list, value","}"," = ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".state;",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-built_in"},"console"),".log(list, value,",m.default.createElement("span",{className:"hljs-string"},"'---'"),");",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"xml"},m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"div"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Select")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","value","}")," ",m.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",m.default.createElement("span",{className:"hljs-string"},"{","this.handleChange","}"),">"),m.default.createElement("br",null),"                    ","{","_.map(list, v => ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Option")," ",m.default.createElement("span",{className:"hljs-attr"},"key"),"=",m.default.createElement("span",{className:"hljs-string"},"{","v.value","}")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","v.value","}"),">"),"{","v.name","}",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Option"),">"),")","}",m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Select"),">"),m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"div"),">")),m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<Component/>",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,12)},m.default.createElement("i",null)))),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode16?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(h,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-description"},m.default.createElement("p",null,"disabled")),m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"Component2")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"const")," list = _.map(_.range(",m.default.createElement("span",{className:"hljs-number"},"8"),"), v => (","{",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"value"),": v,",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"name"),": ",m.default.createElement("span",{className:"hljs-string"},"'item'")," + v",m.default.createElement("br",null),"        ","}","));",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",m.default.createElement("br",null),"            list,",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"value"),": list[",m.default.createElement("span",{className:"hljs-number"},"0"),"].value",m.default.createElement("br",null),"        ","}",";",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange = ::",m.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange;",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    handleChange(value)","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-built_in"},"console"),".log(value);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",m.default.createElement("br",null),"            value",m.default.createElement("br",null),"        ","}",");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"const")," ","{","list, value","}"," = ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".state;",m.default.createElement("br",null),"        ",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"xml"},m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"div"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Select")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","value","}")," ",m.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",m.default.createElement("span",{className:"hljs-string"},"{","this.handleChange","}")," ",m.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),m.default.createElement("br",null),"                    ","{","_.map(list, v => ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Option")," ",m.default.createElement("span",{className:"hljs-attr"},"key"),"=",m.default.createElement("span",{className:"hljs-string"},"{","v.value","}")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","v.value","}"),">"),"{","v.name","}",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Option"),">"),")","}",m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Select"),">"),m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"div"),">")),m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<Component2/>",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,16)},m.default.createElement("i",null)))),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode20?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(i,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-description"},m.default.createElement("p",null,"多选，value 和 onChange 参数都是数组")),m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"Component3")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"const")," list = _.map(_.range(",m.default.createElement("span",{className:"hljs-number"},"5"),"), v => (","{",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"value"),": v,",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"name"),": ",m.default.createElement("span",{className:"hljs-string"},"'item'")," + v",m.default.createElement("br",null),"        ","}","));",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",m.default.createElement("br",null),"            list,",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"value"),": [list[",m.default.createElement("span",{className:"hljs-number"},"0"),"].value]",m.default.createElement("br",null),"        ","}",";",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange = ::",m.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange;",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    handleChange(value)","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-built_in"},"console"),".log(value);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",m.default.createElement("br",null),"            value",m.default.createElement("br",null),"        ","}",");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"const")," ","{","list, value","}"," = ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".state;",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"xml"},m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"div"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Select")," ",m.default.createElement("span",{className:"hljs-attr"},"multiple")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","value","}")," ",m.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",m.default.createElement("span",{className:"hljs-string"},"{","this.handleChange","}"),">"),m.default.createElement("br",null),"                    ","{","_.map(list, v => ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Option")," ",m.default.createElement("span",{className:"hljs-attr"},"key"),"=",m.default.createElement("span",{className:"hljs-string"},"{","v.value","}")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","v.value","}"),">"),"{","v.name","}",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Option"),">"),")","}",m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Select"),">"),m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"div"),">")),m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<Component3/>",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,20)},m.default.createElement("i",null)))),m.default.createElement("h3",{id:"props"},m.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"multiple (bool)")),m.default.createElement("li",null,m.default.createElement("code",null,"value (any|isRequired)")),m.default.createElement("li",null,m.default.createElement("code",null,"onChange (func)")),m.default.createElement("li",null,"...rest")))}}]),l}(m.default.Component);l.default=p}});