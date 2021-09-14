// 导入组件
import CoRadioGroup from "./src";
// 为组件提供install安装方法，供按需引入
CoRadioGroup.install = Vue => {
    Vue.component(CoRadioGroup.name, CoRadioGroup)
}
// 暴露组件
export default CoRadioGroup