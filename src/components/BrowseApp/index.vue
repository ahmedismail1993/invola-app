<template>
  <main class="browse-app">
    <div class="container">
      <h1>طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد</h1>
      <p>
        طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو
        ارباحك عبر ادارة عمليات متجرك بشكل فعال واحترافي
      </p>
      <div
        style="display: flex; justify-content: center; margin: 50px 0 100px 0"
      >
        <Button>
          <span>تصفح التطبيقات</span>
        </Button>
      </div>
      <imageWrapper />
    </div>
  </main>
</template>

<script>
export default {
  name: "BrowseApp",
  components: {
    Button: () => import("@/components/Button"),
    imageWrapper: () => import("@/components/imageWrapper"),
  },
};
</script>
