<template>
  <div>
    <h2 class="_title">Select 选择器</h2>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <block-code title="基础用法" :code="code1">
      <template #simple>
        <co-select v-model="value" class="select-demo">
          <co-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></co-option>
        </co-select>
        绑定值为：{{value}}
      </template>
    </block-code>

    <block-code title="有禁用选项" :code="code2">
      <template #simple>
        <co-select v-model="value1">
          <co-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></co-option>
        </co-select>
      </template>
    </block-code>

    <block-code title="禁用状态" :code="code3">
      <template #simple>
        <co-select v-model="value3" disabled>
          <co-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></co-option>
        </co-select>
      </template>
    </block-code>

    <block-table title="Select Attributes" :dataList="attributesData"></block-table>
    <block-table title="Option Attributes" :dataList="optionAttributes"></block-table>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
      value3: "",
      options1: [
        {
          value: "chengyaojin",
          label: "程咬金",
        },
        {
          value: "libai",
          label: "李白",
        },
        {
          value: "diaochan",
          label: "貂蝉",
        },
      ],
      options2: [
        {
          value: "chengyaojin",
          label: "程咬金",
        },
        {
          value: "libai",
          label: "李白",
        },
        {
          value: "diaochan",
          label: "貂蝉",
          disabled: true,
        },
      ],
      code1: {
        html: `
    <!-- v-model 的值为当前被选中的 co-option 的 value 属性值 -->
    <co-select v-model="value">
        <co-option 
            v-for="item in options" 
            :key="item.value" 
            :label="item.label" 
            :value="item.value">
        </co-option>
    </co-select>`,
        javascript: `
    data() {
      return {
        value: "",
        options: [
          {
            value: "chengyaojin",
            label: "程咬金",
          },
          {
            value: "libai",
            label: "李白",
          },
          {
            value: "diaochan",
            label: "貂蝉",
          },
        ],
      }
    }
        `,
      },
      code2: {
        html: `
    <!-- co-option中，设定disabled值为 true，即可禁用该选项 -->
    <co-select v-model="value">
        <co-option 
            v-for="item in options" 
            :disabled="item.disabled" 
            :key="item.value" 
            :label="item.label" 
            :value="item.value">
        </co-option>
    </co-select>`,
        javascript: `
    data() {
      return {
        value: "",
        options: [
          {
            value: "chengyaojin",
            label: "程咬金",
          },
          {
            value: "libai",
            label: "李白",
          },
          {
            value: "diaochan",
            label: "貂蝉",
            disabled: true
          },
        ],
      }
    }
        `,
      },
      code3: {
        html: `
    <!-- 为co-select设置disabled属性，则整个选择器禁用。只读 -->
    <co-select v-model="value" disabled>
        <co-option 
            v-for="item in options" 
            :key="item.value" 
            :label="item.label" 
            :value="item.value">
        </co-option>
    </co-select>`,
        javascript: `
    data() {
      return {
        value: "",
        options: [
          {
            value: "chengyaojin",
            label: "程咬金",
          },
          {
            value: "libai",
            label: "李白",
          },
          {
            value: "diaochan",
            label: "貂蝉",
          },
        ],
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "disabled",
          explain: "是否禁用",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "clearable",
          explain: "是否清空选项",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "placeholder",
          explain: "占位符",
          type: "string",
          option: "-",
          default: "请选择",
        },
      ],
      optionAttributes: [
        {
          attribute: "label",
          explain: "选项的标签",
          type: "string",
          option: "-",
          default: "-",
        },
        {
          attribute: "value",
          explain: "选项的值",
          type: "string",
          option: "-",
          default: "-",
        },
        {
          attribute: "disabled",
          explain: "是否禁用该选项",
          type: "boolean",
          option: "-",
          default: "false",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.select-demo {
  margin-right: 50px;
}
</style>