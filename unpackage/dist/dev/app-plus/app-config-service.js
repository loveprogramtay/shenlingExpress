
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#ffffff","titleText":"神领快递","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"神领物流","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"4.24","entryPagePath":"pages/task/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#818181","selectedColor":"#EF4F3F","borderStyle":"white","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#fff","list":[{"text":"任务","pagePath":"pages/task/index","iconPath":"/static/tabbar/task_normal.png","selectedIconPath":"/static/tabbar/task_selected.png"},{"text":"消息","pagePath":"pages/message/index","iconPath":"/static/tabbar/message_normal.png","selectedIconPath":"/static/tabbar/message_selected.png"},{"text":"我的","pagePath":"pages/my/index","iconPath":"/static/tabbar/my_normal.png","selectedIconPath":"/static/tabbar/my_selected.png"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/task/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/login/index","meta":{"navigationBar":{"backgroundColor":"#ffffff","type":"default"},"isNVue":false}},{"path":"pages/my/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"style":"custom","type":"default","titleColor":"#ffffff"},"isNVue":false}},{"path":"pages/message/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"消息","type":"default"},"isNVue":false}},{"path":"pages/pinia/index","meta":{"navigationBar":{"titleText":"Pinia示例","type":"default"},"isNVue":false}},{"path":"subpkg_task/detail/index","meta":{"navigationBar":{"titleText":"任务详情","type":"default"},"isNVue":false}},{"path":"subpkg_task/delay/index","meta":{"navigationBar":{"titleText":"延迟提货","type":"default"},"isNVue":false}},{"path":"subpkg_task/pickup/index","meta":{"navigationBar":{"titleText":"提货信息","type":"default"},"isNVue":false}},{"path":"subpkg_task/except/index","meta":{"navigationBar":{"titleText":"上报异常","type":"default"},"isNVue":false}},{"path":"subpkg_task/delivery/index","meta":{"navigationBar":{"titleText":"交货信息","type":"default"},"isNVue":false}},{"path":"subpkg_task/orders/index","meta":{"navigationBar":{"titleText":"查询商品","type":"default"},"isNVue":false}},{"path":"subpkg_task/guide/index","meta":{"navigationBar":{"titleText":"导航","type":"default"},"isNVue":false}},{"path":"subpkg_task/record/index","meta":{"navigationBar":{"titleText":"回车登记","type":"default"},"isNVue":false}},{"path":"subpkg_message/content/index","meta":{"navigationBar":{"titleText":"详情","type":"default"},"isNVue":false}},{"path":"subpkg_user/truck/index","meta":{"navigationBar":{"titleText":"车辆信息","type":"default"},"isNVue":false}},{"path":"subpkg_user/task/index","meta":{"navigationBar":{"titleText":"任务数据","type":"default"},"isNVue":false}},{"path":"subpkg_user/settings/index","meta":{"navigationBar":{"titleText":"系统设置","type":"default"},"isNVue":false}},{"path":"subpkg_user/mobile/index","meta":{"navigationBar":{"titleText":"换绑手机","type":"default"},"isNVue":false}},{"path":"subpkg_user/password/index","meta":{"navigationBar":{"titleText":"修改密码","type":"default"},"isNVue":false}},{"path":"subpkg_user/notify/index","meta":{"navigationBar":{"titleText":"消息通知设置","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  