(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1db29b43"],{"0b441":function(t,e,a){},b2bf:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"finance-box"},[a("div",{staticClass:"select"},[a("span",{staticStyle:{"margin-right":"20px"}},[t._v(t._s(t.type))]),a("Select",{on:{change:t.handleChange},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[a("select-option",{attrs:{value:"地方一般公共预算收入(亿元)"}},[t._v(" 地方一般公共预算收入(亿元) ")]),a("select-option",{attrs:{value:"地方一般公共预算支出(亿元)"}},[t._v(" 地方一般公共预算支出(亿元) ")]),a("select-option",{attrs:{value:"城乡居民储蓄年末余额(亿元)"}},[t._v(" 城乡居民储蓄年末余额(亿元) ")])],1)],1),a("section",{staticClass:"finance"},[a("v-chart",{ref:"echarts",staticClass:"echarts",attrs:{autoresize:!0,options:t.options}})],1)])},c=[],s=(a("99af"),a("4160"),a("d81d"),a("b680"),a("159b"),a("2909")),i=(a("3b18"),a("f64c")),o=(a("96cf"),a("1da1")),r=(a("2ef0"),a("9839")),u=a("5530"),h=a("f121"),l=a("5880"),p=a("365c"),b={name:"Finance",data:function(){return{errorName:"Finance",showObj:{"地方一般公共预算收入(亿元)":"预算收入","地方一般公共预算支出(亿元)":"预算支出","城乡居民储蓄年末余额(亿元)":"储蓄余额"},type:"地方一般公共预算收入(亿元)",options:Object(h["e"])({})}},computed:Object(u["a"])({},Object(l["mapState"])(["selectCityList","isMobile"])),watch:{selectCityList:function(t){this.getMacro(this.type,t)},isMobile:function(t){this.dealLegend(t)}},components:{Select:r["b"],SelectOption:r["b"].Option},mounted:function(){this.getMacro(this.type,this.selectCityList)},methods:{dealLegend:function(t){t&&(this.options.legend.data=[])},handleChange:function(t){this.getMacro(t,this.selectCityList)},getMacro:function(t,e){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var c,o,r,u,l,b,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.$refs.echarts.showLoading(),n.next=3,Object(p["x"])({type:t,cityNameList:e});case 3:if(c=n.sent,a.$refs.echarts.hideLoading(),0!==c.status){n.next=16;break}if(o=c.result,0!==o.length){n.next=9;break}return n.abrupt("return",i["a"].warning("数据为空"));case 9:r=[],u=[],l=[],b=[],f=[],o.forEach((function(t){r.push("".concat(t.cityName," ").concat(a.showObj[a.type]),"".concat(t.cityName," ").concat(a.showObj[a.type],"增速")),l.push({name:"".concat(t.cityName," ").concat(a.showObj[a.type]),data:t.years.map((function(t){return t.value})),color:Object(h["m"])(t.cityName)});var e=t.years.map((function(t){return(100*t.increase).toFixed(2)}))||[];f.push(Math.ceil(Math.max.apply(Math,Object(s["a"])(e)))),b.push({name:"".concat(t.cityName," ").concat(a.showObj[a.type],"增速"),data:e,color:Object(h["o"])(t.cityName)})})),o[0].years.forEach((function(t){u.push(t.year)})),a.options=Object(h["e"])({legendArr:r,xData:u,leftYName:"".concat(a.showObj[a.type],"(亿元)"),rightYName:"".concat(a.showObj[a.type],"增速(%)"),barArr:l,lineArr:b,rightYMax:Math.max.apply(Math,f)}),a.dealLegend(a.isMobile),n.next=17;break;case 16:i["a"].warning("获取数据失败");case 17:case"end":return n.stop()}}),n)})))()}}},f=b,d=(a("eb8b"),a("2877")),y=Object(d["a"])(f,n,c,!1,null,"9262b7ec",null);e["default"]=y.exports},eb8b:function(t,e,a){"use strict";var n=a("0b441"),c=a.n(n);c.a}}]);