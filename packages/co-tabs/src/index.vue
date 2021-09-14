<script>
export default {
  name: "CoTabs",
  provide() {
    return {
      Tab: this,
    };
  },
  data() {
    return {
      // labelList: [],
      currentWidth: 0,
      currentOffsetLeft: 0,
      tablist: [],
      initialTabIndex: 0,
    };
  },
  props: {
    value: String,
    type: String,
    "text-inside": {
      type: Boolean,
      default: false,
    },
    "before-leave": Function,
  },
  computed: {
    // 初始选中tab
    initialTab() {
      return this.$refs[`tabItem${this.initialTabIndex}`];
    },
  },
  mounted() {
    // this.currentOffsetLeft
    // 初始化下划线宽度和位置
    this.updateLine(this.initialTabIndex, this.initialTab);
  },
  methods: {
    // 点击tab更新当前页以及下划线
    handlerTab(item, index, event) {
      // console.log(item);
      this.$emit("input", item.name);
      this.updateLine(index, event.target);
    },
    // 更新选中下划线
    updateLine(index, element) {
      if (!this.type) {
        if (index === 0) {
          this.currentWidth = element.offsetWidth - 20;
          this.currentOffsetLeft = 0;
        } else if (index === this.tablist.length - 1) {
          this.currentWidth = element.offsetWidth - 20;
          this.currentOffsetLeft = element.offsetLeft + 20;
        } else {
          this.currentWidth = element.offsetWidth - 40;
          this.currentOffsetLeft = element.offsetLeft + 20;
        }
      } else if (this.type === "card" || this.type === "border-card") {
        this.currentWidth = element.offsetWidth;
        this.currentOffsetLeft = element.offsetLeft;
      }
    },
  },
  render(createElement) {
    const _this = this;
    const slotList = this.$slots.default;
    // console.log(slotList);
    let vnodeObj = {};
    let labelList = [];
    slotList.map((vnode, index) => {
      // 将vnode依次添加到数组中，以name:vnode形式存储。便于后面渲染动态组件
      vnodeObj[vnode.componentOptions.propsData.name] = vnode;
      // 解构赋值获取name，label
      let { name, label } = vnode.componentOptions.propsData;
      // 依次添加name label  便于渲染tab
      labelList.push({ name, label });
      // 记录初始选择tab索引
      if (name === _this.value) {
        _this.initialTabIndex = index;
      }
    });
    _this.tablist = labelList;
    // console.log(vnodeObj);
    return createElement(
      "div",
      {
        class: [
          "co-tabs",
          _this.type === "border-card" ? "co-tab_border-card" : "",
        ],
      },
      [
        createElement(
          "div",
          {
            class: [
              "tab",
              _this.type === "card" ? "tab_card" : "",
              _this.type === "border-card" ? "tab_card tab_border-card" : "",
            ],
          },
          [
            createElement("div", {
              class: [
                "tab-bar",
                _this.type === "card" || _this.type === "border-card"
                  ? "tab-bar_card"
                  : "",
              ],
              style: {
                width: `${_this.currentWidth}px`,
                transform: `translateX(${_this.currentOffsetLeft}px)`,
              },
            }),
            labelList.map((item, index) => {
              return createElement(
                "div",
                {
                  class: [
                    "tab-item",
                    index === 0 ? "tab-item_first" : "",
                    index === labelList.length - 1 ? "tab-item_last" : "",
                    `tab-item_${_this.type}`,
                    _this.type === "card" && index === 0
                      ? "tab-item_first-Radius"
                      : "",
                    _this.type === "card" && index === labelList.length - 1
                      ? "tab-item_right-border"
                      : "",
                    item.name === _this.value ? "tab-item_pickOn-color" : "",
                    _this.type === "border-card" && item.name === _this.value
                      ? "tab-item_pickOn-border-card"
                      : "",
                  ],
                  ref: `tabItem${index}`,
                  on: {
                    click(event) {
                      _this.handlerTab(item, index, event);
                    },
                  },
                },
                item.label
              );
            }),
          ]
        ),
        createElement(
          "div",
          {
            class: [
              "main",
              _this.type === "border-card" ? "co-tab_main-card" : "",
            ],
          },
          [vnodeObj[this.value]]
        ),
      ]
    );
  },
};
</script>

<style lang="less" scoped>
.tab {
  position: relative;
  margin-bottom: 15px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #e4e7ed;
  }
  .tab-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #7763e9;
    z-index: 1;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .tab-bar_card {
    background-color: #fff;
    height: 1px;
  }
  .tab-item {
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: #7763e9;
    }
  }
  .tab-item_first {
    padding: 0 20px 0 0;
  }
  .tab-item_last {
    padding: 0 0 0 20px;
  }
  .tab-item_card {
    border: 1px solid #e4e7ed;
    border-right: none;
    padding: 0 20px;
  }
  .tab-item_first-Radius {
    border-top-left-radius: 5px;
  }
  .tab-item_right-border {
    border-right: 1px solid #e4e7ed;
    border-top-right-radius: 5px;
  }
  .tab-item_border-card {
    padding: 0 20px;
  }
  .tab-item_pickOn-color {
    color: #7763e9;
  }
  .tab-item_pickOn-border-card {
    background-color: #fff;
    border-right: 1px solid #e4e7ed;
  }
}
.tab_card {
  &::after {
    height: 1px;
  }
}
.tab_border-card {
  background-color: #f5f7fa;
  margin-bottom: 0;
}
.co-tab_border-card {
  background: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.co-tab_main-card {
  padding: 15px;
}
</style>