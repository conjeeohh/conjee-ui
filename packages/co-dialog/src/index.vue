<template>
  <transition name="dialog" @after-enter="afterEnter" @after-leave="afterLeave">
    <div class="co-dialog_mask" v-if="visible" @click.self="done()">
      <div class="co-dialog" :style="{
      'width': width,
      'top': top}">
        <div class="co-dialog_header">
          {{title}}
          <svg class="icon close-icon" aria-hidden="true" @click="beforeClose ? beforeClose(done) : done()">
            <use xlink:href="#icon-close-bold"></use>
          </svg>
        </div>
        <div class="co-dialog_main">
          <slot></slot>
        </div>
        <div class="co-dialog_footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CoDialog",
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "title",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    "before-close": Function,
  },
  methods: {
    done() {
      this.$emit("update:visible", false);
    },
    afterEnter() {
      this.$emit("opened");
    },
    afterLeave() {
      this.$emit("closed");
    },
  },
};
</script>

<style lang="less" scoped>
.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.3s;
}
.dialog-enter {
  transform: translateY(-50px);
  opacity: 0;
}
.dialog-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.co-dialog_mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}
.co-dialog {
  margin: 15vh auto 0px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  .co-dialog_header {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 10px;
    font-size: 18px;
    color: #303133;
    .close-icon {
      cursor: pointer;
    }
  }
  .co-dialog_main {
    padding: 30px 20px;
  }
  .co-dialog_footer {
    padding: 10px 20px 20px;
    text-align: right;
  }
}
</style>