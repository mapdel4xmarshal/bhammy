<template>
  <div>
    <app-view-invoice v-if="invoiceSection == 3" :invoice="selectedInvoiceData"></app-view-invoice>
    <div v-else-if="invoiceSection == 1">
        <div id="sales-header">
          <div class="action-menu">
            <div class="action-box" @click="invoiceSection = 2">
              <i class="fa fa-plus-circle fa-2x"></i>
              <span>New sale</span>
            </div>
            <div class="action-box">
              <i class="fa fa-sliders-h fa-2x"></i>
              <span>Filter</span>
            </div>
            <div class="action-box">
              <i class="fa fa-calendar-alt fa-2x"></i>
              <span>Date</span>
            </div>
            <div class="action-box">
              <i class="fa fa-search fa-2x"></i>
              <span>Search</span>
            </div>
          </div>
        </div>
      <div style="overflow-y: scroll; height: calc(100vh - 58px);">
        <div style="height: 10px;"></div>
        <app-invoice-row
                         :key="invoices[0].id"
                         :invoices="invoices">
        </app-invoice-row>


      </div>
    </div>
    <app-new-invoice v-else @showSales="invoiceSection = $event"></app-new-invoice>
  </div>

</template>

<script>
import InvoiceRow from './InvoiceSummary'
import ViewInvoice from './ViewInvoice'
import NewInvoice from './NewInvoice'

export default {
  name: 'sales',
  data () {
    return {
      invoiceSection: 1,
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
          amount: '1,394,990',
          paymentStatus: 'due'

        },
        {
          id: 12293,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          amount: 394099,
          paymentStatus: 'partial'

        },
        {
          id: 93,
          customerName: 'Mrs. Mapayi Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          amount: 1394099,
          paymentStatus: 'draft'

        }
      ]
    }
  },
  components: {
    appInvoiceRow: InvoiceRow,
    appViewInvoice: ViewInvoice,
    appNewInvoice: NewInvoice,
  },
  methods: {
    viewInvoice: function (invoice) { console.log(invoice);
      this.invoiceSection = 3;
      this.selectedInvoiceData = invoice;
    }
  }
}
</script>

<style scoped>

  .action-menu{
    background-color: white;
    border-radius: 3px;
    /*padding: 10px 0;*/
    text-align: center;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    position: relative;
    z-index: 19;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    //box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 4px 5px -5px rgba(0,0,0,0.75);
  }

  .summary-box span{
    font-size: 10px;
  }

  .action-box{
    text-align: center;
    display: inline-block;
    border-right: 1px solid #808080;
    cursor: pointer;
    padding: 5px 0;
  }

  .action-box:hover{
    background-color: #eee;
  }

  .action-menu .action-box:last-child{
    border-right: none !important;
  }

  .action-box i{
    display: block;
    font-size: 20px !important;
  }

  .action-box span{
    font-size: 14px;
  }

  #sales-header{
   /* margin-bottom: 10px;*/
  }

  input{
    width:100%
  }

  .imenu:after {
    content: '\2807';
    font-size: 15px;
  }
</style>
