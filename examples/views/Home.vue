<template>
  <div class="container">
    <!-- 头部 start-->
    <div :class="[viewport.width < 758 ? 'mini-header':'header']">
      <svg class="icon header_icon" aria-hidden="true" v-if="viewport.width < 758" @click="setMenuVisible">
        <use :xlink:href="`#icon-toggle-${headerIconName}`"></use>
      </svg>
      <svg class="icon logo" aria-hidden="true">
        <use :xlink:href="`#icon-zhou`"></use>
      </svg>
      <h2>{{brandName}}</h2>
    </div>
    <!-- 头部 end -->

    <div class="article" ref="article">
      <!-- 侧边导航栏 -->
      <div class="aside" v-if="viewport.width >= 758">
        <ul v-for="menu in menuList" :key="menu.label" class="asideUl">
          <h4 class="asideMenuH4">{{menu.label}}</h4>
          <li class="asideMenuSingle" v-for="single in menu.children" :key="single.label">
            <a :href="single.path">{{single.label}}</a>
          </li>
        </ul>
      </div>
      <transition name="miniaside">
        <div class="aside miniaside" v-if="viewport.width < 758 && menuVisible">
          <ul v-for="menu in menuList" :key="menu.label" class="asideUl">
            <h4 class="asideMenuH4">{{menu.label}}</h4>
            <li class="asideMenuSingle" v-for="single in menu.children" :key="single.label" @click="menuVisible = false">
              <a :href="single.path">{{single.label}}</a>
            </li>
          </ul>
        </div>
      </transition>

      <!-- 主体内容 -->
      <div class="main">

        <transition mode="out-in" v-if="viewport.width >= 758">
          <router-view></router-view>
        </transition>
        <router-view v-else></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {
      active: 1,
      brandName: "CONJEE-UI",
      menuList: [
        {
          label: "开发指南",
          children: [
            /* {
              id: 1,
              label: "安装",
              path: "#/component/install",
            }, */
            {
              id: 2,
              label: "快速上手",
              path: "#/component/quickstart",
            },
          ],
        },
        {
          label: "通用",
          children: [
            {
              id: 5,
              label: "icon 图标",
              path: "#/component/icon",
            },
            {
              id: 6,
              label: "button 按钮",
              path: "#/component/button",
            },
            {
              label: "Grid 栅格",
              path: "#/component/grid",
            },
          ],
        },
        {
          label: "导航",
          children: [
            {
              id: 11,
              label: "pagination 分页",
              path: "#/component/pagination",
            },
            {
              id: 16,
              label: "Tabs 标签页",
              path: "#/component/tabs",
            },
          ],
        },
        {
          label: "数据录入",
          children: [
            {
              id: 3,
              group: "Basic",
              label: "input 输入框",
              path: "#/component/input",
            },
            {
              id: 4,
              label: "input pro",
              path: "#/component/inputpro",
            },
            {
              id: 8,
              label: "select 下拉",
              path: "#/component/select",
            },
            {
              id: 10,
              label: "checkbox 多选框",
              path: "#/component/checkbox",
            },
            {
              id: 14,
              label: "radio 单选",
              path: "#/component/radio",
            },
            {
              id: 17,
              label: "Switch 开关",
              path: "#/component/switch",
            },
            {
              id: 18,
              label: "Form 表单",
              path: "#/component/form",
            },
          ],
        },
        {
          label: "数据展示",
          children: [
            {
              id: 7,
              label: "table 表格",
              path: "#/component/table",
            },
            {
              id: 12,
              label: "card 卡片",
              path: "#/component/card",
            },
            {
              id: 15,
              label: "Progress 进度条",
              path: "#/component/progress",
            },
            {
              label: "Divider 分割线",
              path: "#/component/divider",
            },
          ],
        },
        {
          label: "反馈",
          children: [
            {
              id: 9,
              label: "Message 消息提示",
              path: "#/component/message",
            },

            {
              id: 13,
              label: "dialog 对话框",
              path: "#/component/dialog",
            },
          ],
        },
      ],
      viewport: {},
      menuVisible: false,
    };
  },
  computed: {
    headerIconName() {
      return this.menuVisible ? "left" : "right";
    },
  },
  methods: {
    getViewPort() {
      this.viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      this.updateAsideHeight();
    },
    // 更新aside高度
    updateAsideHeight() {
      this.$refs.article.style.height = `${this.viewport.height}px`;
    },
    // 设置侧边栏可见性
    setMenuVisible() {
      this.menuVisible = !this.menuVisible;
    },
  },
  mounted() {
    this.getViewPort();
    const _this = this;
    window.addEventListener("resize", function () {
      _this.getViewPort();
    });
    if (this.viewport.width < 758) {
      // alert("本网站移动端文档尚在完善中...，建议使用pad或者电脑查看");
    }
  },
};
</script>


<style scoped lang="less">
// 过渡
.v-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.v-leave-active {
  transition: all 0.5s linear;
}
.miniaside-leave-to,
.miniaside-enter {
  transform: translateX(-100%);
  // opacity: 0;
}

.miniaside-leave-active {
  transition: all 0.6s linear;
}
// 过渡 end

@color: #7763e9;

a {
  text-decoration: none;
  outline: none;
  border: none;
}
a:-webkit-any-link:focus {
  outline: none !important;
  outline-offset: 0px !important;
}
a:focus {
  outline: none !important;
  outline-offset: 0px !important;
}
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .header,
  .mini-header {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    padding-left: 40px;
    width: 100%;
    height: 80px;
    line-height: 80px;

    z-index: 99999;
    background: white;
    border-bottom: 1px solid @color;
    .logo {
      margin-right: 16px;
      width: 2.5em;
      height: 2.5em;
    }
    h2 {
      display: inline-block;
      color: @color;
    }
  }
  .mini-header {
    justify-content: center;
    h2 {
      display: none;
    }
    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 3em;
      height: 3em;
      transform: translate(-50%, -50%);
    }
    .header_icon {
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      font-size: 20px;
    }
  }
  .article {
    box-sizing: border-box;
    display: flex;
    padding-top: 80px;
    .aside {
      width: 240px;
      height: 100%;
      box-sizing: border-box;
      padding-left: 40px;
      background-color: #fff;
      overflow: scroll;
      // &::-webkit-scrollbar {
      //   display: none;
      // }
      // &:hover::-webkit-scrollbar {
      //   display: block;
      // }
      .asideUl {
        margin-top: 20px;
      }
      .asideMenuH4 {
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        color: #999;
        border-bottom: 1px solid #eee;
        font-weight: 400;
        margin-bottom: 10px;
      }
      .asideMenuSingle {
        height: 40px;
        line-height: 40px;
        color: rgba(0, 0, 0, 0.85);
        a {
          display: block;
          height: 100%;
          color: rgba(0, 0, 0, 0.85);
          cursor: pointer;
          font-size: 14px;
          &:hover,
          &:focus {
            color: @color;
          }
        }
      }
    }
    .miniaside {
      position: absolute;
      background-color: #fff;
      z-index: 1;
      transition: all 0.4s;
    }
    .main {
      position: relative;
      flex: 1;
      height: 100%;
      padding: 20px 60px;
      overflow: scroll;
      &::-webkit-scrollbar {
        width: 7px;
      }
      &::-webkit-scrollbar-thumb {
        /* 滚动条里面小方块 */
        background: #ddd;
        border-radius: 5px;
        height: 10px;
      }
    }
  }
}
</style>
