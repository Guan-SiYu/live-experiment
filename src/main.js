import { createApp } from "vue";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router/index";

import VuePlayer from "vue-video-player/src";
import "vue-video-player/src/custom-theme.css";
import "video.js/dist/video-js.css";
createApp(App)
    .use(Antd)
    .use(router)
    .use(VuePlayer)
    .mount("#app");
