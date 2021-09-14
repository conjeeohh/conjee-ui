<template>
  <div class="co-tab-pane">
    <!-- 
      存放内容
     -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CoTabPane",
  inject: ["Tab"],
  props: {
    label: String,
    name: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    /* if (!this.Tab.labelList.indexOf(this.name) > -1) {
      this.Tab.labelList.push(this.param);
    } */
  },
  beforeDestroy() {
    /* const index = this.Tab.labelList.indexOf(this.param);
    this.Tab.labelList.splice(index, 1); */
  },
};
</script>

<style>
</style>