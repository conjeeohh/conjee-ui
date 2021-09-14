// 导入组件
import CoCheckbox from "./src";
// 为组件提供install安装方法，供按需引入
CoCheckbox.install = Vue => {
    Vue.component(CoCheckbox.name, CoCheckbox)
}
// 暴露组件
export default CoCheckbox