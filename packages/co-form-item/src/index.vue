<template>
  <div class="co-form-item" :style="{
      'margin-bottom': isLastItem ? 0 : '22px'
  }">
    <div class="co-form-item_label" :style="{
        'width': labelWidth || '80px',
        'text-align': labelPosition === 'top' ? 'left' : labelPosition || 'right',
        'float': labelPosition === 'top' ? 'none' : 'left',
    }">
      {{label}}
    </div>
    <div class="co-form-item_menu" :style="{
      'margin-left': labelPosition === 'top' ? '0' : '80px'
    }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoFormItem",
  inject: ["Form"],
  data() {
    return {
      isLastItem: false,
      // labelPosition: "",
    };
  },
  props: {
    prop: String,
    label: String,
    "label-width": String,
    required: {
      type: Boolean,
      default: false,
    },
    rules: Object,
    error: String,
    "show-message": {
      type: Boolean,
      default: true,
    },
    "inline-message": {
      type: Boolean,
      default: true,
    },
    size: String,
  },
  computed: {
    labelPosition() {
      return this.$parent.labelPosition;
    },
  },
  mounted() {
    this.isLastItem =
      this.$parent.$children.length - 1 ===
      this.$parent.$children.indexOf(this);
    // this.labelPosition = this.$parent.labelPosition;
  },
};
</script>

<style lang="less" scoped>
.co-form-item {
  .co-form-item_label {
    // display: block;
    height: 40px;
    line-height: 40px;
  }
  .co-form-item_menu {
    display: block;
    padding-left: 12px;
    height: 40px;
    line-height: 40px;
  }
}
</style>