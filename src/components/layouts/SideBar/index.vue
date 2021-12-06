<template>
  <main
    class="overlay"
    @click.stop="$emit('update:menu')"
    :class="menu && 'show-sidebar'"
  >
    <div @click.stop class="sidebar" :class="menu && 'show-sidebar'">
      <nav class="sidebar__navbar">
        <div class="sidebar__navbar__logo">
          <img :src="require('@/assets/images/logo.png')" alt="photo" />
        </div>
        <ul class="sidebar__navbar__list">
          <li
            class="sidebar__navbar__list--item"
            v-for="(list, index) in routeList"
            :key="index"
          >
            <a :href="list.href">{{ list.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    menu: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
};
</script>

