// 导入组件
import CoTable from "./src";
// 为组件提供install安装方法，供按需引入
CoTable.install = Vue => {
    Vue.component(CoTable.name, CoTable)
}
// 暴露组件
export default CoTable