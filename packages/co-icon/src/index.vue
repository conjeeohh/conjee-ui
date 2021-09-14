<template>
  <div class="co-icon">
    <svg class="icon" aria-hidden="true" :style="{fill:color}">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: "CoIcon",
  props: {
    name: {
      type: String,
      require: true,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.co-icon {
  display: inline-block;
}
</style>