import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend.vue' // 推荐
import Singer from 'components/singer/singer.vue' // 歌手
import Search from 'components/search/search.vue' // 搜索
import Rank from 'components/rank/rank.vue' // 排行

Vue.use(Router)
const router = new Router({
  routes: [{
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
export default router
