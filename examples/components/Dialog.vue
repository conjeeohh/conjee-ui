<template>
  <div>
    <h2 class="_title">Dialog 对话框</h2>
    <p class="_intro">在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

    <block-code title="基础用法" :code="code1">
      <template #simple>
        <co-button @click="dialogVisible1 = true">打开Dialog</co-button>
        <co-dialog :visible.sync="dialogVisible1" width="30%" title="提示">
          <p>这是一段信息</p>
          <template #footer>
            <co-button style="margin-right:20px;" @click="dialogVisible1 = false">取消</co-button>
            <co-button type="primary" @click="dialogVisible1 = false">确定</co-button>
          </template>
        </co-dialog>
      </template>
    </block-code>

    <block-code title="自定义内容" :code="code2">
      <template #simple>
        <co-button @click="dialogVisible2 = true">打开Dialog</co-button>
        <co-dialog :visible.sync="dialogVisible2" title="title">
          <co-select>
            <co-option label="宝山区" value="宝山区"></co-option>
            <co-option label="普陀区" value="普陀区"></co-option>
          </co-select>
          <div slot="footer">
            <co-button style="margin-right:20px;" @click="dialogVisible2 = false">取消</co-button>
            <co-button type="primary" @click="dialogVisible2 = false">确定</co-button>
          </div>
        </co-dialog>
      </template>
    </block-code>

    <block-table title="Dialog Attributes" :dataList="attributesData"></block-table>

    <h2 class="simple-title">Dialog Events</h2>
    <co-table :tableData="eventsData">
      <co-table-column prop="event" label="事件名"></co-table-column>
      <co-table-column prop="explain" label="说明"></co-table-column>
    </co-table>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  data() {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      code1: {
        html: `
    <!-- 
        需要设置visible属性，它接收Boolean，当为true时显示 Dialog。
        Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。
        title属性用于定义标题，它是可选的，默认值为空 
    -->
    <co-button @click="dialogVisible1 = true">打开Dialog</co-button>
    <co-dialog :visible.sync="dialogVisible1" width="30%" title="提示">
        <p>这是一段信息</p>
        <template #footer>
            <co-button style="margin-right:20px;" @click="dialogVisible1 = false">取消</co-button>
            <co-button type="primary" @click="dialogVisible1 = false">确定</co-button>
        </template>
    </co-dialog>`,
        javascript: `
    export default {
      data () {
        return {
          dialogVisible1:false,
        }
      }
    }
        `,
      },
      code2: {
        html: `
    <!-- 
        需要设置visible属性，它接收Boolean，当为true时显示 Dialog。
        Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。
        title属性用于定义标题，它是可选的，默认值为空 
    -->
    <co-button @click="dialogVisible2 = true">打开Dialog</co-button>
    <co-dialog :visible.sync="dialogVisible2" title="title">
        <co-select>
            <co-option label="宝山区" value="宝山区"></co-option>
            <co-option label="普陀区" value="普陀区"></co-option>
        </co-select>
        <div slot="footer">
            <co-button style="margin-right:20px;" @click="dialogVisible2 = false">取消</co-button>
            <co-button type="primary" @click="dialogVisible2 = false">确定</co-button>
        </div>
    </co-dialog>`,
        javascript: `
    export default {
      data () {
        return {
          dialogVisible2:false,
        }
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "visible",
          explain: "是否显示Dialog,支持.sync修饰符",
          type: "boolean",
          option: "true/false",
          default: "false",
        },
        {
          attribute: "title",
          explain: "Dialog的标题",
          type: "string",
          option: "-",
          default: "title",
        },
        {
          attribute: "width",
          explain: "Dialog的宽度",
          type: "string",
          option: "-",
          default: "50%",
        },
        {
          attribute: "top",
          explain: "Dialog至页面顶部的距离",
          type: "string",
          option: "-",
          default: "15vh",
        },
      ],
      eventsData: [
        {
          event: "closed",
          explain: "Dialog关闭的回调",
        },
        {
          event: "opened",
          explain: "Dialog打开的回调",
        },
      ],
    };
  },
};
</script>

<style>
</style>