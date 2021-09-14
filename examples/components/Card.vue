<template>
  <div>
    <h2 class="_title">Card 卡片</h2>
    <p class="_intro">将信息聚合在卡片容器中展示。</p>

    <block-code title="基础用法" :code="code1">
      <template #simple>
        <co-card style="width:300px">
          <template #header>
            <div class="demo-header">待办事项</div>
          </template>
          <ul>
            <li v-for="index in [1,2,3]" :key="index" class="demo-li">事项内容 {{index}}</li>
          </ul>
        </co-card>
      </template>
    </block-code>

    <block-code title="简单卡片" :code="code2">
      <template #simple>
        <co-card style="width:300px">
          <ul>
            <li v-for="index in [1,2,3]" :key="index" class="demo-li">事项内容 {{index}}</li>
          </ul>
        </co-card>
      </template>
    </block-code>

    <block-code title="卡片阴影" :code="code3">
      <template #simple>
        <co-card class="card-demo">总是显示(默认)</co-card>
        <co-card class="card-demo" shadow="hover">鼠标悬停显示</co-card>
        <co-card class="card-demo" shadow="never">从不显示</co-card>
      </template>
    </block-code>

    <block-code title="带图片" :code="code4">
      <template #simple>
        <co-card style="width:auto;margin-right:20px" mainStyle="padding:0">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
          <div style="padding:20px;">
            <p>好吃的汉堡</p>
            <p>"2020-10-14T09:56:21.408Z</p>
          </div>
        </co-card>
        <co-card style="width:auto;" mainStyle="padding:0">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
          <div style="padding:20px;">
            <p>好吃的汉堡</p>
            <p>"2020-10-14T09:56:21.408Z</p>
          </div>
        </co-card>
      </template>
    </block-code>

    <block-table title="Card Attributes" :dataList="attributesData"></block-table>

  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      code1: {
        html: `
    <!-- Card 组件包括header和main部分，header部分需要有显式具名 slot 分发，同时也是可选的。 -->
    <co-card>
      <template #header>
        <div>待办事项</div>
      </template>
      <ul>
        <li v-for="index in [1,2,3]" :key="index">事项内容 {{index}}</li>
      </ul>
    </co-card>
        `,
      },
      code2: {
        html: `
    <co-card>
      <ul>
        <li v-for="index in [1,2,3]" :key="index">事项内容 {{index}}</li>
      </ul>
    </co-card>
        `,
      },
      code3: {
        html: `
    <!-- 通过shadow属性设置卡片阴影出现的时机：always、hover或never。 -->
    <co-card>总是显示(默认)</co-card>
    <co-card shadow="hover">鼠标悬停显示</co-card>
    <co-card shadow="never">从不显示</co-card>
        `,
      },
      code4: {
        html: `
    <!-- 配置mainStyle属性来自定义main部分的style -->
    <co-card style="width:auto;margin-right:20px" mainStyle="padding:0">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
      <div style="padding:20px;">
        <p>好吃的汉堡</p>
        <p>"2020-10-14T09:56:21.408Z</p>
      </div>
    </co-card>
    <co-card style="width:auto;" mainStyle="padding:0">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
      <div style="padding:20px;">
        <p>好吃的汉堡</p>
        <p>"2020-10-14T09:56:21.408Z</p>
      </div>
    </co-card>
        `,
      },
      attributesData: [
        {
          attribute: "header",
          explain: "设置header,也可以通过命名插槽slot#header传入DOM",
          type: "string",
          option: "-",
          default: "-",
        },
        {
          attribute: "mainStyle",
          explain: "设置main的样式。格式和行类样式写法一致",
          type: "string",
          option: "",
          default: "",
        },
        {
          attribute: "shadow",
          explain: "设置阴影显示时机",
          type: "string",
          option: "always / hover / never",
          default: "always",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.demo-header {
  font-size: 16px;
}
.demo-li {
  padding: 8px 0;
  color: #826d82;
}
.card-demo {
  width: 140px;
  margin: 10px;
}
</style>