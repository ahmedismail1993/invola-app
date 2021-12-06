<template>
  <main class="card">
    <div class="card__header">
      <div class="card__header__right">
        <img :src="require(`@/assets/images/${item.icon}`)" alt="photo" />
      </div>
      <div class="card__header__left">
        <div class="card__header__left--title">
          <strong>
            {{ item.title }}
          </strong>
          <span>
            <img
              :src="require(`@/assets/images/${item.star_icon}`)"
              alt="photo"
            />
            <span>
              {{ item.star_count }}
            </span>
          </span>
        </div>
        <div class="card__header__left__sub-title">
          <span>تطوير :</span>
          <span>{{ item.develop_by }}</span>
          <p>{{ item.textContent }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

