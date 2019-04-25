<template>
  <div class="container">
     <sidebar-container></sidebar-container>
     <div class="main-content">
       <appHeaderBar></appHeaderBar>
       <section id="main">
         <transition name="slide-fade" appear mode="out-in">
          <router-view></router-view>
         </transition>
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

  :root{
    --base-color: #7f2775;
    --draftColor: #505050;
    --dueColor: #c2070c;
    --glow-color: #8E24AA;
    --header-nav-height: 45px;
    --left-border-width: 5px;
    --main-bg-color: #FAFAFA;
    --main-padding: 15px;
    --main-txt-color: blue;
    --main-view-height : 100vh;
    --mobile-width: 768px;
    --paidColor: #32c24d;
    --partialColor: #c27e16;
    --sidebar-bg-color: #FFFFFF;
    --sidebar-width : 300px;
    --unpaidColor: #c29d07;
  }
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--main-bg-color);
    overflow: hidden;
  }

  .animate{
    -webkit-transition: all 300ms ease-in-out;
    -moz-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
  }

  .main-content>#main{
    padding-top: var(--header-nav-height);
    padding: 5px 30px;
  }

  .main-content{
    --sidebar-width : 300px;
    width: 100%;
    position: relative;
    box-sizing: border-box;
  }
  .container{
    display: flex;
    width: 100%;
  }

  input{
    height: 25px;
    width:100%;
    font-size: 14px;
  }

  input:focus{
    border: 1px solid red;
  }

    ::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
      border-radius: 10px;
    }

    ::-webkit-scrollbar
    {
      display: none;
    }

    ::-webkit-scrollbar-thumb
    {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
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
</style>
