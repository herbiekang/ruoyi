<template>
  <div>
    <ul>
<h5>item</h5>

         <side-item
             v-for="menu in menus"
             :menus="menu.children"
         >


         </side-item>



    </ul>
  </div>
</template>

<script setup>
import Items from './item.vue'

export default {
  name: 'SideItem',
  components: {
    Items
  },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
}

</script>

<style scoped>

</style>
