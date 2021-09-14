export default {
    name: "TableLayout",
    props: ['vnode'],
    render(createElement) {
        return createElement('div', this.vnode);
    },
}