import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    /**
     * user 对象 -- 我的业务需求只需要缓存user对象即可
     */

    pageData: []
  }
})

export default store
