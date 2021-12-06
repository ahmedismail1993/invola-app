<template>
  <main>
    <header class="header">
      <div class="container">
        <img
          @click="menu = !menu"
          class="hidden-sm-and-up header__burger-menu"
          :src="require('@/assets/images/menu.png')"
          alt="photo"
          width="30px"
        />
        <nav class="header__navbar">
          <div class="header__navbar__logo">
            <img :src="require('@/assets/images/logo.png')" alt="photo" />
          </div>
          <ul class="header__navbar__list">
            <li
              class="header__navbar__list--item"
              v-for="(list, index) in routeList"
              :key="index"
            >
              <a :href="list.href">{{ list.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <SideBar :menu.sync="menu" />
  </main>
</template>

<script>
export default {
  name: "Header",
  components: {
    SideBar: () => import("@/components/layouts/SideBar"),
  },
  data() {
    return {
      menu: false,
    };
  },
  watch: {
    menu: {
      handler(value) {
        if (value) {
          document.body.style.overflowY = "hidden";
        } else {
          document.body.style.overflowY = "auto";
        }
      },
      immediate: true,
    },
  },
};
</script>

