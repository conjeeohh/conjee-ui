<template>
  <div class="co-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import CheckboxGroupStore from "./store";

let checkboxGroupIdSeed = 1;

export default {
  name: "CoCheckboxGroup",
  data() {
    const checkboxGroupStore = new CheckboxGroupStore(this);
    return {
      checkboxGroupStore,
      checkboxGroupId: 0,
    };
  },
  computed: {
    checkboxList() {
      return this.checkboxGroupStore.states.checkboxList;
    },
  },
  props: {
    value: {
      type: Array,
      default: function () {
        return [];
      },
    },
    min: {
      type: Number,
      default: -1,
    },
    max: {
      type: Number,
      default: -1,
    },
    overstep: Function,
  },
  watch: {
    checkboxList(n) {
      // 如果绑定了value,同步更新
      if (this.$props.value) {
        this.$emit("input", n);
      }
    },
  },
  created() {
    this.checkboxGroupId = "co-checkbox-group_" + checkboxGroupIdSeed++;
  },
  beforeDestroy() {
    this.checkboxGroupStore.commit("clear");
  },
};
</script>

<style lang="less" scoped>
.co-checkbox-group {
  display: inline-flex;
  align-items: center;
}
</style>