<template>
  <div class="container">
    <appHeaderBar></appHeaderBar>
    <section class="content-area">
      <sidebar-container></sidebar-container>
      <section id="main">
        <transition name="slide-fade" appear mode="out-in">
          <router-view style="width: 100%; padding:0 20px; height: 100%;"></router-view>
        </transition>
        <div class="main__summary">summarySection
          <router-view name="summarySection"></router-view>
        </div>
      </section>
    </section>
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
  @import "./scss/global.scss";

  :root{
    --base-color: #7f2775;
    --draftColor: #505050;
    --dueColor: #c2070c;
    --glow-color: #8E24AA;
    --left-border-width: 5px;
    --main-bg-color: #FAFAFA;
    --main-padding: 15px;
    --main-txt-color: blue;
    --main-view-height : 100vh;
    --mobile-width: 768px;
    --paidColor: #32c24d;
    --partialColor: #c27e16;
    --sidebar-bg-color: #FFFFFF;
    --sidebar-width : 250px;
    --unpaidColor: #c29d07;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--main-bg-color);
    overflow: hidden;
  }

  #main{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .main__summary {
    width: 275px;
    display: none;
    background-color: #f3e5f5;
  }

  .main-content{
    --sidebar-width : 300px;
    width: 100%;
    position: relative;
    box-sizing: border-box;
  }
  .container{
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    width: 100%;
  }

  .content-area{
    width: 100%;
    display: inline-flex;
    height: calc(100vh - #{$header-height});
  }

  .slide-fade-enter-active {
    transition: all .4s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }

  @media only screen and (min-width: 800px) {
    .main__summary {
      display: inherit;
    }
  }
</style>
