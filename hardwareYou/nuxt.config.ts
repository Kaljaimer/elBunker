import { defineNuxtConfig } from "nuxt/config";
import type { Plugin } from "vite";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in",
    },
  },

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "/assets/css/remixicon.css",
    "/assets/fonts/flaticon.css",
    "/assets/css/satoshi-font.css",
  ],

  plugins: ["~/plugins/vuetify"],

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (
      _options: any,
      nuxt: {
        hooks: {
          hook: (
            arg0: string,
            arg1: (config: { plugins: Plugin<any>[][] }) => void
          ) => void;
        };
      }
    ) => {
      nuxt.hooks.hook(
        "vite:extendConfig",
        (config: { plugins: Plugin<any>[][] }) => {
          config.plugins.push(vuetify({ autoImport: true }));
        }
      );
    },
    "nuxt-swiper",
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
        },
      },
    },
  },

  components: true,
  compatibilityDate: "2025-01-10",
});