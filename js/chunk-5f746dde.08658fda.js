(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f746dde"],{"7ce1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"national-economy-box"},[a("div",{staticClass:"select"},[a("span",{staticStyle:{"margin-right":"20px"}},[t._v(t._s(t.type))]),a("Select",{staticStyle:{width:"200px"},on:{change:t.handleChange},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[a("select-option",{attrs:{value:"国内生产总值(亿元)"}},[t._v(" 国内生产总值(亿元) ")]),a("select-option",{attrs:{value:"第一产业增加值(亿元)"}},[t._v(" 第一产业增加值(亿元) ")]),a("select-option",{attrs:{value:"第二产业增加值(亿元)"}},[t._v(" 第二产业增加值(亿元) ")]),a("select-option",{attrs:{value:"第三产业增加值(亿元)"}},[t._v(" 第三产业增加值(亿元) ")])],1)],1),a("section",{staticClass:"gdp"},[a("v-chart",{ref:"echarts",staticClass:"echarts",attrs:{autoresize:!0,options:t.options}})],1)])},c=[],i=(a("4160"),a("d81d"),a("b680"),a("159b"),a("2909")),s=(a("3b18"),a("f64c")),o=(a("96cf"),a("1da1")),r=(a("2ef0"),a("9839")),l=a("5530"),u=a("f121"),p=a("5880"),h=a("365c"),d={name:"NationalEconomy",data:function(){return{errorName:"NationalEconomy",options:Object(u["e"])({}),type:"国内生产总值(亿元)"}},computed:Object(l["a"])({},Object(p["mapState"])(["selectCityList","isMobile"])),watch:{selectCityList:function(t){this.getMacro(this.type,t)},isMobile:function(t){this.dealLegend(t)}},components:{Select:r["b"],SelectOption:r["b"].Option},mounted:function(){this.getMacro(this.type,this.selectCityList)},methods:{dealLegend:function(t){t&&(this.options.legend.data=[])},handleChange:function(t){this.getMacro(t,this.selectCityList)},getMacro:function(t,e){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var c,o,r,l,p,d,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.$refs.echarts.showLoading(),n.next=3,Object(h["x"])({type:t,cityNameList:e});case 3:if(c=n.sent,a.$refs.echarts.hideLoading(),0!==c.status){n.next=16;break}if(o=c.result,0!==o.length){n.next=9;break}return n.abrupt("return",s["a"].warning("数据为空"));case 9:r=[],l=[],p=[],d=[],f=[],o.forEach((function(t){r.push("".concat(t.cityName," GDP"),"".concat(t.cityName," GDP增速")),p.push({name:"".concat(t.cityName," GDP"),data:t.years.map((function(t){return t.value})),color:Object(u["m"])(t.cityName)});var e=t.years.map((function(t){return(100*t.increase).toFixed(2)}))||[];f.push(Math.ceil(Math.max.apply(Math,Object(i["a"])(e)))),d.push({name:"".concat(t.cityName," GDP增速"),data:e,color:Object(u["o"])(t.cityName)})})),o[0].years.forEach((function(t){l.push(t.year)})),a.options=Object(u["e"])({legendArr:r,xData:l,leftYName:"GDP(亿元)",rightYName:"GDP增速(%)",barArr:p,lineArr:d,rightYMax:Math.max.apply(Math,f)}),a.dealLegend(a.isMobile),n.next=17;break;case 16:s["a"].warning("获取数据失败");case 17:case"end":return n.stop()}}),n)})))()}}},f=d,m=(a("b611"),a("2877")),b=Object(m["a"])(f,n,c,!1,null,"110c1e54",null);e["default"]=b.exports},b611:function(t,e,a){"use strict";var n=a("f9ab"),c=a.n(n);c.a},f9ab:function(t,e,a){}}]);