(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-462b093a"],{"019fd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"transportationAndPost-box"},[a("div",{staticClass:"select"},[a("span",{staticStyle:{"margin-right":"20px"}},[t._v(t._s(t.type))]),a("Select",{staticStyle:{width:"200px"},on:{change:t.handleChange},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[a("select-option",{attrs:{value:"旅客运输量(万人)"}},[t._v(" 旅客运输量(万人) ")]),a("select-option",{attrs:{value:"货物运输量(万吨)"}},[t._v(" 货物运输量(万吨) ")]),a("select-option",{attrs:{value:"邮政局(所)数(处)"}},[t._v(" 邮政局(所)数(处) ")]),a("select-option",{attrs:{value:"固定电话用户数(万户)"}},[t._v(" 固定电话用户数(万户) ")])],1)],1),a("section",{staticClass:"transportation"},[a("v-chart",{ref:"echarts",staticClass:"echarts",attrs:{autoresize:!0,options:t.options}})],1)])},s=[],c=(a("99af"),a("4160"),a("d81d"),a("159b"),a("3b18"),a("f64c")),i=(a("96cf"),a("1da1")),o=(a("2ef0"),a("9839")),r=a("5530"),l=a("f121"),u=a("5880"),p=a("365c"),h={name:"TransportationAndPost",data:function(){return{errorName:"TransportationAndPost",showObj:{"旅客运输量(万人)":"客运量","货物运输量(万吨)":"货运量","邮政局(所)数(处)":"邮局数","固定电话用户数(万户)":"电话数"},type:"旅客运输量(万人)",options:Object(l["h"])({})}},computed:Object(r["a"])({},Object(u["mapState"])(["selectCityList","isMobile"])),watch:{selectCityList:function(t){this.getMacro(this.type,t)},isMobile:function(t){this.dealLegend(t)}},components:{Select:o["b"],SelectOption:o["b"].Option},mounted:function(){this.getMacro(this.type,this.selectCityList)},methods:{dealLegend:function(t){t&&(this.options.legend.data=[])},handleChange:function(t){this.getMacro(t,this.selectCityList)},getMacro:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var s,i,o,r,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.$refs.echarts.showLoading(),n.next=3,Object(p["x"])({type:t,cityNameList:e});case 3:if(s=n.sent,a.$refs.echarts.hideLoading(),0!==s.status){n.next=16;break}if(i=s.result,0!==i.length){n.next=9;break}return n.abrupt("return",c["a"].warning("数据为空"));case 9:o=[],r=[],"",u=[],i.forEach((function(t){o.push("".concat(t.cityName," ").concat(a.showObj[a.type])),u.push({name:"".concat(t.cityName," ").concat(a.showObj[a.type]),data:t.years.map((function(t){return t.value})),color:Object(l["o"])(t.cityName)})})),i[0].years.forEach((function(t){r.push(t.year)})),a.options=Object(l["h"])({legendArr:o,xData:r,leftYName:a.type,lineArr:u,margin:60}),a.dealLegend(a.isMobile),n.next=17;break;case 16:c["a"].warning("获取数据失败");case 17:case"end":return n.stop()}}),n)})))()}}},f=h,d=(a("27a8"),a("2877")),b=Object(d["a"])(f,n,s,!1,null,"ff0c287e",null);e["default"]=b.exports},"27a8":function(t,e,a){"use strict";var n=a("79ca"),s=a.n(n);s.a},"79ca":function(t,e,a){}}]);