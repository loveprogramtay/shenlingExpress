"use strict";const e=require("../../../common/vendor.js"),t=require("../../../apis/task.js"),a={__name:"complete",setup(a){const l=e.ref([]),u=e.ref(""),s=e.ref("");async function n(){if(!u.value||!s.value)return e.index.utils.toast("开始和结束时间非空","error");let a=await t.taskApi.list(6,1,50,u.value,s.value);l.value=a.data.data.items}function i(e){u.value=e.detail.value}function d(e){s.value=e.detail.value}return e.onMounted((async()=>{let e=await t.taskApi.list(6);l.value=e.data.data.items})),(t,a)=>e.e({a:e.t(u.value),b:e.o(i),c:e.t(s.value),d:e.o(d),e:e.o(n),f:l.value.length>0},l.value.length>0?{g:e.f(l.value,((t,a,l)=>({a:e.t(t.transportTaskId),b:e.t(t.startAddress),c:e.t(t.endAddress),d:"/subpkg_task/detail/index?id="+t.id,e:e.t(t.actualDepartureTime),f:t.id})))}:{},{h:0==l.value.length},(l.value.length,{}))}},l=e._export_sfc(a,[["__scopeId","data-v-7d77e88c"]]);wx.createComponent(l);
