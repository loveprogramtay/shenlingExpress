import { createPersistedState } from "pinia-plugin-persistedstate";

// 通过createPersistedState创建一个持久化插件
export const piniaPluginPersisitedstate = createPersistedState({
	key: (id) => `__persisted__${id}`, // 单独处理key的名字,让其有语义化
	storage: {
		// 根据key来获取到存储中的数据(获取微信小程序，H5浏览器，原生app中的数据)
		getItem: (key) => {
			return uni.getStorageSync(key); // 用来处理多平台获取数据的兼容性
		},
		// 保存数据到存储空间中
		setItem: (key, value) => {
			uni.setStorageSync(key, value); // 用来处理多平台保存数据的兼容性
		},
	},
});
