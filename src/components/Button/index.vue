<template>
  <button class="btn btn--primary" v-bind="$attrs">
    <slot />
    <img
      class="btn btn__arrow"
      :src="require('@/assets/images/left-arrow.svg')"
      alt="photo"
    />
  </button>
</template>

<script>
export default {
  name: "Button",
  inheritAttrs: false,
};
</script>
