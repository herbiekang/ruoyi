<template>
  <div>
    <h5>siderbar</h5>
    <el-scrollbar >
      <el-menu>
        <SideItem
          v-for="(route, index) in menus"
          :key ="route"
          :item ="route"
          :base-path ="route.path"
        />

      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>

import SideItem from "@/layout/components/SideBar/SideItem.vue";
import { mapGetters, mapState } from "vuex";
import menu from "@riophae/vue-treeselect/src/components/Menu.vue";
export default {
  name: 'SideBar',
  components: {
    ...mapState(["settings"]),
    ...mapGetters(["sidebarRouters","sidebar"]),
    SideItem,
  },
  data() {
    return {
      menus: [
        { id: 1, title: '一级菜单 1', href: '#' },
        { id: 2, title: '一级菜单 2', href: '#', children: [
            { id: 21, title: '二级菜单 1', href: '#' },
            { id: 22, title: '二级菜单 2', href: '#', children: [
                { id: 221, title: '三级菜单 1', href: '#' }
              ]}
          ]}
      ]
    }
  }

}
</script>

<style scoped>

</style>
