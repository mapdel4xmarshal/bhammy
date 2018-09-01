<template>
  <div>
  <div id="sales-header">

    <div style="background-color: white; border-radius: 2px; padding: 10px;">
      <div style="display: inline-flex; position: relative; width: 100%;">
        <div style="width: 30%; text-align: center; margin:5px;">
          <i class="fa fa-home"></i>
        </div>
        <div style="border-right: 1px solid #3f3f3f52; border-left: 1px solid #3f3f3f52;width: 30%; text-align: center;margin:5px;">
          <i class="fa fa-home"></i>
        </div>
        <div style="width: 30%; padding-bottom: 5px; text-align: center; margin:5px;">
          <i class="fa fa-home"></i>
        </div>
      </div>
      <div style="border-top: 1px solid #3f3f3f52; display: block; position: relative;">
        <div class="action-box">
          <i class="fa fa-plus"></i>
          New Invoice
        </div>
        <div class="action-box"></div>
        <div class="action-box"></div>
        <div class="action-box"></div>
      </div>
    </div>

  </div>

    <app-view-invoice v-if="showInvoice" :invoice="selectedInvoiceData"></app-view-invoice>

    <app-invoice-row v-else v-for="invoice in invoices"
                     :key="invoice.id"
                     :invoice="invoice" @click="console.log('clicked')"
                     @viewInvoice="viewInvoice(invoice)">
    </app-invoice-row>
    <button>+ New item</button>

  </div>

</template>

<script>
import InvoiceRow from './InvoiceSummary'
import ViewInvoice from './ViewInvoice'

export default {
  name: 'sales',
  data () {
    return {
      showInvoice: false,
      selectedInvoiceData: {},
      invoices: [
        {
          id: 223,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          amount: 324099,
          paymentStatus: 'paid'

        },
        {
          id: 2230,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          amount: 394099,
          paymentStatus: 'unpaid'

        },
        {
          id: 2293,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          amount: 394099,
          paymentStatus: 'due'

        },
        {
          id: 93,
          customerName: 'Mrs. Mapayi Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets. 1000 crates of medium sized eggs',
          amount: 1394099,
          paymentStatus: 'draft'

        }
      ]
    }
  },
  components: {
    appInvoiceRow: InvoiceRow,
    appViewInvoice: ViewInvoice
  },
  methods: {
    viewInvoice: function (invoice) { console.log(invoice);
      this.showInvoice = !this.showInvoice;
      this.selectedInvoiceData = invoice;
    }
  }
}
</script>

<style scoped>
  .summary-box span{
    font-size: 10px;
  }

  #sales-header{
    margin-bottom: 10px;
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
