<template>
  <div>
    <h2 class="_title">Progress 进度条</h2>
    <p class="_intro">用于展示操作进度，告知用户当前状态和预期。</p>

    <block-code title="基础用法" :code="code1">
      <template #simple>
        <co-progress :percentage="50" class="progress-demo"></co-progress>
        <co-progress color="#67c23a" :percentage="100" :format="format" class="progress-demo"></co-progress>
        <co-progress color="#f56c6c" textColor="#f56c6c" :percentage="60"></co-progress>
      </template>
    </block-code>

    <block-code title="百分比内显" :code="code2">
      <template #simple>
        <co-progress :strokeWidth="16" :textInside="true" color="#67c23a" :percentage="40" class="progress-demo"></co-progress>
        <co-progress :strokeWidth="22" :textInside="true" color="#f56c6c" :percentage="60"></co-progress>
      </template>
    </block-code>

    <block-code title="自定义颜色" :code="code3">
      <template #simple>
        <co-progress :color="colorString" :percentage="percentage" class="progress-demo"></co-progress>
        <co-progress :color="colorArray" :percentage="percentage" class="progress-demo"></co-progress>
        <co-progress :color="colorMethod" :percentage="percentage" class="progress-demo"></co-progress>

        <co-button icon="minus" @click="decrease"></co-button>
        <co-button icon="add" @click="increase"></co-button>
      </template>
    </block-code>

    <block-table title="Radio Attributes" :dataList="attributesData"></block-table>

  </div>
</template>

<script>
export default {
  name: "Progress",
  data() {
    return {
      percentage: 20,
      colorString: "#409eff",
      colorArray: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      code1: {
        html: `
    <!-- 
        Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。
        通过 format 属性来指定进度条文字内容。 
    -->
    <co-progress :percentage="50"></co-progress>
    <co-progress color="#67c23a" :percentage="100" :format="format"></co-progress>
    <co-progress color="#f56c6c" textColor="#f56c6c" :percentage="60"></co-progress>`,
        javascript: `
    export default {
        methods: {
            format(percentage) {
                return percentage === 100 ? "满" : percentage+"%";
            }
        }
    }
          `,
      },
      code2: {
        html: `
    <!-- 
        Progress 组件可通过 stroke-width 属性更改进度条的高度，
        并可通过 text-inside 属性来将进度条描述置于进度条内部。 
    -->
    <co-progress :strokeWidth="16" :textInside="true" color="#67c23a" :percentage="40"></co-progress>
    <co-progress :strokeWidth="22" :textInside="true" color="#f56c6c" :percentage="60"></co-progress>
    `,
      },
      code3: {
        html: `
    <!-- 
        可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。
    -->
    <co-progress :color="colorString" :percentage="percentage"></co-progress>
    <co-progress :color="colorArray" :percentage="percentage"></co-progress>
    <co-progress :color="colorMethod" :percentage="percentage"></co-progress>

    <co-button icon="minus" @click="decrease"></co-button>
    <co-button icon="add" @click="increase"></co-button>`,
        javascript: `
    export default {
        data(){
            return {
                colorString: "#409eff",
                colorArray: [
                    { color: "#f56c6c", percentage: 20 },
                    { color: "#e6a23c", percentage: 40 },
                    { color: "#5cb87a", percentage: 60 },
                    { color: "#1989fa", percentage: 80 },
                    { color: "#6f7ad3", percentage: 100 },
                ],
            }
        },
        methods: {
            colorMethod(percentage){
                if (percentage < 30) {
                return '#909399';
                } else if (percentage < 70) {
                return '#e6a23c';
                } else {
                return '#67c23a';
                }
            },
            increase() {
                this.percentage += 10;
                if (this.percentage > 100) {
                this.percentage = 100;
                }
            },
            decrease() {
                this.percentage -= 10;
                if (this.percentage < 0) {
                this.percentage = 0;
                }
            },
        }
    }
        `,
      },
      attributesData: [
        {
          attribute: "percentage",
          explain: "百分比(必填)",
          type: "number",
          option: "0-00",
          default: "0",
        },
        {
          attribute: "stroke-width",
          explain: "进度条的宽度，单位px",
          type: "number",
          option: "-",
          default: "6",
        },
        {
          attribute: "text-inside",
          explain: "进度条显示文字内置在进度条内",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "textColor",
          explain: "进度条显示文字颜色",
          type: "string",
          option: "-",
          default: "",
        },
        {
          attribute: "color",
          explain: "进度条背景色",
          type: "string/function/arrag",
          option: "-",
          default: "-",
        },
        {
          attribute: "format",
          explain: "进度条显示文字",
          type: "function",
          option: "-",
          default: "-",
        },
      ],
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    colorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase() {
      console.log("222");
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.progress-demo {
  margin-bottom: 10px;
}
</style>