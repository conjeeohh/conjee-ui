// 导入组件
import CoCheckboxGroup from "./src";
// 为组件提供install安装方法，供按需引入
CoCheckboxGroup.install = Vue => {
    Vue.component(CoCheckboxGroup.name, CoCheckboxGroup)
}
// 暴露组件
export default CoCheckboxGroup