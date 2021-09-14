// 导入组件
import CoTableColumn from "../co-table/src/co-table-column";
// 为组件提供install安装方法，供按需引入
CoTableColumn.install = Vue => {
    Vue.component(CoTableColumn.name, CoTableColumn)
}
// 暴露组件
export default CoTableColumn