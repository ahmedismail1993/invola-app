<template>
  <main class="apps">
    <div class="apps__title">
      <h2>التطبيقات المميزة</h2>
      <p>تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها</p>
    </div>
    <div class="container">
      <div class="apps__wrapper">
        <template v-for="(item, index) in listItems">
          <AppCard :key="index" :item="item" />
        </template>
      </div>
      <div class="center">
        <Button style="background-color: transparent">
          <span> جميع التطبيقات </span>
        </Button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Apps",
  components: {
    AppCard: () => import("./AppCard"),
    Button: () => import("@/components/Button"),
  },
  computed: {
    listItems() {
      return [
        {
          icon: "app.png",
          star_icon: "star.png",
          star_count: 5,
          title: "قمرة",
          develop_by: "عمر برهوم",
          textContent:
            "نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك ",
        },
        {
          icon: "app.png",
          star_icon: "star.png",
          star_count: 5,
          title: "قمرة",
          develop_by: "عمر برهوم",
          textContent:
            "نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك ",
        },
        {
          icon: "app.png",
          star_icon: "star.png",
          star_count: 5,
          title: "قمرة",
          develop_by: "عمر برهوم",
          textContent:
            "نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك ",
        },
        {
          icon: "app.png",
          star_icon: "star.png",
          star_count: 5,
          title: "قمرة",
          develop_by: "عمر برهوم",
          textContent:
            "نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك ",
        },
      ];
    },
  },
};
</script>

