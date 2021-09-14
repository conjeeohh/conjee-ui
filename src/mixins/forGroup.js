export default {
    methods: {
        mixin_isGroup(componentTag) {
            // 取parent
            let parent = this.$parent;
            // 查找父级节点是否有group，有则为单选组，无则不是单选组
            while (parent) {
                if (parent.$options._componentTag !== componentTag) {
                    parent = parent.$parent;
                } else {
                    this['_Group'] = parent;
                    return true;
                }
            }
            return false;
        },
    },
}