webpackJsonp([1],{"0WHm":function(t,e){},B5GK:function(t,e){},JGGM:function(t,e){},KLIG:function(t,e){},N4fb:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=i("/ocq"),l={data:function(){return{activeIndex:"",activeIndex2:"",firstInfo:[{title:"行业应用"},{title:"硬件终端"}],secondInfo:[{title:"信息发布"},{title:"触摸查询"},{title:"多窗口展示"},{title:"签名拍照"},{title:"电子翻书"},{title:"滑轨屏"},{title:"时间轴"}]}},methods:{handleSelect:function(t,e){console.log(t,e)},itemHover:function(){this.$refs.first.style.display="block"},clickFirst:function(){this.$refs.second.style.display="block"},change:function(){this.$refs.first.style.display="none",this.$refs.second.style.display="none"}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"logo"}),t._v(" "),i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"1"},on:{click:t.change}},[t._v("首页")]),t._v(" "),i("el-submenu",{attrs:{index:"2"}},[i("template",{slot:"title"},[t._v("产品中心")]),t._v(" "),i("el-submenu",{attrs:{index:"2-4"}},[i("template",{slot:"title"},[t._v("行业应用")]),t._v(" "),i("el-menu-item",{attrs:{index:"2-4-1"}},[t._v("信息发布")]),t._v(" "),i("el-menu-item",{attrs:{index:"2-4-2"}},[t._v("触摸查询")]),t._v(" "),i("el-menu-item",{attrs:{index:"2-4-3"}},[t._v("多窗口展示")]),t._v(" "),i("el-menu-item",{attrs:{index:"2-4-4"}},[t._v("签名拍照")]),t._v(" "),i("el-menu-item",{attrs:{index:"2-4-5"}},[t._v("电子翻书")]),t._v(" "),i("el-menu-item",{attrs:{index:"2-4-6"}},[t._v("滑轨屏")]),t._v(" "),i("el-menu-item",{attrs:{index:"2-4-7"}},[t._v("时间轴")])],2),t._v(" "),i("el-menu-item",{attrs:{index:"2-1"}},[t._v("硬件终端")])],2),t._v(" "),i("el-menu-item",{attrs:{index:"3"},on:{click:t.change}},[t._v("解决方案")]),t._v(" "),i("el-menu-item",{attrs:{index:"4"},on:{click:t.change}},[t._v("服务支持")]),t._v(" "),i("el-menu-item",{attrs:{index:"5"},on:{click:t.change}},[t._v("成功案例")]),t._v(" "),i("el-menu-item",{attrs:{index:"6"},on:{click:t.change}},[t._v("关于我们")])],1),t._v(" "),i("div",{staticClass:"nav-button"},[t._v("申请试用")]),t._v(" "),i("ul",{ref:"first",staticClass:"first-level"},t._l(t.firstInfo,function(e){return i("li",{key:e.title,on:{click:t.clickFirst}},[t._v(t._s(e.title))])}),0),t._v(" "),i("ul",{ref:"second",staticClass:"second-level"},t._l(t.secondInfo,function(e){return i("li",{key:e.title},[t._v(t._s(e.title))])}),0)],1)},staticRenderFns:[]};var r={data:function(){return{}},methods:{},components:{Header:i("VU/8")(l,a,!1,function(t){i("JGGM"),i("KLIG")},"data-v-fd08fea8",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("Header"),this._v(" "),e("el-carousel",{attrs:{interval:5e3,arrow:"hover",trigger:"click",height:"710px"}},this._l(5,function(t){return e("el-carousel-item",{key:t})}),1)],1)},staticRenderFns:[]};var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"word"},[i("p",{staticClass:"English"},[t._v("Product Center")]),t._v(" "),i("p",{staticClass:"chinese"},[t._v("产品中心")])]),t._v(" "),i("ul",{staticClass:"product-image"},[i("li",{staticClass:"use"},[i("div",{staticClass:"useInfo"},[i("div"),t._v(" "),i("p",{staticClass:"chineseInfo"},[t._v("行业应用")]),t._v(" "),i("p",{staticClass:"EnglishInfo"},[t._v("Industry Application")])])]),t._v(" "),i("li",{staticClass:"terminal"},[i("div",{staticClass:"terminalInfo"},[i("div"),t._v(" "),i("p",{staticClass:"chineseInfo"},[t._v("硬件终端")]),t._v(" "),i("p",{staticClass:"EnglishInfo"},[t._v("Hardware terminal")])])])])])}]};var v={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"distribution"},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"功能说明"}},[i("el-switch",{model:{value:t.form.delivery,callback:function(e){t.$set(t.form,"delivery",e)},expression:"form.delivery"}})],1)],1)],1),t._v(" "),t._m(2),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"word"},[e("p",{staticClass:"English"},[this._v("Solution")]),this._v(" "),e("p",{staticClass:"chinese"},[this._v("解决方案")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"solution"},[e("p",[this._v("智慧展馆解决方案")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"model-image"},[e("div",{staticClass:"circle-one"}),this._v(" "),e("div",{staticClass:"circle-two"}),this._v(" "),e("div",{staticClass:"circle-three"}),this._v(" "),e("div",{staticClass:"circle-four"}),this._v(" "),e("div",{staticClass:"circle-five"}),this._v(" "),e("div",{staticClass:"circle-six"}),this._v(" "),e("div",{staticClass:"circle-seven"}),this._v(" "),e("div",{staticClass:"circle-eight"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"learn-more"},[e("p",{staticClass:"title"},[this._v("卓越互动，尽在亿迈杰")]),this._v(" "),e("p",{staticClass:"min-title"},[this._v("亿迈杰，以信息交互展示为核心的解决方案提供商")]),this._v(" "),e("div",{staticClass:"nav-button"},[this._v("了解更多")])])}]};var u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[t._m(0),t._v(" "),i("ul",{staticClass:"cases-image"},[i("li",{staticClass:"first-image",nativeOn:{mouseenter:function(e){return t.enterImage(e)}}},[i("div",{ref:"wordDown",staticClass:"word-down"},[t._m(1)]),t._v(" "),i("div",{ref:"Circle",staticClass:"circle"},[t._m(2)])]),t._v(" "),i("li",{staticClass:"second-image",nativeOn:{mouseenter:function(e){return t.enterImage(e)}}},[i("div",{ref:"wordDown",staticClass:"word-down"},[t._m(3)]),t._v(" "),i("div",{ref:"Circle",staticClass:"circle"},[t._m(4)])]),t._v(" "),i("li",{staticClass:"third-image",nativeOn:{mouseenter:function(e){return t.enterImage(e)}}},[i("div",{ref:"wordDown",staticClass:"word-down"},[t._m(5)]),t._v(" "),i("div",{ref:"Circle",staticClass:"circle"},[t._m(6)])])]),t._v(" "),i("div",{staticClass:"contact"},[i("div",{staticClass:"applyForm"},[t._m(7),t._v(" "),i("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.formLabelAlign}},[i("el-form-item",{attrs:{label:"姓名",id:"title"}},[i("el-input",{model:{value:t.formLabelAlign.name,callback:function(e){t.$set(t.formLabelAlign,"name",e)},expression:"formLabelAlign.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"电话",id:"title"}},[i("el-input",{model:{value:t.formLabelAlign.region,callback:function(e){t.$set(t.formLabelAlign,"region",e)},expression:"formLabelAlign.region"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"公司/组织",id:"title"}},[i("el-input",{model:{value:t.formLabelAlign.type,callback:function(e){t.$set(t.formLabelAlign,"type",e)},expression:"formLabelAlign.type"}})],1)],1),t._v(" "),i("div",{staticClass:"nav-button"},[t._v("申请试用")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"word"},[e("p",{staticClass:"English"},[this._v("Successful cases")]),this._v(" "),e("p",{staticClass:"chinese"},[this._v("成功案例")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"word-down-info"},[e("p",{staticClass:"maxtitle"},[this._v("合肥新桥机场")]),this._v(" "),e("p",{staticClass:"mintitle"},[this._v("合肥新桥机场选用亿迈杰数字标牌系统")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li"),this._v(" "),e("li"),this._v(" "),e("li")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"word-down-info"},[e("p",{staticClass:"maxtitle"},[this._v("老乡鸡")]),this._v(" "),e("p",{staticClass:"mintitle"},[this._v("老乡鸡选用亿迈杰零售电子餐牌系统")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li"),this._v(" "),e("li"),this._v(" "),e("li")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"word-down-info"},[e("p",{staticClass:"maxtitle"},[this._v("万达广场")]),this._v(" "),e("p",{staticClass:"mintitle"},[this._v("合肥包河万达广场选用亿迈杰信息发布系统")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li"),this._v(" "),e("li"),this._v(" "),e("li")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("申请试用  "),e("span",[this._v("APPLY FOR TRIAL")])])}]};var d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("dl",{staticClass:"dl-one"},[i("dt",[t._v("产品中心")]),t._v(" "),t._l(t.center,function(e){return i("dd",{key:e.title},[t._v(t._s(e.title))])})],2),t._v(" "),i("dl",[i("dt",[t._v("解决方案")]),t._v(" "),t._l(t.solution,function(e){return i("dd",{key:e.title},[t._v(t._s(e.title))])})],2),t._v(" "),i("dl",[i("dt",[t._v("联系我们")]),t._v(" "),t._l(t.relation,function(e){return i("dd",{key:e.title},[t._v(t._s(e.title))])})],2),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("© 2017 Hefei Show Information Technology Co.,Ltd    皖ICP备17021328号")])])},staticRenderFns:[]};var f={methods:{},components:{Banner:i("VU/8")(r,c,!1,function(t){i("N4fb"),i("B5GK")},"data-v-379eaff0",null).exports,Product:i("VU/8")({},o,!1,function(t){i("yejh")},"data-v-6784e3af",null).exports,Solution:i("VU/8")(v,_,!1,function(t){i("eMyt"),i("Y0Yv")},"data-v-e9dc29bc",null).exports,Cases:i("VU/8")({data:function(){return{info:[{src:"../../static/images/newImages/合肥新桥机场.png",maxtitle:"合肥新桥机场",mintitle:"合肥新桥机场选用亿迈杰数字标牌系统"},{src:"../../static/images/newImages/老乡鸡.png",maxtitle:"老乡鸡",mintitle:"老乡鸡选用亿迈杰零售电子餐牌系统"},{src:"../../static/images/newImages/万达.png",maxtitle:"万达广场",mintitle:"合肥包河万达广场选用亿迈杰信息发布系统"}],labelPosition:"top",formLabelAlign:{name:"",region:"",type:""}}},methods:{enterImage:function(){}}},u,!1,function(t){i("tO8d"),i("0WHm")},"data-v-6c94f0ec",null).exports,Footer:i("VU/8")({data:function(){return{center:[{title:"多窗口大屏展示系统"},{title:"会议纪要虚拟速记系统"},{title:"党建系统"},{title:"机器人软件（法院机器人软件、医院机器人软件）"},{title:"智慧工厂多元信息可视化系统"},{title:"其他小软件（电子签名、信息发布、触摸查询）"}],solution:[{title:"行业/社群"},{title:"政府/机构"},{title:"律师/律所"}],relation:[{title:"客服电话：0551-65178688（99）"},{title:"商务合作"}]}}},d,!1,function(t){i("lk7B")},"data-v-088a36d1",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("Banner"),this._v(" "),e("Product"),this._v(" "),e("Solution"),this._v(" "),e("Cases"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var h=i("VU/8")(f,m,!1,function(t){i("OZko")},"data-v-be9cb444",null).exports;s.default.use(n.a);var p=new n.a({routes:[{path:"/",name:"home",component:h}]}),C=i("zL8q"),g=i.n(C),b=(i("tvR6"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var x=i("VU/8")({name:"App"},b,!1,function(t){i("pVQ2")},null,null).exports;s.default.use(g.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:p,components:{App:x},template:"<App/>"})},OZko:function(t,e){},Y0Yv:function(t,e){},eMyt:function(t,e){},lk7B:function(t,e){},pVQ2:function(t,e){},tO8d:function(t,e){},tvR6:function(t,e){},yejh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.007ce7a0ff352a6ab596.js.map