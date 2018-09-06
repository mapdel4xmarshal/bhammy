<template>
  <div class="container">
     <sidebar-container></sidebar-container>
     <div class="main-content">
       <appHeaderBar></appHeaderBar>
       <section id="main">
         <component :is="sharedProp.currentPage"></component>
       </section>
     </div>
  </div>
</template>

<script>
import SideBarContainer from './components/SideBarContainer'
import HeaderBar from './components/HeaderBar'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Sales from './components/sales/Sales'

// Global Share Instance
import {sharedParams} from './main'

export default {
  data: function () {
    return {
      currentPage: '',
      sharedProp: sharedParams
    }
  },
  components: {
    'sidebar-container': SideBarContainer,
    'appHeaderBar': HeaderBar,
    'appMessage': HelloWorld,
    'appHome': Home,
    'appSales': Sales
  },
  created: function () {
    this.$on('navButtonClicked', (event) => {
      console.log(event)
    })
  }
}
</script>

  <style lang="scss">
    $fa-font-path : "~@fortawesome/fontawesome-free-webfonts/webfonts";
  @import "~@fortawesome/fontawesome-free-webfonts/scss/fontawesome.scss";
  @import "~@fortawesome/fontawesome-free-webfonts/scss/fa-solid.scss";
  @import "~@fortawesome/fontawesome-free-webfonts/scss/fa-regular.scss";
  @import "~@fortawesome/fontawesome-free-webfonts/scss/fa-brands.scss";

  :root{
    --main-bg-color: #2b2b2b;
    --main-txt-color: blue;
    --main-padding: 15px;
    --left-border-width: 5.px;
    --main-view-height : 100vh;
    --sidebar-width : 300px;
    --mobile-width: 768px;
    --header-nav-height: 45px;
    --paidColor: #32c24d;
    --dueColor: #c2070c;
    --unpaidColor: #c29d07;
    --partialColor: #c27e16;
    --draftColor: #505050;
  }
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
  }

  .main-content>#main{
    padding-top: var(--header-nav-height);
    overflow-x: hidden;
    overflow-y: scroll;
    margin-top: 45px;
    padding: 5px;
  }

  .main-content{
    --sidebar-width : 300px;
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 100vh;
    box-sizing: border-box;
  }
  .container{
    display: -webkit-inline-box;
    overflow-x: hidden;
    width: 100vw;
  }

    input{
      height: 25px;
      width:100%;
      font-size: 14px;
    }

    input:focus{
      border: 1px solid red;
    }
</style>
