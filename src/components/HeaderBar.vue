<template>
  <div id="header" @click="toggleSideBar">
    <div class="menu-icon">
      <img src="../assets/images/menu2.png" alt="">
    </div>

    <div class="right-section">
      <div class="profile">
        <span>Hello, <strong>Bamidele Mapayi</strong></span>
        <div class="avatar">B</div>
        <font-awesome-icon icon="angle-down" class="toggle"></font-awesome-icon>
      </div>
      <div><font-awesome-icon icon="envelope" color="#EEEEEE"></font-awesome-icon></div>
      <div><font-awesome-icon icon="bell"></font-awesome-icon></div>
    </div>
  </div>
</template>

<script>
import {sharedParams} from '../main'

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
  }
}
</script>

<style scoped>
  #header {
    height: 50px;
    background-color: #FFFFFF;
    position: absolute;
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

  .profile{
    padding: 0 10px
  }

  .avatar{
    width: 30px;
    height: 30px;
    color: #EEEEEE;
    border: 1px solid #EEEEEE;
    border-radius: 30px;
    line-height: 30px;
    background-color: var(--base-color);
    display: inline-block;
    cursor: pointer;
  }

  .profile > span{
    display: none;
    font-size: 13px;
  }

  .toggle{
    cursor: pointer;
    padding: 0 5px;
  }

  .right-section {
    float: right;
    line-height: 3;
    padding-left: 10px;
    margin-right: 15px;
    color: #2b2b2b;
    display: inline-grid;
    max-width: 350px;
    grid-template-columns: auto 50px 50px;
    align-items: center;
  }

  .right-section > div {
    border-left: 1px solid #EEEEEE;
    text-align: center;
  }

  @media only screen and (min-width: 800px) {
    .profile > span{
      display: inline-block;
    }
  }
</style>
