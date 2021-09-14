// 导入组件
import BlockTable from "./src";
// 为组件提供install安装方法，供按需引入
BlockTable.install = Vue => {
    Vue.component(BlockTable.name, BlockTable)
}
// 暴露组件
export default BlockTable