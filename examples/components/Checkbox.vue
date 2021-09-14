<template>
  <div>
    <h2 class="_title">Checkbox 多选框</h2>
    <p class="_intro">一组备选项中进行多选</p>

    <block-code title="基础用法" height="auto" :code="code1">
      <template #simple>
        <co-checkbox v-model="value">宝山区</co-checkbox>
      </template>
    </block-code>

    <block-code title="禁用状态" height="auto" :code="code2">
      <template #simple>
        <co-checkbox v-model="value1" disabled class="checkbox-demo">宝山区</co-checkbox>
        <co-checkbox v-model="value2" disabled>普陀区</co-checkbox>
      </template>
    </block-code>

    <block-code title="多选框组" height="auto" :code="code3">
      <template #simple>
        <co-checkbox-group v-model="list">
          <co-checkbox class="checkbox-demo" label="布偶">布偶猫</co-checkbox>
          <co-checkbox class="checkbox-demo" label="金吉拉">金吉拉猫</co-checkbox>
          <co-checkbox class="checkbox-demo" label="田园">田园猫</co-checkbox>
          <co-checkbox class="checkbox-demo" label="狸花" disabled>狸花猫</co-checkbox>
          <co-checkbox label="泰迪" disabled :value="true">小泰迪</co-checkbox>
        </co-checkbox-group>
        <div style="margin-top:10px">绑定数组值输出：{{`${list}`}}</div>
      </template>
    </block-code>

    <block-code title="数量限制" height="auto" :code="code4">
      <template #simple>
        <co-checkbox-group v-model="list1" :min="1" :max="2" :overstep="handleOverstep">
          <co-checkbox class="checkbox-demo" label="布偶">布偶猫</co-checkbox>
          <co-checkbox class="checkbox-demo" label="金吉拉">金吉拉猫</co-checkbox>
          <co-checkbox class="checkbox-demo" label="田园">田园猫</co-checkbox>
          <co-checkbox class="checkbox-demo" label="狸花">狸花猫</co-checkbox>
        </co-checkbox-group>
      </template>
    </block-code>

    <block-table title="Checkbox Attributes" :dataList="attributesData"></block-table>
    <block-table title="Checkbox-group Attributes" :dataList="attributesData1"></block-table>

    <h2 class="simple-title">Checkbox-group Events</h2>
    <co-table :tableData="eventsData">
      <co-table-column prop="event" label="事件名"></co-table-column>
      <co-table-column prop="explain" label="说明"></co-table-column>
      <co-table-column prop="attribute" label="参数"></co-table-column>
    </co-table>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  data() {
    return {
      value: false,
      value1: false,
      value2: true,
      list: [],
      list1: [],
      code1: {
        html: `
    <co-checkbox v-model="value">宝山区</co-checkbox>`,
        javascript: `
    export default {
      data() {
        return {
          value: false,
        }
      }
    }
        `,
      },
      code2: {
        html: `
    <!-- 设置disabled属性即可。 -->
    <co-checkbox v-model="value1" disabled>宝山区</co-checkbox>
    <co-checkbox v-model="value2" disabled>普陀区</co-checkbox>`,
        javascript: `
    export default {
      data() {
        return {
          value1: false,
          value2: true,
        }
      }
    }
        `,
      },
      code3: {
        html: `
    <!-- 
        checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 
        el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。
        label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。 
    -->
    <co-checkbox-group v-model="list">
      <co-checkbox label="布偶">布偶猫</co-checkbox>
      <co-checkbox label="金吉拉">金吉拉猫</co-checkbox>
      <co-checkbox label="田园">田园猫</co-checkbox>
      <co-checkbox label="狸花" disabled>狸花猫</co-checkbox>
      <co-checkbox label="泰迪" disabled :value="true">小泰迪</co-checkbox>
    </co-checkbox-group>`,
        javascript: `
    export default {
      data() {
        return {
          list:[]
        }
      }
    }
        `,
      },
      code4: {
        html: `
    <!-- 
        使用 min 和 max 属性能够限制可以被勾选的项目的数量。 
        overstep是超出限制的回调函数 , 超出最大值返回"max"和最大值。低于最小值返回"min"和最小值。
    -->
    <co-checkbox-group
        v-model="list" 
        :min="1" 
        :max="2" 
        :overstep="handleOverstep">
      <co-checkbox label="布偶">布偶猫</co-checkbox>
      <co-checkbox label="金吉拉">金吉拉猫</co-checkbox>
      <co-checkbox label="田园">田园猫</co-checkbox>
      <co-checkbox label="狸花">狸花猫</co-checkbox>
    </co-checkbox-group>`,
        javascript: `
    export default {
      data() {
        return {
          list:[]
        }
      },
      methods: {
        handleOverstep(tag,val){
        if(tag=='max'){
          this.$message({
            msg:"选中数量不能大于"+val,
            type:"warning"
          })
        }else{
          this.$message({
            msg:"选中数量不能小于"+val,
            type:"warning"
          })
        }
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "label",
          explain: "选中状态的值",
          type: "string/number",
          option: "-",
          default: "-",
        },
        {
          attribute: "disabled",
          explain: "是否禁用",
          type: "boolean",
          option: "false/true",
          default: "false",
        },
      ],
      attributesData1: [
        {
          attribute: "min",
          explain: "可被勾选的checkbox的最小数量",
          type: "number",
          option: "-",
          default: "-",
        },
        {
          attribute: "max",
          explain: "可被勾选的checkbox的最大数量",
          type: "number",
          option: "-",
          default: "-",
        },
      ],
      eventsData: [
        {
          event: "overstep",
          explain: "超出限制的回调函数",
          attribute: "tag,val",
        },
      ],
    };
  },
  methods: {
    handleOverstep() {
      alert("111");
    },
  },
};
</script>

<style lang="less" scoped>
.checkbox-demo {
  margin-right: 15px;
}
</style>