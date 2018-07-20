<template>
   <div class="nav-button">
     <i class="fa-2x" :class="className" aria-hidden="true"></i>
     <span>{{ btnName }}</span>
     <i class="fa fa-angle-right fa-lg"></i>
   </div>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  data () {
    return {
      /* btnName: 'Dashboard',
      className: 'fa fa-address-card' */
    }
  }
}
</script>

<style scoped>
  div.nav-button{
    padding: 10px;
    color: #ffffff;
    line-height: 2;
    background-color: #3F3F3F;
    vertical-align: middle;
    margin-bottom: 1px;
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
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
  }

  nav-button:hover, nav-button.active{
    color: #bbb;
    border: 1px solid #2a3433;
    background-color: #3F3F3F;
    border-left: 5px solid red;
    background: -webkit-linear-gradient(top, #2B2B2B, #2B2B2B);
    background:    -moz-linear-gradient(top, #2B2B2B, #2B2B2B);
    background:     -ms-linear-gradient(top, #2B2B2B, #2B2B2B);
    background:      -o-linear-gradient(top, #2B2B2B, #2B2B2B);
    background:         linear-gradient(to bottom, #2B2B2B, #2B2B2B);
    box-shadow: inset 0 1px 2px rgba(29, 29, 29, 0.16);
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.7);
  }

  .nav-button .fa:first-child{
    position: relative;
    top: 5px;
    width: 45px;
  }

  .nav-button>span{
  }

  .nav-button i:last-child{
    float: right;
  }
</style>
