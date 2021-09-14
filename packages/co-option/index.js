// 导入组件
import CoOption from "./src";
// 为组件提供install安装方法，供按需引入
CoOption.install = Vue => {
    Vue.component(CoOption.name, CoOption)
}
// 暴露组件
export default CoOption