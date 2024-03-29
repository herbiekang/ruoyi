<template>
  <div class="app-wrapper">
    <div/>
    <side-bar class="sidebar-containers"/>
    <div>
      <div>
        <Navbar/>
      </div>
      <app-main/>
    </div>

  </div>



</template>

<script >
import AppMain from "@/layout/AppMain.vue";
import Navbar from "@/layout/Navbar.vue";
import Sidebar from "@/layout/SideBar/index.vue";
import SideBar from "@/layout/SideBar/index.vue";
export default {
  name: 'Layout',
  components: {
    SideBar,
    AppMain,
    Navbar,
    Sidebar
  }
}

</script>

<style >
@import "~@/assets/styles/mixin.scss";
@import "~@/assets/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;


}

.sidebar-containerss {
  -webkit-transition: width .28s;
  transition: width 0.28s;
  width: 300px !important;
  background-color: $base-menu-background;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  -webkit-box-shadow: 2px 0 6px rgba(0,21,41,.35);
  box-shadow: 2px 0 6px rgba(0,21,41,.35);

}

</style>
