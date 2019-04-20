<template>
   <div id="sidebar" :class="{'hide-menu' : !sharedProp.sidebarVisible}">
     <div id="sidebarHeader">
       <img src="../assets/images/logo.png" alt="">
     </div>
     <nav-button v-for="(section, index) in sections"
                 :key="section.name"
                 :btnName="section.name"
                 :className="section.iconClass"
                 :navButtonIndex="index"
                 :component="section.component"
                 :isActive="selectedNavIndex == index"
                 @navButtonClicked="navigateToPage">
     </nav-button>
   </div>
</template>

<script>
import NavigationButton from './sidebar/NavigationButton'
import {sharedParams} from '../main'

export default {
  name: 'SideBarContainer',
  data () {
    return {
      sections: [{name: 'Dashboard', component: 'app-home', iconClass: 'dashboard3.png'},
        {name: 'Productions', component: 'app-message', iconClass: 'production.png'},
        {name: 'Sales', component: 'app-sales', iconClass: 'sales.png'},
        {name: 'Expenditure', component: 'app-message', iconClass: 'expenditure.png'},
        {name: 'Activities', component: 'app-message', iconClass: 'activity-2.png'},
        {name: 'Store', component: 'app-message', iconClass: 'store.png'},
        {name: 'Settings', component: 'app-message', iconClass: 'settings.png'}],
      selectedNavIndex: 0,
      sharedProp: sharedParams
    }
  },
  components: {
    navButton: NavigationButton
  },
  methods: {
    navigateToPage (event) {
      this.selectedNavIndex = event.navButtonIndex
      this.sharedProp.selectedPageIndex = event.navButtonIndex
      this.sharedProp.currentPage = event.component
      this.sharedProp.currentPageName = event.navButtonName
      this.sharedProp.sidebarVisible = false
      console.log("navigateToPage", event)
    }
  },
  created: function () {
    // globalEventBus.$emit('eventName', data)
    /*this.$on('navButtonClicked', (event) => {
      console.log(event, "hhhhheehe")
    })*/
  }
}
</script>

<style scoped>
  #sidebar{
    height: var(--main-view-height);
    background-color: var(--sidebar-bg-color);
    max-width: var(--sidebar-width);
    width:80px;
    display: block;
    position: relative;
    margin-right: 2px;
    float:left;
    border-left: var(--left-border-width) solid black;
    transition: all 1s;
    -moz-transition: all 300ms; /* Firefox 4 */
    -webkit-transition: all 300ms; /* Safari and Chrome */
    -o-transition: all 300ms; /* Opera */
    -webkit-box-shadow: 0px 0px 3px 0px #9e9e9e8f;
    -moz-box-shadow: 0px 0px 3px 0px #9e9e9e8f;
    box-shadow: 0px 0px 3px 0px #9e9e9e8f;
  }

  #sidebarHeader{
    background-color: #fff;
    padding:10px;
    height: 50px;
  }

  .hide-menu{
    width: 0px !important;
    right: 80px;
  }

  #sidebarHeader>img{
    max-height: 50px;
  }

  @media only screen and (min-width: 800px) {
    #sidebar{
      width: 300px;
    }

    .hide-menu{
      width: 80px !important;
      right: 0;
    }
  }

</style>
