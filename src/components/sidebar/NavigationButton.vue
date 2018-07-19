<template>
   <div>
     <i :class="className" aria-hidden="true">i</i>
       <span>{{ btnName }}</span>
       <span></span>
   </div>
</template>

<script>
export default {
  data () {
    return {
      btnName: 'Dashboard',
      className: 'fa fa-address-card'
    }
  }
}
</script>

<style scoped>
  div{
    padding: 10px;
    color: #ffffff;
  }
   span:first-child{

   }
</style>
