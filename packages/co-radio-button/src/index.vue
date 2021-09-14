<template>
  <!-- 
    单独使用：
      value：选中单选项的绑定值
      label：当前单选项的绑定值
      disabled：是否可选
    组使用：
      label：当前单选项的绑定值
      value改为绑定到group
      选中某一项，同步都group的value，group监听到value改变，将value下发到子节点，更新当前选中项。
      获取当前组件在group中的index,如果不是最后一个元素，设置右margin值
  -->
  <div :class="[
    'co-radio-button',
    currentDisabled ? 'co-radio-disabled' : '',
    isPickOn ? 'co-radio_pickon' : '',
    preItemIsRadioButton ? '' : 'co-radio_left-radius',
    sufItemIsRadioButton ? '' : 'co-radio_right-radius']" @click="currentDisabled ? null : updateRadioStatus()">
    <div :class="['co-radio_input',`co-radio_input-${size}`]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import forGroup from "../../../src/mixins/forGroup";

export default {
  name: "CoRadioButton",
  data() {
    return {
      isPickOn: false,
      preItemIsRadioButton: false,
      sufItemIsRadioButton: false,
      size: "",
    };
  },
  mixins: [forGroup],
  props: {
    value: String,
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // 是否为组
    isGroup() {
      return this.mixin_isGroup("co-radio-group");
    },
    // 当前选中项
    model() {
      // 如果为组返回组的prop value，否则返回当前prop value
      return this.isGroup ? this._Group.value : this.value;
    },
    // 是否为最后一个元素
    isLast() {
      if (this.isGroup) {
        return (
          this.$parent.$children.indexOf(this) ===
          this.$parent.$children.length - 1
        );
      }
      return true;
    },
    currentDisabled() {
      return this.$parent.disabled || this.disabled;
    },
    /* // 上一个元素是否为radio-button
    preItemIsRadioButton() {
      return this.getPreItemType() === "co-radio-button";
    },
    // 下一个元素是否为radio-button
    sufItemIsRadioButton() {
      return this.getSufItemType() === "co-radio-button";
    }, */
  },
  methods: {
    // 更新选中状态
    updateRadioStatus() {
      // this.isPickOn = !this.isPickOn;
      if (!this.isPickOn) {
        this.isPickOn = !this.isPickOn;
        // 如果为组 更新到group
        if (this.isGroup) {
          this._Group.$emit("input", this.label);
        } else {
          this.$emit("input", this.label);
        }
      }
    },
    // 获取上一个兄弟节点类型
    getPreItemType() {
      if (this.$parent.$children.indexOf(this) !== 0) {
        return this.$parent.$children[this.$parent.$children.indexOf(this) - 1]
          .$options["_componentTag"];
      }
    },
    // 获取下一个兄弟节点类型
    getSufItemType() {
      if (
        this.$parent.$children.indexOf(this) !==
        this.$parent.$children.length - 1
      ) {
        return this.$parent.$children[this.$parent.$children.indexOf(this) + 1]
          .$options["_componentTag"];
      }
    },
  },
  watch: {
    // 监听当前选中项
    model(value) {
      this.isPickOn = this.label == value;
    },
  },
  created() {
    // 初始化选中状态
    this.isPickOn = this.label == this.model;
  },
  mounted() {
    this.preItemIsRadioButton = this.getPreItemType() === "co-radio-button";
    this.sufItemIsRadioButton = this.getSufItemType() === "co-radio-button";
    this.size = this.$parent.size;
  },
};
</script>

<style lang="less" scoped>
.co-radio-button {
  display: inline-block;
  overflow: hidden;
  color: #606266;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  border: 1px solid #dcdfe6;
  border-right: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  // 单选框
  .co-radio_input {
    display: inline-block;
    padding: 12px 20px;
    line-height: 1;
    margin-top: 1px;
    vertical-align: text-top;
    font-size: 14px;
  }
  .co-radio_input-medium {
    padding: 10px 20px;
    font-size: 14px;
  }
  .co-radio_input-small {
    padding: 9px 15px;
    font-size: 12px;
  }
  .co-radio_input-mini {
    padding: 7px 15px;
    font-size: 12px;
  }
}
.co-radio-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}
.co-radio_pickon {
  background-color: #7763e9;
  border-color: #7763e9;
  color: #fff;
}
.co-radio_left-radius {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.co-radio_right-radius {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-right: 1px solid #dcdfe6;
}
</style>