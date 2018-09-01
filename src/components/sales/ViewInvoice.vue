<template>
  <div>
    <div class="bill-details">
      <h2>Bill from</h2>
      <input type="text">
      <h2>Bill to :</h2>
      <input type="text" :value="invoice.customerName">
      <div class="bill-to-address">
        <strong>Bhammy Farms Inc.</strong>
        <span>1234, Address Area,</span>
        <span>Ilorin, Kwara-State</span>
      </div>
    </div>

    <div class="invoice-details">
      <h2>Invoice details</h2>
      <span>Invoice no.</span>
      <span>{{ invoice.id }}</span>

      <span>Invoice date:</span>
      <input type="date">

      <span>Payment date:</span>
      <input type="date">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewInvoice',
  props: ['invoice'],
  created () {
    this.$on('viewInvoice', () => {
      console.log('clicked') // It'a never fired
    })
  }
}
</script>

<style scoped>

</style>
