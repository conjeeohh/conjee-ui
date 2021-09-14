<template>
  <div class="co-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CoForm",
  provide() {
    return {
      Form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: Object,
    "label-position": {
      type: String,
      default: "right",
    },
    "label-width": String,
    hideAsterisk: {
      type: Boolean,
      default: false,
    },
    "show-message": {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>