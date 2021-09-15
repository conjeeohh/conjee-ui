<template>
  <div class="quickstart">
    <h2>安装</h2>
    <!-- npm安装 start -->
    <div class="install">
      <h3>npm安装</h3>
      <p>推荐使用npm的方式安装，它能更好地和webpack打包工具配合使用</p>
      <pre v-highlightjs="code1"><code class="npm"></code></pre>
    </div>
    <!-- end -->

    <!-- CDN安装 start
    <div class="install">
      <h3>CDN</h3>
      <p>目前可以通过 unpkg.com/conjee-ui 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</p>
      <pre v-highlightjs="code2"><code class="html"></code></pre>
    </div> -->

    <h2 style="margin-top:50px">快速上手</h2>
    <div class="install">
      <h3>引入 ConjeeUi</h3>
      <h4>完整引入</h4>
      <p>在 main.js 中写入以下内容：</p>
      <pre v-highlightjs="code3"><code class="javascript"></code></pre>

      <p>以上代码便完成了 conjee-ui 的引入。需要注意的是，样式文件需要单独引入。</p>
    </div>
    <div class="install">
      <h4>按需引入</h4>
      <p>如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：</p>
      <pre v-highlightjs="code4"><code class="javascript"></code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quickstart",
  data() {
    return {
      code1: `
    npm i conjee-ui
      `,
      code2: `
    <!-- 引入样式 -->
    <link rel='stylesheet' href='https://unpkg.com/sxd-ui/css/index.css'>
    <!-- 引入组件库 -->
    <script src='https://unpkg.com/sxd-ui/lib/index.js'><${"/"}script>
      `,
      code3: `
    import Vue from 'vue'
    import ConjeeUi from 'conjee-ui'
    import "conjee-ui/lib/conjee-ui.css"
    import App from './App.vue'

    Vue.use(ConjeeUi)

    new Vue({
      el: '#app',
      render: h => h(App)
    })
      `,
      code4: `
    import Vue from 'vue'
    import { CoButton, CoSelect } from 'conjee-ui'
    import "conjee-ui/lib/conjee-ui.css"

    Vue.component(CoButton.name, CoButton)
    Vue.component(CoSelect.name, CoSelect)
    /* 或写为
    * Vue.use(CoButton)
    * Vue.use(CoSelect)
    */
      `,
    };
  },
};
</script>

<style lang="less" scoped>
.quickstart {
  overflow: hidden;
  color: #1f2f3d;
  h2 {
    font-size: 28px;
    font-weight: 400;
  }
  .install {
    margin-bottom: 20px;
    h3 {
      margin: 55px 0 20px;
      font-size: 22px;
      font-weight: 400;
    }
    p {
      margin: 14px 0;
      color: #5e6d82;
    }
  }
}
pre {
  border-radius: 7px;
  margin: 1em 0;
}
</style>