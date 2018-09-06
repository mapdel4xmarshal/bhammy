<template>
  <div>
    <button @click="$emit('showSales', 1)">< back</button>
    <div>Add Customer</div>
    <div >ITEMS</div>
    <button>+ Add item</button>
    <div>TOTAL</div>
    <div style="height: 30px;">AMOUNT DUE <span style="float: right; font-size: 20px; font-weight: bold;">N232,000</span></div>
  </div>
</template>

<script>
export default {
  name: 'NewInvoice'
}
</script>

<style scoped>

</style>
