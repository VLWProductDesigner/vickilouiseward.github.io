(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{134:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(154),o=n(0),u=n.n(o),l=n(138),c=n(142),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return u.a.createElement(l.StaticQuery,{query:"1208282436",render:function(e){var t=e.allContactJson.edges;return u.a.createElement(c.a,null,u.a.createElement("dl",null,t.map(function(e){return u.a.createElement(u.a.Fragment,{key:e.node.id},u.a.createElement("dt",null,e.node.method),u.a.createElement("dd",null,e.node.value))})))},data:i})},t}(u.a.Component);t.default=s},138:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(137),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(139),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},139:function(e,t,n){var a;e.exports=(a=n(141))&&a.default||a},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Vicki Louise Ward",tagline:"UX/UI Designer",copyright:"Copyright © Vicki Louise Ward"}},allNavJson:{edges:[{node:{id:"14236",page:"Work",route:"/"}},{node:{id:"77466",page:"Contact",route:"/contact"}}]}}}},141:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(51),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},142:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(140),o=n(0),u=n.n(o),l=n(4),c=n.n(l),s=n(143),d=n.n(s),p=n(138),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tagline;return u.a.createElement("header",null,u.a.createElement("h1",null,t),u.a.createElement("p",null,n))},t}(u.a.Component);m.propTypes={title:c.a.string,tagline:c.a.string};var f=m,h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.items;return u.a.createElement("nav",null,u.a.createElement("ul",null,e.map(function(e){return u.a.createElement("li",{key:e.node.id},u.a.createElement(p.Link,{to:e.node.route},e.node.page))})))},t}(u.a.Component);h.propTypes={items:c.a.array};var y=h,g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.copyright;return u.a.createElement("footer",null,u.a.createElement("p",null,e))},t}(u.a.Component);g.propTypes={copyright:c.a.string};var v=g,E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return u.a.createElement(p.StaticQuery,{query:"4235615964",render:function(t){var n=t.site.siteMetadata,a=t.allNavJson.edges;return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{title:n.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},u.a.createElement("html",{lang:"en-GB"})),u.a.createElement(f,{title:n.title,tagline:n.tagline}),u.a.createElement(y,{items:a}),u.a.createElement("section",null,e),u.a.createElement(v,{copyright:n.copyright}))},data:i})},t}(u.a.Component);E.propTypes={children:c.a.node.isRequired};t.a=E},154:function(e){e.exports={data:{allContactJson:{edges:[{node:{id:"70337",method:"Telephone",value:"+44 (0) 7590 608 972"}},{node:{id:"38493",method:"Email",value:"vickilouiseward@gmail.com"}},{node:{id:"53444",method:"LinkedIn",value:"https://www.linkedin.com/"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-d01689dfda8630964218.js.map