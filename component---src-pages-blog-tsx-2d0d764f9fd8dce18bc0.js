(self.webpackChunkluungoc2005_github_io=self.webpackChunkluungoc2005_github_io||[]).push([[410],{3698:function(e,t,a){"use strict";a.d(t,{m:function(){return n}});var l={};a.r(l);var r=a(7294),n=function(e){var t=e.children;return r.createElement("div",{className:l.default.page_header},r.createElement("p",{className:l.default.page_header__text},t))}},5061:function(e,t,a){"use strict";a.d(t,{a:function(){return o}});var l={};a.r(l);var r={};a.r(r);var n=a(7294),c={ai:"#edf492",random:"#ffcbcb"},s=function(e){var t=e.title;return n.createElement("span",{className:l.default.post_tag,style:{backgroundColor:c[t]||"#a6dcef"}},t)},o=function(e){var t=e.title,a=e.tags,l=e.slug,c=e.readingTime,o=e.children,i=e.small;return n.createElement("article",{className:r.default.post_brief},n.createElement("header",{className:i?r.default.small:""},n.createElement("a",{className:i?r.default.small:"",href:l,style:{marginRight:12},title:t},a&&a.map((function(e,t){return n.createElement(s,{key:t,title:e})})),t),n.createElement("div",{className:r.default.post_brief__meta+(i?" "+r.default.small:"")},n.createElement("svg",{className:"svg-inline--fa fa-clock fa-w-16","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"clock",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","data-fa-i2svg":""},n.createElement("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"}))," ",c)),n.createElement("div",{className:r.default.post_brief__content+(i?" "+r.default.small:"")},o),n.createElement("a",{href:"#page-title",className:r.default.post_brief__back_top+(i?" "+r.default.small:"")},"Back to Top ↑"))}},6352:function(e,t,a){"use strict";a.d(t,{B:function(){return f}});var l={};a.r(l);var r={};a.r(r);var n=a(7294),c=a(5186),s=a.p+"static/avatar-f36c5e697b48172fbeb4392a7e2b7e03.png",o=a(5769),i=a(2495),u=a.n(i),m=function(e){var t=e.social;return n.createElement("div",{className:"row "+l.default.about_col},n.createElement("div",{className:"col-xs-2 col-sm-12 "+l.default.about_col__avatar},n.createElement("img",{alt:"Avatar",src:s})),n.createElement("div",{className:"col-xs-8 col-sm-12 "+l.default.about_col__desc_container},n.createElement("div",{className:l.default.about_col__heading},"Ngoc Nguyen"),n.createElement("div",{className:l.default.about_col__description},"Software Developer, AI Enthusiast, Coffee Addict, plays Piano")),n.createElement("div",{className:l.default.about_col__details},n.createElement("ul",null,n.createElement("li",null,n.createElement("span",{className:l.default.about_col__details__icon},n.createElement(u(),null)),n.createElement("span",{className:l.default.about_col__details__text},"Singapore")),t.map((function(e){return n.createElement("li",{key:e.to},n.createElement(o.MS,{alt:e.description,href:e.to,target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:l.default.about_col__details__icon},e.icon),n.createElement("span",{className:l.default.about_col__details__text},e.description)))})))))},d=a(8911),f=function(e){var t=e.children,a=e.title,l=void 0===a?"Posts - Ngoc Nguyen's Personal Blog":a;return n.createElement("div",{className:r.default.layout},n.createElement(c.q,{title:l}),n.createElement("div",{className:"container-fluid row",style:{marginLeft:"auto",marginRight:"auto"}},n.createElement("aside",{className:"col-xs-12 col-sm-3 "+r.default.side_bar},n.createElement(m,{social:d.socialItems})),n.createElement("section",{className:"col-xs-12 col-sm-9 "+r.default.posts_content},t)))}},9359:function(e,t,a){"use strict";a.r(t),a.d(t,{BlogPage:function(){return i},default:function(){return u}});var l={};a.r(l);var r=a(7294),n=a(6352),c=a(3698),s=a(5061),o=function(e){var t=e.children;return r.createElement("h1",{className:l.default.published_year},t)},i=function(e){var t=e.data,a=t.allMarkdownRemark.edges.map((function(e){return new Date(e.node.frontmatter.date).getFullYear()}));return r.createElement(n.B,null,r.createElement("header",null,r.createElement(c.m,null,"Blog Posts")),t.allMarkdownRemark.edges.map((function(e,t){return r.createElement(r.Fragment,{key:t},0==t||a[t]!=a[t-1]?r.createElement(o,null,a[t]):r.createElement(r.Fragment,null),r.createElement(s.a,{title:e.node.frontmatter.title,tags:e.node.frontmatter.tags,readingTime:e.node.fields.readingTime.text,slug:e.node.fields.slug},r.createElement("div",{dangerouslySetInnerHTML:{__html:e.node.snippet}})))})))},u=i},2495:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,[l.createElement("title",{key:0},"Location"),l.createElement("path",{fill:"currentColor",d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",key:1})])}r.defaultProps={className:"svg-inline--fa fa-map-marker-alt fa-w-12 fa-fw",width:"18",height:"18","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"map-marker-alt",role:"img",viewBox:"0 0 384 512","data-fa-i2svg":""},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-2d0d764f9fd8dce18bc0.js.map