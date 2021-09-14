<template>
  <div class="co-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CoRadioGroup",
  props: {
    value: String,
    size: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>