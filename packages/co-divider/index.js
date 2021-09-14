// 导入组件
import CoDivider from "./src";
// 为组件提供install安装方法，供按需引入
CoDivider.install = Vue => {
    Vue.component(CoDivider.name, CoDivider)
}
// 暴露组件
export default CoDivider