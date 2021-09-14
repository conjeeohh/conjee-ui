<template>
  <div>
    <h2 class="_title">Table 表格</h2>
    <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>

    <block-code title="基础表格" :code="code1">
      <template #simple>
        <co-tabs v-model="activeName1" :before-leave="beforeLeave">
          <co-tab-pane label="首页信息" name="first">Content首页信息</co-tab-pane>
          <co-tab-pane label="配置管理" name="second">Content配置管理</co-tab-pane>
          <co-tab-pane label="用户管理" name="third">Content用户管理</co-tab-pane>
        </co-tabs>
      </template>
    </block-code>

    <block-code title="选项卡样式" :code="code1">
      <template #simple>
        <co-tabs v-model="activeName2" :before-leave="beforeLeave" type="card">
          <co-tab-pane label="首页信息" name="first">Content首页信息</co-tab-pane>
          <co-tab-pane label="配置管理" name="second">Content配置管理</co-tab-pane>
          <co-tab-pane label="用户管理" name="third">Content用户管理</co-tab-pane>
        </co-tabs>
      </template>
    </block-code>

    <block-code title="卡片化" :code="code1">
      <template #simple>
        <co-tabs v-model="activeName3" :before-leave="beforeLeave" type="border-card">
          <co-tab-pane label="首页信息" name="first">Content首页信息</co-tab-pane>
          <co-tab-pane label="配置管理" name="second">Content配置管理</co-tab-pane>
          <co-tab-pane label="用户管理" name="third">Content用户管理</co-tab-pane>
        </co-tabs>
      </template>
    </block-code>

    <block-table title="Tabs Attributes" :dataList="attributesData"></block-table>

    <h2 class="simple-title">Tabs Events</h2>
    <co-table :tableData="eventsData">
      <co-table-column prop="event" label="事件名"></co-table-column>
      <co-table-column prop="explain" label="说明"></co-table-column>
      <co-table-column prop="attribute" label="参数"></co-table-column>
    </co-table>

    <block-table title="Tab-pane Attributes" :dataList="attributesData1"></block-table>

  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      activeName1: "second",
      activeName2: "first",
      activeName3: "third",
      code1: {
        html: `
    <!-- Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。 -->
    <co-tabs v-model="activeName1" :before-leave="beforeLeave">
        <co-tab-pane label="首页信息" name="first">Content首页信息</co-tab-pane>
        <co-tab-pane label="配置管理" name="second">Content配置管理</co-tab-pane>
        <co-tab-pane label="用户管理" name="third">Content用户管理</co-tab-pane>
    </co-tabs>`,
        javascript: `
    export default {
      data(){
        return {
          activeName1: 'second'
        }
      }
      methods: {
        beforeLeave(activeName, oldActiveName) {
          let a = 1;
          return new Promise((res, rej) => {
            if (a == 1) {
              console.log("res:" + activeName + "," + oldActiveName);
              res();
            } else {
              console.log("rej:" + activeName + "," + oldActiveName);
              rej();
            }
          });
        },
      }
    }
        `,
      },
      code2: {
        html: `
    <!-- 只需要设置 type 属性为 card 就可以使选项卡改变为标签风格。 -->
    <co-tabs v-model="activeName2" :before-leave="beforeLeave" type="card">
        <co-tab-pane label="首页信息" name="first">Content首页信息</co-tab-pane>
        <co-tab-pane label="配置管理" name="second">Content配置管理</co-tab-pane>
        <co-tab-pane label="用户管理" name="third">Content用户管理</co-tab-pane>
    </co-tabs>`,
        javascript: `
    export default {
      data(){
        return {
          activeName2: 'first'
        }
      }
      methods: {
        beforeLeave(activeName, oldActiveName) {
          let a = 1;
          return new Promise((res, rej) => {
            if (a == 1) {
              console.log("res:" + activeName + "," + oldActiveName);
              res();
            } else {
              console.log("rej:" + activeName + "," + oldActiveName);
              rej();
            }
          });
        },
      }
    }
        `,
      },
      code3: {
        html: `
    <!-- 将type设置为border-card。 -->
    <co-tabs v-model="activeName3" :before-leave="beforeLeave" type="border-card">
        <co-tab-pane label="首页信息" name="first">Content首页信息</co-tab-pane>
        <co-tab-pane label="配置管理" name="second">Content配置管理</co-tab-pane>
        <co-tab-pane label="用户管理" name="third">Content用户管理</co-tab-pane>
    </co-tabs>`,
        javascript: `
    export default {
      data(){
        return {
          activeName3: 'third'
        }
      }
      methods: {
        beforeLeave(activeName, oldActiveName) {
          let a = 1;
          return new Promise((res, rej) => {
            if (a == 1) {
              console.log("res:" + activeName + "," + oldActiveName);
              res();
            } else {
              console.log("rej:" + activeName + "," + oldActiveName);
              rej();
            }
          });
        },
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "value / v-model",
          explain: "绑定值，选中选项卡的 name",
          type: "string",
          option: "—",
          default: "第一个选项卡的 name",
        },
        {
          attribute: "type",
          explain: "风格类型",
          type: "string",
          option: "card/border-card",
          default: "—",
        },
        {
          attribute: "text-inside",
          explain: "进度条显示文字内置在进度条内",
          type: "boolean",
          option: "—",
          default: "false",
        },
        {
          attribute: "before-leave",
          explain:
            "切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。",
          type: "Function(activeName, oldActiveName)",
          option: "—",
          default: "—",
        },
      ],
      eventsData: [
        {
          event: "tab-click",
          explain: "tab被选中时触发",
          attribute: "被选中的标签tab实例",
        },
      ],
      attributesData1: [
        {
          attribute: "label",
          explain: "选项卡标题",
          type: "string",
          option: "—",
          default: "—",
        },
        {
          attribute: "name",
          explain: "与选项卡绑定值 value 对应的标识符，表示选项卡别名",
          type: "string",
          option: "—",
          default: "该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'",
        },
        {
          attribute: "disabled",
          explain: "是否禁用",
          type: "boolean",
          option: "—",
          default: "false",
        },
      ],
    };
  },
  methods: {
    beforeLeave(activeName, oldActiveName) {
      let a = 1;
      return new Promise((res, rej) => {
        if (a == 1) {
          console.log("res:" + activeName + "," + oldActiveName);
          res();
        } else {
          console.log("rej:" + activeName + "," + oldActiveName);
          rej();
        }
      });
    },
    handleClick(node) {
      console.log(node);
    },
  },
};
</script>

<style lang="less" scoped>
.tab {
  position: relative;
  .bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
  }
  .tab-item {
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    &:hover {
      color: #7763e9;
    }
  }
}
</style>