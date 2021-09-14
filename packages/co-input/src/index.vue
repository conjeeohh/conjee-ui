<template>
  <div class="co-input">
    <input v-if="type!='textarea'" :class="is_focus?'co-ip keepFocus':'co-ip'" :value="value" :type="type" :disabled="disabled" @focus="onFocus" @blur="onBlur" @input="handleInput" />
    <textarea v-else :class="is_focus?'co-textarea keepFocus':'co-textarea'" :value="value" :disabled="disabled" @focus="onFocus" @blur="onBlur" @input="handleInput"></textarea>
    <label class="co-lab">{{label}}</label>
    <span class="focus-border"></span>
  </div>
</template>

<script>
export default {
  name: "CoInput",
  props: {
    label: {
      type: String,
      default: "请输入",
      required: false,
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      is_focus: false,
      color: "#7763e9,#9d69ef,#ce73f2,#ec75f7",
    };
  },
  methods: {
    onFocus() {
      this.is_focus = true;
      console.log(this.value);
    },
    onBlur() {
      if (this.value == "") {
        this.is_focus = false;
      }
    },
    handleInput(event) {
      console.log(event);
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
:focus {
  outline: none;
}
.co-input {
  position: relative;
  width: 200px;
  display: inline-block;
}
.co-input .co-textarea {
  outline: 1px solid black;
  font-size: 16px;
  padding: 7px 0;
  width: 100%;
  background-color: transparent;
}
.co-input .co-ip {
  font-size: 16px;
  padding: 7px 0;
  width: 100%;
  background-color: transparent;
  border: 0;
  position: relative;
  border-bottom: 1px solid gray;
}
.co-input .co-ip:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
  border-bottom: 1px solid #ccc;
}
.co-input .co-lab {
  font-size: 14px;
  width: 100%;
  text-align: left;
  position: absolute;
  top: 9px;
  left: 0;
  z-index: -1;
  transition: 0.4s;
  color: #bbb;
}
.co-input .focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  z-index: 99;
  height: 2px;
  background-color: #7763e9;
  transition: 0.4s;
}
.co-ip:focus ~ .co-lab,
.keepFocus ~ .co-lab {
  top: -16px;
  font-size: 12px;
  color: #7763e9;
}
.co-ip:focus ~ .focus-border,
.keepFocus ~ .focus-border {
  width: 100%;
}
</style>