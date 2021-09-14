<template>
  <div>
    <h2 class="_title">Radio单选框</h2>
    <p>在一组备选项中进行单选</p>

    <block-code title="基础用法" :code="code1">
      <template #simple>
        <co-radio label="1" v-model="radio">北京</co-radio>
        <co-radio label="2" v-model="radio">上海</co-radio>
      </template>
    </block-code>

    <block-code title="禁用状态" :code="code2">
      <template #simple>
        <co-radio label="1" v-model="radio1" disabled>北京</co-radio>
        <co-radio label="2" v-model="radio1" disabled>上海</co-radio>
      </template>
    </block-code>

    <block-code title="单选框组" :code="code3">
      <template #simple>
        <co-radio-group v-model="radio2">
          <co-radio label="3">北京</co-radio>
          <co-radio label="6">上海</co-radio>
          <co-radio label="9">南京</co-radio>
        </co-radio-group>
      </template>
    </block-code>

    <block-code title="按钮样式" :code="code4">
      <template #simple>
        <div style="margin-bottom:20px">
          <co-radio-group v-model="radio3">
            <co-radio-button label="普陀区">普陀区</co-radio-button>
            <co-radio-button label="宝山区">宝山区</co-radio-button>
            <co-radio-button label="徐汇区">徐汇区</co-radio-button>
          </co-radio-group>
        </div>
        <div style="margin-bottom:20px">
          <co-radio-group v-model="radio4" size="medium">
            <co-radio-button label="普陀区">普陀区</co-radio-button>
            <co-radio-button label="宝山区">宝山区</co-radio-button>
            <co-radio-button label="徐汇区">徐汇区</co-radio-button>
          </co-radio-group>
        </div>
        <div style="margin-bottom:20px">
          <co-radio-group v-model="radio5" size="small">
            <co-radio-button label="普陀区">普陀区</co-radio-button>
            <co-radio-button disabled label="宝山区">宝山区</co-radio-button>
            <co-radio-button label="徐汇区">徐汇区</co-radio-button>
          </co-radio-group>
        </div>
        <div style="margin-bottom:20px">
          <co-radio-group v-model="radio6" size="mini" disabled>
            <co-radio-button label="普陀区">普陀区</co-radio-button>
            <co-radio-button label="宝山区">宝山区</co-radio-button>
            <co-radio-button label="徐汇区">徐汇区</co-radio-button>
          </co-radio-group>
        </div>
      </template>
    </block-code>

    <block-table title="Radio Attributes" :dataList="attributesData"></block-table>
    <block-table title="RadioGroup Attributes" :dataList="attributesData1"></block-table>
    <block-table title="Radio-button Attributes" :dataList="attributesData2"></block-table>
  </div>
</template>

<script>
export default {
  name: "Radio",
  data() {
    return {
      radio: "2",
      radio1: "2",
      radio2: "3",
      radio3: "徐汇区",
      radio4: "普陀区",
      radio5: "普陀区",
      radio6: "",
      code1: {
        html: `
    <!--
      要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio组件label属性的值。
      label可以是String、Number或Boolean。
    -->
    <co-radio label="1" v-model="radio">北京</co-radio>
    <co-radio label="2" v-model="radio">上海</co-radio>`,
        javascript: `
    export default {
      data() {
        return {
          radio: "2"
        }
      }
    }
        `,
      },
      code2: {
        html: `
    <!-- 只要在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。 -->
    <co-radio label="1" v-model="radio" disabled>北京</co-radio>
    <co-radio label="2" v-model="radio" disabled>上海</co-radio>`,
        javascript: `
    export default {
      data() {
        return {
          radio: "2"
        }
      }
    }
        `,
      },
      code3: {
        html: `
    <!-- 
        结合el-radio-group元素和子元素el-radio可以实现单选组。
        在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量。
    -->
    <co-radio-group v-model="radio">
      <co-radio label="3">北京</co-radio>
      <co-radio label="6">上海</co-radio>
      <co-radio label="9">南京</co-radio>
    </co-radio-group>`,
        javascript: `
    export default {
      data() {
        return {
          radio: "3"
        }
      }
    }
        `,
      },
      code4: {
        html: `
    <!-- 
        只需要把co-radio元素换成co-radio-button元素即可，此外，还提供了size属性
    -->
    <div style="margin-bottom:20px">
        <co-radio-group v-model="radio3">
            <co-radio-button label="普陀区">普陀区</co-radio-button>
            <co-radio-button label="宝山区">宝山区</co-radio-button>
            <co-radio-button label="徐汇区">徐汇区</co-radio-button>
        </co-radio-group>
    </div>
    <div style="margin-bottom:20px">
        <co-radio-group v-model="radio4" size="medium">
            <co-radio-button label="普陀区">普陀区</co-radio-button>
            <co-radio-button label="宝山区">宝山区</co-radio-button>
            <co-radio-button label="徐汇区">徐汇区</co-radio-button>
        </co-radio-group>
    </div>
    <div style="margin-bottom:20px">
        <co-radio-group v-model="radio5" size="small">
            <co-radio-button label="普陀区">普陀区</co-radio-button>
            <co-radio-button disabled label="宝山区">宝山区</co-radio-button>
            <co-radio-button label="徐汇区">徐汇区</co-radio-button>
        </co-radio-group>
    </div>
    <div style="margin-bottom:20px">
        <co-radio-group v-model="radio6" size="mini" disabled>
            <co-radio-button label="普陀区">普陀区</co-radio-button>
            <co-radio-button label="宝山区">宝山区</co-radio-button>
            <co-radio-button label="徐汇区">徐汇区</co-radio-button>
        </co-radio-group>
    </div>`,
        javascript: `
    export default {
      data() {
        return {
          radio3: "徐汇区",
          radio4: "普陀区",
          radio5: "普陀区",
          radio6: "",
        }
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "value/v-model",
          explain: "绑定值",
          type: "-",
          option: "-",
          default: "-",
        },
        {
          attribute: "label",
          explain: "Radio的value",
          type: "-",
          option: "-",
          default: "-",
        },
        {
          attribute: "disabled",
          explain: "是否禁用状态",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
      ],
      attributesData1: [
        {
          attribute: "value/v-model",
          explain: "绑定值",
          type: "-",
          option: "-",
          default: "-",
        },
        {
          attribute: "size",
          explain: "尺寸",
          type: "string",
          option: "medium/small/mini",
          default: "-",
        },
        {
          attribute: "disabled",
          explain: "是否禁用状态",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
      ],
      attributesData2: [
        {
          attribute: "label",
          explain: "Radio的value",
          type: "-",
          option: "-",
          default: "-",
        },
        {
          attribute: "disabled",
          explain: "是否禁用状态",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
      ],
    };
  },
};
</script>

<style>
</style>