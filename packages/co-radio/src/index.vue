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
    'co-radio',
    disabled ? 'co-radio-disabled' : '',
    isLast ? 'co-radio-margin' : '']" @click="disabled ? null : updateRadioStatus()">
    <div class="co-radio_input">
      <div :class="[
        'co-radio_inner',
        isPickOn ? 'co-radio_inner-pickOn' : '',
        disabled ? 'co-radio_inner-disabled' : 'co-radio_inner-hover']"></div>
    </div>
    <div :class="[
        'co-radio_label',
        isPickOn ? 'co-radio_label-pickOn' : '']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import forGroup from "../../../src/mixins/forGroup";

export default {
  name: "CoRadio",
  data() {
    return {
      isPickOn: false,
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
};
</script>

<style lang="less" scoped>
.co-radio {
  display: inline-block;
  color: #606266;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  // 单选框
  .co-radio_input {
    display: inline-block;
    line-height: 1;
    margin-top: 1px;
    vertical-align: text-top;
    .co-radio_inner {
      width: 1em;
      height: 1em;
      border: 1px solid #dcdfe6;
      background-color: #fff;
      border-radius: 100%;
    }
    // 单选框可用时鼠标经过样式
    .co-radio_inner-hover {
      &:hover {
        border-color: #7763e9;
      }
    }
    // 单选框选中时样式
    .co-radio_inner-pickOn {
      border: 5px solid #7763e9;
    }
  }
  // 单选框文本样式
  .co-radio_label {
    display: inline-block;
    margin-left: 10px;
  }
  // 单选框选中时文本样式
  .co-radio_label-pickOn {
    color: #7763e9;
  }
}
.co-radio-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  .co-radio_input {
    .co-radio_inner {
      background-color: #f5f7fa;
      border: 1px solid #e4e7ed;
    }
    .co-radio_inner-pickOn {
      position: relative;
      &::after {
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #c0c4cc;
      }
    }
  }
  .co-radio_label-pickOn {
    color: #cccfd5;
  }
}
.co-radio-margin {
  margin-right: 30px;
}
</style>