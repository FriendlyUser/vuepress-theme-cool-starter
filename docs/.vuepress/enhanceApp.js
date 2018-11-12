import Vuex from 'vuex'
//import './timetableStyles.css'
//import timetable from 'vue-timetable'
//Vue.use(timetable)
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueGoodTablePlugin from 'vue-good-table';

// import the styles 
import 'vue-good-table/dist/vue-good-table.css' 
//import 'vue-good-table/dist/vue-good-table.css'
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
