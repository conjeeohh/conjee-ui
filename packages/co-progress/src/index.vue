<template>
  <div class="co-progress">
    <div class="co-progress_bar" :style="`height:${strokeWidth}px; border-radius:${strokeWidth/2}px`">
      <!-- 
      percentage 进度百分比
      stroke-width 自定义进度条高度
      color 进度条
      format 进度条显示文字
      text-inside 放置到进度条内部的描述
      type  进度条样式类型
      status 进度条状态。对应几个经典颜色
     -->
      <div :class="['co-progress_inner',status ? `co-progress_inner-${status}` : '']" :style="`
          height:${strokeWidth}px; 
          border-radius:${strokeWidth/2}px;
          width:${percentage}%;
          background-color:${currentColor};
          `">
        <span class="co-progress_text-inside" v-if="textInside" :style="textColor ? `color:${textColor}`: ''">{{formatText || `${percentage}%`}}</span>
      </div>
    </div>
    <span v-if="!textInside" :style="textColor ? `color:${textColor}`: ''">{{formatText || `${percentage}%`}}</span>
  </div>

</template>

<script>
export default {
  name: "CoProgress",
  data() {
    return {};
  },
  props: {
    "stroke-width": {
      type: Number,
      default: 6,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    color: {
      type: [String, Function, Array],
    },
    format: Function,
    type: String,
    status: String,
    "text-inside": {
      type: Boolean,
      default: false,
    },
    "text-color": String,
  },
  computed: {
    formatText() {
      return this.format ? this.format(this.percentage) : "";
    },
    currentColor() {
      if (this.color instanceof Function) {
        return this.color(this.percentage);
      } else if (this.color instanceof Array) {
        this.color.forEach((item) => {
          if (this.percentage >= item.percentage) {
            return item.color;
          }
        });
      } else if (typeof this.color === "string") {
        return this.color;
      }
      return "";
    },
  },
};
</script>

<style lang="less" scoped>
.co-progress {
  display: flex;
  align-items: center;
  .co-progress_bar {
    display: inline-block;
    position: relative;
    width: 300px;
    margin-right: 5px;
    background-color: #ebeef5;
    .co-progress_inner {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #7763e9;
      transition: width 0.6s;
    }
    .co-progress_inner-success {
      background-color: #0eb83a;
    }
    .co-progress_inner-exception {
      background-color: #ff7e67;
    }
    .co-progress_inner-warning {
      background-color: #ff461f;
    }
  }
  .co-progress_text-inside {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    color: #fcf6f6;
  }
}
</style>