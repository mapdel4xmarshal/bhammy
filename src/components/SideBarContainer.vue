<template>
   <div id="sidebar">
     <div>Main Menu</div>
     <img src="../assets/Logofull.png" alt="">
     <nav-button v-for="(section, index) in sections"
                 :key="section"
                 :btnName="section"
                 :className="classes[index]"
                 :pageIndex="index"
                 :isActive="selectedPageIndex == index"
                 @pageChanged="selectedPageIndex = $event">
     </nav-button>
   </div>
</template>

<script>
import NavigationButton from './sidebar/NavigationButton'
/* import sharedParams from '../main' */

export default {
  name: 'SideBarContainer',
  data () {
    return {
      sections: ['Dashboard', 'Flock management', 'Sales/Income', 'Expenditure', 'Vaccination', 'Settings'],
      classes: ['fa fa-home', 'fa fa-users', 'fa fa-university', 'fa fa-address-card', 'fa fa-medkit', 'fa fa-cog'],
      selectedPageIndex: 0
    }
  },
  components: {
    navButton: NavigationButton
  },
  methods: {
    navigateToPage () {

    }
  },
  created () {
    /* globalEventBus.$emit('eventName', data)
    * globalEventBus.$on('eventName', () => {
     }) */
  }
}
</script>

<style scoped>
  #sidebar{
    height: var(--main-view-height);
    background-color: var(--main-bg-color);
    max-width: var(--sidebar-width);
    width:30%;
    min-width: 100px;
    display: block;
    position: relative;
    float:left;
    border-left: var(--left-border-width) solid black;
  }

  /** Mobile specific css **/
  @media only screen
  and (min-width:0px)
  and (max-width: 1024px) {
    #sidebar{
      text-align: center;
    }
  }
</style>
