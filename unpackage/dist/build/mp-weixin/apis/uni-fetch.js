"use strict";const e=require("../common/vendor.js"),t=require("../stores/users.js"),s=e.createUniFetch_1({loading:{title:"正在加载中..."},baseURL:"https://slwl-api.itheima.net",intercept:{request(e){const s={Authorization:t.useUserStore().token};return e.header=Object.assign({},s,e.header),e},response:t=>(401===t.statusCode&&(e.index.utils.toast("登录失效，请重新登录"),e.index.redirectTo({url:"/pages/login/index"})),t)}});exports.uniFetch=s;
