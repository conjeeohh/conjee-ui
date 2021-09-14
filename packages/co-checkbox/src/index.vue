<template>
  <div :class="['co-checkbox',disabled ? 'co-checkbox-disabled':'']" @click="disabled ? null : pickOn()" :style="{'margin-left': isFirstCheckbox ? 0 : '30px'}">
    <span :class="['co-checkbox-box',isPickOn ? 'pickOn-box' : '',disabled ? 'co-checkbox-box-disabled':'']">
      <svg v-if="isPickOn" class="icon pickOn-icon" aria-hidden="true">
        <use xlink:href="#icon-select"></use>
      </svg>
    </span>
    <span :class="['co-checkbox-text',isPickOn ? 'pickOn-text' : '',disabled ? 'co-checkbox-text-disabled':'']">
      <slot>{{label}}</slot>
    </span>
  </div>
</template>

<script>
let checkboxIdSeed = 1;

export default {
  name: "CoCheckbox",
  data() {
    return {
      isPickOn: this.value,
      checkboxId: 0,
      checkboxGroupStore: null,
      parent: null,
      isFirstCheckbox: false,
    };
  },
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    // 点击选中复选框
    pickOn() {
      // 多选框组 判断是否达到最大/最小可选项
      if (this.parent) {
        if (
          this.parent.max !== -1 &&
          this.checkboxGroupStore.states.checkboxList.length >=
            this.parent.max &&
          !this.isPickOn
        ) {
          return this.parent.overstep("max", this.parent.max);
        } else if (
          this.parent.min !== -1 &&
          this.checkboxGroupStore.states.checkboxList.length <=
            this.parent.min &&
          this.isPickOn
        ) {
          console.log("111");
          return this.parent.overstep("min", this.parent.min);
        }
      }
      // 可选项数量没问题，执行以下操作
      this.isPickOn = !this.isPickOn;
      // 如果父级是checkboxGroup,处理数组添加/删除
      if (this.checkboxGroupStore) {
        if (this.isPickOn) {
          this.checkboxGroupStore.commit("addCheckbox", this.label);
        } else {
          this.checkboxGroupStore.commit("removeCheckbox", this.label);
        }
      }
      // 如果组件绑定了value，同步选中状态到value
      if (typeof this.$props.value !== "undefined") {
        this.$emit("input", this.isPickOn);
      }
    },
  },
  created() {
    this.checkboxId = "el-checkbox_" + checkboxIdSeed++;
    if (this.$parent.checkboxGroupId) {
      this.parent = this.$parent;
      this.checkboxGroupStore = this.parent.checkboxGroupStore;
      if (this.value) {
        this.checkboxGroupStore.commit("addCheckbox", this.label);
      }
    }
  },
  mounted() {
    if (this.parent) {
      this.isFirstCheckbox = this.$parent.$children.indexOf(this) === 0;
    }
  },
};
</script>

<style lang="less" scoped>
@color: #7763e9;

.co-checkbox {
  display: inline-block;
  font-size: 1em;
  cursor: pointer;
  color: #606266;
  .co-checkbox-box {
    display: inline-block;
    margin-top: 1px;
    width: 1em;
    height: 1em;
    border: 1px solid #dcdfe6;
    border-radius: 20%;
    text-align: center;
    vertical-align: text-top;
    &:hover {
      border-color: @color;
    }
  }
  .co-checkbox-text {
    padding-left: 10px;
    user-select: none;
  }
  // 选中时box的样式
  .pickOn-box {
    position: relative;
    background-color: @color;
    .pickOn-icon {
      position: absolute;
      top: 0;
      left: 0;
      fill: #fff;
      width: 0.9em;
      height: 0.9em;
    }
  }
  //  选中时text的样式
  .pickOn-text {
    color: @color;
  }
  .co-checkbox-box-disabled {
    background-color: #edf2fc;
  }
}
.co-checkbox-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  .co-checkbox-box {
    &:hover {
      border-color: #dcdfe6;
    }
    .pickOn-icon {
      fill: #c5c9d1;
    }
  }
  .pickOn-text {
    color: inherit;
  }
}
</style>