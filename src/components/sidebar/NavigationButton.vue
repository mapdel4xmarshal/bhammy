<template>
   <div class="nav-button"
        :class="{active : sharedProp.selectedPageIndex == pageIndex}"
        @click="setActivePage">
     <i class="fa-2x" :class="className" aria-hidden="true"></i>
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
    pageIndex: {
      type: Number
    },
    selectedPageIndex: {
      type: [Number, String]
    },
    isActive: {
      type: Boolean
    }
  },
  data () {
    return {
      sharedProp: sharedParams
    }
  },
  methods: {
    setActivePage () {
      console.log('clickd')
      // this.$emit('pageChanged', this.pageIndex)
      sharedParams.selectedPageIndex = this.pageIndex
    }
  },
  created () {
    console.log(sharedParams.selectedPageIndex)
  }
}
</script>

<style scoped>
  div.nav-button{
    padding: 10px;
    color: #ffffff;
    /*line-height: 3;*/
    height: 35px;
    background-color: #3F3F3F;
    vertical-align: middle;
    margin-bottom: 2px;
    cursor: pointer;
    display: block;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 200;
    background: -webkit-linear-gradient(top, #414141, #3D3D3D);
    background:    -moz-linear-gradient(top, #414141, #3D3D3D);
    background:     -ms-linear-gradient(top, #414141, #3D3D3D);
    background:      -o-linear-gradient(top, #414141, #3D3D3D);
    background:         linear-gradient(to bottom, #414141, #3D3D3D);
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.2);
    text-shadow: 0 1px 0 rgba(220, 128, 105, 0.7), 0 -1px rgba(138, 66, 49, 0.5);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    transition: all 500ms ease;
  }

  .nav-button:hover, .nav-button.active{
    --hover-bg-color : #1f1f1f; /*181818*/
    color: #bbb;
    background-color: #2B2B2B;
    border-left: 5px solid red;
    background: -webkit-linear-gradient(top, var(--hover-bg-color), var(--hover-bg-color));
    background:    -moz-linear-gradient(top, var(--hover-bg-color), var(--hover-bg-color));
    background:     -ms-linear-gradient(top, var(--hover-bg-color), var(--hover-bg-color));
    background:      -o-linear-gradient(top, var(--hover-bg-color), var(--hover-bg-color));
    background:         linear-gradient(to bottom, var(--hover-bg-color), var(--hover-bg-color));
    box-shadow: inset 0 1px 2px rgba(29, 29, 29, 0.16);
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.7);
  }

  .nav-button .fa:first-child{
    position: relative;
    top: 5px;
    width: 45px;
  }

  .nav-button i:last-child{
    float: right;
    position: relative;
    top: 10px;
  }

  /** Mobile specific css **/
  @media only screen and (max-width: 480px) {
    .nav-button span, .nav-button i:last-child{
      display: none;
    }
  }
</style>
