<template>
  <div>
    <div class="invoice-list" :class="invoice.paymentStatus" @click="showSubMenu = true" v-for="invoice in invoices" :key="invoice.id"><!--$emit('viewInvoice', invoice)-->
      <div v-if="showSubMenu"
           style="text-align: center; display: grid; grid-template-columns: 50% 50%; width:120px; background-color: rgba(43,43,43,0.94); position: absolute; right: 0; top: 0; height: 100%;">
        <div class="fa fa-eye fa-2x"></div>
        <div class="fa fa-edit fa-2x"></div>
      </div>
      <div class="left-col">
        <span class="status" :class="invoice.paymentStatus">{{ invoice.paymentStatus }}</span>
        <strong>{{ invoice.customerName }}</strong>
        <br>
        <i>{{ invoice.description }}</i>
      </div>

      <div class="right-col">
        <span>Jan. 24 2018</span><br>
        <strong :class="invoice.paymentStatus">₦</strong>
      </div>
    </div>

    <table style="width:100%;">
      <thead>
        <th>Invoice #</th>
        <th>Status</th>
        <th>Customer name</th>
        <th style="width:30%;">Description</th>
        <th class="created-date">Created</th>
        <th>Due date</th>
        <th>Amount</th>
        <th>Balance</th>
        <th></th>
      </thead>

      <tbody style="width:100%;">
        <tr class="" :class="invoice.paymentStatus" v-for="invoice in invoices" :key="invoice.id">
          <td>2232</td>
          <td id="tbl-status" class="mobile-view"><div class="status" :class="invoice.paymentStatus">{{ invoice.paymentStatus }}</div></td>
          <td id="tbl-name" class="mobile-view elipsis">{{ invoice.customerName }}</td>
          <td id="tbl-desc" class="mobile-view elipsis">{{ invoice.description }}</td>
          <td id="tbl-created" class="mobile-view">Jan. 24 2018</td>
          <td>Jan. 24 2018</td>
          <td id="tbl-amount" class="mobile-view" :class="invoice.paymentStatus">₦{{ invoice.amount }}</td>
          <td :class="invoice.paymentStatus">₦{{ invoice.amount }}</td>
          <td><span class="imenu"></span></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'InvoiceRow',
  data () {
    return {
      showSubMenu: false,
      invoice: {}
    }
  },
  props: ['invoices'],
  computed: {
    /*numberToAmount: function () {
      // return invoice.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }*/
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
    border-bottom: 0.05rem solid var(--draftColor);
    cursor: pointer;
    position: relative;
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
    font-size: 12px;
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
    width:35px;
    display: inline-block;
    color:white;
    font-weight: 400;
    border-radius: 2px;
    padding: 3px 10px;
    text-transform: uppercase;
    text-align: center;
  }

  strong.paid{
    color: var(--paidColor);
  }

  strong.due{
    color: var(--dueColor);
  }

  strong.unpaid{
    color: var(--unpaidColor);
  }

  strong.partial{
    color: var(--partialColor);
  }

  strong.draft{
    color: var(--draftColor);
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

  .status.partial{
    background-color: var(--partialColor);
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

  .invoice-list.partial{
    border-bottom-color: var(--partialColor);
  }

  .invoice-list.draft{
    border-bottom-color: var(--draftColor);
  }

  table{
    font-size: 14px;
    border-collapse: collapse;
  }

  thead th{
    background-color: #808080;
    color: #fff;
    padding:10px;
    text-align: left;
    text-transform: uppercase;
    display: none;
  }

  table tr{
    background-color: #fff;
    border-bottom: 1px solid #808080;
  }

  th:first-child, td:first-child{
    padding-left: 20px;
  }

  .imenu:after {
    content: '\2807';
    font-size: 15px;
  }

  /* MOBILE SPECFIC CSS */
  td{
    display: none;
  }

  tr{
    display: grid;
    grid-template-columns: 60px auto auto;
    padding:10px;
  }

  #tbl-desc{
    grid-column: 1 / 3;
    grid-row : 2;
    font-size: 12px;
    color: #808080;
    font-style: italic;
  }

  .elipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #tbl-name, #tbl-amount{
    font-weight: 600;
  }

  #tbl-amount{
    font-size: 16px;
  }

  #tbl-created{
    color: #808080;
    font-size: 12px;
  }

  #tbl-amount, #tbl-created{
    text-align: right;
    margin-left: 10px;
  }

  .mobile-view{
    display: inline-block;
  }

  //--------------------

  /* For tablets: */
  @media only screen and (min-width: 600px) {

  }


  /* For desktop: */
  @media only screen and (min-width: 768px) {
    .invoice-list{
      display: none;
    }

    table{
      display: table;
      table-layout: fixed;
    }

    tr{
      display: table-row;
      height: 40px;
    }

    td, thead th{
      display: table-cell !important;
    }

    td:first-child{
      display: none;
    }

    #tbl-name{
      font-weight: normal;
    }

    #tbl-desc, #tbl-amount, #tbl-created{
      font-size: 14px;
      font-style: normal;
      color: #000;
    }

    #tbl-amount, #tbl-created{
      text-align: left;
      margin-left: 0;
    }

    #tbl-desc{
      width: 50px;
    }

  }

  /* Large Desktop */
  @media only screen and (min-width: 1000px) {
    td:first-child{
      display: table-cell;
    }
  }

  /*@media only screen and (max-width: 1000px) {
    th:first-child, td:first-child, .created-date, thead{
      display: none;
    }
  }*/

</style>
