// 导入组件
import CoCard from "./src";
// 为组件提供install安装方法，供按需引入
CoCard.install = Vue => {
    Vue.component(CoCard.name, CoCard)
}
// 暴露组件
export default CoCard