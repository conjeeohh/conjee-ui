<template>
  <div>
    <h2 class="_title">Divider 分割线</h2>
    <p class="_intro">区隔内容的分割线。</p>

    <block-code title="基础用法" :code="code1">
      <template #simple>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <co-divider orientation="center">Text</co-divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <co-divider orientation="left">Text</co-divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <co-divider orientation="right">Text</co-divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </template>
    </block-code>

    <block-table title="Divider Attributes" :dataList="attributesData"></block-table>
  </div>
</template>

<script>
export default {
  name: "Divider",
  data() {
    return {
      code1: {
        html: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <co-divider orientation="center">Text</co-divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <co-divider orientation="left">Text</co-divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <co-divider orientation="right">Text</co-divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        `,
      },
      attributesData: [
        {
          attribute: "orientation",
          explain: "分割线标题的位置",
          type: "string",
          option: "left/right/center",
          default: "center",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>