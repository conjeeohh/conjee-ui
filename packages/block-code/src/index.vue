<template>
  <div>
    <h2>{{title}}</h2>
    <div class="blockCode">
      <!-- 展示框 -->
      <div class="simple">
        <slot name="simple"></slot>
      </div>
      <!-- 代码示例 -->
      <div class="codesimple" v-if="codeVisible" :style="`height:${codeboxHeight}`">
        <!-- <slot name="code"></slot> -->
        <pre v-highlightjs="code.html"><code class="html" v-if="code.html"></code></pre>
        <pre v-highlightjs="code.javascript" v-if="code.javascript"><code class="javascript"></code></pre>
      </div>
      <!-- 下拉框 -->
      <div class="showCode" @click="codeVisible = !codeVisible">
        <svg :class="['icon','showCode-icon',codeVisible ? 'icondeg':'']" aria-hidden="true">
          <use xlink:href="#icon-arrow-down"></use>
        </svg>
        <span>{{codeVisible ? '隐藏代码' : '显示代码'}}</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "BlockCode",
  props: {
    title: {
      type: String,
      default: "title",
    },
    code: {
      type: Object,
      // required: true,
    },
    height: {
      type: String,
      default: "auto",
    },
  },
  data() {
    return {
      codeVisible: false,
      codeboxHeight: "0px",
    };
  },
  methods: {},
  watch: {
    codeVisible: function (n) {
      if (n) {
        this.codeboxHeight = this.height;
      } else {
        this.codeboxHeight = "0px";
      }
    },
  },
};
</script>

<style lang="less" scoped>
@color: #7763e9;

h2 {
  margin: 55px 0px 20px;
  font-weight: 400;
  color: rgb(31, 47, 61);
  font-size: 22px;
}
.blockCode {
  width: 100%;
  border: 1px solid #ebebeb;
  transition: all 0.4s;
  font-size: 14px;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
    .showCode span {
      transform: translateX(0px);
      opacity: unset;
    }
    .showCode .showCode-icon {
      margin-left: -40px;
    }
  }
  .simple {
    width: 100%;
    padding: 24px;
    border-bottom: 1px solid #ebebeb;
  }
  // 代码示例
  .codesimple {
    border-bottom: 1px solid #ebebeb;
    background: #282c34;
    overflow: hidden;
    -webkit-transition: height 0.2s;
    transition: height 0.2s;
  }
  .showCode {
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #d3dce6;
    cursor: pointer;
    &:hover {
      color: @color;
    }
    span {
      display: inline-block;
      margin-left: 10px;
      transform: translateX(30px);
      transition: 0.3s;
      opacity: 0;
    }
    .showCode-icon {
      transition: 0.2s;
    }
    .icondeg {
      transform: rotate(180deg);
    }
  }
}
</style>