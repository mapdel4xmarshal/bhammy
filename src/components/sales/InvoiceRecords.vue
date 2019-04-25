<template>
  <div>
    <!--<div class="container">
      <table style="width:100%;">
        <thead>
        <th>Invoice Id</th>
        <th>Status</th>
        <th>Customer</th>
        <th style="width:30%;">Description</th>
        <th class="created-date">Created</th>
        <th>Due date</th>
        <th>Amount</th>
        <th>Balance</th>
        <th></th>
        </thead>

        <tbody>
        <tr class="" :class="invoice.paymentStatus" v-for="invoice in invoices" :key="invoice.id" @click="$emit('viewInvoice', invoice)">
          <td>{{ invoice.id }}</td>
          <td id="tbl-status" class="mobile-view"><div class="status" :class="invoice.paymentStatus">{{ invoice.paymentStatus }}</div></td>
          <td id="tbl-name" class="mobile-view elipsis">{{ invoice.customerName }}</td>
          <td id="tbl-desc" class="mobile-view elipsis">{{ invoice.description }}</td>
          <td id="tbl-created" class="mobile-view">Jan. 24 2018</td>
          <td>Jan. 24 2018</td>
          <td id="tbl-amount" class="mobile-view" :class="invoice.paymentStatus">₦{{ invoice.amount }}</td>
          <td id="tbl-balance" :class="invoice.paymentStatus">₦{{ invoice.amount }}</td>
          <td><span class="imenu"></span></td>
        </tr>
        </tbody>
      </table>

    </div>-->
    <div style="display: block;">
      <div style="display: inline-block; padding: 0 10px 10px 10px;">
        <div style="font-size: 1.5em; font-weight: bold">Orders</div>
        <small>some infi</small>
      </div>
      <div style="display: inline-block; float: right;">
        <app-button-pill :click-handler="newInvoice">+ New Invoice</app-button-pill>
      </div>
    </div>

    <custom-table
      :usePagination="true"
      :title="'Orders'"
      :headers="headers"
      :records="invoices">
      <template v-slot:paymentStatus="slotProps">
        <div class="status" :class="slotProps.invoice.paymentStatus">
          {{ slotProps.invoice.paymentStatus }}
        </div>
      </template>
    </custom-table>
  </div>
</template>

<script>
import customTable from '../common/CustomTable'
import ButtonPill from '../common/ButtonPill'

export default {
  name: 'InvoiceRecords',
  data () {
    return {
      showSubMenu: false,
      invoice: {},
      headers: [
        {label: 'Invoice id', id: 'id'},
        {label: 'Status', id: 'paymentStatus', slot: 'paymentStatus'},
        {label: 'Customer', id: 'customerName'},
        {label: 'Description', id: 'description'},
        {label: 'Created', id: 'created'},
        {label: 'Amount',
          id: 'amount',
          representedAs: function (record) {
            return `₦${record.amount}`
          }}
      ]
    }
  },
  props: ['invoices'],
  methods: {
    newInvoice () {
      console.log('clicked')
      this.$router.push({name: 'newSale'})
    }
  },
  computed: {

  },
  components: {
    customTable,
    appButtonPill: ButtonPill
  }
}
</script>

<style scoped>

  .container {
    margin: 20px;
    position: relative;
  }

  .invoice-list {
    display: inline-block;
    box-sizing: border-box;
    background-color: white;
    padding: 10px;
    width: 100%;
    border-bottom: 0.05rem solid var(--draftColor);
    cursor: pointer;
    position: relative;
  }

  .invoice-list .left-col {
    float: left;
    width: 65%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .invoice-list .right-col {
    float: right;
    text-align: right;
  }

  .right-col > span {
    font-size: 12px;
    color: #808080;
  }

  .right-col > strong {
    text-align: right;
    font-size: 16px;
  }

  .left-col > strong {
    font-size: 14px;
  }

  i {
    font-size: 11px;
    color: #808080;
    text-overflow: ellipsis;
  }

  .status {
    font-size: 11px;
    width: 40px;
    display: inline-block;
    /*color:white;*/
    color: #000;
    font-weight: 600;
    border-radius: 2px;
    background-color: #eeeeee;
    padding: 3px 10px;
    text-transform: uppercase;
    text-align: center;
  }

  strong.paid {
    color: var(--paidColor);
  }

  strong.due {
    color: var(--dueColor);
  }

  strong.unpaid {
    color: var(--unpaidColor);
  }

  strong.partial {
    color: var(--partialColor);
  }

  strong.draft {
    color: var(--draftColor);
  }

  .status.paid {
    border-bottom: 2px solid var(--paidColor);
    color: var(--paidColor);
  }

  .status.due {
    border-bottom: 2px solid var(--dueColor);
    color: var(--dueColor);
  }

  .status.unpaid {
    border-bottom: 2px solid var(--unpaidColor);
    color: var(--unpaidColor);
  }

  .status.partial {
    border-bottom: 2px solid var(--partialColor);
    color: var(--partialColor);
  }

  .status.draft {
    border-bottom: 2px solid var(--draftColor);
    color: var(--draftColor);
  }

  .invoice-list.paid {
    border-bottom-color: var(--paidColor);
  }

  .invoice-list.due {
    border-bottom-color: var(--dueColor);
  }

  .invoice-list.unpaid {
    border-bottom-color: var(--unpaidColor);
  }

  .invoice-list.partial {
    border-bottom-color: var(--partialColor);
  }

  .invoice-list.draft {
    border-bottom-color: var(--draftColor);
  }

  table {
    font-size: 14px;
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }

  thead th {
    background-color: #808080;
    color: #fff;
    padding: 10px;
    text-align: left;
    text-transform: uppercase;
    display: none;
  }

  table tr {
    background-color: #fff;
    border-bottom: 1px solid #808080;
    cursor: pointer;
  }

  th:first-child, td:first-child {
    padding-left: 20px;
  }

  td:last-child {
    cursor: pointer;
  }

  .imenu:after {
    content: '\2807';
    font-size: 25px;
    color: grey;
  }

  /* MOBILE SPECFIC CSS */
  td {
    display: none;
  }

  tr {
    display: grid;
    grid-template-columns: 60px 50% auto;
    padding: 5px 10px;
    /*width: calc(100vw - 30px);*/
  }

  #tbl-desc {
    grid-column: 1 / 3;
    grid-row: 2;
    font-size: 12px;
    color: #808080;
    font-style: italic;
  }

  .elipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #tbl-name, #tbl-amount {
    font-weight: 600;
  }

  #tbl-amount {
    font-size: 16px;
  }

  #tbl-created {
    color: #808080;
    font-size: 12px;
  }

  #tbl-amount, #tbl-created {
    text-align: right;
    margin-left: 10px;
  }

  #tbl-name {
    padding-left: 5px;
  }

  .mobile-view {
    display: inline-block;
  }

  //--------------------

  /* For tablets: */
  @media only screen and (min-width: 600px) {

  }

  /* For desktop: */
  @media only screen and (min-width: 768px) {
    .invoice-list {
      display: none;
    }

    th:first-child, td:first-child, td:nth-child(7), th:nth-child(7) {
      display: none !important;
    }

    .elipsis {
      white-space: normal;
    }

    td:nth-child(2), th:nth-child(2) {
      padding-left: 15px;
    }

    table {
      display: table;
      table-layout: auto;
    }

    tr {
      display: table-row;
      height: 40px;
    }

    td {
      padding: 10px;
    }

    td, thead th {
      display: table-cell !important;
    }

    td:first-child {
      display: none;
    }

    #tbl-name {
      font-weight: normal;
    }

    #tbl-desc, #tbl-amount, #tbl-created {
      font-size: 14px;
      font-style: normal;
      color: #000;
    }

    #tbl-amount, #tbl-created {
      text-align: left;
      margin-left: 0;
    }

    #tbl-desc {
      width: 50px;
    }

    th:nth-child(6), td:nth-child(6) {
      display: none !important;
    }

  }

  @media only screen and (min-width: 900px) {
    th:first-child, td:first-child, td:nth-child(7), th:nth-child(7) {
      display: table-cell !important;
    }
  }

  /* Large Desktop */
  @media only screen and (min-width: 1200px) {
    th:nth-child(6), td:nth-child(6) {
      display: table-cell !important;
    }
  }

  /*@media only screen and (max-width: 1000px) {
    th:first-child, td:first-child, .created-date, thead{
      display: none;
    }
  }*/

</style>
