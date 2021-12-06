<template>
  <main class="product-store">
    <div class="product-store__item product-store__item--right">
      <h1>كل ما تحتاجه لنمو متجرك فى مكان واحد</h1>
      <h3>
        مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات وحلول سوق
        التطبيقات لنمو متجرك ومضاعفة أرباحك
      </h3>
      <ul>
        <li v-for="(item, index) in listItems" :key="index">
          <div>
            <img :src="require(`@/assets/images/${item.icon}`)" alt="photo" />
          </div>
          <p>
            {{ item.text }}
          </p>
        </li>
      </ul>
      <div>
        <Button>
          <span>تصفح التطبيقات</span>
        </Button>
      </div>
    </div>
    <div class="product-store__item">
      <imageWrapper image_name="zidapp.png" />
    </div>
  </main>
</template>

<script>
export default {
  name: "ProductStore",
  components: {
    imageWrapper: () => import("@/components/imageWrapper"),
    Button: () => import("@/components/Button"),
  },
  computed: {
    listItems() {
      return [
        {
          icon: "checked.png",
          text: "سهولة ادارة و تفعيل تطبيقاتك من نفس لوحة تحكم متجرك",
        },
        {
          icon: "gear.png",
          text: "دعم فني و تقني متكامل متوفر على مدار الساعة",
        },
        {
          icon: "money.png",
          text: "أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة ",
        },
      ];
    },
  },
};
</script>

