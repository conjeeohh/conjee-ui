<template>
  <div>
    <h2 class="_title">Message 消息提示</h2>
    <p class="_intro">常用于主动操作后的反馈提示。</p>

    <block-code title="基础用法" :code="code1">
      <template #simple>
        <co-button class="demo-button" @click="defaultBtn">默认</co-button>
        <co-button class="demo-button" @click="successBtn">成功</co-button>
        <co-button class="demo-button" @click="warningBtn">警告</co-button>
        <co-button class="demo-button" @click="errorBtn">错误</co-button>
      </template>
    </block-code>

    <block-table title="Message Attributes" :dataList="attributesData"></block-table>

  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      code1: {
        html: `
    <!-- 用来显示「成功、警告、消息、错误」类的操作反馈 -->
    <co-button @click="defaultBtn">默认</co-button>
    <co-button @click="successBtn">成功</co-button>
    <co-button @click="warningBtn">警告</co-button>
    <co-button @click="errorBtn">错误</co-button>`,
        javascript: `
    export default {
        methods: {
            defaultBtn() {
                this.$message({
                    message: "默认消息",
                    type: "default",
                });
            },
            successBtn() {
                this.$message({
                    message: "成功消息",
                    type: "success",
                });
            },
            warningBtn() {
                this.$message({
                    message: "警告消息",
                    type: "warning",
                });
            },
            errorBtn() {
                this.$message({
                    message: "错误消息",
                    type: "error",
                });
            },
        }
    }
        `,
      },
      attributesData: [
        {
          attribute: "message",
          explain: "消息文字",
          type: "string",
          option: "-",
          default: "",
        },
        {
          attribute: "type",
          explain: "主题",
          type: "string",
          option: "default/success/warning/error",
          default: "default",
        },
        {
          attribute: "duration",
          explain: "显示时间，毫秒。设为0则不会自动关闭",
          type: "number",
          option: "-",
          default: "2000",
        },
        {
          attribute: "icon",
          explain: "自定义头部icon",
          type: "string",
          option: "-",
          default: "-",
        },
      ],
    };
  },
  methods: {
    defaultBtn() {
      this.$message({
        message: "默认消息",
        type: "default",
      });
    },
    successBtn() {
      this.$message({
        message: "成功消息",
        type: "success",
      });
    },
    warningBtn() {
      this.$message({
        message: "警告消息",
        type: "warning",
      });
    },
    errorBtn() {
      this.$message({
        message: "错误消息",
        type: "error",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.demo-button {
  margin: 0 5px;
}
</style>