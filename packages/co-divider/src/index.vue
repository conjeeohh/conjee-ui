<template>
  <div :class="['co-divider',`co-divider_${orientation}`]">
    <span class="co-divider_text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "CoDivider",
  props: {
    orientation: {
      type: String,
      default: "center",
    },
  },
};
</script>

<style lang="less" scoped>
.co-divider {
  display: flex;
  align-items: center;
  margin: 16px 0;
  width: 100%;
  line-height: 1.7;
  text-align: center;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  &::before {
    content: "";
    width: 50%;
    height: 1px;
    background-color: #d9d9d9;
  }
  .co-divider_text {
    padding: 0 1em;
    font-weight: 600;
    color: #262626;
  }
  &::after {
    content: "";
    width: 50%;
    height: 1px;
    background-color: #d9d9d9;
  }
}
.co-divider_left {
  &::before {
    width: 5%;
  }
  &::after {
    width: 95%;
  }
}
.co-divider_right {
  &::before {
    width: 95%;
  }
  &::after {
    width: 5%;
  }
}
</style>