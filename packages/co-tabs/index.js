// 导入组件
import CoTabs from "./src";
// 为组件提供install安装方法，供按需引入
CoTabs.install = Vue => {
    Vue.component(CoTabs.name, CoTabs)
}
// 暴露组件
export default CoTabs