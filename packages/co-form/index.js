import CoForm from './src'

CoForm.install = Vue => {
    Vue.component(CoForm.name, CoForm)
}
// 暴露组件
export default CoForm