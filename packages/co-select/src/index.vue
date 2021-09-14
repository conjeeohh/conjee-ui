<template>
  <!--
    需求：
      后置icon
      点击出现下拉列表
      选中选项 获取该选项绑定值
      禁用单个选项
      禁用下拉框
      可清空单选icon
      多选
  -->
  <div :class="['co-select',disabled ? 'co-select-disabled' : '']">
    <!-- input -->
    <div :class="['co-select_input-icon',disabled ? 'co-select-disabled' : '']" @click="disabled ? null : selectStore.commit('inputClick')">
      <input type="text" :class="['co-select_input',disabled ? 'co-select-disabled' : '']" ref="input4" :disabled="disabled" :value="inputValue" readonly="readonly" :placeholder="placeholder">
      <!-- suffixIcon -->
      <div class="co-select_icon">
        <svg :class="['icon',isShowOptions ? 'suffixIcon': '', 'iconFill']" aria-hidden="true">
          <use xlink:href="#icon-arrow-down"></use>
        </svg>
      </div>
    </div>

    <!-- 下拉框 -->
    <div class="co-select_inner" v-if="isShowOptions">
      <!-- 小三角 -->
      <div class="co-select_inner-littleTri"></div>
      <ul class="co-select_inner-ul">
        <!-- 怎么接收插槽？只能是option组件的形式 -->
        <slot>
          <div class="co-select_default-slot">无数据</div>
        </slot>
      </ul>
    </div>
  </div>
</template>

<script>
import SelectStore from "./store";

export default {
  name: "CoSelect",
  data() {
    const selectStore = new SelectStore(this);
    return {
      selectStore,
    };
  },
  props: {
    value: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
  },
  computed: {
    // 当前选中选项
    currentOption() {
      return this.selectStore.states.currentOption;
    },
    inputValue() {
      return this.currentOption.label || this.currentOption.value;
    },
    isShowOptions() {
      return this.selectStore.states.isShowOptions;
    },
  },
  watch: {
    currentOption(n) {
      if (n) {
        this.$emit("input", this.currentOption.value);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.co-select {
  position: relative;
  display: inline-block;
  height: 40px;
  vertical-align: middle;
  &:focus-within .co-select_input-icon {
    border: solid 1px #7763e9;
  }
  .co-select_input-icon {
    height: 100%;
    border-radius: 5px;
    border: 1px solid #dcdfe6;
    overflow: hidden;
    cursor: pointer;
    .co-select_input {
      height: 100%;
      width: 100%;
      padding: 0 15px;
      outline: none;
      border: none;
      cursor: pointer;
      &::placeholder {
        color: #c0c4cc;
      }
    }
    .co-select_icon {
      position: absolute;
      right: 0;
      display: inline-block;
      padding-right: 15px;
      height: 100%;
      line-height: 40px;
      .suffixIcon {
        transform: rotate(-180deg);
      }
      .iconFill {
        fill: #c0c4cf;
        transition: all 0.3s linear;
      }
    }
  }
  // 下拉选项框
  .co-select_inner {
    position: absolute;
    z-index: 999;
    bottom: -15px;
    left: 0;
    transform: translateY(100%);
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    // 小三角
    .co-select_inner-littleTri {
      position: absolute;
      top: -7px;
      left: 20%;
      width: 0;
      height: 0;
      line-height: 0;
      font-size: 0;
      border: 6px solid transparent;
      border-top-width: 0px;
      border-bottom-color: #ebeef5;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 1px;
        left: -6px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-top-width: 0px;
        border-bottom-color: #fff;
      }
    }
    .co-select_inner-ul {
      padding: 6px 0;
    }
    .co-select_inner-li {
      padding: 5px 20px;
      color: #606266;
      font-size: 14px;
      &:hover {
        cursor: pointer;
        background-color: #f5f7fa;
      }
    }
  }
}
.co-select-disabled {
  background-color: #f5f7fa;
  cursor: not-allowed !important;
}
.co-select_default-slot {
  text-align: center;
  color: #999999;
  font-size: 14px;
}
</style>