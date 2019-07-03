<template>
  <div class="customer">
    <div class="customer__actions">
      <button>choose</button>
      <button>+ new</button>
    </div>
    <div class="customer__detail">
      <strong>Mr Bamidele Mapayi</strong>
      House 24, Mandate Estate. <br>
      Ilorin.<br>
      080730000000
    </div>
    <div class="customer__detail-handle">
      <font-awesome-icon icon="angle-up"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddCustomer'
  }
</script>

<style lang="scss" scoped>
  .customer {

  }

  .customer__actions {
    display: inline-grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 5px;
    margin-bottom: 10px;
    width: 100%;
  }

  .customer__detail {
    padding: 10px;
    background-color: transparent;
  }

  .customer__detail-handle {
    margin: auto;
    height: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
