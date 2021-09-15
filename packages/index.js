import Vue from 'vue'
// 导入组件
import CoButton from './co-botton'
import CoIcon from './co-icon'
import CoInput from './co-input'
import CoInputpro from './co-inputpro'
import CoSelect from './co-select'
import CoOption from './co-option'

import BlockCode from './block-code'
import BlockTable from './block-table'

import CoTable from './co-table'
import CoTableColumn from './co-table-column'
import CoCheckbox from './co-checkbox'
import CoCheckboxGroup from './co-checkbox-group'
import CoRadio from './co-radio'
import CoRadioButton from './co-radio-button'
import CoRadioGroup from './co-radio-group'
import CoSwitch from './co-switch'
import CoCard from './co-card'
import CoProgress from './co-progress'
import Message from './co-message'
import CoRow from './co-row'
import CoCol from './co-col'
import CoDivider from './co-divider'
import CoDialog from './co-dialog'
import CoForm from './co-form'
import CoFormItem from './co-form-item'
import CoTabs from './co-tabs'
import CoTabPane from './co-tab-pane'
import CoPagination from './co-pagination'
import './css/global.css'

Vue.use(Message)
// 所有组件列表
const components = [
    CoButton,
    CoIcon,
    CoInput,
    CoInputpro,
    CoSelect,
    CoOption,
    BlockCode,
    BlockTable,
    CoTable,
    CoTableColumn,
    CoCheckbox,
    CoCheckboxGroup,
    CoRadio,
    CoRadioGroup,
    CoSwitch,
    CoCard,
    CoProgress,
    CoRow,
    CoCol,
    CoDivider,
    CoDialog,
    CoForm,
    CoFormItem,
    CoRadioButton,
    CoTabs,
    CoTabPane,
    CoPagination
]

// 定义install方法  供全局引入
const install = function (Vue) {
    // 判断是否安装，安装过就不继续往下执行
    if (install.installed) return install.installed = true
    // 遍历注册所有组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export {
    install,
    CoButton,
    CoIcon,
    CoInput,
    CoInputpro,
    CoSelect,
    CoOption,
    BlockCode,
    BlockTable,
    CoTable,
    CoTableColumn,
    CoCheckbox,
    CoCheckboxGroup,
    CoRadio,
    CoRadioGroup,
    CoSwitch,
    CoCard,
    CoProgress,
    CoRow,
    CoCol,
    CoDivider,
    CoDialog,
    CoForm,
    CoFormItem,
    CoRadioButton,
    CoTabs,
    CoTabPane,
    CoPagination
}
// 暴露组件
export default {
    // 导出的对象必须具有install，才能被Vue.use()方法安装
    install,
    // 具体组件列表
    CoButton,
    CoIcon,
    CoInput,
    CoInputpro,
    CoSelect,
    CoOption,
    BlockCode,
    BlockTable,
    CoTable,
    CoTableColumn,
    CoCheckbox,
    CoCheckboxGroup,
    CoRadio,
    CoRadioGroup,
    CoSwitch,
    CoCard,
    CoProgress,
    CoRow,
    CoCol,
    CoDivider,
    CoDialog,
    CoForm,
    CoFormItem,
    CoRadioButton,
    CoTabs,
    CoTabPane,
    CoPagination
}
