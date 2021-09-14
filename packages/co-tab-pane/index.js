// 导入组件
import CoTabPane from "./src";
// 为组件提供install安装方法，供按需引入
CoTabPane.install = Vue => {
    Vue.component(CoTabPane.name, CoTabPane)
}
// 暴露组件
export default CoTabPane