<template>
  <div>
    <h2 class="_title">Switch 开关</h2>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>

    <block-code title="基础用法" :code="code1">
      <template #simple>
        <co-form label-width="80px" :model="form">
          <co-form-item label="活动名称">
            <co-inputpro v-model="form.name" style="width:200px"></co-inputpro>
          </co-form-item>
          <co-form-item label="活动区域">
            <co-select v-model="form.region" style="width:200px">
              <co-option label="宝山区" value="宝山区"></co-option>
              <co-option label="普陀区" value="普陀区"></co-option>
            </co-select>
          </co-form-item>
          <co-form-item label="即时配送">
            <co-switch v-model="form.delivery"></co-switch>
          </co-form-item>
          <co-form-item label="活动性质">
            <co-checkbox-group v-model="form.type">
              <co-checkbox label="美食"></co-checkbox>
              <co-checkbox label="主题活动"></co-checkbox>
              <co-checkbox label="品牌曝光"></co-checkbox>
            </co-checkbox-group>
          </co-form-item>
          <co-form-item label="活动资源">
            <co-radio-group v-model="form.resource">
              <co-radio label="线上品牌商赞助">线上品牌商赞助</co-radio>
              <co-radio label="线下场地免费">线下场地免费</co-radio>
            </co-radio-group>
          </co-form-item>
          <co-form-item>
            <co-button type="primary">立即创建</co-button>
            <co-button style="margin-left:10px">取消</co-button>
          </co-form-item>
        </co-form>
      </template>
    </block-code>

    <block-code title="对齐方式" :code="code2">
      <template #simple>
        <co-radio-group v-model="labelPosition" size="small" style="margin-bottom:30px">
          <co-radio-button label="left">左对齐</co-radio-button>
          <co-radio-button label="right">右对齐</co-radio-button>
          <co-radio-button label="top">顶部对齐</co-radio-button>
        </co-radio-group>
        <co-form :label-position="labelPosition" label-width="auto" :model="form2">
          <co-form-item label="名称">
            <co-inputpro v-model="form2.name" style="width:200px"></co-inputpro>
          </co-form-item>
          <co-form-item label="活动区域">
            <co-select v-model="form2.region" style="width:200px">
              <co-option label="宝山区" value="宝山区"></co-option>
              <co-option label="普陀区" value="普陀区"></co-option>
            </co-select>
          </co-form-item>
        </co-form>
      </template>
    </block-code>

    <block-table title="Form Attributes" :dataList="attributesData"></block-table>

  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        name: "",
        region: "",
        delivery: "",
        type: [],
        resource: "",
      },
      labelPosition: "left",
      form2: {
        name: "",
        region: "",
      },
      code1: {
        html: `
    <!-- 在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker -->
    <co-form label-width="80px" :model="form">
        <co-form-item label="活动名称">
            <co-inputpro v-model="form.name" style="width:200px"></co-inputpro>
        </co-form-item>
        <co-form-item label="活动区域">
            <co-select v-model="form.region" style="width:200px">
                <co-option label="宝山区" value="宝山区"></co-option>
                <co-option label="普陀区" value="普陀区"></co-option>
            </co-select>
        </co-form-item>
        <co-form-item label="即时配送">
            <co-switch v-model="form.delivery"></co-switch>
        </co-form-item>
        <co-form-item label="活动性质">
            <co-checkbox-group v-model="form.type">
                <co-checkbox label="美食"></co-checkbox>
                <co-checkbox label="主题活动"></co-checkbox>
                <co-checkbox label="品牌曝光"></co-checkbox>
            </co-checkbox-group>
        </co-form-item>
        <co-form-item label="活动资源">
            <co-radio-group v-model="form.resource">
                <co-radio label="线上品牌商赞助">线上品牌商赞助</co-radio>
                <co-radio label="线下场地免费">线下场地免费</co-radio>
            </co-radio-group>
        </co-form-item>
        <co-form-item>
            <co-button type="primary">立即创建</co-button>
            <co-button style="margin-left:10px">取消</co-button>
        </co-form-item>
    <co-form>`,
        javascript: `
    export default {
      data () {
        return {
          form: {
            name: "",
            region: "",
            delivery: "",
            type: [],
            resource: "",
          },
        }
      }
    }
        `,
      },
      code2: {
        html: `
    <!-- 通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left，当设为 top 时标签会置于表单域的顶部 -->
    <co-radio-group v-model="labelPosition" size="small" style="margin-bottom:30px">
        <co-radio-button label="left">左对齐</co-radio-button>
        <co-radio-button label="right">右对齐</co-radio-button>
        <co-radio-button label="top">顶部对齐</co-radio-button>
    </co-radio-group>
    <co-form :label-position="labelPosition" label-width="auto" :model="form2">
        <co-form-item label="名称">
            <co-inputpro v-model="form2.name" style="width:200px"></co-inputpro>
        </co-form-item>
        <co-form-item label="活动区域">
            <co-select v-model="form2.region" style="width:200px">
                <co-option label="宝山区" value="宝山区"></co-option>
                <co-option label="普陀区" value="普陀区"></co-option>
            </co-select>
        </co-form-item>
    </co-form>`,
        javascript: `
    export default {
      data () {
        return {
          labelPosition: "left",
          form2: {
            name: "",
            region: "",
          },
        }
      }
    }
        `,
      },
      attributesData: [
        {
          attribute: "model",
          explain: "表单数据对象",
          type: "object",
          option: "-",
          default: "-",
        },
        {
          attribute: "rules",
          explain: "表单验证规则",
          type: "object",
          option: "-",
          default: "-",
        },
        {
          attribute: "label-position",
          explain:
            "表单域标签的位置，如果值为left或者right，则需要设置label-width",
          type: "string",
          option: "right/left/top",
          default: "right",
        },
        {
          attribute: "label-width",
          explain:
            "表单域标签的宽度。例如'50px'。作为Form直接子元素的form-item会继承该值，支持auto",
          type: "string",
          option: "-",
          default: "-",
        },
        {
          attribute: "hideAsterisk",
          explain: "是否隐藏必填字段的标签旁边的红色星号",
          type: "boolean",
          option: "-",
          default: "false",
        },
        {
          attribute: "show-message",
          explain: "是否显示校验错误信息",
          type: "boolean",
          option: "-",
          default: "true",
        },
      ],
    };
  },
};
</script>

<style>
</style>