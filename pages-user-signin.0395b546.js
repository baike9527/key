(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-signin"],{"02ba":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uCode:a("2042").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.openModal?a("v-uni-view",{staticClass:"wx-authorization-modal"},[a("v-uni-view",{staticClass:"wam__mask",on:{touchmove:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.closeModal.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"wam__wrapper"},[a("v-uni-view",{staticClass:"wam__close-btn",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.closeModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"tn-icon-close"})],1),a("v-uni-view",{staticClass:"wam__title"},[t._v("获取您的手机号")]),a("v-uni-view",{staticClass:"wam__sub-title"},[t._v("获取用户手机号，主要用于向用户提供具有辨识度的用户中心界面")]),a("v-uni-view",{staticClass:"wam__nickname"},[a("v-uni-view",{staticClass:"nickname__data"},[a("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"请输入手机号","placeholder-style":"color: #AAAAAA;"},model:{value:t.userInfo.phone,callback:function(e){t.$set(t.userInfo,"phone",e)},expression:"userInfo.phone"}})],1),a("v-uni-view",{staticClass:"nickname__data tn-flex align-center justify-between"},[a("v-uni-input",{staticClass:"input",staticStyle:{width:"145px"},attrs:{type:"number",placeholder:"请输入验证码","placeholder-style":"color: #AAAAAA;"},model:{value:t.userInfo.code,callback:function(e){t.$set(t.userInfo,"code",e)},expression:"userInfo.code"}}),a("v-uni-view",{staticClass:"getcode",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.tips))])],1)],1),a("u-code",{ref:"uCode",attrs:{seconds:t.seconds},on:{end:function(e){arguments[0]=e=t.$handleEvent(e),t.end.apply(void 0,arguments)},start:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"wam__button"},[a("v-uni-view",{staticClass:"wam__submit-btn",class:[{disabled:!t.userInfo.phone||!t.userInfo.code}],attrs:{"hover-class":"tn-btn-hover-class","hover-stay-time":150},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.binding.apply(void 0,arguments)}}},[t._v("授 权 登 录")])],1)],1)],1):t._e()},o=[]},"13de":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";@font-face{font-family:tuniaoFont; /* Project id 3784643 */src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAN8AAsAAAAAB4gAAAMvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDBgqCQIIdATYCJAMMCwgABCAFhH8HPRuYBiMRpmvPIfurAzsYPj7DCVbrRAmElfXCs4V6xacO8aHO69VXu54tTy8h0hcJ7ufgieY+3+xscrn9B8wKQQFBywplLZCw9SwcOyZ5pKsoAQAbcICJTr7AjPPqr06NRkeIAemFpXv8cje1+/LkuLvD789WJZUANjOe9F76qptDOSMUui/Ua0WQKpZGXaqf5hHZdAD6x8tRJtRKtQd7j5UKkk6lWywYkGADCZBnGLugJd6CAI4GOjH956Ep4k7imdNkYTGFAkm2nJyPrBNwA7YhWwgQ/K4bLXITD8wl8xxuBN+XwyYJwOAp5jFjOwNbPNwd3l3WiyFAv3sCBLjcAB6gQM3GjLLSbJpDo1ANiqsiFiX7WAQzqTcMA06j/pb/eAbEx8yMAaAChg3sDjs6COwub8IAoAD4PEZkA7iAZClPKdicmJLc2OiZcQC3cV613sc3Ab9W7YItQtio9YgdKGjgr+ANlbg5gPvXFacv8IyvKTH4pcjV7VIcfnuIAUd3VCbxcCIKj++rvr/hpx/iwxd4/5mxDXeILbBp2+ByMIlGMuQEU3gjiVaMcXk8Dn2gWo5wuRwuIldLRqRwWogvmCRXE9/kSvrVQP4iFDVWRSbRakMk/AtcBYVpO6rpah1V9J/m/Wt+q8WfsOV+S5KFTGD5dwW9KFstZUs5smuYK3V495zwUG+r/Izf0PWtbWj/HUQsAL9u+cGK8NCiAgRnaRJ49fqljrxWc4PaKs4pQwBlMLUeAzgcEGLakvg5nCZ3zgTBkZzAEEUuFEeJyMrq4BGhGT6OPjiqGd4eIZkLKGKjgTKuAAgpPIAhjmdQUngnsrJdeKTxBz4pkgjHjJQeFqFMXv8PQqg0QP+F2cbAdoHqFmaM52jYlcbNoeTq4CtPkjzHAE1Zl0QvFEjGmp9fY6vKwBI9kOvIuQhJ4kJWy0k1dVXFVXcpbfTmIIRKA/RfmG0M7G1T3cKM8VwMXGlEnR1KY0uU+CTJnM1ODk1ZdxJdSOjYdGOp+TW2k6szsNg8qIvIuQipetFCVstpQCB1lcXHXUl5ZOpfdBvgMI9QMaJi8TZdzLS36K8/ueDZOWMAAA==") format("woff2"),url(//at.alicdn.com/t/c/font_3784643_5jru9pe5fad.woff?t=1669045092678) format("woff"),url(//at.alicdn.com/t/c/font_3784643_5jru9pe5fad.ttf?t=1669045092678) format("truetype")}[class*="tn-icon-"][data-v-5faa3453]{font-family:tuniaoFont!important;font-style:normal;-webkit-font-smoothing:antialiased;text-align:center;text-decoration:none}.tn-icon-close[data-v-5faa3453]:before{content:"\\e74d"}.tn-icon-camera-fill[data-v-5faa3453]:before{content:"\\e75d"}.wx-authorization-modal[data-v-5faa3453]{position:fixed;left:0;top:0;width:100vw;height:100vh}.wx-authorization-modal uni-view[data-v-5faa3453]{box-sizing:border-box}.wx-authorization-modal .image[data-v-5faa3453]{width:100%;height:100%;border-radius:inherit}.wx-authorization-modal .wam[data-v-5faa3453]{\n  /* mask */\n  /* close-btn */\n  /* wrapper */\n  /* title */\n  /* sub-title */\n  /* 头像选择 */\n  /* 昵称 */\n  /* 保存按钮 */}.wx-authorization-modal .wam__mask[data-v-5faa3453]{position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);opacity:0;-webkit-animation:showMask-data-v-5faa3453 .25s ease .1s forwards;animation:showMask-data-v-5faa3453 .25s ease .1s forwards}.wx-authorization-modal .wam__close-btn[data-v-5faa3453]{position:absolute;top:%?30?%;right:%?30?%}.wx-authorization-modal .wam__wrapper[data-v-5faa3453]{position:absolute;left:0;bottom:0;width:100%;background-color:#fff;border-radius:%?20?% %?20?% %?0?% %?0?%;padding:%?40?%;padding-top:%?60?%;padding-bottom:%?40?%;padding-bottom:calc(constant(safe-area-inset-bottom) + %?40?%);padding-bottom:calc(env(safe-area-inset-bottom) + %?40?%);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-animation:showWrapper-data-v-5faa3453 .25s ease .1s forwards;animation:showWrapper-data-v-5faa3453 .25s ease .1s forwards}.wx-authorization-modal .wam__title[data-v-5faa3453]{font-size:%?34?%}.wx-authorization-modal .wam__sub-title[data-v-5faa3453]{font-size:%?26?%;color:#aaa;margin-top:%?16?%;padding-bottom:%?30?%}.wx-authorization-modal .wam__avatar[data-v-5faa3453]{width:100%;margin-top:%?30?%;display:flex;align-items:center;justify-content:center}.wx-authorization-modal .wam__avatar .button-shadow[data-v-5faa3453]{border:%?8?% solid hsla(0,0%,100%,.05);box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.15);border-radius:50%}.wx-authorization-modal .wam__avatar .button[data-v-5faa3453]{position:relative;width:%?160?%;height:%?160?%;border-radius:50%;overflow:visible;background-image:repeating-linear-gradient(45deg,#e4e9ec,#f8f7f8);color:#fff;background-color:initial;padding:0;margin:0;font-size:inherit;line-height:inherit;border:none}.wx-authorization-modal .wam__avatar .button[data-v-5faa3453]::after{border:none}.wx-authorization-modal .wam__avatar .avatar__empty[data-v-5faa3453], .wx-authorization-modal .wam__avatar .avatar__image[data-v-5faa3453]{width:100%;height:100%;border-radius:inherit}.wx-authorization-modal .wam__avatar .avatar--icon[data-v-5faa3453]{position:absolute;right:%?-10?%;bottom:%?-6?%;width:%?60?%;height:%?60?%;background-color:#1d2541;color:#fff;border-radius:50%;border:%?6?% solid #fff;line-height:1;font-size:%?36?%;display:flex;align-items:center;justify-content:center}.wx-authorization-modal .wam__nickname[data-v-5faa3453]{margin-top:%?40?%}.wx-authorization-modal .wam__nickname .nickname__data[data-v-5faa3453]{margin-top:%?26?%;width:100%;padding:%?26?% %?26?% %?26?% %?46?%;border-radius:%?16?%;background-color:#f8f7f8}.wx-authorization-modal .wam__nickname .nickname__data .input[data-v-5faa3453]{color:#080808}.wx-authorization-modal .wam__submit-btn[data-v-5faa3453]{width:100%;background-color:#05c160;color:#fff;margin-top:%?60?%;border-radius:%?16?%;padding:%?25?%;font-size:%?32?%;display:flex;align-items:center;justify-content:center}.wx-authorization-modal .wam__submit-btn.disabled[data-v-5faa3453]{background-color:#e6e6e6}.tn-btn-hover-class[data-v-5faa3453]{box-shadow:inset %?10?% %?2?% %?40?% %?0?% rgba(0,0,0,.05)}@-webkit-keyframes showMask-data-v-5faa3453{0%{opacity:0}100%{opacity:1}}@keyframes showMask-data-v-5faa3453{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes showWrapper-data-v-5faa3453{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes showWrapper-data-v-5faa3453{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.wam__button[data-v-5faa3453]{position:relative;font-weight:700}.wam__button .getbuttons[data-v-5faa3453]{position:absolute;width:100%;height:%?88?%;opacity:0;top:0}.getcode[data-v-5faa3453]{color:#fff;background:#05c160;padding:%?8?% %?26?%;border-radius:%?12?%;font-size:%?24?%}',""]),t.exports=e},2042:function(t,e,a){"use strict";a.r(e);var n=a("750d"),i=a("2df2");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("6a8e");var s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"15701f34",null,!1,n["a"],void 0);e["default"]=r.exports},"2df2":function(t,e,a){"use strict";a.r(e);var n=a("9417"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"329e":function(t,e,a){"use strict";var n=a("ce68"),i=a.n(n);i.a},3337:function(t,e,a){"use strict";a.r(e);var n=a("3570"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},3570:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac1f"),a("00b4"),a("c975");var i=n(a("c7eb")),o=n(a("1da1")),s=n(a("5530")),r=a("26cb"),c=n(a("3c29")),u=n(a("b513")),l={components:{TnuiWxUserInfo:u.default},data:function(){return{agree:!0,showAuthorizationModal:!1,tobheight:45,platform:this.$platform.get(),h5_runmode:["wxOfficialAccount","H5"],isLoading:!0,showlogin:!1,password:!0,twopassword:!0,accountLogin:{account:"",password:""},password2:"",showlogon:!0,route:""}},computed:(0,s.default)({},(0,r.mapGetters)(["appInfo","userInfo","isLogin"])),onLoad:function(t){var e=this;if(e.isLoading=!1,"wxMiniProgram"==e.platform){var a=uni.getMenuButtonBoundingClientRect().top-uni.getSystemInfoSync().statusBarHeight,n=uni.getSystemInfoSync().statusBarHeight+a;e.tobheight=a+n+uni.getMenuButtonBoundingClientRect().height}console.log(e.appInfo.h5_run_mode,e.platform);var i=t.code,o=(t.state,t.scope);e.option=t,i&&"snsapi_base"!==o&&e.$http("wechat.wechatAuth",{code:t.code}).then((function(t){0==t.code&&(uni.setNavigationBarTitle({title:e.appInfo.site_name}),e.$store.dispatch("getUserInfo",t.data.token),uni.showToast({title:"登录成功"}),setTimeout((function(){var t=uni.getStorageSync("route");if(t){if("/pages/chat/chat"==t||"/pages/template/detail"==t||"/pages/painting/draw"==t)return uni.reLaunch({url:t}),void uni.removeStorageSync("route");uni.switchTab({url:t}),uni.removeStorageSync("route")}else uni.switchTab({url:"/pages/user/user"})}),1e3))}))},methods:(0,s.default)((0,s.default)({},(0,r.mapActions)(["getUserInfo"])),{},{thirdLogin:function(t){var e=this;return(0,o.default)((0,i.default)().mark((function a(){return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.agree){a.next=3;break}return e.$u.toast("请同意用户协议"),a.abrupt("return",!1);case 3:e,"",a.t0=t,a.next="wechat"===a.t0?8:12;break;case 8:return a.next=10,c.default.login();case 10:return a.sent,a.abrupt("break",13);case 12:return a.abrupt("break",13);case 13:case"end":return a.stop()}}),a)})))()},updatedUserInfoEvent:function(t){},getlogin:function(){var t=this;this.accountLogin.account?uni.$u.test.rangeLength(this.accountLogin.account,[4,16])?this.accountLogin.password?uni.$u.test.rangeLength(this.accountLogin.password,[4,16])?/.*[\u4e00-\u9fa5]+.*$/.test(this.accountLogin.password)?uni.showToast({title:"密码不能含有汉字",icon:"none"}):this.showlogon||this.password2?uni.$u.test.enOrNum(this.accountLogin.password)&&uni.$u.test.enOrNum(this.password2)?this.showlogon||this.accountLogin.password==this.password2?this.$http(this.showlogon?"user.login":"user.register",this.accountLogin).then((function(e){if(0===e.code){var a=t.showlogon?"登录成功":"注册登录成功";t.$store.dispatch("getUserInfo",t.showlogon?e.data.user.token:e.data.token),uni.showToast({title:a}),setTimeout((function(){var t=uni.getStorageSync("route");if(t){if("/pages/chat/chat"==t||"/pages/painting/draw"==t)return uni.reLaunch({url:t}),void uni.removeStorageSync("route");if(t.indexOf("/pages/template/detail")>-1)return uni.reLaunch({url:t}),void uni.removeStorageSync("route");uni.switchTab({url:t}),uni.removeStorageSync("route")}else uni.switchTab({url:"/pages/user/user"})}),1e3)}})):uni.showToast({title:"两次密码不相同,请重新确认",icon:"none"}):uni.showToast({title:"密码只能是字母和数字",icon:"none"}):uni.showToast({title:"请再次确认密码",icon:"none"}):uni.showToast({title:"密码不能低于4位和高于16位",icon:"none"}):uni.showToast({title:"请输入密码",icon:"none"}):uni.showToast({title:"账号不能低于4位和高于16位",icon:"none"}):uni.showToast({title:"请输入账号",icon:"none"})},shgfgh:function(){uni.showToast({title:"登录成功"}),setTimeout((function(){uni.switchTab({url:"/pages/user/user"})}),1e3)},agreement:function(t){uni.navigateTo({url:"./public/agreement?type="+t})},getphone:function(t){var e=this;return(0,o.default)((0,i.default)().mark((function a(){var n;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e,a.next=3,c.default.getPhoneNumber(t.detail);case 3:n=a.sent,n.code;case 5:case"end":return a.stop()}}),a)})))()}})};e.default=l},"57d5":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{seconds:{type:[String,Number],default:uni.$u.props.code.seconds},startText:{type:String,default:uni.$u.props.code.startText},changeText:{type:String,default:uni.$u.props.code.changeText},endText:{type:String,default:uni.$u.props.code.endText},keepRunning:{type:Boolean,default:uni.$u.props.code.keepRunning},uniqueKey:{type:String,default:uni.$u.props.code.uniqueKey}}};e.default=n},6051:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac1f"),a("00b4");var i=n(a("c7eb")),o=n(a("1da1")),s=n(a("5530")),r=a("26cb"),c=n(a("3c29")),u=a("8d2e"),l=n(a("f3df")),d={options:{virtualHost:!0},props:{value:{type:Boolean,default:!1}},data:function(){return{tips:"获取验证码",seconds:60,openModal:!1,userInfo:{avatar:"",nickname:""},platform:l.default.get()}},watch:{value:{handler:function(t){this.openModal=t},immediate:!0}},computed:(0,s.default)({},(0,r.mapGetters)(["appInfo","isLogin"])),methods:(0,s.default)((0,s.default)({},(0,r.mapActions)(["getUserInfo"])),{},{chooseAvatarEvent:function(t){var e=this;uni.uploadFile({url:(0,u.apiurl)("common/upload"),filePath:t.detail.avatarUrl,name:"file",formData:{accept:"image"},success:function(t){var a=JSON.parse(t.data);0==a.code?e.userInfo.avatar=a.data.path:uni.showToast({title:"上传头像失败",icon:"none"})}})},getphone:function(t){var e=this;return(0,o.default)((0,i.default)().mark((function a(){var n,o;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e,a.next=3,c.default.getPhoneNumber(t.detail);case 3:o=a.sent,0===o.code&&(uni.showToast({icon:"loading",title:"授权登录中..."}),n.userprofile());case 5:case"end":return a.stop()}}),a)})))()},getCode:function(){var t=this;return t.userInfo.phone?uni.$u.test.mobile(t.userInfo.phone)?void(t.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),t.$http("common.sendMobileCode",{mobile:t.userInfo.phone,event:"register"}).then((function(e){0==e.code&&setTimeout((function(){uni.hideLoading(),uni.showToast({icon:"none",title:"验证码已发送"}),t.$refs.uCode.start()}),2e3)}))):uni.showToast({icon:"none",title:"倒计时结束后再发送"})):uni.showToast({icon:"none",title:"请输入正确的手机号"}):uni.showToast({icon:"none",title:"请输入手机号"})},end:function(){uni.showToast({icon:"none",title:"倒计时结束"})},start:function(){uni.showToast({icon:"none",title:"倒计时开始"})},codeChange:function(t){this.tips=t},submitUserInfo:function(){return this.userInfo.avatar?this.userInfo.nickname?uni.$u.test.rangeLength("abc",[1,13])?(uni.showToast({icon:"loading",title:"授权登录中..."}),void this.userprofile()):uni.showToast({icon:"none",title:"昵称过长"}):uni.showToast({icon:"none",title:"请输入昵称"}):uni.showToast({icon:"none",title:"请上传头像"})},userprofile:function(){var t=this;this.$http("user.profile",{nickname:this.userInfo.nickname,avatar:this.userInfo.avatar}).then((function(e){0==e.code?(t.$store.dispatch("getUserInfo"),setTimeout((function(){uni.showToast({title:"登录成功"}),setTimeout((function(){uni.navigateBack()}),1500)}),1500)):that.$u.toast("登录失败，请重试")}))},closeModal:function(){this.$emit("input",!1)},binding:function(){var t=this;return t.userInfo.phone?uni.$u.test.mobile(t.userInfo.phone)?t.userInfo.code?(uni.showToast({icon:"loading",title:"授权登录中..."}),void t.$http("wechat.authBindindPhoneCode",{phone:t.userInfo.phone,code:t.userInfo.code}).then((function(e){0===e.code?(uni.showToast({title:"登录成功",duration:1500}),setTimeout((function(){uni.switchTab({url:"/pages/user/user"})}),1500),t.$store.commit("userInfo",e.data)):t.$u.toast(e.msg)}))):uni.showToast({icon:"none",title:"请输入验证码"}):uni.showToast({icon:"none",title:"请输入正确的手机号"}):uni.showToast({icon:"none",title:"请输入手机号"})}})};e.default=d},"61fa":function(t,e,a){"use strict";var n=a("67d8"),i=a.n(n);i.a},"67d8":function(t,e,a){var n=a("13de");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("15afee8a",n,!0,{sourceMap:!1,shadowMode:!1})},"6a8e":function(t,e,a){"use strict";var n=a("7e128"),i=a.n(n);i.a},"750d":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-code"})},i=[]},7989:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-view[data-v-15701f34], uni-scroll-view[data-v-15701f34], uni-swiper-item[data-v-15701f34]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}",""]),t.exports=e},"7e128":function(t,e,a){var n=a("7989");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("2b8c825f",n,!0,{sourceMap:!1,shadowMode:!1})},"8d96":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={tnNavBar:a("770e").default,uPopup:a("28c1").default,uIcon:a("6a42").default,wikeLoadingPage:a("a7ee").default,tnuiWxUserInfo:a("b513").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticStyle:{color:"#000"}},[a("tn-nav-bar",{attrs:{backgroundColor:"#fff",bottomShadow:!1}},[t._v("登录")]),a("v-uni-view",{style:{height:t.tobheight+"px"}})],1),[a("v-uni-view",{staticClass:"signin"}),a("v-uni-view",{staticClass:"site_logo"},[a("v-uni-image",{staticClass:"weixin",attrs:{src:t.appInfo.site_logo_path,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"site_name"},[t._v(t._s(t.appInfo.site_name))]),a("v-uni-view",{staticClass:"detailed"},[a("v-uni-view",{},[t._v("欢迎畅游"+t._s(t.appInfo.site_name))]),a("v-uni-view",{},[t._v("登录后，可免费获得问答及优惠套餐等服务")])],1),a("u-popup",{attrs:{show:t.showlogin,mode:"bottom",round:10,closeable:!0},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.showlogin=!1}}},[a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"textl_ogin"},[t._v(t._s(t.showlogon?"账号密码登录":"账号密码注册"))]),a("v-uni-view",{staticClass:"login"},[a("v-uni-view",{staticClass:"input u-flex align-center"},[a("u-icon",{attrs:{name:"account-fill",color:"#26B3A0",size:"24"}}),a("v-uni-input",{staticClass:"vs-flex-item",attrs:{maxlength:11,placeholder:"请输入账号"},model:{value:t.accountLogin.account,callback:function(e){t.$set(t.accountLogin,"account",e)},expression:"accountLogin.account"}})],1),a("v-uni-view",{staticClass:"input u-flex align-center"},[a("u-icon",{attrs:{name:"lock-fill",color:"#26B3A0",size:"24"}}),a("v-uni-input",{staticClass:"vs-flex-item",attrs:{type:"text",password:t.password,placeholder:"请输入登录密码","placeholder-class":"input-placeholder"},model:{value:t.accountLogin.password,callback:function(e){t.$set(t.accountLogin,"password",e)},expression:"accountLogin.password"}}),a("u-icon",{attrs:{name:t.password?"eye-off":"eye-fill",color:"#26B3A0",size:"18"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.password=!t.password}}})],1),t.showlogon?t._e():a("v-uni-view",{staticClass:"input u-flex align-center"},[a("u-icon",{attrs:{name:"lock-fill",color:"#26B3A0",size:"24"}}),a("v-uni-input",{staticClass:"vs-flex-item",attrs:{type:"text",password:t.twopassword,placeholder:"请再次确认登录密码","placeholder-class":"input-placeholder"},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),a("u-icon",{attrs:{name:t.twopassword?"eye-off":"eye-fill",color:"#26B3A0",size:"18"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.twopassword=!t.twopassword}}})],1)],1),a("v-uni-view",{staticClass:"signinnow",attrs:{"hover-class":"hoversubmit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getlogin()}}},[t._v(t._s(t.showlogon?"立即登录":"立即注册"))])],1)],1),t.appInfo.h5_run_mode?[1==t.appInfo.h5_run_mode?["wxOfficialAccount"==t.platform?a("v-uni-view",{staticClass:"flxe justify-center"},[a("v-uni-view",{staticClass:"grant",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.thirdLogin("wechat")}}},[a("u-icon",{attrs:{name:"weixin-fill",color:"#ffffff",size:"26"}}),a("v-uni-view",{staticClass:"dlu"},[t._v("微信授权登录")])],1)],1):t._e(),t.appInfo.is_account&&1==t.appInfo.is_account?a("v-uni-view",{staticClass:"flxe justify-center"},[a("v-uni-view",{staticClass:"grants",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showlogon=!0,t.showlogin=!0}}},[a("u-icon",{attrs:{name:"account-fill",color:"#199063",size:"26"}}),a("v-uni-view",{staticClass:"dlu"},[t._v("账号密码登录")])],1)],1):t._e(),t.appInfo.is_account&&1==t.appInfo.is_account?a("v-uni-view",{staticClass:"toregister flxe justify-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showlogon=!1,t.showlogin=!0}}},[t._v("未注册账号？点击去注册>")]):t._e()]:t._e(),2==t.appInfo.h5_run_mode?[a("v-uni-view",{staticClass:"flxe justify-center"},[a("v-uni-view",{staticClass:"grants",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showlogon=!0,t.showlogin=!0}}},[a("u-icon",{attrs:{name:"account-fill",color:"#199063",size:"26"}}),a("v-uni-view",{staticClass:"dlu"},[t._v("账号密码登录")])],1)],1),a("v-uni-view",{staticClass:"toregister flxe justify-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showlogon=!1,t.showlogin=!0}}},[t._v("未注册账号？点击去注册>")])]:t._e(),3==t.appInfo.h5_run_mode?["wxOfficialAccount"==t.platform?a("v-uni-view",{staticClass:"flxe justify-center"},[a("v-uni-view",{staticClass:"grant",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.thirdLogin("wechat")}}},[a("u-icon",{attrs:{name:"weixin-fill",color:"#ffffff",size:"26"}}),a("v-uni-view",{staticClass:"dlu"},[t._v("微信授权登录")])],1)],1):t._e(),"H5"==t.platform?[a("v-uni-view",{staticClass:"flxe justify-center"},[a("v-uni-view",{staticClass:"grants",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showlogon=!0,t.showlogin=!0}}},[a("u-icon",{attrs:{name:"account-fill",color:"#199063",size:"26"}}),a("v-uni-view",{staticClass:"dlu"},[t._v("账号密码登录")])],1)],1),a("v-uni-view",{staticClass:"toregister flxe justify-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showlogon=!1,t.showlogin=!0}}},[t._v("未注册账号？点击去注册>")])]:t._e()]:t._e()]:["wxOfficialAccount"==t.platform?a("v-uni-view",{staticClass:"flxe justify-center"},[a("v-uni-view",{staticClass:"grant",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.thirdLogin("wechat")}}},[a("u-icon",{attrs:{name:"weixin-fill",color:"#ffffff",size:"26"}}),a("v-uni-view",{staticClass:"dlu"},[t._v("微信授权登录")])],1)],1):t._e(),"H5"==t.platform?[a("v-uni-view",{staticClass:"flxe justify-center"},[a("v-uni-view",{staticClass:"grants",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showlogon=!0,t.showlogin=!0}}},[a("u-icon",{attrs:{name:"account-fill",color:"#199063",size:"26"}}),a("v-uni-view",{staticClass:"dlu"},[t._v("账号密码登录")])],1)],1),a("v-uni-view",{staticClass:"toregister flxe justify-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showlogon=!1,t.showlogin=!0}}},[t._v("未注册账号？点击去注册>")])]:t._e()],a("v-uni-view",{staticClass:"flxe align-center justify-center",staticStyle:{"margin-top":"50rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agree=!0}}},[a("u-icon",{attrs:{name:"checkmark-circle-fill",color:t.agree?"#07C160":"#ededed",size:"16"}}),a("v-uni-view",{staticClass:"clause"},[t._v("我已阅读并同意："),a("v-uni-view",{staticStyle:{color:"#34c758"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.agreement("privacy")}}},[t._v("《隐私政策》")]),t._v("和"),a("v-uni-view",{staticStyle:{color:"#34c758"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.agreement("use")}}},[t._v("《使用协议》")])],1)],1)],a("wike-loading-page",{attrs:{isLoading:t.isLoading}}),a("tnui-wx-user-info",{on:{updated:function(e){arguments[0]=e=t.$handleEvent(e),t.updatedUserInfoEvent.apply(void 0,arguments)}},model:{value:t.showAuthorizationModal,callback:function(e){t.showAuthorizationModal=e},expression:"showAuthorizationModal"}})],2)},o=[]},9417:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("ac1f"),a("5319");var i=n(a("57d5")),o={name:"u-code",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(t){this.secNum=t}}},methods:{checkKeepRunning:function(){var t=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!t)return this.changeEvent(this.startText);var e=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>e?(this.secNum=t-e,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var t=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--t.secNum?t.changeEvent(t.changeText.replace(/x|X/,t.secNum)):(clearInterval(t.timer),t.timer=null,t.changeEvent(t.endText),t.secNum=t.seconds,t.$emit("end"),t.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(t){this.$emit("change",t)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var t=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:t+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};e.default=o},b513:function(t,e,a){"use strict";a.r(e);var n=a("02ba"),i=a("ff00");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("61fa");var s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"5faa3453",null,!1,n["a"],void 0);e["default"]=r.exports},ba10:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".signin[data-v-b641b7a4]{font-weight:700;font-size:20px;color:#101010;margin:%?45?% %?76?% %?76?%}.site_logo[data-v-b641b7a4]{width:100%;display:flex;justify-content:center}.weixin[data-v-b641b7a4]{width:%?160?%;height:%?160?%;border-radius:50%}.site_name[data-v-b641b7a4]{width:100%;display:flex;justify-content:center;font-size:%?36?%;margin-top:%?30?%;font-weight:700}.detailed[data-v-b641b7a4]{color:#999;font-size:%?28?%;margin-top:%?80?%;width:100%;display:flex;justify-content:center;flex-direction:column;align-items:center}.grant[data-v-b641b7a4]{background:linear-gradient(90deg,#00ca88,#00bcd4);border:1px solid #199063;width:80%;height:42px;border-radius:%?50?%;font-size:%?28?%;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;margin-top:%?180?%;position:relative}.grant .dlu[data-v-b641b7a4]{padding-left:%?12?%}.grant .button[data-v-b641b7a4]{position:absolute;width:100%;height:%?80?%;opacity:0}.toregister[data-v-b641b7a4]{font-size:%?26?%;margin-top:%?16?%;color:#c7c7cc}.grants[data-v-b641b7a4]{border:1px solid #199063;width:80%;height:42px;border-radius:%?50?%;font-size:%?28?%;color:#199063;display:flex;align-items:center;justify-content:center;font-weight:700;margin-top:%?38?%;position:relative}.grants .dlu[data-v-b641b7a4]{padding-left:%?12?%}.grants .button[data-v-b641b7a4]{position:absolute;width:100%;height:%?80?%;opacity:0}.clause[data-v-b641b7a4]{display:flex;justify-content:center;font-size:%?26?%;color:#c7c7cc;margin-left:%?12?%}.getbutton[data-v-b641b7a4]{position:absolute;width:100%;height:%?80?%;opacity:0;margin-top:%?180?%}.container[data-v-b641b7a4]{margin-top:%?60?%}.container .bg[data-v-b641b7a4]{display:flex;align-items:center;justify-content:center;position:relative;height:%?400?%;margin-bottom:%?80?%}.container .topimg uni-image[data-v-b641b7a4]{width:%?180?%;height:%?180?%;border-radius:50%}.container .textl_ogin[data-v-b641b7a4]{font-size:%?40?%;margin:0 %?60?% %?50?%;font-weight:700}.container .login[data-v-b641b7a4]{margin-bottom:%?80?%}.container .signinnow[data-v-b641b7a4]{background:#26c47d;font-size:%?34?%;color:#fff;margin:0 %?60?% %?40?%;text-align:center;line-height:%?90?%;height:%?90?%;border-radius:%?16?%;font-weight:700}.container .input[data-v-b641b7a4]{height:%?100?%;padding:0 %?30?%;background:#f7f7f7;border-radius:%?16?%;flex-direction:row;margin:0 %?60?% %?40?%;font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.container .input-icon[data-v-b641b7a4]{width:%?30?%;height:%?38?%}.container .hoversubmit[data-v-b641b7a4]{background:#f7f7f7;color:#acacb3}.container .vs-flex-item[data-v-b641b7a4]{flex:1;margin-left:%?16?%}",""]),t.exports=e},ce68:function(t,e,a){var n=a("ba10");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("072da3c8",n,!0,{sourceMap:!1,shadowMode:!1})},e26d:function(t,e,a){"use strict";a.r(e);var n=a("8d96"),i=a("3337");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("329e");var s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"b641b7a4",null,!1,n["a"],void 0);e["default"]=r.exports},ff00:function(t,e,a){"use strict";a.r(e);var n=a("6051"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a}}]);