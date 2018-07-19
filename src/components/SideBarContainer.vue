<template>
   <div id="sidebar">
     <nav-button v-for="section in sections" :key="section"></nav-button>
   </div>
</template>

<script>
import NavigationButton from './sidebar/NavigationButton'
export default {
  name: 'SideBarContainer',
  data () {
    return {
      sections: ['Dashboard', 'Add', 'Remove']
    }
  },
  components: {
    navButton: NavigationButton
  }
}
</script>

<style scoped>
  #sidebar{

    height: var(--main-view-height);
    background-color: var(--main-bg-color);
    width: var(--sidebar-width);
    display: block;
    position: relative;
    float:left;
    border-left: var(--left-border-width) solid black;
  }
</style>
