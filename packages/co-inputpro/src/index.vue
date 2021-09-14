<template>
  <!-- 
  需求：
    前后icon √
    clear √
    动态绑定value √
    前后插槽 √
    禁用 √
    获取焦点边框样式
 -->
  <div :class="['co-inputpro',disabled ? 'co-inputpro_disabled' : '']">
    <!-- 前插槽 -->
    <div class="co-inputpro_prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div class="co-inputpro_iconinput">
      <!-- 前icon -->
      <div class="co-inputpro_preIcon">
        <svg class="icon" aria-hidden="true" v-if="prefixIcon">
          <use :xlink:href="`#icon-${prefixIcon}`"></use>
        </svg>
      </div>
      <!-- input -->
      <input :class="[
          'co-inputpro_inner',
          prefixIcon ? 'co-inputpro_inner_preIcon': '',
          suffixIcon ? 'co-inputpro_inner_sufIcon': '',
          disabled ? 'co-inputpro_inner_disabled' : ''
          ]" :type="type" :value="value" :placeholder="placeholder" @input="handleInput" :disabled="disabled">
      <!-- 后icon -->
      <div class="co-inputpro_sufIcon">
        <!-- clear 优先显示-->
        <svg class="icon co-inputpro_clearable" aria-hidden="true" v-if="clearable && value != ''" @click="resetWords">
          <use xlink:href="#icon-error"></use>
        </svg>
        <!-- 其他icon -->
        <svg class="icon" aria-hidden="true" v-else-if="suffixIcon">
          <use :xlink:href="`#icon-${suffixIcon}`"></use>
        </svg>
      </div>
    </div>
    <!-- 后插槽 -->
    <div class="co-inputpro_sufpend" v-if="$slots.sufpend">
      <slot name="sufpend"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoInputpro",
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    prefixIcon: String,
    suffixIcon: String,
  },
  methods: {
    // 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    // 点击重置value
    resetWords() {
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="less" scoped>
.co-inputpro {
  display: inline-flex;
  height: 40px;
  width: 180px;
  line-height: 40px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #dcdfe6;
  &:focus-within {
    border: 1px solid #7763e9;
  }
  // 前置插槽
  .co-inputpro_prepend,
  .co-inputpro_sufpend {
    display: inline-block;
    padding: 0 20px;
    height: 100%;
    background-color: #f5f7fa;
    color: #9093b2;
    border-right: 1px solid #dcdfe6;
  }
  // 包含icon和input  便于icon在input框中定位
  .co-inputpro_iconinput {
    flex: 1;
    display: inline-block;
    position: relative;
    // 前置icon
    .co-inputpro_preIcon {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 30px;
      text-align: center;
      line-height: 40px;
    }
    // input
    .co-inputpro_inner {
      padding: 0 15px;
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
      font-size: 16px;
      color: #606266;
      &::placeholder {
        color: #807d8c;
      }
    }
    // disabled input样式
    .co-inputpro_inner_disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
    // 有前置icon时 input
    .co-inputpro_inner_preIcon {
      padding-left: 30px;
    }
    // 后置icon
    .co-inputpro_sufIcon {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 30px;
      text-align: center;
      line-height: 40px;
    }
    // 有后置icon时 input
    .co-inputpro_inner_sufIcon {
      padding-right: 30px;
    }
    // clearicon样式
    .co-inputpro_clearable {
      fill: #cacbcf;
      cursor: pointer;
    }
  }

  // 后置插槽
  .co-inputpro_sufpend {
    border: none;
    border-left: 1px solid #dcdfe6;
  }
}
.co-inputpro_disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}
</style>