<template>
  <div>
  <div id="sales-header">
    <div>
    <div class="summary-box effect3">
      <div class="icon-box">
        <i class="fa fa-check"></i>
      </div>
      <span>TOTAL</span><br>
      <span>NGN120 (10)</span>
    </div>

    <h1></h1>
    <div class="summary-box effect1">
      <div class="icon-box">
        <i class="fa fa-times"></i>
      </div>
      <span>PAID</span><br>
      <span>NGN120 (10)</span>
    </div>

    <div class="summary-box effect1">
      <div class="icon-box">
        <i class="fa fa-home"></i>
      </div>
      <span>UNPAID</span><br>
      <span>NGN120 (10)</span>
    </div>
    </div>
  </div>

  <!--<div class="bill-details">
    <h2>Bill from</h2>
    <input type="text">
    <h2>Bill to :</h2>
    <input type="text">
    <div class="bill-to-address">
      <strong>Bhammy Farms Inc.</strong>
      <span>1234, Address Area,</span>
      <span>Ilorin, Kwara-State</span>
    </div>
  </div>

  <div class="invoice-details">
    <h2>Invoice details</h2>
    <span>Invoice no.</span>
    <span>2239938</span>

    <span>Invoice date:</span>
    <input type="date">

    <span>Payment date:</span>
    <input type="date">
  </div>
-->
    <app-invoice-row v-for="invoice in invoices"
                     :key="invoice.id"
                     :customerName="invoice.customerName"
                     :description="invoice.description"
                     :paymentStatus="invoice.paymentStatus"
                     :amount="invoice.amount"></app-invoice-row>
    <button>+ New item</button>

  </div>

</template>

<script>
import InvoiceRow from './InvoiceRow'

export default {
  name: 'sales',
  data () {
    return {
      invoices: [
        {
          id : 223,
          customerName : "Mrs. Saliu Semira",
          description : "200 crates of Jumbo Eggs. 100 crates of pullets.",
          amount: 324099,
          paymentStatus: "paid"

        },
        {
          id : 2230,
          customerName : "Mrs. Saliu Semira",
          description : "200 crates of Jumbo Eggs. 100 crates of pullets.",
          amount: 394099,
          paymentStatus: "unpaid"

        },
        {
          id : 2293,
          customerName : "Mrs. Saliu Semira",
          description : "200 crates of Jumbo Eggs. 100 crates of pullets.",
          amount: 394099,
          paymentStatus: "due"

        }
      ]
    }
  },
  components: {
    appInvoiceRow: InvoiceRow
  }
}
</script>

<style scoped>

.bill-details{
  width:100%;
}

.summary-box{
  background-color: #eee;
  position: relative;
  display: -webkit-box;
  width:30%;
  overflow: hidden;
  float:left;
  margin:5px;
}

.icon-box{
  width: 40px;
  height: 40px;
  background-color: #68284d;
  margin-right: 3px;
  color: #f4f4f4;
  font-size: 24px;
  line-height: 1.7;
  text-align: center;
}

.effect1{
  -webkit-box-shadow: 0 6px 6px -6px #777;
  -moz-box-shadow: 0 6px 6px -6px #777;
  box-shadow: 0 6px 6px -6px #777;
}

/*==================================================
 * Effect 3
 * ===============================================*/
.effect3
{
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 0px rgba(0, 0, 0, 0.1) inset;
}

.summary-box span{
  font-size: 10px;
}
  .bill-to-address{
    background-color: #eee;
    padding:5px;
    width: 100%;
  }

  .bill-to-address>span{
    display: block;
  }

  input{
    width:100%
  }

  .imenu:after {
    content: '\2807';
    font-size: 15px;
  }
</style>
