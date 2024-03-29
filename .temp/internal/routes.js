/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\neusoft\\exercise\\vue\\quBlog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-316652b8",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-316652b8").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-ed609598",
    path: "/chanllenge/1.Bin2Dec.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ed609598").then(next)
    },
  },
  {
    name: "v-0376d630",
    path: "/chanllenge/6.ColorCycle.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0376d630").then(next)
    },
  },
  {
    name: "v-7e83d24b",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7e83d24b").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-61bf9f44",
    path: "/chanllenge/4.ChristmasLights.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-61bf9f44").then(next)
    },
  },
  {
    name: "v-8e5a3fd4",
    path: "/guide/skos-xl.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8e5a3fd4").then(next)
    },
  },
  {
    name: "v-fcde769c",
    path: "/chanllenge/2.BorderRadiusPreviewer.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-fcde769c").then(next)
    },
  },
  {
    name: "v-6b72de0a",
    path: "/chanllenge/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6b72de0a").then(next)
    },
  },
  {
    path: "/chanllenge/index.html",
    redirect: "/chanllenge/"
  },
  {
    name: "v-13f6d1db",
    path: "/love/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-13f6d1db").then(next)
    },
  },
  {
    path: "/love/index.html",
    redirect: "/love/"
  },
  {
    name: "v-14ed799e",
    path: "/guide/skos%E7%BB%84%E6%88%90.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-14ed799e").then(next)
    },
  },
  {
    path: "/guide/skos组成.html",
    redirect: "/guide/skos%E7%BB%84%E6%88%90.html"
  },
  {
    name: "v-1b3bb8ca",
    path: "/wedding/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1b3bb8ca").then(next)
    },
  },
  {
    path: "/wedding/index.html",
    redirect: "/wedding/"
  },
  {
    name: "v-ad4ae694",
    path: "/vuetest/VueTest.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ad4ae694").then(next)
    },
  },
  {
    name: "v-b844bbda",
    path: "/vuetest/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b844bbda").then(next)
    },
  },
  {
    path: "/vuetest/index.html",
    redirect: "/vuetest/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]