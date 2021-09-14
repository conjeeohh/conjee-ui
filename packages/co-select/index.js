// 导入组件
import CoSelect from "./src";
// 为组件提供install安装方法，供按需引入
CoSelect.install = Vue => {
    Vue.component(CoSelect.name, CoSelect)
}
// 暴露组件
export default CoSelect