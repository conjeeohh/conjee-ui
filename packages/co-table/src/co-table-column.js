export default {
    name: "CoTableColumn",
    data() {
        return {
            index: 0,
            parent: {}
        }
    },
    props: {
        label: String,
        prop: String,
        width: String,
    },
    computed: {
        column() {
            return {
                'label': this.label,
                'prop': this.prop,
                'index': this.index,
                'slot': this.$slots.default,
                'width': this.width
            }
        },
        tableStore() {
            return this.parent.tableStore;
        }
    },
    created() {
        this.parent = this.$parent;
    },
    mounted() {
        this.tableStore.commit('addColumn', this.column)
    },
    render: function (createElement) {
        return createElement('div', this.$slots.default)
    },
};