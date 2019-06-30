<template>
  <div class="item">
    <div class="item__type item--input">
      <label for="type">Type</label>
      <select id="type">
        <option value="Egg">Egg</option>
        <option value="Fish">Fish</option>
        <option value="Old layers">Old layers</option>
      </select>
    </div>

    <div class="item__size item--input">
      <label for="size">Size</label>
      <select id="size">
        <option value="Jumbo">Jumbo</option>
        <option value="Large">Large</option>
        <option value="Pullet">Pullet</option>
      </select>
    </div>

    <div class="item__price item--input">
      <label for="price">Price</label>
      <span class="input-icon">₦</span>
      <input id="price" type="number" value="800"/>
    </div>

    <div class="item__quantity item--input">
      <label for="quantity">Quantity</label>
      <input id="quantity" type="number" value="1"/>
    </div>

    <div class="item__discount item--input">
      <label for="discount">Discount</label>
      <span class="input-icon">₦</span>
      <input id="discount" type="number" value="0.00"/>
    </div>
  </div>

  </div>
</template>

<script>
  export default {
    name: "AddItem",
    props: ["item"]
  }
</script>

<style lang="scss" scoped>

  .item {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 15px;
  }

  .item--input {
    position: relative;

    &::after {
      height: 1px;
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      background-color: #0000006b;
    }
  }

  .input-icon {
    position: absolute;
    bottom: 5px;
    left: 0;

    & + input {
      padding-left: 15px;
    }
  }
</style>
