export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\mioan\\Desktop\\22. Shopping Cart with Snipcart, Adding Scripts and Stylesheets\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\mioan\\Desktop\\22. Shopping Cart with Snipcart, Adding Scripts and Stylesheets\\src\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\mioan\\Desktop\\22. Shopping Cart with Snipcart, Adding Scripts and Stylesheets\\src\\pages\\Index.vue")
  },
  {
    path: "/new",
    component: () => import(/* webpackChunkName: "page--src-pages-new-index-vue" */ "C:\\Users\\mioan\\Desktop\\22. Shopping Cart with Snipcart, Adding Scripts and Stylesheets\\src\\pages\\new\\Index.vue")
  },
  {
    path: "/new/products",
    component: () => import(/* webpackChunkName: "page--src-pages-new-products-vue" */ "C:\\Users\\mioan\\Desktop\\22. Shopping Cart with Snipcart, Adding Scripts and Stylesheets\\src\\pages\\new\\Products.vue")
  },
  {
    path: "/blog/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\Users\\mioan\\Desktop\\22. Shopping Cart with Snipcart, Adding Scripts and Stylesheets\\src\\pages\\Blog.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/products/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src-pages-products-vue" */ "C:\\Users\\mioan\\Desktop\\22. Shopping Cart with Snipcart, Adding Scripts and Stylesheets\\src\\pages\\Products.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/posts/:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\mioan\\Desktop\\22. Shopping Cart with Snipcart, Adding Scripts and Stylesheets\\src\\templates\\Post.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/tags/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\Users\\mioan\\Desktop\\22. Shopping Cart with Snipcart, Adding Scripts and Stylesheets\\src\\templates\\Tag.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\mioan\\Desktop\\22. Shopping Cart with Snipcart, Adding Scripts and Stylesheets\\src\\pages\\404.vue")
  }
]

