<template>
  <div id="sidebar" :class="{'hide-menu' : !sharedProp.sidebarVisible}">
    <div id="sidebarHeader">
      <!--<img src="../assets/images/logo.png" alt="">-->
      <div class="farm-selector">
        <span class="farm-selector__title">FARM 1</span>
        <small class="farm-selector__sub-title">Ajegunle Branch</small>
      </div>
    </div>
    <nav-button v-for="(section, index) in sections"
                :key="section.name"
                :btnName="section.name"
                :className="section.iconClass"
                :navButtonIndex="index"
                :route="section.route"
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
        sections: [{name: 'Dashboard', route: '/', iconClass: 'dashboard3.png'},
          {name: 'Productions', route: '/production', iconClass: 'production.png'},
          {name: 'Sales', route: '/sales', iconClass: 'sales.png'},
          {name: 'Expenditure', route: '/dashboard', iconClass: 'expenditure.png'},
          {name: 'Activities', route: '/dashboard', iconClass: 'activity-2.png'},
          {name: 'Store', route: '/dashboard', iconClass: 'store.png'},
          {name: 'Settings', route: '/dashboard', iconClass: 'settings.png'}],
        selectedNavIndex: sharedParams.selectedPageIndex,
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

        this.$router.push({path: event.route})
        console.log('navigateToPage', event)
      }
    },
    created: function () {
      console.log(this.$route)
      this.sections.forEach((section, index) => {
        if (this.$route.path.startsWith(section.route)) {
          this.selectedNavIndex = index
        }
      })
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
    position: absolute;
    margin-right: 2px;
    float:left;
    left: 0;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    transition: all 500ms cubic-bezier(0.5,-0.25, 0.25, 1.5);
    -o-transition: all 300ms cubic-bezier(0.5,-0.25, 0.25, 1.5); /* Opera */
    -webkit-box-shadow: 0px 0px 3px 0px #9e9e9e8f;
    -moz-box-shadow: 0px 0px 3px 0px #9e9e9e8f;
    box-shadow: 0px 0px 3px 0px #9e9e9e8f;
    z-index: 1;
  }

  #sidebarHeader{
    background-color: #fff;
    border-bottom: 1px solid #eee;
    height: 50px;
  }

  .farm-selector{
    display: inline-block;
    padding: 5px;
    line-height: 15px;
  }

  .farm-selector__title{
    display: block;
  }

  .farm-selector__sub-title{
    font-size: 12px;
    color: #CCCCCC;
  }

  .hide-menu{
    left: -100px !important;
  }

  #sidebarHeader>img{
    max-height: 50px;
  }

  @media only screen and (min-width: 800px) {
    #sidebar{
      width: 300px;
      position: relative;
    }

    .hide-menu{
      width: 80px !important;
      left: 0 !important;
    }
  }

</style>
