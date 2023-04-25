import Vuex from 'vuex'
import { defineClientConfig } from '@vuepress/client'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
// import mermaid from "./mermaid";
// import Styles from "./Styles";
// import ProCons from "./pros-cons";
import VueGoodTable from 'vue-good-table-next';
// import the styles 
//import 'vue-good-table/dist/vue-good-table.css'


export default defineClientConfig({
    enhance({ app }) {
    //   app.component('mermaid', mermaid)
    //   app.component('Styles', Styles)
    //   app.component('pros-cons', ProCons)
      app.use(Vuex)
      app.use(VueChartkick, {adapter: Chart})
      app.use(VueGoodTable)
      app.mixin({
            computed: {
                $title() {
                    const page = this.$page
                    const siteTitle = this.$siteTitle
                    const selfTitle = page.frontmatter.home ? null : (
                        page.frontmatter.title || // explicit title
                        (page.title ? page.title.replace(/[_`]/g, '') : '') // inferred title
                    )
                    return siteTitle
                        ? selfTitle
                            ? (selfTitle + ' | ' + siteTitle)
                            : siteTitle
                        : selfTitle || 'VuePress'
                }
            }
        })
    }
  }
)

