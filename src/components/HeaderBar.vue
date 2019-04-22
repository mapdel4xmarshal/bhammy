<template>
  <div id="header" @click="toggleSideBar">
    <div class="menu-icon">
      <img src="../assets/images/menu2.png" alt="">
    </div>
    <div class="title">
      {{ sharedProp.currentPageName }}
    </div>

    <div class="right-section">
      <font-awesome-icon icon="envelope"></font-awesome-icon>
      <font-awesome-icon icon="bell"></font-awesome-icon>
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
    height: 60px;
    background-color: #fafafa;
    position: absolute;
    width: 100%;
    color: white;
    -webkit-box-shadow: 0px 6px 1px -6px #77777761;
  }

  .title {
    line-height: 3;
    display: inline-block;
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
    margin-right: 15px;
  }

  .right-section i {
    margin-left: 10px;
  }
</style>
