<template>
  <!-- 
      使用this.$messgae.type('message')
  -->
  <div :class="['co-message',`co-message_${type}`]" v-if="visible" :style="`top:${top}px`">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon ? icon : currentIcon}`"></use>
    </svg>
    <div class="co-message_text">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "CoMessage",
  data() {
    return {
      visible: false, // 控制DOM显示隐藏
      top: -56,
      type: "default",
      icon: "",
      message: "",
      duration: 2000,
    };
  },
  computed: {
    currentIcon() {
      if (this.type === "default") {
        return "more";
      } else if (this.type === "warning") {
        return "warning";
      } else if (this.type === "error") {
        return "error";
      } else if (this.type === "success") {
        return "select";
      }
      return "";
    },
  },

  mounted() {
    const _this = this;
    setTimeout(() => {
      _this.top = 56;
    }, 100);
  },
};
</script>

<style lang="less" scoped>
.co-message {
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  min-width: 380px;
  padding: 15px 15px 15px 20px;
  border: 1px solid;
  border-radius: 5px;
  transition: top 0.5s;
  .co-message_text {
    padding-left: 15px;
  }
}
.co-message_default {
  background-color: #e8e6f8;
  border-color: #b1a8e7;
  color: #5e45ec;
}
.co-message_success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}
.co-message_warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
}
.co-message_error {
  background-color: #fef0f0;
  border-color: #fef0f0;
  color: #f67878;
}
</style>