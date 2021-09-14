<template>
  <div class="co-col" :style="{
      'flex': `0 0 ${currentSpan * 100 / 24}%`,
      'margin-left': currentOffset ? `${currentOffset * 100 / 24}%` : 0,
      'padding': padding,
      'order': order
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CoCol",
  props: {
    span: Number, // 栅格占位
    offset: Number, // 左侧间隔格数
    order: Number, // 栅格顺序
    xs: [Number, Object], // 屏幕<576px
    sm: [Number, Object], // >= 576
    md: [Number, Object], // >= 768
    lg: [Number, Object], // >= 992
    xl: [Number, Object], // >= 1200
    xll: [Number, Object], // >= 1600
  },
  data() {
    return {
      viewportWidth: document.body.clientWidth,
    };
  },
  computed: {
    gutter() {
      return this.$parent.gutter;
    },
    padding() {
      return this.getPadding();
    },
    // 当前尺寸 返回xs sm md...
    currentSize() {
      return this.getCurrentSize();
    },
    // 当前尺寸 实际span
    currentSpan() {
      return this.getCurrentSpan();
    },
    currentOffset() {
      return this.getCurrentOffset();
    },
  },
  methods: {
    getPadding() {
      if (typeof this.gutter === "number") {
        return `0 ${this.gutter / 2}px`;
      } else if (this.gutter instanceof Array) {
        if (this.gutter[0] instanceof Object) {
          return `${this.gutter[1][this.currentSize] / 2}px ${
            this.gutter[0][this.currentSize] / 2
          }px`;
        }
        return `${this.gutter[1] / 2}px ${this.gutter[0] / 2}px`;
      } else if (this.gutter instanceof Object) {
        return `0 ${this.gutter[this.currentSize] / 2}px`;
      }
    },
    // 获取当前屏幕尺寸类型
    getCurrentSize() {
      if (this.viewportWidth < 576) {
        return "xs";
      } else if (this.viewportWidth >= 576 && this.viewportWidth < 768) {
        return "sm";
      } else if (this.viewportWidth >= 768 && this.viewportWidth < 992) {
        return "md";
      } else if (this.viewportWidth >= 992 && this.viewportWidth < 1200) {
        return "lg";
      } else if (this.viewportWidth >= 1200 && this.viewportWidth < 1600) {
        return "xl";
      } else if (this.viewportWidth >= 1600) {
        return "xll";
      }
    },
    // 获取当前屏幕尺寸对应的span
    getCurrentSpan() {
      const sizeInfo = this[this.currentSize];
      if (sizeInfo) {
        if (sizeInfo instanceof Object) {
          return sizeInfo.span;
        } else {
          return sizeInfo;
        }
      }
      return this.span;
    },
    getCurrentOffset() {
      const sizeInfo = this[this.currentSize];
      if (sizeInfo && sizeInfo instanceof Object) {
        return sizeInfo.offset;
      }
      return this.offset;
    },
  },
  mounted() {
    const _this = this;
    // 更新width
    window.addEventListener("resize", function () {
      _this.viewportWidth = window.innerWidth;
    });
  },
};
</script>

<style lang="less" scoped>
.co-col {
  overflow: hidden;
  flex: 0 0 auto;
  box-sizing: border-box;
}
</style>