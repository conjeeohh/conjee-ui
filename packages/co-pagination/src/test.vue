<template>
  <div class="co-pagination">
    <!-- 当前页为第一页时禁用 -->
    <button :class="[
    'co-pagination_prebtn',
    pagenum === 1 ? 'co-pagination_disabled' : '']" @click="pagenum === 1 ? null : clickPagenum(pagenum - 1)">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrow-left-bold"></use>
      </svg>
    </button>
    <div class="co-pagination_pager">

      <!-- 总页码数大于7 start -->
      <ul v-if="currentPagenums > 7">
        <!-- 
          最多显示7个页码 首页尾页必须显示  中间响应式变化
          当前页左侧>=4个页码时 ... 即【当前页>=5 ...】
          当前页右侧<=3个页码时 全显  【总页数 - 当前页 > 3 ...】
         -->
        <li :class="pagenum === 1 ? 'co-pagenation_currentPage' : ''" @click="clickPagenum(1)">1</li>
        <!-- 点击当前页码-5 -->
        <li v-if="pagenum >= 5" @click="pagenum - 5 <= 1 ? clickPagenum(1) : clickPagenum(pagenum - 5)">...</li>
        <li v-for="num in 5" :key="num" :class="pagenum === pagenum + 3 - num && pagenum !== 1? 'co-pagenation_currentPage' : ''" @click="clickPagenum(viewPagesize)">
          {{pagenum === 1 ? pagenum + num : pagenum === 2 ? pagenum + num - 1 : pagenum + num - 3}}</li>
        <!-- 点击当前页码+5 -->
        <li v-if="currentPagenums - pagenum > 3" @click="clickPagenum(pagenum + 5)">...</li>
        <li :class="pagenum === currentPagenums ? 'co-pagenation_currentPage' : ''" @click="clickPagenum(currentPagenums)">{{currentPagenums}}</li>
      </ul>
      <!-- 总页码数大于7 end -->

      <!-- 小于7  start-->
      <ul v-else>
        <li :class="pagenum === num ? 'co-pagenation_currentPage' : ''" v-for="num in currentPagenums" :key="num" @click="clickPagenum(num)">{{num}}</li>
      </ul>
      <!-- 小于7 end -->

    </div>
    <!-- 当前页为最后一页时禁用 -->
    <button :class="[
      'co-pagination_sufbtn',
      pagenum === currentPagenums ? 'co-pagination_disabled' : '']" @click="pagenum === currentPagenums ? null : clickPagenum(pagenum + 1)">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrow-right-bold"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "CoPagination",
  props: {
    total: Number,
    pagenum: Number,
    pagesize: Number,
  },
  data() {
    return {};
  },
  computed: {
    currentPagenums() {
      return this.total % this.pagesize === 0
        ? this.total / this.pagesize
        : this.total / this.pagesize + 1;
    },
  },
  methods: {
    clickPagenum(clickPagenum) {
      this.$emit("update:pagenum", clickPagenum);
    },
  },
};
</script>

<style lang="less" scoped>
.co-pagination {
  color: #303133;
  font-weight: 700;
  button {
    display: inline-block;
    padding: 0 6px;
    margin: 0;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
    border: none;
    background: 50% no-repeat;
    background-size: 16px;
    background-color: #fff;
    cursor: pointer;
    font-size: 13px;
    color: #303133;
  }
  .co-pagination_prebtn {
    padding-right: 12px;
  }
  .co-pagination_sufbtn {
    padding-left: 12px;
  }
  .co-pagination_disabled {
    cursor: not-allowed;
  }
  .co-pagination_pager {
    display: inline-block;
    user-select: none;
    list-style: none;
    li {
      padding: 0 4px;
      background: #fff;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      margin: 0;
    }
    .co-pagenation_currentPage {
      color: #7763e9;
    }
  }
}
</style>