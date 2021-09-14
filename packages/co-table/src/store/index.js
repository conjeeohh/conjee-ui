const TableStore = function (form, initialState = {}) {
    // 将父组件的示例保存在Store里面
    if (!form) {
        throw new Error('Form is required.')
    }
    this.form = form

    this.states = {
        columns: []
    }
    // initialState 里面的值必须是 this.states声明过的，这样所有状态的变化应该都在store里面可以查找，并由store控制
    for (let prop in initialState) {
        if (Object.prototype.hasOwnProperty.call(initialState, prop) && Object.prototype.hasOwnProperty.call(this.states, prop)) {
            this.states[prop] = initialState[prop]
        }
    }
}


TableStore.prototype.mutations = {
    addColumn: function (states, column) {
        states.columns = [...states.columns, column]
    }
}


// 定义
TableStore.prototype.commit = function (name, ...args) {
    const mutations = this.mutations
    console.log('emit', name)
    if (mutations[name]) {
        // states 作为第一个参数
        mutations[name].apply(this, [this.states].concat(args))
    } else {
        throw new Error(`Action not found: ${name}`)
    }
}
// 分发事件
// this.store.commit('setFormItemToHandle', val)
export default TableStore