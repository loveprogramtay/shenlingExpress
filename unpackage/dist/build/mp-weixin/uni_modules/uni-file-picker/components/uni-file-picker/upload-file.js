"use strict";const e=require("../../../../common/vendor.js"),r={name:"uploadFile",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},delIcon:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},showType:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},readonly:{type:Boolean,default:!1}},computed:{list(){let e=[];return this.filesList.forEach((r=>{e.push(r)})),e},styles(){return Object.assign({border:!0,dividline:!0,"border-style":{}},this.listStyles)},borderStyle(){let{borderStyle:e,border:r}=this.styles,t={};if(r){let r=e&&e.width||1;r=this.value2px(r);let o=e&&e.radius||5;o=this.value2px(o),t={"border-width":r,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":o}}else t.border="none";let o="";for(let l in t)o+=`${l}:${t[l]};`;return o},borderLineStyle(){let e={},{borderStyle:r}=this.styles;if(r&&r.color&&(e["border-color"]=r.color),r&&r.width){let t=r&&r.width||1,o=r&&r.style||0;"number"==typeof t?t+="px":t=t.indexOf("px")?t:t+"px",e["border-width"]=t,"number"==typeof o?o+="px":o=o.indexOf("px")?o:o+"px",e["border-top-style"]=o}let t="";for(let o in e)t+=`${o}:${e[o]};`;return t}},methods:{uploadFiles(e,r){this.$emit("uploadFiles",{item:e,index:r})},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},value2px:e=>("number"==typeof e?e+="px":e=-1!==e.indexOf("px")?e:e+"px",e)}};const t=e._export_sfc(r,[["render",function(r,t,o,l,s,i){return e.e({a:!o.readonly},o.readonly?{}:{b:e.o(((...e)=>i.choose&&i.choose(...e)))},{c:i.list.length>0},i.list.length>0?{d:e.f(i.list,((r,t,l)=>e.e({a:e.t(r.name)},o.delIcon&&!o.readonly?{b:e.o((e=>i.delFile(t)),t)}:{},{c:r.progress&&100!==r.progress||0===r.progress},r.progress&&100!==r.progress||0===r.progress?{d:-1===r.progress?0:r.progress,e:r.errMsg?"#ff5a5f":"#EBEBEB"}:{},{f:"error"===r.status},"error"===r.status?{g:e.o((e=>i.uploadFiles(r,t)),t)}:{},{h:t,i:0!==t&&i.styles.dividline?1:"",j:e.s(0!==t&&i.styles.dividline&&i.borderLineStyle)}))),e:o.delIcon&&!o.readonly,f:e.s(i.borderStyle)}:{})}]]);wx.createComponent(t);
