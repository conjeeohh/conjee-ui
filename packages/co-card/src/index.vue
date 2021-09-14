<template>
  <div :class="['co-card',`co-card_shadow-${shadow}`]">
    <!-- 
      头部插槽 默认插槽
     -->
    <div class="co-card_header" v-if="$slots.header">
      <slot name="header">
        {{header}}
      </slot>
    </div>
    <div class="co-card_main" :style="mainStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoCard",
  props: {
    shadow: {
      type: String,
      default: "always",
    },
    mainStyle: String,
  },
  created() {},
};
</script>

<style lang="less" scoped>
.co-card {
  width: 100%;
  min-height: 50px;
  display: inline-block;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: #303133;
  .co-card_header {
    padding: 18px 20px;
    border-bottom: 1px solid #eef0f6;
  }
  .co-card_main {
    padding: 20px;
  }
}
.co-card_shadow-always {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.co-card_shadow-hover {
  box-shadow: none;
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
.co-card_shadow-never {
  box-shadow: none;
}
</style>