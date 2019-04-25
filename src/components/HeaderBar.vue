<template>
  <div id="header" @click="toggleSideBar">
    <div class="menu-icon">
      <img src="../assets/images/menu2.png" alt="">
    </div>

    <div class="right-section">
      <div><font-awesome-icon icon="envelope" color="#757575"></font-awesome-icon></div>
      <div><font-awesome-icon icon="bell" color="#757575"></font-awesome-icon></div>
      <app-profile></app-profile>
    </div>
  </div>
</template>

<script>
import {sharedParams} from '../main'
import Profile from './common/Profile'

export default {
  name: 'HeaderBar',
  data () {
    return {
    }
  },
  methods: {
    toggleSideBar: function () {
      this.sharedProp.sidebarVisible = !this.sharedProp.sidebarVisible
    }
  },
  created () {
    this.sharedProp = sharedParams
  },
  components: {
    appProfile: Profile
  }
}
</script>

<style scoped>
  #header {
    height: 50px;
    background-color: #FFFFFF;
    width: 100%;
    color: white;
    -webkit-box-shadow: 0 1px 3px -2px #77777761;
    box-shadow: 0 1px 3px -2px #77777761;
    -moz-box-shadow: 0 1px 3px -2px #77777761;
  }

  .menu-icon {
    display: inline-block;
    padding: 10px;
    float: left;
    cursor: pointer;
  }

  .menu-icon img {
    width: 25px;
    height: 28px;
  }

  .right-section {
    float: right;
    line-height: 3;
    padding-left: 10px;
    margin-right: 15px;
    color: #2b2b2b;
    display: inline-grid;
    max-width: 350px;
    grid-template-columns: 50px 50px auto;
    align-items: center;
    cursor: pointer;
  }

  .right-section > div {
    border-left: 1px solid #EEEEEE;
    text-align: center;
  }
</style>
