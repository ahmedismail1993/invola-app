import Vue from "vue";

Vue.mixin({
  computed: {
    routeList() {
      return [
        { name: "الرئيسية", href: "/home" },
        { name: "التصنيفات", href: "/categories" },
        { name: "التطبيقات", href: "/apps" },
        { name: "طور التطوير", href: "/on-development" }
      ];
    }
  }
});
