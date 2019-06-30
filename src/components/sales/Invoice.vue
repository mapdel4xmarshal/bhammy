<template>
  <div>
    <custom-dialog :active.sync="showDialog" :title="'Edit Item'">
      <add-item />
    </custom-dialog>

     <!-- <div class="scroll-section">
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
    </div>-->

    <section class="invoice">
      <app-page-header>
        <template v-slot:controls>
          <button-pill>+ Save invoice</button-pill>
        </template>

        <template v-slot:title class="invoice__title">
          <h1>INVOICE# 23542</h1>
        </template>

      </app-page-header>

      <div class="items-title"><strong>Items</strong></div>
      <div class="items__container">
        <custom-table :records="invoice.items"
                      :title="'Items'"
                      :clickHandler="itemClickHandler"
                      :headers="itemsHeader">
        </custom-table>

        <button-pill :is-primary="false" class="items__add-item">+ New item</button-pill>

        <div class="invoice__footer">
          <textarea class="invoice__comment">Comment...</textarea>
          <div class="invoice__summary">
            <strong>Net total</strong>
            <strong>₦37,098</strong>

            <span>Discount</span>
            <span>&mdash;</span>

            <strong id="total">TOTAL</strong>
            <strong class="value summary-total">₦67,098</strong>
          </div>
        </div>
        <br>
        <small>
          <strong>Last Modified </strong> by Emmanuel on 19-11-2019
        </small>

      </div>
    </section>
  </div>
</template>

<script>
import CustomTable from '@/components/common/CustomTable'
import CustomDialog from '@/components/common/Dialog'
import AddItem from './AddItem'
import AppPageHeader from "../common/AppPageHeader";
import ButtonPill from "../common/ButtonPill";

export default {
  name: 'NewInvoice',
  data () {
    return {
      invoice: {
        paymentDate: '',
        invoiceDate: '',
        items: [
          {id: 1, name: 'Jumbo Sized Egg', price: '₦850', quantity: 100, discount: '₦0.00', total: 85000},
          {id: 2, name: 'Medium Sized Egg', price: '₦750', quantity: 100, discount: '₦0.00', total: 75000},
          {id: 3, name: 'Pullet Sized Egg', price: '₦600', quantity: 100, discount: '₦0.00', total: 60000}
        ]
      },
      showFullCustomerDetails: false,
      itemsHeader: [
        {label: 'SKU', id: 'id', width: '5%', breakPoint: 'medium'},
        {label: 'Name', id: 'name', width: '50%'},
        {label: 'Price', id: 'price'},
        {label: 'Qty', id: 'quantity'},
        {label: 'Disc.', id: 'discount', breakPoint: 'medium'},
        {label: 'Total',
          id: 'amount',
          representedAs: function (record) {
            return `₦${record.total}`
          }}
      ],
      showDialog: false
    }
  },
  components: {
    ButtonPill,
    AppPageHeader,
    AddItem,
    CustomTable,
    CustomDialog
  },
  methods: {
    itemClickHandler (item) {
      console.log(item)
      this.showDialog = true
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

<style lang="scss" scoped>
  @import "../../scss/global.scss";
  .invoice {

  }

  .invoice__footer {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 10px;

    @include respond-to(tablet) {
      grid-template-columns: 3fr minmax(200px, 1.5fr);
    }
  }

  .invoice__summary {
    background-color: #e1e1e1;
    display: grid;
    grid-gap: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;

    > :nth-child(even) {
      justify-self: end;
    }
  }

  .invoice__comment {
    border: 1px dashed rgb(128, 128, 128);
    background-color: transparent;
    color: #808080;
    padding: 5px;
    resize: none;
  }

  .items__add-item {
    margin: 10px auto;
    display: inline-block !important;
  }
</style>
