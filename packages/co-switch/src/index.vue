<template>
  <div :class="['co-switch',disabled ? 'co-switch_disabled' : '']" @click="disabled ? null : handlerSwitch()">
    <!-- 
      value：开关状态
      active-color：打开时颜色
      inactive-color：关闭颜色
      active-text：右文本
      inactive-text：左文本
      disabled 禁用状态
     -->
    <span v-if="inactiveText" :class="[
        'co-switch_text-left',
        value ? '' : 'co-switch_text-pick']">{{inactiveText}}</span>
    <span :class="[
        'co-switch_box',
        value ? 'co-switch_right': '']" :style="`background-color:${value ? activeColor : inactiveColor}`">
      <span class="co-switch_button" :style="`border-color:${value ? activeColor : inactiveColor}`"></span>
      <span v-if="disabled" class="maskLayer"></span>
    </span>
    <span v-if="activeText" :class="[
        'co-switch_text-right',
        value ? 'co-switch_text-pick' : '']">{{activeText}}</span>
  </div>
</template>

<script>
export default {
  name: "CoSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    "active-color": {
      type: String,
      default: "#7763e9",
    },
    "inactive-color": {
      type: String,
      default: "#dcdfe6",
    },
    "active-text": String,
    "inactive-text": String,
  },
  methods: {
    handlerSwitch() {
      this.value = !this.value;
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="less" scoped>
.co-switch {
  display: inline-flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  .co-switch_box {
    position: relative;
    display: inline-block;
    overflow: hidden;
    width: 40px;
    height: 20px;
    border-radius: 10px;
    transition: background-color 0.3s;
    .co-switch_button {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
      right: 50%;
      width: 50%;
      height: 100%;
      border: 2px solid;
      border-radius: 10px;
      background-color: #fff;
      transition: all 0.3s;
    }
    // 遮罩层
    .maskLayer {
      position: absolute;
      z-index: 999;
      width: 100%;
      height: 100%;
      background-color: #eaecf0;
      opacity: 0.5;
    }
  }
  .co-switch_right {
    .co-switch_button {
      content: "";
      right: 0;
    }
  }
  .co-switch_text-left {
    margin-right: 10px;
  }
  .co-switch_text-right {
    margin-left: 10px;
  }
  .co-switch_text-pick {
    color: #7763e9;
  }
}
.co-switch_disabled {
  cursor: not-allowed;
}
</style>