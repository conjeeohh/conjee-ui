<template>
  <div class="block-table">
    <h2 class="simple-title">{{title}}</h2>
    <co-table :tableData="dataList">
      <co-table-column prop="attribute" label="参数"></co-table-column>
      <co-table-column prop="explain" label="说明"></co-table-column>
      <co-table-column prop="type" label="类型"></co-table-column>
      <co-table-column prop="option" label="可选值"></co-table-column>
      <co-table-column prop="default" label="默认值"></co-table-column>
    </co-table>
  </div>
</template>

<script>
export default {
  name: "BlockTable",
  props: {
    title: String,
    dataList: Array,
  },
};
</script>

<style>
</style>