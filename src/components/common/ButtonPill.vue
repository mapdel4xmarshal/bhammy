<template>
    <div @click="clickHandler()"><slot></slot></div>
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
   border-radius: 30px;
   background-color: #7f2775;
   cursor: pointer;
   width: 100%;
   display: inline;
   padding: 5px 10px;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-select: none;
 }
</style>
