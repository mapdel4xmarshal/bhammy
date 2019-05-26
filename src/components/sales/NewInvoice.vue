<template>
  <div>
      <div class="scroll-section">
      <div class="invoice-details">
        <span class="title">
          Invoice details
        </span>
        <div style="width: 100%;">
          <div id="invoice-id">
            <label for="invoice-date">Invoice#</label>
            <span>INVOICE# 23542</span>
          </div>

          <div id="invoice-status">
            <label for="payment-date">Status</label>
            <span class="draft">new</span>
            <input type="date" v-model="invoice.paymentDate">
          </div>

          <div id="invoice-date">
            <label for="invoice-date">Invoice date</label>
            <input type="date" v-model="invoice.invoiceDate">
            <span>JUNE 29, 2019</span>
          </div>

          <div id="payment-date">
            <label for="payment-date">Payment date</label>
            <input type="date" v-model="invoice.paymentDate">
            <span>JUNE 29, 2019</span>
          </div>

        </div>
      </div>

      <div class="customer-info">
        <strong class="title">
          Customer
        </strong>
        <div class="customer" @click="showFullCustomerDetails = !showFullCustomerDetails">
          <strong>Mr Bamidele Mapayi</strong>
          <div v-if="!showFullCustomerDetails">
            House 24, Mandate Estate. <br>
            Ilorin.<br>
            080730000000
          </div>
          <div style="margin: auto; text-align: center;">
            <font-awesome-icon v-if="showFullCustomerDetails" icon="angle-down"></font-awesome-icon>
            <font-awesome-icon v-else icon="angle-up"></font-awesome-icon>
          </div>
          <span id="edit">
            <font-awesome-icon icon="edit"></font-awesome-icon>
          </span>
        </div>
      </div>

      <div class="items-title"><strong>Items</strong></div>
      <div class="items__container">
        <!--<table>
          <thead>
            <th class="no-mobile">#</th>
            <th>ITEM TYPE</th>
            <th class="desc">DESCRIPTION</th>
            <th>PRICE</th>
            <th>QTY.</th>
            <th></th>
            <th>TOTAL</th>
          </thead>
          <tbody>
            <tr>
              <td class="no-mobile">1</td>
              <td>Jumbo Sized Eggs</td>
              <td class="desc">Fresh Large sized Eggs </td>
              <td>₦850</td>
              <td>100</td>
              <td>100 x ₦850</td>
              <td>₦85,000</td>
              <td>
                <span>
                  <font-awesome-icon icon="edit" size="2x" color="#ccc" />
                </span>
                <span>
                  <font-awesome-icon icon="times-circle" size="2x" color="#ccc" /></span>
              </td>
            </tr>
            <tr>
              <td class="no-mobile">2</td>
              <td>Jumbo Sized Eggs</td>
              <td class="desc">Fresh Large sized Eggs </td>
              <td>₦850</td>
              <td>100</td>
              <td>100 x ₦850</td>
              <td>₦85,000</td>
              <td>
                <span>
                  <font-awesome-icon icon="edit" size="2x" color="#ccc" />
                </span>
                <span>
                  <font-awesome-icon icon="times-circle" size="2x" color="#ccc" /></span>
              </td>
            </tr>
            <tr>
              <td class="no-mobile">3</td>
              <td>Jumbo Sized Eggs</td>
              <td class="desc">Fresh Large sized Eggs </td>
              <td>₦800</td>
              <td>100</td>
              <td>100 x ₦8050</td>
              <td>₦85,000</td>
              <td>
                <span>
                  <font-awesome-icon icon="edit" size="2x" color="#ccc"/>
                </span>
                <span>
                  <font-awesome-icon icon="times-circle" size="2x" color="#ccc"/></span>
              </td>
            </tr>

            <tr class="edit">
              <td class="no-mobile">4</td>
              <td><input type="text" placeholder="Item type..."></td>
              <td class="desc"><input type="text" placeholder="Item description..."></td>
              <td><input type="number" placeholder="Item price..."></td>
              <td><input type="number" placeholder="Quantity"></td>
              <td>100 x ₦8050</td>
              <td>₦</td>
              <td>
                <span>
                  <font-awesome-icon icon="edit" size="2x" color="#ccc"/>
                </span>
                <span>
                  <font-awesome-icon icon="times-circle" size="2x" color="#ccc" /></span>
              </td>
            </tr>

          </tbody>
        </table>-->

        <custom-table :records="invoice.items"
                      :title="'Items'"
                      :clickHandler="itemClickHandler"
                      :headers="itemsHeader">
        </custom-table>

        <button style="margin:10px 0;">+ New Item</button>

      </div>

      <div class="invoice-footer">
        <div id="invoice-summary">
          <strong class="summary-title">Net total</strong>
          <strong class="value">₦37,098</strong>

          <span class="summary-title">Discount</span>
          <span class="value">&mdash;</span>

          <strong id="total" class="summary-title">TOTAL</strong>
          <strong class="value summary-total">₦67,098</strong>
        </div>
        <div id="comment">
          <textarea>Comment...</textarea>
        </div>
      </div>
      <br>
      <small>
        <strong>Last Modified </strong> by Emmanuel on 19-11-2019
      </small>
    </div>
  </div>
</template>

<script>
import CustomTable from '@/components/common/CustomTable'

export default {
  name: 'NewInvoice',
  data () {
    return {
      invoice: {
        paymentDate: '',
        invoiceDate: '',
        items: [
          {id: 1, name: 'Jumbo Sized Egg', price: '₦850', quantity: 100, discount: 0, total: 85000},
          {id: 2, name: 'Medium Sized Egg', price: '₦750', quantity: 100, discount: 0, total: 75000},
          {id: 3, name: 'Pullet Sized Egg', price: '₦600', quantity: 100, discount: 0, total: 60000}
        ]
      },
      showFullCustomerDetails: false,
      itemsHeader: [
        {label: 'SKU', id: 'id', width: '10%'},
        {label: 'Name', id: 'name', width: '40%'},
        {label: 'Price', id: 'price', width: '10%'},
        {label: 'Qty', id: 'quantity', width: '10%'},
        {label: 'Disc.', id: 'discount', width: '10%'},
        {label: 'Total',
          id: 'amount',
          width: '10%',
          representedAs: function (record) {
            return `₦${record.total}`
          }}
      ]
    }
  },
  components: {
    CustomTable
  },
  methods: {
    itemClickHandler (item) {
      console.log(item)
    }
  },
  created () {
    const currentDate = new Date().toISOString().split('T')[0]
    this.invoice.invoiceDate = currentDate
    this.invoice.paymentDate = currentDate
    this.invoice.id = new Date().getTime()
  }
}
</script>

<style scoped>

  .scroll-section {
    overflow-y: auto;
    height: calc(100vh - 50px);
  }

  #invoice-date, #payment-date {
    border: 1px solid #ccc;
    border-right: none;
    padding: 5px;
  }

  #invoice-date {
    border-left: none;
  }

  #payment-date {
    text-align: right;
  }

  #invoice-date span, #payment-date span {
    display: block;
    font-size: 23px;
    color: #616161;
    white-space: nowrap;
  }

  .items-title {
    margin-top: 20px;
  }

  .items__container {
    padding: 10px;
    clear: both;
  }

  .items__container table {
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;
  }

  .items__container table tr {
    font-size: 14px;
    border-bottom: 1px solid #9e9e9e;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    align-content: space-evenly;
    height: 50px;
  }

  .items__container table thead {
    display: none;
  }

  .items__container table tr:hover {
    border-bottom-width: 1px;
    border-left-width: 4px;
    position: relative;
    padding-left: 10px;
    box-shadow: 0px 3px 5px -3px #757575;
  }

  #invoice-id {
    display: flex;
    align-items: center;
  }

  #invoice-id span {
    border: 1px solid #ccc;
    padding: 5px 10px;
    background-color: #e1e1e1;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    border-left: none;
    white-space: nowrap;
  }

  #invoice-status {
    display: flex;
    align-items: center;
    float: right;
    justify-content: flex-end;
  }

  #invoice-status > span {
    text-transform: uppercase;
    border: 1px solid #66BB6A;
    background-color: #e1e1e1;
    padding: 5px 10px;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    border-right: 2px solid #66BB6A;
  }

  #invoice-status > span.paid {
    border-color: var(--paidColor);
  }

  #invoice-status > span.due {
    border-color: var(--dueColor);
  }

  #invoice-status > span.partial {
    border-color: var(--partialColor);
  }

  #invoice-status > span.draft {
    border-color: var(--draftColor);
  }

  #invoice-id label, #invoice-status label {
    display: none;
  }

  table tr:hover td:last-child {
    position: absolute;
    float: right;
    display: grid;
    width: 87px;
    right: 15px;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-items: center;
  }

  table tr:hover td:last-child span {
    display: grid;
    align-items: center;
    border-left: 1px solid darkgray;
    height: 100%;
    width: 100%;
    justify-items: center;
    line-height: 100%;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  table tr:hover td span:first-child {
    border: none;
  }

  table tr:hover td > svg {
    color: #000;
  }

  td:nth-child(4), td:nth-child(5), td:last-child {
    display: none;
  }

  td:nth-child(2) {
    font-weight: 600;
  }

  td:nth-last-child(2) {
    text-align: right;
    grid-column: 2 / 3;
    grid-row: 2;
    font-weight: 600;
    font-size: 18px;
  }

  td:nth-last-child(3) {
    text-align: right;
    color: #808080;
    font-size: 12px;
  }

  .invoice-footer {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px;
  }

  #comment > textarea {
    width: calc(100% - 12px);
    border: 1px dashed rgb(128, 128, 128);
    border-radius: 6px;
    height: 90%;
    max-height: 102px;
    background-color: transparent;
    color: #808080;
    padding: 5px;
  }

  #invoice-summary {
    background-color: #e1e1e1;
    display: grid;
    grid-gap: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
  }

  #invoice-summary > div {
    display: block;
  }

  .summary-total {
    font-size: 30px;
  }

  th {
    font-size: 14px;
    color: #808080;
    font-weight: normal;
  }

  th:last-child {
    width: 65px;
  }

  td:first-child, th:first-child {
    padding-left: 15px;
  }

  tr.edit {
    display: none !important;
  }

  .desc {
    grid-column: 1 / 3;
    grid-row: 2;
    font-size: 13px;
    color: #808080;
  }

  td > svg {
    color: #808080;
    display: inline-block;
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
  }

  .no-mobile {
    display: none;
  }

  .customer {
    background-color: #fff;
    padding: 10px 10px 0 10px;
    font-size: 14px;
    position: relative;
  }

  .customer #edit {
    float: right;
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 20px;
  }

  #invoice-summary .summary-title {
    float: left;
    color: #616161;
  }

  #invoice-summary #total {
    font-size: 30px;
  }

  #invoice-summary .value {
    text-align: right;
  }

  .vertical-divider {
    border-right: 1px solid #bbb;
    margin-right: 10px;
  }

  label {
    font-size: 12px;
    color: #808080;
  }

  .customer > span {
    display: block;
  }

  .customer-info, .invoice-details {
    width: 100%;
    display: inline-block;
    margin-top: 10px;
  }

  .invoice-details {
    margin-top: 70px;
  }

  .invoice-details > div {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
    grid-gap: 10px 0;
  }

  .invoice-details .title {
    display: none;
  }

  .invoice-details > div input {
    display: none;
  }

  .tool {
    padding: 7px;
    border: 1px solid #2b2b2b;
    border-radius: 3px;
    margin-right: 5px;
    display: inline-block;
    color: #2B2B2B;
    font-size: 15px;
    cursor: pointer;
  }

  .tool:hover {
    background-color: #bbb;
  }

  input {
    width: calc(100% - 15px);
  }

  #title {
    display: inline-block;
    position: relative;
    float: left;
  }

  span.title {
    border-bottom: 1px solid #000;
    width: 100%;
    display: inline-block;
    line-height: 1.6;
  }

  /* For tablets: */
  @media only screen and (min-width: 600px) {

    .items-title {
      clear: both;
    }

    tr.edit {
      display: table-row !important;
    }

    tr.edit input {
      border: none;
      padding: 0;
      border-radius: 0;
      border-bottom: 1px dashed #ccc !important;
    }

    table thead th:last-child {
      width: 120px;
      display: table-cell !important;
    }

    table tr:hover td:last-child {
      display: grid !important;
      -webkit-box-shadow: -7px 0px 5px -2px #e1e1e1;
      box-shadow: -7px 0px 5px -2px #e1e1e1;
      background-color: white;
      margin: 1px 1px 0 0;
      height: 21px;
    }

    #invoice-date, #payment-date {
      border: none;
    }

    #invoice-date span, #payment-date span {
      display: none;
    }

    #invoice-date input, #payment-date input {
      display: inline-block;
    }

    .customer-info, .invoice-details {
      width: 40%;
      margin-top: 70px;
    }

    .items__container table tr {
      display: table-row;
    }

    .items__container table tr td {
      display: table-cell;
      text-align: left !important;
    }

    td:nth-last-child(3), th:nth-last-child(3) {
      display: none !important;
    }

    td:last-child, th:last-child {
      display: none !important;
    }

    td.desc {
      color: #000 !important;
    }

    .invoice-footer {
      grid-template-columns: auto 30% !important;
    }

    .invoice-footer div:first-child {
      order: 2;
      grid-column: 2/3;
    }

    .customer-info {
      float: right;
    }

    .invoice-details {
      float: left;
    }

    .no-mobile {
      display: table-cell;
    }

    .items__container table thead {
      border-bottom: 2px solid #68284d;
      margin-bottom: 10px;
      display: table-row;
    }

    .items__container table tr {
      height: 30px;
    }

    td, th {
      text-align: left;
      padding: 5px;
    }
  }

  .action-box {
    text-align: center;
    display: inline-block;
    border-right: 1px solid #808080;
    cursor: pointer;
    padding: 5px 0;
  }

  .action-box:hover {
    background-color: #eee;
  }

  .action-menu .action-box:last-child {
    border-right: none !important;
  }

  .action-box svg {
    font-size: 20px !important;
  }

  .action-box span {
    font-size: 14px;
    display: block;
  }

  .action-menu {
    background-color: white;
    border-radius: 3px;
    text-align: center;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    position: relative;
    z-index: 19;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 4px 5px -5px rgba(0, 0, 0, 0.75);
  }

  .action-box {
    text-align: center;
    display: inline-block;
    border-right: 1px solid #808080;
    cursor: pointer;
    padding: 5px 0;
  }

  .action-box:hover {
    background-color: #eee;
  }

  .action-menu .action-box:last-child {
    border-right: none !important;
  }

  .action-box svg {
    font-size: 20px !important;
  }

  .action-box span {
    font-size: 14px;
    display: block;
  }

  input[type='date'], input[type='text'] {
    background-color: #ffffffd1;
    border: 1px solid #bbb;
    border-radius: 5px;
    padding-left: 10px;
  }

  .input-container {
    margin: 10px 0;
    display: flex;
  }

  .input-container select {
    width: 100%;
    height: 30px;
    border-radius: 5px;
  }

</style>
