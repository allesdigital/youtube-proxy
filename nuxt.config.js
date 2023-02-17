const ytvProxy = require("./ytv-proxy.js");

export default {
  server: {
    host: "0.0.0.0",
    port: 80,
  },

  head: {
    title: null,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],

  axios: {
    baseURL: "/",
  },

  proxy: {
    "/vi/": {
      target: "https://i.ytimg.com",
      changeOrigin: true,
    },
    "/vi_webp/": {
      target: "https://i.ytimg.com",
      changeOrigin: true,
    },
    [ytvProxy.prefix]: ytvProxy.handler,
  },

  serverMiddleware: [{ path: "/data", handler: "~/server-middleware/data.js" }],
};
