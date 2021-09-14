import CoGrid from './src'

CoGrid.install = Vue => {
    Vue.component(CoGrid.name, CoGrid);
}

export default CoGrid