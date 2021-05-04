webpackJsonp([1],{0:function(e,r){},J373:function(e,r){},NHnr:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("7+uW"),a={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]};var n=t("VU/8")({data:function(){return{}},components:{},methods:{},mounted:function(){}},a,!1,function(e){t("eUUa")},null,null).exports,i=t("/ocq"),o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-container",[t("el-header",[e._v("Header")]),e._v(" "),t("el-container",[t("el-aside",{attrs:{width:"200px"}},[e._v("Aside")]),e._v(" "),t("el-main",[t("el-table",{attrs:{data:e.data,border:"true"}},[t("el-table-column",{attrs:{label:"用户名",prop:"username",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"密码",prop:"password",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"手机号码",prop:"mobile",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"}},[t("el-button",{attrs:{type:"primary"}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{type:"danger"}},[e._v("删除")])],1)],1),e._v(" "),t("el-pagination",{attrs:{"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400}})],1)],1)],1)},staticRenderFns:[]};var l=t("VU/8")({name:"home",data:function(){return{data:[{username:"eee",password:"1233"}]}},created:function(){this.data=[{username:"bbb",password:"1233"}]}},o,!1,function(e){t("oQSh")},null,null).exports,u={name:"login",data:function(){var e=this;return{registerPage:!1,login:{username:"",password:""},register:{username:"",password:"",repassword:""},loginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:8,message:"密码长度应在6到8个字符",trigger:"blur"}],repassword:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:8,message:"密码长度应在6到8个字符",trigger:"blur"}]},registerRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:8,message:"密码长度应在6到8个字符",trigger:"blur"},{validator:function(r,t,s){""!=e.register.repassword&&e.register.repassword!=t?s(new Error("密码不一致！")):s()},trigger:"blur"}],repassword:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:8,message:"密码长度应在6到8个字符",trigger:"blur"},{validator:function(r,t,s){""!=e.register.password&&e.register.password!=t?s(new Error("密码不一致！")):s()},trigger:"blur"}]}}},methods:{loginIn:function(){var e=this;this.$refs.login.validate(function(r){if(r){var t=new FormData;t.append("username",e.register.username),t.append("password",e.register.password);var s=e;e.$axios.post("/app/user/loginIn",t).then(function(e){500==e.data.code?s.$message({type:"error",message:e.data.msg,duration:1e3}):s.$message({type:"success",message:e.data.msg,duration:500,onClose:function(){s.$router.push({path:"/home"})}})}).catch(function(e){console.log(e)})}})},reset:function(){console.log(localStorage),this.$refs.login.resetFields()},reg:function(){var e=this;this.$refs.register.validate(function(r){if(r){var t=e.ParamUtil.combineParam(e.register),s=e;e.$axios.post("/app/user/register",t).then(function(e){500==e.data.code?s.$message({type:"error",message:e.data.msg,duration:1e3}):s.$message({type:"success",message:e.data.msg,duration:500,onClose:function(){s.registerPage=!1}})}).catch(function(e){console.log(e)})}})}}},c={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-container"},[t("div",{staticClass:"login-box"},[t("el-form",{ref:"login",attrs:{model:e.login,rules:e.loginRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"请输入用户名"},model:{value:e.login.username,callback:function(r){e.$set(e.login,"username",r)},expression:"login.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码","show-password":""},model:{value:e.login.password,callback:function(r){e.$set(e.login,"password",r)},expression:"login.password"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.loginIn}},[e._v("登录")]),e._v(" "),t("el-button",{on:{click:e.reset}},[e._v("取消")]),e._v(" "),t("el-link",{staticClass:"login-register",attrs:{type:"primary"},on:{click:function(r){e.registerPage=!0}}},[e._v("注册")])],1)],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"信息注册",visible:e.registerPage,width:"30%"},on:{"update:visible":function(r){e.registerPage=r}}},[t("el-form",{ref:"register",attrs:{rules:e.registerRules,model:e.register,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"请输入用户名"},model:{value:e.register.username,callback:function(r){e.$set(e.register,"username",r)},expression:"register.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码","show-password":""},model:{value:e.register.password,callback:function(r){e.$set(e.register,"password",r)},expression:"register.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"repassword"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码","show-password":""},model:{value:e.register.repassword,callback:function(r){e.$set(e.register,"repassword",r)},expression:"register.repassword"}})],1),e._v(" "),t("div",{staticClass:"login-register-btn"},[t("el-button",{attrs:{type:"primary"},on:{click:e.reg}},[e._v("注册")])],1)],1)],1)],1)},staticRenderFns:[]};var p=t("VU/8")(u,c,!1,function(e){t("cPVV")},"data-v-f79d3d52",null).exports,g={mounted:function(){this.$refs.audio.play()},data:function(){return{imageList:[{url:t("he13")},{url:t("ksro")},{url:t("lrAJ")},{url:t("ptP8")},{url:t("XtsY")},{url:t("lo7F")}],music:{url:t("fSgI")}}},methods:{playMusic:function(){new Audio;console.log(auido)}}},d={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"contains"},[r("iframe",{staticStyle:{display:"none"},attrs:{allow:"autoplay",src:this.music.url}}),this._v(" "),this._l(this.imageList,function(e,t){return r("div",{class:"images img"+t},[r("img",{attrs:{src:e.url}})])})],2)},staticRenderFns:[]};var m=t("VU/8")(g,d,!1,function(e){t("xJ18")},"data-v-767fd036",null).exports;s.default.use(i.a);var f=new i.a({mode:"hash",base:"/",routes:[{path:"/",redirect:"/index"},{path:"/index",component:m},{path:"/login",component:p},{path:"/home",component:l}]}),v=t("zL8q"),b=t.n(v),h=t("mtWM"),w=t.n(h),x=(t("tvR6"),t("8+8L")),_=(t("J373"),{combineParam:function(e){var r=new FormData;for(var t in e)r.append(t,e[t]);return r}});s.default.prototype.$axios=w.a,s.default.prototype.ParamUtil=_,w.a.defaults.baseURL="/api",s.default.config.productionTip=!1,s.default.use(b.a),s.default.use(x.a),new s.default({el:"#app",router:f,components:{App:n},template:"<App/>"})},XtsY:function(e,r,t){e.exports=t.p+"static/img/004.ac6364b.jpg"},cPVV:function(e,r){},eUUa:function(e,r){},fSgI:function(e,r,t){e.exports=t.p+"static/media/1.a2403f9.mp3"},he13:function(e,r,t){e.exports=t.p+"static/img/000.7a4a707.jpg"},ksro:function(e,r,t){e.exports=t.p+"static/img/001.d94c00b.jpg"},lo7F:function(e,r,t){e.exports=t.p+"static/img/005.06f1669.jpg"},lrAJ:function(e,r,t){e.exports=t.p+"static/img/002.6227fc2.jpg"},oQSh:function(e,r){},ptP8:function(e,r,t){e.exports=t.p+"static/img/003.56cc544.jpg"},tvR6:function(e,r){},xJ18:function(e,r){}},["NHnr"]);
//# sourceMappingURL=app.11880a95012c8a3b8511.js.map