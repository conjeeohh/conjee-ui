<template>
  <div class="co-button">
    <button :class="[type,size,{ghost:ghost}]" :disabled="disabled || loading" @click="$emit('click')">
      <co-icon v-if="loading" name="loading" class="loading-icon"></co-icon>
      <co-icon v-if="icon" :name="icon"></co-icon>
      <span :class="icon ? 'marginLeft5' : ''" v-if="$slots.default">
        <slot />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "CoButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "big",
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
// loading动画
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-icon {
  margin-right: 5px;
  animation: loading 1.8s linear infinite;
}
.co-button {
  display: inline-block;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    line-height: 1;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    font-size: 14px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
    outline: none;
  }
  // type
  .default {
    &:hover,
    &:focus {
      border-color: #c6e2ff;
      color: #7763e9;
      background-color: #ecf5ff;
    }
    &[disabled] {
      color: #c0c4cc !important;
      background: white !important;
      border-color: #ebeef5 !important;
      cursor: not-allowed !important;
    }
  }
  .primary {
    background-color: #7763e9;
    border-color: #7763e9;
    color: #fff;
    &.ghost {
      background-color: #fff;
      border: solid 1px #7763e9;
      color: #7763e9;
      &:hover,
      &:focus {
        background-color: #7763e9;
        color: #fff;
      }
    }
    &[disabled] {
      color: white !important;
      background: #a99de1 !important;
      border-color: #a99de1 !important;
      cursor: not-allowed !important;
    }
    &:hover,
    &:focus {
      border-color: #9e92e7;
      background-color: #9e92e7;
      color: #fff;
    }
  }
  .success {
    background-color: #67c23a;
    color: #fff;
    &.ghost {
      background-color: #fff;
      border: solid 1px #67c23a;
      color: #67c23a;
      &:hover,
      &:focus {
        background-color: #67c23a;
        color: #fff;
      }
    }
    &:hover,
    &:focus {
      background-color: #85ce61;
    }
    &[disabled] {
      color: white !important;
      background: #b3e19d !important;
      border-color: #b3e19d !important;
      cursor: not-allowed !important;
    }
  }
  .danger {
    background-color: #f56c6c;
    color: #fff;
    &.ghost {
      background-color: #fff;
      border: solid 1px #f56c6c;
      color: #f56c6c;
      &:hover,
      &:focus {
        background-color: #f56c6c;
        color: #fff;
      }
    }
    &:hover,
    &:focus {
      background-color: #f78989;
    }
    &[disabled] {
      color: white !important;
      background: #fab6b6 !important;
      border-color: #fab6b6 !important;
      cursor: not-allowed !important;
    }
  }
  //   size
  .big {
    padding: 12px 20px;
    font-size: 14px;
  }
  .medium {
    padding: 10px 20px;
    font-size: 14px;
  }
  .small {
    padding: 9px 15px;
    font-size: 12px;
  }
  //   隔开icon和font
  .marginLeft5 {
    margin-left: 5px;
  }
}
</style>