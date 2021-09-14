// 导入组件
import CoButton from "./src";
// 为组件提供install安装方法，供按需引入
CoButton.install = Vue => {
    Vue.component(CoButton.name, CoButton)
}
// 暴露组件
export default CoButton