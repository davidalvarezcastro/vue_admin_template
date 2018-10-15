<template>
  <router-link :to="'/'">
    <el-menu-item v-if="sidebar.opened" :index="'/'">
      <img  alt="Televes logo" src="../../../../assets/logo-televes.png">
    </el-menu-item>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './Item'

export default {
  name: 'SidebarTitle',
  components: { Item },
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
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/ToggleSideBar')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu-item {
  height: 50px !important;
  line-height: 50px !important;
}
</style>
