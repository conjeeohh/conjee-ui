// 导入组件
import CoRow from "./src";
// 为组件提供install安装方法，供按需引入
CoRow.install = Vue => {
    Vue.component(CoRow.name, CoRow)
}
// 暴露组件
export default CoRow