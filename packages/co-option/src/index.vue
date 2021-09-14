<template>
  <div :class="['co-option',disabled ? 'option-disabled' : '']" @click="disabled ? null : clickOption()">
    <li class="co-option_li">{{label || value}}</li>
  </div>
</template>

<script>
export default {
  name: "CoOption",
  props: {
    label: String,
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      parent: {},
      option: {
        label: this.label,
        value: this.value,
        disable: this.disabled,
      },
    };
  },
  computed: {
    selectStore() {
      return this.parent.selectStore;
    },
  },
  created() {
    this.parent = this.$parent;
  },
  methods: {
    // 点击获取option属性并传递给select组件
    clickOption() {
      this.selectStore.commit("selectOption", this.option);
    },
  },
};
</script>

<style lang="less" scoped>
.co-option {
  color: #606266;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f5f7fa;
  }
  .co-option_li {
    padding: 5px 20px;
  }
}
.option-disabled {
  cursor: not-allowed;
  color: #c0c9db;
  &:hover {
    background-color: inherit;
  }
}
</style>