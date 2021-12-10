(self.webpackChunkluungoc2005_github_io=self.webpackChunkluungoc2005_github_io||[]).push([[691],{9852:function(e,t,l){"use strict";l.d(t,{T:function(){return s}});var n=l(7294),a=l(8332),r=l.n(a),c=l(3473),o=l(7210),i=l(2846),s=function(e){var t=e.heading,l=e.description,a=e.linkTo,s=e.fullWidth;return n.createElement(o.W,null,n.createElement("div",{className:"BlockText-module--block--gVFGf"},n.createElement(i.X,null,n.createElement("div",{className:"BlockText-module--block__col--4wdYJ"+(s?" BlockText-module--full_width--oHgMY":"")},n.createElement("h3",{className:"BlockText-module--block__heading--wbZsf"},t,a&&n.createElement(c.K,{icon:n.createElement(r(),null),to:a})),n.createElement("div",{className:s?"row":"BlockText-module--block__description--jW+D3",style:s?{marginLeft:"-2rem",marginRight:"-2rem"}:void 0},l)))))}},5140:function(e,t,l){"use strict";l.d(t,{p:function(){return c}});var n=l(7294),a=l(7210),r=l(2846),c=function(e){var t=e.children;return n.createElement(a.W,null,n.createElement("div",{className:"Intro-module--intro--XUFq1"},n.createElement(r.X,null,n.createElement("div",{className:"Intro-module--intro__col--Phmmc"},n.createElement("p",{className:"Intro-module--intro__text--n9SsU"},t)))))}},5061:function(e,t,l){"use strict";l.d(t,{a:function(){return o}});var n=l(7294),a={ai:"#edf492",random:"#ffcbcb"},r=function(e){var t=e.title;return n.createElement("span",{className:"PostTag-module--post_tag--YLbwl",style:{backgroundColor:a[t]||"#a6dcef"}},t)},c="PostBrief-module--small--0qfdt",o=function(e){var t=e.title,l=e.tags,a=e.slug,o=e.readingTime,i=e.children,s=e.small;return n.createElement("article",{className:"PostBrief-module--post_brief--719qr"},n.createElement("header",{className:s?c:""},n.createElement("a",{className:s?c:"",href:a,style:{marginRight:12},title:t},l&&l.map((function(e,t){return n.createElement(r,{key:t,title:e})})),t),n.createElement("div",{className:"PostBrief-module--post_brief__meta--nh4SK"+(s?" "+c:"")},n.createElement("svg",{className:"svg-inline--fa fa-clock fa-w-16","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"clock",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","data-fa-i2svg":""},n.createElement("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"}))," ",o)),n.createElement("div",{className:"PostBrief-module--post_brief__content--6zqPR"+(s?" "+c:"")},i),n.createElement("a",{href:"#page-title",className:"PostBrief-module--post_brief__back_top--ZhR-g"+(s?" "+c:"")},"Back to Top ↑"))}},2846:function(e,t,l){"use strict";l.d(t,{X:function(){return a}});var n=l(7294),a=function(e){var t=e.children;return n.createElement("div",{className:"Row-module--row--yqBQJ"},t)}},6194:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return d}});var n=l(7294),a=l(5186),r=l(5140),c=l(9931),o=l.n(c),i=function(e){var t=e.children;return null==t?void 0:t.split(" ").map((function(e,t,l){return n.createElement("span",{key:e,className:o()("Highlight-module--highlight--VbsxT",{isFirst:l.length>1&&0===t})},n.createElement("span",{className:"Highlight-module--highlight__text--nYAFM"},e),n.createElement("span",{className:"Highlight-module--highlight__color--2VswU"}))}))},s=l(9852),m=l(5769),u=l(5061),d=function(e){var t=e.data;return n.createElement(n.Fragment,null,n.createElement(a.q,{title:"Home - Ngoc Nguyen's Personal Blog"}),n.createElement(r.p,null,"Software Developer. Coffee Addict ☕️.",n.createElement("br",null),"I do"," ",n.createElement(i,null,"Javascript"),","," ",n.createElement(i,null,"Python"),","," ",n.createElement(i,null,".NET"),","," ",n.createElement(i,null,"Golang"),","," ",n.createElement(i,null,"Mobile"),", and ",n.createElement(i,null,"AI")," stuffs."),n.createElement(s.T,{fullWidth:!0,heading:"Latest posts",linkTo:"/blog",description:n.createElement(n.Fragment,null,t.allMarkdownRemark.edges.map((function(e,t){return n.createElement("div",{key:t,className:"col-sm-4 col-xs-12"},n.createElement(u.a,{small:!0,title:e.node.frontmatter.title,tags:e.node.frontmatter.tags,readingTime:e.node.fields.readingTime.text,slug:e.node.fields.slug},n.createElement("div",{dangerouslySetInnerHTML:{__html:e.node.snippet}})))})))}),n.createElement(s.T,{heading:"About me",description:n.createElement(n.Fragment,null,n.createElement("p",{style:{marginBottom:40}},"Currently employed at"," ",n.createElement(m.MS,{href:"https://www.grab.com/sg/",target:"_blank",rel:"noopener noreferrer"},"Grab Singapore")," ","as a full-time Software Developer. I build high quality, maintainable and user-friendly digital products. I also do AI from experiments to production, with a strong focus on Natural Language Processing (NLP)."))}))}},8332:function(e,t,l){var n=l(7294);function a(e){return n.createElement("svg",e,[n.createElement("path",{d:"M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z",key:0}),n.createElement("path",{d:"M40 20h-2v-8h-8v-2h10z",key:1}),n.createElement("path",{d:"M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z",key:2})])}a.defaultProps={viewBox:"0 0 50 50",width:"22px",height:"22px",enableBackground:"new 0 0 50 50"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-index-tsx-dde3626c53ee8a036401.js.map