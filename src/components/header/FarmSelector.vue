<template>
   <div class="farm-selector">
     <div class="farm-selector__title">Ajegunle Farm</div>
     <small>Pen 1</small>
   </div>
</template>

<script>
export default {
  name: 'FarmSelector'
}
</script>

<style lang="scss" scoped>
  @import "../../scss/_variables";

  .farm-selector {
    display: inline-flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: auto 0;
    padding-left: 10px;
    color: #000;
    border-left: 1px solid #EEEEEE;
    position: relative;
    text-align: left;
    height: 100%;
    cursor: pointer;
    background-color: #fff;

    &::after {
      content: '';
      position: absolute;
      right: 10px;
      border-top: 7px solid #000;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }

    &:hover {
      background-color: #F5F5F5;
    }
  }

  .farm-selector__title {
    font-size: $title-font-size;
  }
</style>
