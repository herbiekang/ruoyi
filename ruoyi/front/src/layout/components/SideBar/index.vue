<template>
  <div>
    <h5>{{sidebarRouters}}</h5>
    <el-scrollbar >
      <el-menu
        :default-active="activeMenu"
        :collapse-transition="false"
        mode="vertical"
      >
        <side-item
          v-for="(route, index) in sidebarRouters"
          :key="route.path  + index"
          :item="route"
          :base-path="route.path"
        />

      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>

import SideItem from "@/layout/components/SideBar/SideItem.vue";
import { mapGetters, mapState } from "vuex";
import variables from "@/assets/styles/variables.scss";
export default {
  components: { SideItem},
  computed: {
    ...mapState(["settings"]),
    ...mapGetters(["sidebarRouters", "sidebar"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },

    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }

  }

}
</script>

<style scoped>

</style>
