<template>
  <div class="co-row" :style="{
    'justify-content': justify,
    'align-items': convertAlign(),
    'flex-wrap': wrap ? 'wrap' : 'nowrap'
  }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CoRow",
  data() {
    return {};
  },
  props: {
    gutter: [Number, Object, Array], // 栅格间隔
    align: {
      // 垂直对齐方式
      type: String,
      default: "start",
    },
    justify: {
      // 水平排列方式
      type: String,
      default: "start",
    },
    wrap: {
      // 是否自动换行
      type: Boolean,
      default: true,
    },
  },
  methods: {
    convertAlign() {
      if (this.align === "top") {
        return "flex-start";
      } else if (this.align === "middle") {
        return "center";
      } else if (this.align === "bottom") {
        return "flex-end";
      }
      return "";
    },
  },
};
</script>

<style lang="less" scoped>
.co-row {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: auto;
}
</style>