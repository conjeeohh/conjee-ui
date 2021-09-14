// 导入组件
import CoPagination from "./src";
// 为组件提供install安装方法，供按需引入
CoPagination.install = Vue => {
    Vue.component(CoPagination.name, CoPagination)
}
// 暴露组件
export default CoPagination