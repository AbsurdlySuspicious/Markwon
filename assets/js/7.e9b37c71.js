(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6,13],{170:function(e,s,t){},175:function(e,s,t){"use strict";var a=t(170);t.n(a).a},208:function(e,s,t){"use strict";t.r(s);var a={name:"AwesomeSection",components:{AwesomeGroup:t(88).default},computed:{apps:function(){return[{name:"Nextcloud",image:"/assets/apps/nextcloud.png",link:"https://github.com/nextcloud/android",description:"A safe home for all your data. Access & share your files, calendars, contacts, mail & more from any device, on your terms."},{name:"Habitica",image:"/assets/apps/habitica.png",link:"https://play.google.com/store/apps/details?id=com.habitrpg.android.habitica",description:"Treat your life like a game to stay motivated and organized! Habitica makes it simple to have fun while accomplishing goals."},{name:"Cinopsys: Movies and Shows",image:"/assets/apps/cinopsys.png",link:"https://play.google.com/store/apps/details?id=com.cinopsys.movieshows"},{name:"Pure Writer",image:"/assets/apps/purewriter.png",link:"https://play.google.com/store/apps/details?id=com.drakeet.purewriter",description:"Never lose content editor & Markdown"},{name:"Stack",image:"/assets/apps/stack.png",link:"https://github.com/tylerbwong/stack",description:"An Android app for browsing Stack Overflow and other Stack Exchange sites"},{name:"Infinity for Reddit",image:"/assets/apps/infinity.webp",link:"https://play.google.com/store/apps/details?id=ml.docilealligator.infinityforreddit",description:""}]}}},o=t(0),n=Object(o.a)(a,function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("AwesomeGroup",{attrs:{apps:this.apps}})],1)},[],!1,null,null,null);n.options.__file="AwesomeSection.vue";s.default=n.exports},34:function(e,s,t){"use strict";t.r(s);t(51);var a={"commonmark-spec":{displayName:"commonmark spec",href:"https://spec.commonmark.org/0.28/"},"commonmark-spec#inline":{href:"https://spec.commonmark.org/0.28/#raw-html"},"commonmark-spec#block":{href:"https://spec.commonmark.org/0.28/#html-blocks"},"commonmark-spec#soft-break":{href:"https://spec.commonmark.org/0.28/#soft-line-breaks"},"commonmark-dingus":{displayName:"commonmark dingus",href:"https://spec.commonmark.org/dingus/"},"html-inlines":{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements"},"html-blocks":{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements"},jsoup:{displayName:"Jsoup",href:"https://github.com/jhy/jsoup/"},"markwon-jsoup":{href:"https://github.com/noties/Markwon/tree/master/markwon-html-parser-impl/src/main/java/ru/noties/markwon/html/impl/jsoup"},"commonmark-java":{href:"https://github.com/atlassian/commonmark-java/",displayName:"commonmark-java"}},o={name:"Link",props:["name","displayName","href"],methods:{linkHref:function(){return this.href||a[this.name].href},linkText:function(){return this.displayName||a[this.name].displayName}}},n=t(0),i=Object(n.a)(o,function(){var e=this.$createElement,s=this._self._c||e;return s("a",{attrs:{href:this.linkHref(),target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.linkText())+"\n  "),s("OutboundLink")],1)},[],!1,null,null,null);i.options.__file="Link.vue";s.default=i.exports},88:function(e,s,t){"use strict";t.r(s);var a={name:"AwesomeGroup",props:["apps"],components:{Link:t(34).default}},o=(t(175),t(0)),n=Object(o.a)(a,function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"awesome-group"},e._l(e.apps,function(s){return t("div",{staticClass:"awesome-app"},[t("a",{staticClass:"awesome-app-name",attrs:{href:s.link,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(s.name)+" "),t("OutboundLink")],1),e._v(" "),t("img",{staticClass:"awesome-app-image",attrs:{src:e.$withBase(s.image)}}),e._v(" "),s.description?t("span",{staticClass:"awesome-app-description"},[e._v(e._s(s.description))]):e._e()])}))},[],!1,null,"520ddaa8",null);n.options.__file="AwesomeGroup.vue";s.default=n.exports}}]);