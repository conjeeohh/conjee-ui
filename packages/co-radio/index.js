// 导入组件
import CoRadio from "./src";
// 为组件提供install安装方法，供按需引入
CoRadio.install = Vue => {
    Vue.component(CoRadio.name, CoRadio)
}
// 暴露组件
export default CoRadio