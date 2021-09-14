<template>
  <div>
    <h2 class="_title">Button 按钮</h2>
    <p class="_intro">常见的操作按钮</p>

    <block-code title="基础用法" height="auto" :code="code1">
      <template #simple>
        <co-button class="demo-button">默认按钮</co-button>
        <co-button class="demo-button" type="primary">主要按钮</co-button>
        <co-button class="demo-button" type="success">成功按钮</co-button>
        <co-button class="demo-button" type="danger">危险按钮</co-button>
        <br><br>
        <co-button class="demo-button">默认按钮</co-button>
        <co-button class="demo-button" ghost type="primary">主要按钮</co-button>
        <co-button class="demo-button" ghost type="success">成功按钮</co-button>
        <co-button class="demo-button" ghost type="danger">危险按钮</co-button>
      </template>
    </block-code>

    <block-code title="图标按钮" height="auto" :code="code2">
      <template #simple>
        <co-button class="demo-button" icon="good" type="primary"></co-button>
        <co-button class="demo-button" icon="search" type="primary">搜索</co-button>
        <co-button class="demo-button" type="primary">
          <co-icon style="margin-right:5px" name="edit"></co-icon>编辑
        </co-button>
      </template>
    </block-code>

    <block-code title="禁用状态" height="auto" :code="code3">
      <template #simple>
        <co-button class="demo-button" disabled>默认按钮</co-button>
        <co-button class="demo-button" disabled type="primary">主要按钮</co-button>
        <co-button class="demo-button" disabled type="success">成功按钮</co-button>
        <co-button class="demo-button" disabled type="danger">危险按钮</co-button>
      </template>
    </block-code>

    <block-code title="不同尺寸" height="auto" :code="code4">
      <template #simple>
        <co-button class="demo-button" size="big" type="primary">默认按钮</co-button>
        <co-button class="demo-button" size="medium" type="primary">中等按钮</co-button>
        <co-button class="demo-button" size="small" type="primary">小型按钮</co-button>
      </template>
    </block-code>
    <block-code title="加载中" height="auto" :code="code5">
      <template #simple>
        <co-button class="demo-button" loading type="primary">加载中</co-button>
      </template>
    </block-code>

    <block-table title="Button Attributes" :dataList="attributesData"></block-table>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      code1: {
        html: `
    <!-- 使用type、size、ghost属性来定义 Button 的样式 --> 
    <co-button class="demo-button">默认按钮</co-button>
    <co-button class="demo-button" type="primary">主要按钮</co-button>
    <co-button class="demo-button" type="success">成功按钮</co-button>
    <co-button class="demo-button" type="danger">危险按钮</co-button>
    <br><br>
    <co-button class="demo-button">默认按钮</co-button>
    <co-button class="demo-button" ghost type="primary">主要按钮</co-button>
    <co-button class="demo-button" ghost type="success">成功按钮</co-button>
    <co-button class="demo-button" ghost type="danger">危险按钮</co-button>
        `,
      },
      code2: {
        html: `
    <!-- 设置icon属性即可，icon 的列表可以参考 icon 组件，也可以使用i标签，即可使用自定义图标。 -->
    <co-button class="demo-button" icon="good" type="primary"></co-button>
    <co-button class="demo-button" icon="search" type="primary">搜索</co-button>
    <co-button class="demo-button" type="primary">
      <co-icon style="margin-right:5px" name="edit"></co-icon>编辑
    </co-button>
        `,
      },
      code3: {
        html: `
    <!-- 你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。 -->
    <co-button class="demo-button" disabled>默认按钮</co-button>
    <co-button class="demo-button" disabled type="primary">主要按钮</co-button>
    <co-button class="demo-button" disabled type="success">成功按钮</co-button>
    <co-button class="demo-button" disabled type="danger">危险按钮</co-button>
        `,
      },
      code4: {
        html: `
    <!-- 通过设置size属性来配置它们 ：big、middle、small -->
    <co-button class="demo-button" size="big" type="primary">默认按钮</co-button>
    <co-button class="demo-button" size="medium" type="primary">中等按钮</co-button>
    <co-button class="demo-button" size="small" type="primary">小型按钮</co-button>
        `,
      },
      code5: {
        html: `
    <!-- 要设置为 loading 状态，只要设置loading属性为true即可。 -->
    <co-button class="demo-button" loading type="primary">加载中</co-button>
        `,
      },
      attributesData: [
        {
          attribute: "type",
          explain: "类型",
          type: "string",
          option: "default/primary/success/danger",
          default: "default",
        },
        {
          attribute: "size",
          explain: "尺寸",
          type: "string",
          option: "big/medium/small",
          default: "big",
        },
        {
          attribute: "ghost",
          explain: "是否启用幽灵按钮",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "loading",
          explain: "是否加载中状态",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "disabled",
          explain: "是否禁用状态",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "type",
          explain: "图标类名",
          type: "string",
          option: "-",
          default: "-",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.demo-button {
  margin: 0 10px;
}
</style>