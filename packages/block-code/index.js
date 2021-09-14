// 导入组件
import BlockCode from "./src";
// 为组件提供install安装方法，供按需引入
BlockCode.install = Vue => {
    Vue.component(BlockCode.name, BlockCode)
}
// 暴露组件
export default BlockCode