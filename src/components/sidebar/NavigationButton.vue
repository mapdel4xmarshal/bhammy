<template>
   <div class="nav-button"
        :class="{active : isActive}"
        @click="setActivePage">
     <img :src="require('../../assets/images/' + className)" alt="">
     <span>{{ btnName }}</span>
     <i class="fa fa-angle-right fa-lg"></i>
   </div>
</template>

<script>
import {sharedParams} from '../../main'

export default {
  props: {
    btnName: {
      type: String,
      required: true,
      default: 'New Button'
    },
    className: {
      type: String
    },
    navButtonIndex: {
      type: Number
    },
    selectedPageIndex: {
      type: [Number, String]
    },
    isActive: {
      type: Boolean
    },
    component: {
      type: String
    }
  },
  data () {
    return {
      sharedProp: sharedParams
    }
  },
  methods: {
    setActivePage () {
      this.$emit('navButtonClicked', {component: this.component,
        navButtonIndex: this.navButtonIndex,
        navButtonName: this.btnName
      })
    }
  },
  created () {
    console.log(sharedParams.selectedPageIndex)
  }
}
</script>

<style>
  div.nav-button{
    color: var(--base-color);
    vertical-align: middle;
    margin-bottom: 2px;
    cursor: pointer;
    display: grid;
    padding:  5px;
    font-size: 15px;
    align-items: center;
    text-align: center;
    overflow: hidden;
    font-weight: 200;
    position: relative;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .nav-button::after{
    opacity: 0;
    border: 2px solid var(--base-color);
    border-radius: 5px;
    width: 0;
    content: "";
    display: inline-block;
    position: absolute;
    right: 1px;
    height: 48px;
    -webkit-transition: opacity .4s ease-in-out;
    -moz-transition: opacity .4s ease-in-out;
    -o-transition: opacity .4s ease-in-out;
    transition: opacity .4s ease-in-out;
  }

  .nav-button:hover, .nav-button.active{
    --hover-bg-color : var(--base-color);
    color: #7f2775;
    background-color: #7f27750d;
  }

  .nav-button:hover::after, .nav-button.active::after{
    opacity: 1;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .nav-button .fa:first-child{
    position: relative;
    font-size: 25px;
    padding:5px;
  }

  .nav-button img{
    justify-self: center;
  }

  .nav-button span{
    font-size: 12px;
    display: block;
  }

  .nav-button i:last-child{
    float: right;
    position: relative;
    top: 10px;
    display: none;
  }

  @media only screen and (min-width: 800px) {
    .nav-button svg:last-child{
       display: block;
    }

    .nav-button{
      align-items: left;
      grid-template-columns: 35px auto;
      text-align: left !important;
    }

    .nav-button img{
      justify-self: left;
    }

    .hide-menu .nav-button{
      align-items: center;
      grid-template-columns: auto;
      text-align: center !important;
    }

     .hide-menu .nav-button img{
      justify-self: center !important;
    }
  }
</style>
