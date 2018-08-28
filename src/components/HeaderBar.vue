<template>
    <div id="header" @click="toggleSideBar">
      <div class="menu-icon">
        <img src="../assets/images/menu2.png" alt="">
      </div>
      <div class="title">
        {{ sharedProp.currentPageName }}
      </div>

      <div class="right-section">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <i class="fa fa-bell" aria-hidden="true"></i>
      </div>
    </div>
</template>

<script>
  import {sharedParams} from '../main'

  export default {
    name: 'HeaderBar',
    data () {
      return {
       //
        // sharedProp: sharedParams
      }
    },
    methods: {
      toggleSideBar: function () {
        this.sharedProp.sidebarVisible = !this.sharedProp.sidebarVisible;
      }
    },
    created () {
      this.sharedProp = sharedParams
    }
  }
</script>

<style scoped>
   #header{
     height: 45px;
     background-color: #68284d;
     position: absolute;
     width:100%;
     color: white;
     box-shadow: 0 6px 6px -6px #777;
   }

   .title{
     line-height: 3;
     display: inline-block;
   }

   .menu-icon{
     display: inline-block;
     padding: 10px;
     float: left;
     cursor: pointer;
   }
  .menu-icon img{
    width: 25px;
    height: 28px;
  }

  .right-section{
    float: right;
    line-height: 3;
    margin-right: 15px;
  }

  .right-section i{
    margin-left: 10px;
  }
</style>
