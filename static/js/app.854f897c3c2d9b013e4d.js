webpackJsonp([1],{0:function(e,t){},J373:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=r("VU/8")({data:function(){return{}},components:{},methods:{},mounted:function(){}},a,!1,function(e){r("eUUa")},null,null).exports,i=r("/ocq"),o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-header",[e._v("Header")]),e._v(" "),r("el-container",[r("el-aside",{attrs:{width:"200px"}},[e._v("Aside")]),e._v(" "),r("el-main",[r("el-table",{attrs:{data:e.data,border:"true"}},[r("el-table-column",{attrs:{label:"用户名",prop:"username",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{label:"密码",prop:"password",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{label:"手机号码",prop:"mobile",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center"}},[r("el-button",{attrs:{type:"primary"}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"danger"}},[e._v("删除")])],1)],1),e._v(" "),r("el-pagination",{attrs:{"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400}})],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")({name:"home",data:function(){return{data:[{username:"eee",password:"1233"}]}},created:function(){this.data=[{username:"bbb",password:"1233"}]}},o,!1,function(e){r("oQSh")},null,null).exports,u={name:"login",data:function(){var e=this;return{registerPage:!1,login:{username:"",password:""},register:{username:"",password:"",repassword:""},loginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:8,message:"密码长度应在6到8个字符",trigger:"blur"}],repassword:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:8,message:"密码长度应在6到8个字符",trigger:"blur"}]},registerRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:8,message:"密码长度应在6到8个字符",trigger:"blur"},{validator:function(t,r,s){""!=e.register.repassword&&e.register.repassword!=r?s(new Error("密码不一致！")):s()},trigger:"blur"}],repassword:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:8,message:"密码长度应在6到8个字符",trigger:"blur"},{validator:function(t,r,s){""!=e.register.password&&e.register.password!=r?s(new Error("密码不一致！")):s()},trigger:"blur"}]}}},methods:{loginIn:function(){var e=this;this.$refs.login.validate(function(t){if(t){var r=new FormData;r.append("username",e.register.username),r.append("password",e.register.password);var s=e;e.$axios.post("/app/user/loginIn",r).then(function(e){500==e.data.code?s.$message({type:"error",message:e.data.msg,duration:1e3}):s.$message({type:"success",message:e.data.msg,duration:500,onClose:function(){s.$router.push({path:"/home"})}})}).catch(function(e){console.log(e)})}})},reset:function(){console.log(localStorage),this.$refs.login.resetFields()},reg:function(){var e=this;this.$refs.register.validate(function(t){if(t){var r=e.ParamUtil.combineParam(e.register),s=e;e.$axios.post("/app/user/register",r).then(function(e){500==e.data.code?s.$message({type:"error",message:e.data.msg,duration:1e3}):s.$message({type:"success",message:e.data.msg,duration:500,onClose:function(){s.registerPage=!1}})}).catch(function(e){console.log(e)})}})}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"login-box"},[r("el-form",{ref:"login",attrs:{model:e.login,rules:e.loginRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"请输入用户名"},model:{value:e.login.username,callback:function(t){e.$set(e.login,"username",t)},expression:"login.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码","show-password":""},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.loginIn}},[e._v("登录")]),e._v(" "),r("el-button",{on:{click:e.reset}},[e._v("取消")]),e._v(" "),r("el-link",{staticClass:"login-register",attrs:{type:"primary"},on:{click:function(t){e.registerPage=!0}}},[e._v("注册")])],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"信息注册",visible:e.registerPage,width:"30%"},on:{"update:visible":function(t){e.registerPage=t}}},[r("el-form",{ref:"register",attrs:{rules:e.registerRules,model:e.register,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"请输入用户名"},model:{value:e.register.username,callback:function(t){e.$set(e.register,"username",t)},expression:"register.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码","show-password":""},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认密码",prop:"repassword"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码","show-password":""},model:{value:e.register.repassword,callback:function(t){e.$set(e.register,"repassword",t)},expression:"register.repassword"}})],1),e._v(" "),r("div",{staticClass:"login-register-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:e.reg}},[e._v("注册")])],1)],1)],1)],1)},staticRenderFns:[]};var p=r("VU/8")(u,c,!1,function(e){r("cPVV")},"data-v-f79d3d52",null).exports,d={mounted:function(){this.playMusic()},data:function(){return{index:0,imageList:[{url:r("he13")},{url:r("ksro")},{url:r("lrAJ")},{url:r("ptP8")},{url:r("XtsY")},{url:r("lo7F")}],music:{url:r("fSgI")},musicList:[{url:r("fSgI")},{url:r("fSgI")},{url:r("fSgI")},{url:r("fSgI")}],sources:[{url:r("he13")},{url:r("ksro")},{url:r("lrAJ")},{url:r("ptP8")},{url:r("XtsY")},{url:r("lo7F")}],pray:[{name:"",relation:"",word:""}]}},methods:{playMusic:function(){this.$refs.audio.play()},end:function(){this.imageList=this.sources.slice(6*this.index,6*(this.index+1)),this.music=this.musicList[this.index],this.playMusic()}}},g={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contains"},[r("button",{staticStyle:{display:"none"},on:{click:e.playMusic}},[e._v("播放")]),e._v(" "),r("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{src:e.music.url,controls:"controls"},on:{ended:e.end}}),e._v(" "),e._l(e.imageList,function(e,t){return r("div",{class:"images img"+t},[r("img",{attrs:{src:e.url}})])})],2)},staticRenderFns:[]};var m=r("VU/8")(d,g,!1,function(e){r("TBUm")},"data-v-ad2cfe12",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("iframe",{staticStyle:{width:"100%",height:"800px"},attrs:{src:"http://www.youtube.com",frameborder:"0"}})])}]};var v=r("VU/8")({name:"home",data:function(){},created:function(){}},f,!1,function(e){r("hIlI")},null,null).exports;s.default.use(i.a);var h=new i.a({mode:"hash",base:"/",routes:[{path:"/",redirect:"/index"},{path:"/index",component:m},{path:"/login",component:p},{path:"/home",component:l},{path:"/proxy",component:v}]}),b=r("zL8q"),w=r.n(b),_=r("mtWM"),x=r.n(_),y=(r("tvR6"),r("8+8L")),$=(r("J373"),{combineParam:function(e){var t=new FormData;for(var r in e)t.append(r,e[r]);return t}});s.default.prototype.$axios=x.a,s.default.prototype.ParamUtil=$,x.a.defaults.baseURL="/api",s.default.config.productionTip=!1,s.default.use(w.a),s.default.use(y.a),new s.default({el:"#app",router:h,components:{App:n},template:"<App/>"})},TBUm:function(e,t){},XtsY:function(e,t,r){e.exports=r.p+"static/img/004.aab9e7c.jpg"},cPVV:function(e,t){},eUUa:function(e,t){},fSgI:function(e,t,r){e.exports=r.p+"static/media/1.a2403f9.mp3"},hIlI:function(e,t){},he13:function(e,t,r){e.exports=r.p+"static/img/000.50ddf83.jpg"},ksro:function(e,t,r){e.exports=r.p+"static/img/001.ee5003d.jpg"},lo7F:function(e,t,r){e.exports=r.p+"static/img/005.3c35ed3.jpg"},lrAJ:function(e,t,r){e.exports=r.p+"static/img/002.fd4eb1e.jpg"},oQSh:function(e,t){},ptP8:function(e,t,r){e.exports=r.p+"static/img/003.7850f91.jpg"},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.854f897c3c2d9b013e4d.js.map