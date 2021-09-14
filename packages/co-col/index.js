// 导入组件
import CoCol from "./src";
// 为组件提供install安装方法，供按需引入
CoCol.install = Vue => {
    Vue.component(CoCol.name, CoCol)
}
// 暴露组件
export default CoCol