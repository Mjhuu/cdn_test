(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a48b810"],{"4ae2":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"article-item row"},[t.source.imgUrl?n("div",{staticClass:"left col col-md-3 col-4"},[n("img",{style:{height:t.isMobile?"80px":"102px"},attrs:{src:t.source.imgUrl,alt:""}})]):t._e(),n("div",{class:["right","col",t.source.imgUrl?"col-md-9":"col-md-12",t.source.imgUrl?"col-8":"col-12"]},[n("div",{staticClass:"top",style:{fontSize:t.isMobile?"17px":"20px"}},[n("a",{attrs:{target:"_blank",href:t.source.url}},[t._v(t._s(t.source.title))])]),t.source.contentText?n("div",{staticClass:"content"},[t._v(" "+t._s(t.source.contentText)+" ")]):t._e(),n("div",{staticClass:"bottom"},[n("span",[t._v(t._s(t.source.source))]),t._v(" . "),n("span",[t._v(t._s(t.source.category))]),t._v(" . "),n("span",[t._v(t._s(t.source.time))])]),n("div",{staticClass:"tags"},t._l(t.source.keywords,(function(e){return n("a-tag",{staticStyle:{margin:"5px 5px 0 0"},attrs:{color:"blue"}},[t._v(" "+t._s(e)+" ")])})),1)])])},a=[],s=(n("b0c0"),n("ade3")),c=(n("b97c"),n("7571")),i=n("5530"),o=n("5880"),l={name:"ArticleItem",props:{source:{type:Object,default:function(){return{}}}},computed:Object(i["a"])({},Object(o["mapState"])(["isMobile"])),components:Object(s["a"])({},c["a"].name,c["a"])},u=l,d=(n("c9ac"),n("2877")),p=Object(d["a"])(u,r,a,!1,null,"7dbd96e6",null);e["a"]=p.exports},"744b":function(t,e,n){"use strict";var r=n("aa96"),a=n.n(r);a.a},aa96:function(t,e,n){},c9ac:function(t,e,n){"use strict";var r=n("d69d"),a=n.n(r);a.a},cd7d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"government-box"},[n("div",{staticClass:"inner"},[n("section",{staticClass:"top"},[n("Select",{staticStyle:{width:"100px"},attrs:{options:t.cityList},model:{value:t.selectCity,callback:function(e){t.selectCity=e},expression:"selectCity"}}),n("input-search",{attrs:{placeholder:"搜你想搜的","enter-button":""},on:{search:t.searchArticle},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),0===t.articleList.length?n("Empty"):t._e(),n("virtual-list",{staticClass:"article-list",attrs:{"data-key":"title","data-sources":t.articleList,"data-component":t.ArticleItem,"estimate-size":50},on:{tobottom:t.loadMore}})],1)])},a=[],s=(n("99af"),n("d81d"),n("d3b7"),n("3b18"),n("f64c")),c=(n("96cf"),n("1da1")),i=(n("06f4"),n("fc25")),o=(n("5704"),n("b558")),l=(n("2ef0"),n("9839")),u=n("2909"),d=n("b0ea"),p=n("4ae2"),f=n("89c1"),m=n.n(f),b=n("365c"),h={data:function(){return{errorName:"government",cityList:[{label:"全部",value:"全部"}].concat(Object(u["a"])(d["e"])),ArticleItem:p["a"],selectCity:"全部",keywords:"",articleList:[],loading:!1,page:1,size:15}},components:{Select:l["b"],InputSearch:o["a"].Search,VirtualList:m.a,Empty:i["a"]},mounted:function(){this.initNews()},methods:{initNews:function(){var t=this;this.page=1,this.fetchNewsList(1,(function(e){t.articleList=e.data,t.$nextTick((function(){var t=document.getElementsByClassName("article-list")[0];t.scrollTop=0}))}))},searchArticle:function(t){this.keywords=t,this.initNews()},fetchNewsList:function(){var t=arguments,e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:1,a=t.length>1?t[1]:void 0,e.loading=!0,c={keywords:e.keywords,page:r,size:e.size},"全部"!==e.selectCity&&(c.city=e.selectCity),n.next=7,Object(b["h"])(c);case 7:if(i=n.sent,e.loading=!1,0!==i.status){n.next=18;break}if(a&&a(i.result),0!==i.result.data.length){n.next=14;break}return s["a"].warning({key:"noThing",content:"已经到底了"}),n.abrupt("return",!1);case 14:return i.result.data.length<e.size&&s["a"].warning({key:"noThing",content:"已经到底了"}),n.abrupt("return",!0);case 18:return s["a"].warning("新闻列表获取失败"),n.abrupt("return",!1);case 20:case"end":return n.stop()}}),n)})))()},loadMore:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return",console.log("别这么快啊"));case 2:return e.abrupt("return",new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchNewsList(t.page+1,(function(e){e.data.map((function(e){t.articleList.push(e)}))}));case 2:a=e.sent,a?(t.page+=1,n()):r();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 3:case"end":return e.stop()}}),e)})))()}}},g=h,v=(n("744b"),n("2877")),w=Object(v["a"])(g,r,a,!1,null,"074bb850",null);e["default"]=w.exports},d69d:function(t,e,n){}}]);