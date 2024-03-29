import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/user"
import permission from "@/store/modules/permission";


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      user,
      permission

    }
})

export default store
