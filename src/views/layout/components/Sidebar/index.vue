<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#666666"
      text-color="black"
      active-text-color="#fca516"
    >
      <sidebar-title />
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import SidebarTitle from './SidebarTitle'

export default {
  components: { SidebarItem, SidebarTitle },
  computed: {
    ...mapGetters('app', {
      sidebar: 'sidebar'
    }),
    routes () {
      return this.$router.options.routes
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>
