<template>
  <div>
    <h2 class="_title">Input 输入框</h2>
    <p class="_intro">通过鼠标或键盘输入字符</p>

    <block-code title="基础用法" :code="code1">
      <template #simple>
        <co-inputpro v-model="inputVal"></co-inputpro>
      </template>
    </block-code>

    <block-code title="禁用状态" :code="code2">
      <template #simple>
        <co-inputpro v-model="inputVal1" disabled></co-inputpro>
      </template>
    </block-code>

    <block-code title="可清空" :code="code3">
      <template #simple>
        <co-inputpro v-model="inputVal2" clearable></co-inputpro>
      </template>
    </block-code>

    <block-code title="带icon的输入框" :code="code4">
      <template #simple>
        <co-inputpro v-model="inputVal3" prefixIcon="search" class="inputpro-demo"></co-inputpro>
        <co-inputpro v-model="inputVal4" suffixIcon="good"></co-inputpro>
      </template>
    </block-code>

    <block-code title="复合型输入框" :code="code5">
      <template #simple>
        <co-inputpro v-model="inputVal5" class="inputpro-slot-demo demomargin">
          <template #prepend>
            http://
          </template>
        </co-inputpro>
        <co-inputpro v-model="inputVal6" class="inputpro-slot-demo demomargin">
          <template #sufpend>
            .com
          </template>
        </co-inputpro>
        <co-inputpro v-model="inputVal7" class="inputpro-slot-demo">
          <template #prepend>
            <co-icon name="good"></co-icon>
          </template>
          <template #sufpend>
            <co-icon name="good"></co-icon>
          </template>
        </co-inputpro>
      </template>
    </block-code>

    <block-table title="Inputpro Attributes" :dataList="attributesData"></block-table>
  </div>
</template>

<script>
export default {
  name: "Inputpro",
  data() {
    return {
      inputVal: "",
      inputVal1: "",
      inputVal2: "可清空",
      inputVal3: "",
      inputVal4: "",
      inputVal5: "",
      inputVal6: "",
      inputVal7: "",
      code1: {
        html: `
    <co-inputpro v-model="inputVal"></co-inputpro>`,
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
      code2: {
        html: `
    <!-- 通过 disabled 属性指定是否禁用 input 组件 -->
    <co-inputpro v-model="inputVal" disabled></co-inputpro>`,
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
      code3: {
        html: `
    <!-- 使用clearable属性即可得到一个可清空的输入框 -->
    <!-- value为空时清空icon隐藏，不为空时清空icon可见 -->
    <co-inputpro v-model="inputVal" clearable></co-inputpro>`,
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
      code4: {
        html: `
    <!-- 可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标 -->
    <co-inputpro v-model="inputVal" prefixIcon="search"></co-inputpro>
    <co-inputpro v-model="inputVal1" suffixIcon="good"></co-inputpro>`,
        javascript: `
    export default {
      data() {
        return {
          inputVal: "",
          inputVal1: ""
        }
      }
    }
        `,
      },
      code5: {
        html: `
    <!-- 可通过 slot 来指定在 input 中前置或者后置内容。 -->
    <co-inputpro v-model="inputVal1">
      <template #prepend>
        http://
      </template>
    </co-inputpro>
    <co-inputpro v-model="inputVal2">
      <template #sufpend>
        .com
      </template>
    </co-inputpro>
    <co-inputpro v-model="inputVal3">
      <template #prepend>
        <co-icon name="good"></co-icon>
      </template>
      <template #sufpend>
        <co-icon name="good"></co-icon>
      </template>
    </co-inputpro>`,
        javascript: `
    export default {
      data() {
        return {
          inputVal1: "",
          inputVal2: "",
          inputVal3: ""
        }
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "placeholder",
          explain: "输入框占位文本",
          type: "string",
          option: "-",
          default: "请输入内容",
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
          attribute: "prefixIcon",
          explain: "输入框头部图标",
          type: "string",
          option: "-",
          default: "-",
        },
        {
          attribute: "suffixIcon",
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

<style lang="less" scoped>
.inputpro-demo {
  margin-right: 15px;
}
.inputpro-slot-demo {
  width: 100%;
}
.demomargin {
  margin-bottom: 15px;
}
</style>