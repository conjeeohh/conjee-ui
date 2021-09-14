<template>
  <div class="co-table">
    <table cellspacing="0">
      <!-- 接收数据 -->
      <div class="hidden-columns">
        <slot></slot>
      </div>
      <!-- 标题行 -->
      <tr>
        <th v-for="column in columns" :key="column.key" :width="`${column.width}px`">{{column.label}}</th>
      </tr>
      <tr class="contentTr" v-for="(row,index) in tableData" :key="index">
        <td v-for="column in columns" :key="column.key" :width="`${column.width}px`">
          <div v-if="!column.slot">{{row[column.prop]}}</div>
          <!-- 自定义列模板 -->
          <column-body v-else :vnode="column.slot"></column-body>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import TableStore from "./store";
import ColumnBody from "./column-body";

export default {
  name: "CoTable",
  components: { ColumnBody },
  data() {
    const tableStore = new TableStore(this);
    return {
      tableStore,
    };
  },
  props: {
    tableData: Array,
  },
  computed: {
    columns() {
      return this.tableStore.states.columns;
    },
  },
};
</script>

<style lang="less" scoped>
.co-table {
  width: 100%;
  color: #606266;
  .hidden-columns {
    display: none;
  }
  table {
    width: 100%;
    td,
    th {
      padding: 15px 10px;
      border-bottom: solid 1px #ddd;
      text-align: left;
    }
    th {
      color: #909399;
    }
    .contentTr {
      &:hover {
        background-color: #f5f7fa;
      }
    }
  }
}
</style>