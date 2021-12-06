<template>
  <div class="browse-app__images-container">
    <div class="browse-app__images-container--ellipse ellipse">
      <img :src="require('@/assets/images/ellipse.png')" alt="photo" />
    </div>
    <div class="browse-app__images-container--product">
      <img :src="require(`@/assets/images/${image_name}`)" alt="photo" />
    </div>

    <div class="browse-app__images-container--dots">
      <img :src="require('@/assets/images/dots.png')" alt="photo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageWrapper",
  props: {
    image_name: {
      type: String,
      default: "product.png",
    },
  },
};
</script>

