(window.webpackJsonp=window.webpackJsonp||[]).push([[6,13],{170:function(e,s,t){},175:function(e,s,t){"use strict";var a=t(170);t.n(a).a},34:function(e,s,t){"use strict";t.r(s);t(51);var a={"commonmark-spec":{displayName:"commonmark spec",href:"https://spec.commonmark.org/0.28/"},"commonmark-spec#inline":{href:"https://spec.commonmark.org/0.28/#raw-html"},"commonmark-spec#block":{href:"https://spec.commonmark.org/0.28/#html-blocks"},"commonmark-spec#soft-break":{href:"https://spec.commonmark.org/0.28/#soft-line-breaks"},"commonmark-dingus":{displayName:"commonmark dingus",href:"https://spec.commonmark.org/dingus/"},"html-inlines":{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements"},"html-blocks":{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements"},jsoup:{displayName:"Jsoup",href:"https://github.com/jhy/jsoup/"},"markwon-jsoup":{href:"https://github.com/noties/Markwon/tree/master/markwon-html-parser-impl/src/main/java/ru/noties/markwon/html/impl/jsoup"},"commonmark-java":{href:"https://github.com/atlassian/commonmark-java/",displayName:"commonmark-java"}},n={name:"Link",props:["name","displayName","href"],methods:{linkHref:function(){return this.href||a[this.name].href},linkText:function(){return this.displayName||a[this.name].displayName}}},o=t(0),r=Object(o.a)(n,function(){var e=this.$createElement,s=this._self._c||e;return s("a",{attrs:{href:this.linkHref(),target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.linkText())+"\n  "),s("OutboundLink")],1)},[],!1,null,null,null);r.options.__file="Link.vue";s.default=r.exports},88:function(e,s,t){"use strict";t.r(s);var a={name:"AwesomeGroup",props:["apps"],components:{Link:t(34).default}},n=(t(175),t(0)),o=Object(n.a)(a,function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"awesome-group"},e._l(e.apps,function(s){return t("div",{staticClass:"awesome-app"},[t("a",{staticClass:"awesome-app-name",attrs:{href:s.link,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(s.name)+" "),t("OutboundLink")],1),e._v(" "),t("img",{staticClass:"awesome-app-image",attrs:{src:e.$withBase(s.image)}}),e._v(" "),s.description?t("span",{staticClass:"awesome-app-description"},[e._v(e._s(s.description))]):e._e()])}))},[],!1,null,"520ddaa8",null);o.options.__file="AwesomeGroup.vue";s.default=o.exports}}]);