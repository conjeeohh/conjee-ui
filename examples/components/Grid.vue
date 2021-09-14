<template>
  <div>
    <h2 class="_title">Layout 布局</h2>
    <p class="_intro">通过基础的 24 分栏，迅速简便地创建布局。</p>

    <block-code title="基础布局" :code="code1">
      <template #simple>
        <co-row class="demo1">
          <co-col :span="24" class="co-col_demo1">col-24</co-col>
        </co-row>
        <co-row class="demo1">
          <co-col :span="12" class="co-col_demo1">col-12</co-col>
          <co-col :span="12" class="co-col_demo2">col-12</co-col>
        </co-row>
        <co-row class="demo1">
          <co-col :span="8" class="co-col_demo1">col-8</co-col>
          <co-col :span="8" class="co-col_demo2">col-8</co-col>
          <co-col :span="8" class="co-col_demo1">col-8</co-col>
        </co-row>
        <co-row class="demo1">
          <co-col :span="6" class="co-col_demo1">col-6</co-col>
          <co-col :span="6" class="co-col_demo2">col-6</co-col>
          <co-col :span="6" class="co-col_demo1">col-6</co-col>
          <co-col :span="6" class="co-col_demo2">col-6</co-col>
        </co-row>
      </template>
    </block-code>

    <block-code title="分栏间隔" :code="code2">
      <template #simple>
        <co-divider orientation="left">水平间隔</co-divider>
        <co-row :gutter="20">
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
        </co-row>
        <co-divider orientation="left">垂直间隔</co-divider>
        <co-row :gutter="[20,40]">
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
        </co-row>
        <co-divider orientation="left">响应式间隔</co-divider>
        <co-row :gutter="[{xs:2, sm:4, md:6, lg:10, xl:50},{xs:2, sm:4, md:6, lg:10, xl:50}]">
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
          <co-col :span="6">
            <div class="gutterStyle">col-6</div>
          </co-col>
        </co-row>
      </template>
    </block-code>

    <block-code title="分栏偏移" :code="code3">
      <template #simple>
        <co-row>
          <co-col class="gutterStyle" :span="6">col-6</co-col>
          <co-col class="gutterStyle" :offset="6" :span="6">col-6</co-col>
        </co-row>
        <co-row>
          <co-col class="gutterStyle" :span="6" :offset="6">col-6</co-col>
          <co-col class="gutterStyle" :span="6" :offset="6">col-6</co-col>
        </co-row>
        <co-row>
          <co-col class="gutterStyle" :span="12" :offset="6">col-12</co-col>
        </co-row>
      </template>
    </block-code>

    <block-code title="水平对齐" :code="code3">
      <template #simple>
        <co-divider orientation="left">justify="start"</co-divider>
        <co-row class="demo1" style="background:rgba(128, 128, 128, 0.08)" justify="start">
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo2" :span="4">col-4</co-col>
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo2" :span="4">col-4</co-col>
        </co-row>
        <co-divider orientation="left">justify="center"</co-divider>
        <co-row class="demo1" style="background:rgba(128, 128, 128, 0.08)" justify="center">
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo2" :span="4">col-4</co-col>
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo2" :span="4">col-4</co-col>
        </co-row>
        <co-divider orientation="left">justify="end"</co-divider>
        <co-row class="demo1" style="background:rgba(128, 128, 128, 0.08)" justify="end">
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo2" :span="4">col-4</co-col>
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo2" :span="4">col-4</co-col>
        </co-row>
        <co-divider orientation="left">justify="space-between"</co-divider>
        <co-row class="demo1" style="background:rgba(128, 128, 128, 0.08)" justify="space-between">
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo2" :span="4">col-4</co-col>
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo2" :span="4">col-4</co-col>
        </co-row>
        <co-divider orientation="left">justify="space-around"</co-divider>
        <co-row class="demo1" style="background:rgba(128, 128, 128, 0.08)" justify="space-around">
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
          <co-col class="co-col_demo1" :span="4">col-4</co-col>
        </co-row>
      </template>
    </block-code>

    <block-code title="垂直对齐" :code="code4">
      <template #simple>
        <co-divider orientation="left">align="top"</co-divider>
        <co-row style="background:rgba(128, 128, 128, 0.08)" justify="center" align="top">
          <co-col :span="4">
            <div class="height_100 co-col_demo1">col-4</div>
          </co-col>
          <co-col :span="4">
            <div class="height_50 co-col_demo2">col-4</div>
          </co-col>
          <co-col :span="4">
            <div class="height_120 co-col_demo1">col-4</div>
          </co-col>
          <co-col :span="4">
            <div class="height_80 co-col_demo2">col-4</div>
          </co-col>
        </co-row>
        <co-divider orientation="left">align="middle"</co-divider>
        <co-row style="background:rgba(128, 128, 128, 0.08)" justify="center" align="middle">
          <co-col :span="4">
            <div class="height_100 co-col_demo1">col-4</div>
          </co-col>
          <co-col :span="4">
            <div class="height_50 co-col_demo2">col-4</div>
          </co-col>
          <co-col :span="4">
            <div class="height_120 co-col_demo1">col-4</div>
          </co-col>
          <co-col :span="4">
            <div class="height_80 co-col_demo2">col-4</div>
          </co-col>
        </co-row>
        <co-divider orientation="left">align="bottom"</co-divider>
        <co-row style="background:rgba(128, 128, 128, 0.08)" justify="center" align="bottom">
          <co-col :span="4">
            <div class="height_100 co-col_demo1">col-4</div>
          </co-col>
          <co-col :span="4">
            <div class="height_50 co-col_demo2">col-4</div>
          </co-col>
          <co-col :span="4">
            <div class="height_120 co-col_demo1">col-4</div>
          </co-col>
          <co-col :span="4">
            <div class="height_80 co-col_demo2">col-4</div>
          </co-col>
        </co-row>
      </template>
    </block-code>

    <block-code title="排序" :code="code5">
      <template #simple>
        <co-row>
          <co-col class="gutterStyle" :span="6" :order="4">1</co-col>
          <co-col class="gutterStyle co-col_demo2" :span="6" :order="3">2</co-col>
          <co-col class="gutterStyle" :span="6" :order="2">3</co-col>
          <co-col class="gutterStyle co-col_demo2" :span="6" :order="1">4</co-col>
        </co-row>
      </template>
    </block-code>

    <block-code title="响应式布局" :code="code6">
      <template #simple>
        <co-divider orientation="left">纯数字</co-divider>
        <co-row>
          <co-col class="gutterStyle" :xs="2" :sm="16" :md="6" :lg="9" :xl="4" :span="8">1</co-col>
          <co-col class="gutterStyle co-col_demo2" :xs="20" :sm="4" :md="12" :lg="5" :xl="10" :span="8">2</co-col>
          <co-col class="gutterStyle" :xs="2" :sm="4" :md="6" :lg="10" :xl="10" :span="8">3</co-col>
        </co-row>
        <co-divider orientation="left">内嵌属性</co-divider>
        <co-row>
          <co-col class="gutterStyle" :md="{ 'span': 5, 'offset': 1 }" :lg="{ 'span': 9, 'offset': 2 }" :span="8">1</co-col>
          <co-col class="gutterStyle co-col_demo2" :md="{ 'span': 10, 'offset': 1 }" :lg="{ 'span': 3, 'offset': 2 }" :span="8">2</co-col>
          <co-col class="gutterStyle" :md="{ 'span': 6, 'offset': 1 }" :lg="{ 'span': 6, 'offset': 2 }" :span="8">3</co-col>
        </co-row>
      </template>
    </block-code>

    <block-table title="Row Attributes" :dataList="attributesData"></block-table>
    <block-table title="Col Attributes" :dataList="attributesData1"></block-table>

  </div>
</template>

<script>
export default {
  name: "Grid",
  data() {
    return {
      code1: {
        html: `
    <!-- 通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。 -->
    <co-row>
        <co-col :span="24">col-24</co-col>
    </co-row>
    <co-row>
        <co-col :span="12">col-12</co-col>
        <co-col :span="12">col-12</co-col>
    </co-row>
    <co-row>
        <co-col :span="8">col-8</co-col>
        <co-col :span="8">col-8</co-col>
        <co-col :span="8">col-8</co-col>
    </co-row>
    <co-row>
        <co-col :span="6">col-6</co-col>
        <co-col :span="6">col-6</co-col>
        <co-col :span="6">col-6</co-col>
        <co-col :span="6">col-6</co-col>
    </co-row>
          `,
      },
      code2: {
        html: `
    <!-- Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。 -->
    <!-- <co-divider orientation="left">水平间隔</co-divider> -->
        <co-row :gutter="20">
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
        </co-row>
        <!-- <co-divider orientation="left">垂直间隔</co-divider> -->
        <co-row :gutter="[20,40]">
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
        </co-row>
        <!-- <co-divider orientation="left">响应式间隔</co-divider> -->
        <co-row :gutter="[{xs:2, sm:4, md:6, lg:10, xl:50},{xs:2, sm:4, md:6, lg:10, xl:50}]">
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
            <co-col :span="6"><div class="gutterStyle">col-6</div></co-col>
        </co-row>
          `,
      },
      code3: {
        html: `
    <!-- Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。 -->
    <co-row>
        <co-col :span="6">col-6</co-col>
        <co-col :offset="6" :span="6">col-6</co-col>
    </co-row>
    <co-row>
        <co-col :span="6" :offset="6">col-6</co-col>
        <co-col :span="6" :offset="6">col-6</co-col>
    </co-row>
    <co-row>
        <co-col :span="12" :offset="6">col-12</co-col>
    </co-row>
          `,
      },
      code4: {
        html: `
    <!-- 可通过 align 属性来指定 top, middle, bottom 其中的值来定义子元素垂直对齐。 -->
    <co-divider orientation="left">align="top"</co-divider>
      <co-row style="background:rgba(128, 128, 128, 0.08)" justify="center" align="top">
        <co-col :span="4"><div class="height_100">col-4</div></co-col>
        <co-col :span="4"><div class="height_50">col-4</div></co-col>
        <co-col :span="4"><div class="height_120">col-4</div></co-col>
        <co-col :span="4"><div class="height_80">col-4</div></co-col>
      </co-row>
      <co-divider orientation="left">align="middle"</co-divider>
      <co-row style="background:rgba(128, 128, 128, 0.08)" justify="center" align="middle">
        <co-col :span="4"><div class="height_100">col-4</div></co-col>
        <co-col :span="4"><div class="height_50">col-4</div></co-col>
        <co-col :span="4"><div class="height_120">col-4</div></co-col>
        <co-col :span="4"><div class="height_80">col-4</div></co-col>
      </co-row>
      <co-divider orientation="left">align="bottom"</co-divider>
      <co-row style="background:rgba(128, 128, 128, 0.08)" justify="center" align="bottom">
        <co-col :span="4"><div class="height_100">col-4</div></co-col>
        <co-col :span="4"><div class="height_50">col-4</div></co-col>
        <co-col :span="4"><div class="height_120">col-4</div></co-col>
        <co-col :span="4"><div class="height_80">col-4</div></co-col>
      </co-row>
          `,
      },
      code5: {
        html: `
    <!-- 通过子元素的 order 来改变元素的排序。 -->
    <co-row>
      <co-col :span="6" :order="4">1</co-col>
      <co-col :span="6" :order="3">2</co-col>
      <co-col :span="6" :order="2">3</co-col>
      <co-col :span="6" :order="1">4</co-col>
    </co-row>
          `,
      },
      code6: {
        html: `
    <!-- span offset order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。其中 :xs="2" 相当于 :xs="{span: 2}"。 -->
    <co-divider orientation="left">纯数字</co-divider>
    <co-row>
      <co-col :xs="2" :sm="16" :md="6" :lg="9" :xl="4" :span="8">1</co-col>
      <co-col :xs="20" :sm="4" :md="12" :lg="5" :xl="10" :span="8">2</co-col>
      <co-col :xs="2" :sm="4" :md="6" :lg="10" :xl="10" :span="8">3</co-col>
    </co-row>
    <co-divider orientation="left">内嵌属性</co-divider>
    <co-row>
      <co-col :md="{ 'span': 5, 'offset': 1 }" :lg="{ 'span': 9, 'offset': 2 }" :span="8">1</co-col>
      <co-col :md="{ 'span': 10, 'offset': 1 }" :lg="{ 'span': 3, 'offset': 2 }" :span="8">2</co-col>
      <co-col :md="{ 'span': 6, 'offset': 1 }" :lg="{ 'span': 6, 'offset': 2 }" :span="8">3</co-col>
    </co-row>
          `,
      },
      attributesData: [
        {
          attribute: "gutter",
          explain:
            "栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]",
          type: "number/object/array",
          option: "-",
          default: "0",
        },
        {
          attribute: "align",
          explain: "垂直对齐方式",
          type: "string",
          option: "top/middle/bottom",
          default: "top",
        },
        {
          attribute: "justify",
          explain: "水平排列方式",
          type: "string",
          option: "start/end/center/space-around/space-between",
          default: "start",
        },
        {
          attribute: "wrap",
          explain: "是否自动换行",
          type: "boolean",
          option: "true/false",
          default: "true",
        },
      ],
      attributesData1: [
        {
          attribute: "span",
          explain: "栅格占位格数，为-时相当于display:none",
          type: "number",
          option: "-",
          default: "0",
        },
        {
          attribute: "offset",
          explain: "栅格左侧的间隔格数，间隔内不可以有栅格",
          type: "number",
          option: "-",
          default: "0",
        },
        {
          attribute: "order",
          explain: "栅格顺序",
          type: "number",
          option: "-",
          default: "0",
        },
        {
          attribute: "xs",
          explain:
            "屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象",
          type: "number/object",
          option: "-",
          default: "-",
        },
        {
          attribute: "sm",
          explain:
            "屏幕 >= 576px 响应式栅格，可为栅格数或一个包含其他属性的对象",
          type: "number/object",
          option: "-",
          default: "-",
        },
        {
          attribute: "md",
          explain:
            "屏幕 >= 768px 响应式栅格，可为栅格数或一个包含其他属性的对象",
          type: "number/object",
          option: "-",
          default: "-",
        },
        {
          attribute: "lg",
          explain:
            "屏幕 >= 992px 响应式栅格，可为栅格数或一个包含其他属性的对象",
          type: "number/object",
          option: "-",
          default: "-",
        },
        {
          attribute: "xl",
          explain:
            "屏幕 >= 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象",
          type: "number/object",
          option: "-",
          default: "-",
        },
        {
          attribute: "xll",
          explain:
            "屏幕 >= 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象",
          type: "number/object",
          option: "-",
          default: "-",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.co-col {
  text-align: center;
  margin: 8px 0;
  color: #fff;
}
.demo1 {
  .co-col {
    padding: 16px 0;
  }
}
.gutterStyle {
  background-color: #7763e9;
  padding: 16px 0;
}
.co-col_demo1 {
  background-color: #7763e9;
}
.co-col_demo2 {
  background-color: #a99de1;
}

.height_100 {
  height: 100px;
  line-height: 100px;
}
.height_50 {
  height: 50px;
  line-height: 50px;
}
.height_120 {
  height: 120px;
  line-height: 120px;
}
.height_80 {
  height: 80px;
  line-height: 80px;
}
</style>