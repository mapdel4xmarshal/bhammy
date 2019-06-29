<template>
    <div class="add-item">
      <input type="text" placeholder="Ite">
      <input type="text">
      <input type="text">
      <input type="text">
    </div>
</template>

<script>
  export default {
    name: "AddItem",
    props: ["item"]
  }
</script>

<style scoped>
  .add-item {
    padding: 10px;
  }
</style>
