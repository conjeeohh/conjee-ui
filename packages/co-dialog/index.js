// 导入组件
import CoDialog from "./src";
// 为组件提供install安装方法，供按需引入
CoDialog.install = Vue => {
    Vue.component(CoDialog.name, CoDialog)
}
// 暴露组件
export default CoDialog