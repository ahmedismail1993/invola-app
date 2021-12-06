<template>
  <div id="app">
    <Header />
    <BrowseApp />
    <ProductStore />
    <Apps />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Header: () => import("@/components/layouts/Header"),
    Footer: () => import("@/components/layouts/Footer"),
    BrowseApp: () => import("@/components/BrowseApp"),
    ProductStore: () => import("@/components/ProductStore"),
    Apps: () => import("@/components/Apps"),
  },
};
</script>

