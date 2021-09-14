// 导入组件
import CoSwitch from "./src";
// 为组件提供install安装方法，供按需引入
CoSwitch.install = Vue => {
    Vue.component(CoSwitch.name, CoSwitch)
}
// 暴露组件
export default CoSwitch