<template>
    <div @click="clickHandler()" class="animate"><slot></slot></div>
</template>

<script>
export default {
  name: 'ButtonPill',
  props: {
    title: {
      type: String,
      default: 'Button'
    },
    clickHandler: {
      type: Function
    }
  }
}
</script>

<style scoped>
 div{
   color: #FFFFFF;
   font-size: 13px;
   border-radius: 30px;
   background-color: #7f2775;
   cursor: pointer;
   width: 100%;
   display: inline;
   padding: 7px 10px;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-select: none;
 }

 div:hover{
   border-color: #7f2775;
   color: #eee;
   outline: 0;
   -webkit-box-shadow: inset 0 1px 0px 0px rgba(0,0,0,.075), 0 0 4px #8E24AA;
   box-shadow: inset 0 1px 0px 0px rgba(0,0,0,.075), 0 0 3px #8E24AA;
 }
</style>
