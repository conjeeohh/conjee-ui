// 导入组件
import CoRadioButton from "./src";
// 为组件提供install安装方法，供按需引入
CoRadioButton.install = Vue => {
    Vue.component(CoRadioButton.name, CoRadioButton)
}
// 暴露组件
export default CoRadioButton