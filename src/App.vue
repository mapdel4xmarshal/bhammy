<template>
  <div>
     <sidebar-container></sidebar-container>
     <div class="main-content">
       <h1>Vue Sample - {{ value }}</h1>
       <message v-for="msg in 3"></message>
     </div>
  </div>
</template>

<script>
import SideBarContainer from './components/SideBarContainer'
import HelloWorld from './components/HelloWorld'

export default {
  data: function () {
    return {
      value: 'ASDF'
    }
  },
  components: {
    'sidebar-container': SideBarContainer,
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
  }
  body { margin: 0; }
  .main-content{
    --sidebar-width : 300px;
    display: inline-flex;
    width: calc(100% - var(--sidebar-width) - var(--left-border-width));
  }
</style>
