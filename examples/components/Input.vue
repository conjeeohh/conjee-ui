<template>
  <div>
    <h2 class="_title">Input 输入框</h2>
    <p class="_intro">通过鼠标或键盘输入字符</p>

    <block-code title="基础用法" :code="code">
      <template #simple>
        <co-input v-model="inputVal" label="请输入"></co-input>
      </template>
    </block-code>

    <block-table title="Input Attributes" :dataList="attributesData"></block-table>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      inputVal: "",
      code: {
        html: `
    <co-input v-model="inputVal" label="请输入"></co-input>`,
        javascript: `
    export default {
      data() {
        return {
          inputVal: ""
        }
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "label",
          explain: "输入框占位文本",
          type: "string",
          option: "-",
          default: "请输入",
        },
        {
          attribute: "disabled",
          explain: "是否禁用",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "clearable",
          explain: "是否可清空",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "prefix-icon",
          explain: "输入框头部图标",
          type: "String",
          option: "-",
          default: "-",
        },
        {
          attribute: "suffix-icon",
          explain: "输入框尾部图标",
          type: "string",
          option: "-",
          default: "-",
        },
      ],
    };
  },
};
</script>

<style>
</style>