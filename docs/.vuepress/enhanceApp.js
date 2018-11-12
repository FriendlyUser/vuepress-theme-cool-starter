import Vuex from 'vuex'

import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueGoodTablePlugin from 'vue-good-table';

// The styles are important in another component because of the way webpack is configured
// import 'vue-good-table/dist/vue-good-table.css' 
export default ({ Vue, options, router, siteData }) => {
    Vue.use(Vuex)
    Vue.use(VueChartkick, {adapter: Chart})
	Vue.use(VueGoodTablePlugin)
    Vue.mixin({
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
