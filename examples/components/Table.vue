<template>
  <div>
    <h2 class="_title">Table 表格</h2>
    <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
    <block-code title="基础表格" :code="code1" height="auto">
      <template #simple>
        <co-table :tableData="tableData">
          <co-table-column prop="date" label="日期" width="180"></co-table-column>
          <co-table-column prop="name" label="姓名" width="180"></co-table-column>
          <co-table-column prop="address" label="地址"></co-table-column>
        </co-table>
      </template>
    </block-code>

    <block-code title="自定义模板" :code="code2" height="auto">
      <template #simple>
        <co-table :tableData="tableData">
          <co-table-column prop="date" label="日期" width="180"></co-table-column>
          <co-table-column prop="name" label="姓名" width="180"></co-table-column>
          <co-table-column label="操作">
            <co-button size="small">编辑</co-button>
            <co-button size="small" type="danger">删除</co-button>
          </co-table-column>
        </co-table>
      </template>
    </block-code>

    <block-table title="Table Attributes" :dataList="attributesData"></block-table>
    <block-table title="Table-columns Attributes" :dataList="attributesData1"></block-table>

  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      code1: {
        html: `
    <co-table :tableData="tableData" :code="code1">
      <co-table-column prop="date" label="日期" width="180"></co-table-column>
      <co-table-column prop="name" label="姓名" width="180"></co-table-column>
      <co-table-column prop="address" label="地址"></co-table-column>
    </co-table>
        `,
        javascript: `
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
        `,
      },
      code2: {
        html: `
    <co-table :tableData="tableData">
      <co-table-column prop="date" label="日期" width="180"></co-table-column>
      <co-table-column prop="name" label="姓名" width="180"></co-table-column>
      <co-table-column label="操作">
        <co-button size="small">编辑</co-button>
        <co-button size="small" type="danger">删除</co-button>
      </co-table-column>
    </co-table>
        `,
        javascript: `
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "tableData",
          explain: "显示的数据",
          type: "array",
          option: "-",
          default: "-",
        },
      ],
      attributesData1: [
        {
          attribute: "prop",
          explain: "对应列内容的字段名，也可以使用 property 属性",
          type: "string",
          option: "-",
          default: "-",
        },
        {
          attribute: "label",
          explain: "显示的标题",
          type: "string",
          option: "-",
          default: "-",
        },
        {
          attribute: "width",
          explain: "对应列的宽度",
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
.co-button {
  margin: 0 5px;
}
</style>