"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./common/vendor.js");require("./utils/utils.js");const t=require("./stores/persist.js");Math;const n={onLaunch:function(){},onShow:function(){},onHide:function(){}};function o(){const o=e.createSSRApp(n),s=e.createPinia();return s.use(t.piniaPluginPersisitedstate),o.use(s),{app:o}}o().app.mount("#app"),exports.createApp=o;
