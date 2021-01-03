import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import userView from "../views/userView.vue";
import itemView from "../views/itemView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"/news"
  },
  {
    path: "/news",
    name: "news",
    component: NewsView
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView
  },
  {
    path: "/ask",
    name: "ask",
    component: AskView
  },
  {
    path: "/user",
    name: "user",
    component: userView
  },
  {
    path: "/item",
    name: "item",
    component: itemView
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
