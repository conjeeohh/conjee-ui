<template>
  <div>
    <h2 class="_title">Pagination 分页</h2>
    <p class="_intro">当数据量过多时，使用分页分解数据。</p>

    <block-code title="基础用法" :code="code1">
      <template #simple>
        <co-pagination :total="50" :pagesize="10" :pagenum.sync="pagenum1" style="margin-bottom: 20px"></co-pagination>
        <co-pagination :total="100" :pagesize="5" :pagenum.sync="pagenum2"></co-pagination>
      </template>
    </block-code>

    <block-code title="带有背景色的分页" :code="code1">
      <template #simple>
        <co-pagination :total="100" :pagesize="5" :pagenum.sync="pagenum3" background="#f4f4f5"></co-pagination>
      </template>
    </block-code>

    <block-code title="附加功能" :code="code1">
      <template #simple>
        <co-pagination :total="100" :pagesize="5" :pagenum.sync="pagenum4" :page-sizes="[10,20,30,40]"></co-pagination>
      </template>
    </block-code>

    <block-table title="Pagination Attributes" :dataList="attributesData"></block-table>

    <h2 class="simple-title">Pagination Events</h2>
    <co-table :tableData="eventsData">
      <co-table-column prop="event" label="事件名"></co-table-column>
      <co-table-column prop="explain" label="说明"></co-table-column>
      <co-table-column prop="option" label="参数"></co-table-column>
    </co-table>

  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      pagenum1: 5,
      pagenum2: 5,
      pagenum3: 5,
      pagenum4: 5,
      code1: {
        html: `
    <!-- 设置total pagesize pagenum 值即可 -->
    <co-pagination :total="50" :pagesize="10" :pagenum.sync="pagenum1"></co-pagination>
    <co-pagination :total="100" :pagesize="5" :pagenum.sync="pagenum2"></co-pagination>`,
        javascript: `
    export default {
      data(){
        return {
          pagenum1: 5,
          pagenum2: 5,
        }
      }
    }
        `,
      },
      code2: {
        html: `
    <!-- 设置background属性可以为分页按钮添加背景色。 -->
    <co-pagination :total="100" :pagesize="5" :pagenum.sync="pagenum3" background="#f4f4f5"></co-pagination>`,
        javascript: `
    export default {
      data(){
        return {
          pagenum3: 5,
        }
      }
    }
        `,
      },
      code3: {
        html: `
    <!-- page-sizes接受一个整型数组，数组元素为展示的选择每页显示个数的选项，[100, 200, 300, 400]表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。 -->
    <co-pagination :total="100" :pagesize="5" :pagenum.sync="pagenum4" :page-sizes="[10,20,30,40]"></co-pagination>`,
        javascript: `
    export default {
      data(){
        return {
          pagenum4: 5,
        }
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "pagenum",
          explain: "当前页码",
          type: "number",
          option: "-",
          default: "-",
        },
        {
          attribute: "pagesize",
          explain: "每页显示条数",
          type: "number",
          option: "-",
          default: "",
        },
        {
          attribute: "total",
          explain: "总数据条数",
          type: "number",
          option: "-",
          default: "-",
        },
        {
          attribute: "page-sizes",
          explain: "每页显示数据条数的选项设置",
          type: "array",
          option: "-",
          default: "-",
        },
        {
          attribute: "background",
          explain: "设置页码背景色",
          type: "string",
          option: "-",
          default: "-",
        },
      ],
      eventsData: [
        {
          event: "sizeChange",
          explain: "pagesize改变时触发",
          option: "每页条数",
        },
        {
          event: "currentChange",
          explain: "pagenum改变时触发",
          option: "当前页",
        },
      ],
    };
  },
};
</script>

<style>
</style>