<template>
   <div id="sidebar">
     <div>Main Menu</div>
     <nav-button v-for="(section, index) in sections" :key="section" :btnName="section" :className="classes[index]"></nav-button>
   </div>
</template>

<script>
import NavigationButton from './sidebar/NavigationButton'
export default {
  name: 'SideBarContainer',
  data () {
    return {
      sections: ['Dashboard', 'Flock management', 'Sales/Income', 'Expenditure', 'Vaccination', 'Settings'],
      classes: ['fa fa-home', 'fa fa-users', 'fa fa-university', 'fa fa-address-card', 'fa fa-medkit', 'fa fa-cog']
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
