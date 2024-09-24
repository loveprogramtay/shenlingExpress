"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_task = require("../../apis/task.js");
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const id = common_vendor.ref(0);
    common_vendor.onLoad((params) => {
      id.value = params.id;
    });
    const receiptPictrues = common_vendor.ref([]);
    const cargoPickUpPictureList = common_vendor.computed(() => {
      return receiptPictrues.value.map((item) => {
        return { url: item.url };
      });
    });
    const goodsPictrues = common_vendor.ref([]);
    const cargoPictureList = common_vendor.computed(() => {
      return goodsPictrues.value.map((item) => {
        return { url: item.url };
      });
    });
    const enableSubmit = common_vendor.computed(() => {
      return receiptPictrues.value.length > 0 && goodsPictrues.value.length > 0;
    });
    async function onSubmitForm() {
      let obj = {
        id: id.value,
        cargoPickUpPictureList: cargoPickUpPictureList.value,
        cargoPictureList: cargoPictureList.value
      };
      console.log(obj);
      await apis_task.taskApi.pickup(obj);
      common_vendor.index.utils.toast("提货成功", "success");
      common_vendor.index.switchTab({
        url: "/pages/task/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => receiptPictrues.value = $event),
        b: common_vendor.p({
          limit: "3",
          title: "请拍照上传回单凭证",
          modelValue: receiptPictrues.value
        }),
        c: common_vendor.o(($event) => goodsPictrues.value = $event),
        d: common_vendor.p({
          limit: "3",
          title: "请拍照上传货品照片",
          modelValue: goodsPictrues.value
        }),
        e: !enableSubmit.value,
        f: common_vendor.o(onSubmitForm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6275eec7"]]);
wx.createPage(MiniProgramPage);
