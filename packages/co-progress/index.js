// 导入组件
import CoProgress from "./src";
// 为组件提供install安装方法，供按需引入
CoProgress.install = Vue => {
    Vue.component(CoProgress.name, CoProgress)
}
// 暴露组件
export default CoProgress