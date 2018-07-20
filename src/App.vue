<template>
  <div>
     <sidebar-container></sidebar-container>
     <div class="main-content">
       <header-bar></header-bar>
       <section id="main">
         <h1>Vue Sample - {{ value }}</h1>
         <message v-for="msg in 30" :key="msg"></message>
       </section>
     </div>
  </div>
</template>

<script>
import SideBarContainer from './components/SideBarContainer'
import HeaderBar from './components/HeaderBar'
import HelloWorld from './components/HelloWorld'

export default {
  data: function () {
    return {
      value: 'ASDF'
    }
  },
  components: {
    'sidebar-container': SideBarContainer,
    'header-bar': HeaderBar,
    'message': HelloWorld
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
    --left-border-width: 10px;
    --main-view-height : 100vh;
    --sidebar-width : 300px;
    --mobile-width: 768px;
    --header-nav-height: 70px;
  }
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .main-content>#main{
    padding-top: var(--header-nav-height);
    overflow-y: scroll;
    width: 100%;
    padding: 20px 20px 0 20px;
  }

  .main-content{
    --sidebar-width : 300px;
    display: inline-flex;
    width: calc(100% - var(--sidebar-width) - var(--left-border-width));
    position: relative;
    overflow: hidden;
    height: 100vh;
  }
</style>
