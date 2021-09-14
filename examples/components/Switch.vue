<template>
  <div>
    <h2 class="_title">Switch 开关</h2>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>

    <block-code title="基础用法" :code="code1">
      <template #simple>
        <co-switch v-model="value" active-color="#7763e9" inactive-color="#e4d1d3"></co-switch>
      </template>
    </block-code>

    <block-code title="文字描述" :code="code2">
      <template #simple>
        <co-switch v-model="value1" inactive-text="我谢了" active-text="我想开了"></co-switch>
        <br><br>
        <co-switch v-model="value2" inactive-text="我谢了" active-text="我想开了"></co-switch>
      </template>
    </block-code>

    <block-code title="禁用状态" :code="code3">
      <template #simple>
        <co-switch v-model="value3" disabled class="switch-demo"></co-switch>
        <co-switch v-model="value4" disabled></co-switch>
      </template>
    </block-code>

    <block-table title="Switch Attributes" :dataList="attributesData"></block-table>

  </div>
</template>

<script>
export default {
  name: "SwitchDemo",
  data() {
    return {
      value: true,
      value1: true,
      value2: false,
      value3: true,
      value4: false,
      code1: {
        html: `
    <!-- 
        绑定v-model到一个Boolean类型的变量。
        可以使用active-color属性与inactive-color属性来设置开关的背景色。 
    -->
    <el-switch
      v-model="value"
      active-color="#7763e9"
      inactive-color="#e4d1d3">
    </el-switch>`,
        javascript: `
    export default {
      data() {
        return {
          value: true
        }
      }
    }
        `,
      },
      code2: {
        html: `
    <!-- 使用active-text属性与inactive-text属性来设置开关的文字描述。-->
    <el-switch
      v-model="value1"
      active-text="我想开了"
      inactive-text="我谢了">
    </el-switch>
    <el-switch
      v-model="value2"
      active-text="我想开了"
      inactive-text="我谢了">
    </el-switch>`,
        javascript: `
    export default {
      data() {
        return {
          value1: true,
          value2: false
        }
      }
    }
        `,
      },
      code3: {
        html: `
    <!-- 设置disabled属性，接受一个Boolean，设置true即可禁用。-->
    <co-switch v-model="value1" disabled></co-switch>
    <co-switch v-model="value2" disabled></co-switch>`,
        javascript: `
    export default {
      data() {
        return {
          value1: true,
          value2: false
        }
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "value/v-model",
          explain: "绑定值，选中选项卡的name",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "disabled",
          explain: "是否禁用",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "active-text",
          explain: "switch打开时的文字描述",
          type: "string",
          option: "-",
          default: "-",
        },
        {
          attribute: "inactive-text",
          explain: "switch关闭时的文字描述",
          type: "string",
          option: "-",
          default: "-",
        },
        {
          attribute: "active-color",
          explain: "switch打开时的背景色",
          type: "string",
          option: "-",
          default: "#7763e9",
        },
        {
          attribute: "inactive-color",
          explain: "switch关闭时的背景色",
          type: "string",
          option: "-",
          default: "#dcdfe6",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.switch-demo {
  margin-right: 15px;
}
</style>