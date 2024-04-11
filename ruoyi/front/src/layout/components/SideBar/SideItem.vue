<template>
  <div v-if="!item.hidden">
    <ul>
      <items></items>
      <side-item
        v-for="menu in item.children"
        :item="menu"
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
