(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1GPU":function(e,a,t){"use strict";t.r(a),t.d(a,"BlogPage",(function(){return w})),t.d(a,"query",(function(){return x}));var o=t("q1tI"),n=t.n(o),r=t("qhky"),c=t("dmcL"),l=t.n(c),i=t("TUGy"),s=t.n(i),_=t("Kfvu"),u=t("QJPa"),d=t.n(u),m=function(e){var a=e.social;return n.a.createElement("div",{className:"row "+l.a.about_col},n.a.createElement("div",{className:"col-3 col-sm-12 "+l.a.about_col__avatar},n.a.createElement("img",{alt:"Avatar",src:s.a})),n.a.createElement("div",{className:"col-9 col-sm-12 "+l.a.about_col__desc_container},n.a.createElement("div",{className:l.a.about_col__heading},"Ngoc Nguyen"),n.a.createElement("div",{className:l.a.about_col__description},"Software Developer, AI Enthusiast, Coffee Addict, plays Piano")),n.a.createElement("div",{className:l.a.about_col__details},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:l.a.about_col__details__icon},n.a.createElement(d.a,null)),n.a.createElement("span",{className:l.a.about_col__details__text},"Singapore")),a.map((function(e){return n.a.createElement("li",{key:e.to},n.a.createElement(_.OutboundLink,{alt:e.description,href:e.to,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:l.a.about_col__details__icon},e.icon),n.a.createElement("span",{className:l.a.about_col__details__text},e.description)))})))))},f=t("ik+3"),p=t("yjYV"),b=t.n(p),v=function(e){var a=e.children,t=e.title,o=void 0===t?"Posts - Ngoc Nguyen's Personal Blog":t;return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,{title:o}),n.a.createElement("div",{className:"container row",style:{marginLeft:"auto",marginRight:"auto"}},n.a.createElement("aside",{className:"col-12 col-sm-3 "+b.a.side_bar},n.a.createElement(m,{social:f.socialItems})),n.a.createElement("section",{className:"col-12 col-sm-9 "+b.a.posts_content},a)))},g=t("PceL"),E=t.n(g),h=function(e){var a=e.children;return n.a.createElement("div",{className:E.a.page_header},n.a.createElement("p",{className:E.a.page_header__text},a))},y=t("WfQb"),P=t.n(y),N=function(e){var a=e.title,t=e.readingTime,o=e.children;return n.a.createElement("article",{className:P.a.post_brief},n.a.createElement("header",null,a,n.a.createElement("div",{className:P.a.post_brief__meta},n.a.createElement("svg",{className:"svg-inline--fa fa-clock fa-w-16","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"clock",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","data-fa-i2svg":""},n.a.createElement("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"}))," ",t)),n.a.createElement("div",{className:P.a.post_brief__content},o),n.a.createElement("a",{href:"#page-title",className:P.a.post_brief__back_top},"Back to Top ↑"))},w=function(e){var a=e.data;return n.a.createElement(v,null,n.a.createElement("header",null,n.a.createElement(h,null,"Blog Posts")),a.allMarkdownRemark.edges.map((function(e,a){return n.a.createElement(N,{key:a,title:e.node.frontmatter.title,readingTime:e.node.fields.readingTime.text},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.node.snippet}}))})))},x="3409591525";a.default=w},"5qDG":function(e,a,t){e.exports={post_brief:"PostBrief--post_brief--1CGN-",post_brief__meta:"PostBrief--post_brief__meta--Zr7qE",post_brief__content:"PostBrief--post_brief__content--1ohV5",post_brief__back_top:"PostBrief--post_brief__back_top--2QS3Q"}},"6KcQ":function(e,a,t){e.exports={about_col:"AboutColumn--about_col--26z37",about_col__avatar:"AboutColumn--about_col__avatar--2ngtn",about_col__heading:"AboutColumn--about_col__heading--3lDv_",about_col__desc_container:"AboutColumn--about_col__desc_container--3zM2q",about_col__description:"AboutColumn--about_col__description--2PPLk",about_col__details:"AboutColumn--about_col__details--2IU9H",about_col__details__icon:"AboutColumn--about_col__details__icon--GlkQJ",about_col__details__text:"AboutColumn--about_col__details__text--15yIn"}},KIjc:function(e,a,t){e.exports={side_bar:"PostsLayout--side_bar--13dgS",posts_content:"PostsLayout--posts_content--3-D5A"}},PceL:function(e,a,t){var o=t("UbMB"),n=t("pEVG"),r=o.bind(n);for(var c in n)n.hasOwnProperty(c)&&("function"==typeof Object.defineProperty?Object.defineProperty(r,c,{value:n[c]}):r[c]=n[c]);e.exports=r},QJPa:function(e,a,t){var o=t("q1tI");function n(e){return o.createElement("svg",e,[o.createElement("title",{key:0},"Location"),o.createElement("path",{fill:"currentColor",d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",key:1})])}n.defaultProps={className:"svg-inline--fa fa-map-marker-alt fa-w-12 fa-fw",width:"18",height:"18","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"map-marker-alt",role:"img",viewBox:"0 0 384 512","data-fa-i2svg":""},e.exports=n,n.default=n},TUGy:function(e,a,t){e.exports=t.p+"static/avatar-b02e09c908376b498e9c9961bc2de3c8.png"},WfQb:function(e,a,t){var o=t("UbMB"),n=t("5qDG"),r=o.bind(n);for(var c in n)n.hasOwnProperty(c)&&("function"==typeof Object.defineProperty?Object.defineProperty(r,c,{value:n[c]}):r[c]=n[c]);e.exports=r},dmcL:function(e,a,t){var o=t("UbMB"),n=t("6KcQ"),r=o.bind(n);for(var c in n)n.hasOwnProperty(c)&&("function"==typeof Object.defineProperty?Object.defineProperty(r,c,{value:n[c]}):r[c]=n[c]);e.exports=r},pEVG:function(e,a,t){e.exports={page_header:"PageHeader--page_header--2rnMf",page_header__text:"PageHeader--page_header__text--1lzLq"}},yjYV:function(e,a,t){var o=t("UbMB"),n=t("KIjc"),r=o.bind(n);for(var c in n)n.hasOwnProperty(c)&&("function"==typeof Object.defineProperty?Object.defineProperty(r,c,{value:n[c]}):r[c]=n[c]);e.exports=r}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-e1cf697b5997d5c3b040.js.map