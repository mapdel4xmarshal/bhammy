<template>
  <div>
    <div class="invoice-list" :class="paymentStatus">
      <div class="left-col">
        <strong>{{ customerName }}</strong>
        <span class="status" :class="paymentStatus">{{ paymentStatus }}</span><br>
        <i>{{ description }}</i>
      </div>

      <div class="right-col">
        <span>Jan. 24 2018</span><br>
        <strong>₦{{ numberToAmount }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceRow',
  data () {
    return {}
  },
  props: ['customerName', 'paymentStatus', 'amount', 'description', 'paymentDate'],
  computed: {
    numberToAmount: function () {
      return this.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style scoped>
  .invoice-list{
    display: inline-block;
    box-sizing: border-box;
    background-color: white;
    padding:10px;
    width:100%;
    border-bottom: 2px solid var(--draftColor);
  }

  .invoice-list .left-col{
    float:left;
    width:65%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .invoice-list .right-col{
    float:right;
    text-align: right;
  }

  .right-col>span{
    font-size: 11px;
    color: #808080;
  }

  .right-col>strong {
    text-align: right;
    font-size: 16px;
  }

  .left-col>strong{
    font-size: 14px;
  }

  i{
    font-size: 11px;
    color: #808080;
    text-overflow: ellipsis;
  }

  .status{
    font-size: 10px;
    color:white;
    font-weight: 400;
    border-radius: 2px;
    padding: 3px 10px;
    text-transform: uppercase;
  }

  .status.paid{
    background-color: var(--paidColor);
  }

  .status.due{
    background-color: var(--dueColor);
  }

  .status.unpaid{
    background-color: var(--unpaidColor);
  }

  .status.draft{
    background-color: var(--draftColor);
  }

  .invoice-list.paid{
    border-bottom-color: var(--paidColor);
  }

  .invoice-list.due{
    border-bottom-color: var(--dueColor);
  }

  .invoice-list.unpaid{
    border-bottom-color: var(--unpaidColor);
  }

  .invoice-list.draft{
    border-bottom-color: var(--draftColor);
  }

</style>
