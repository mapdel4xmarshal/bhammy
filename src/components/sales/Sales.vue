<template>
  <div>
    <!--<app-view-invoice v-if="invoiceSection == 3" :invoice="selectedInvoiceData"></app-view-invoice>
    <div v-else-if="invoiceSection == 1">
      <app-button-pill>+ New Invoice</app-button-pill>
      <div id="sales-header">
          <div class="action-menu">
            <div class="action-box" @click="invoiceSection = 2">
              <font-awesome-icon icon="plus-circle" size="2x" />
              <span>New sale</span>
            </div>
            <div class="action-box">
              <font-awesome-icon icon="sliders-h" size="2x" />
              <span>Filter</span>
            </div>
            <div class="action-box">
              <font-awesome-icon icon="chart-pie" size="2x" />
              <span>Stats</span>
            </div>
            <div class="action-box">
              <font-awesome-icon icon="search" size="2x" />
              <span>Search</span>
            </div>
          </div>
        </div>
      <div class="scroll-section">
        <div style="height: 10px;"></div>
        <app-invoice-row
                         :key="invoices[0].id"
                         :invoices="invoices"
                         @viewInvoice="viewInvoice">
        </app-invoice-row>

      </div>
    </div>
    <app-new-invoice v-else @showSales="invoiceSection = $event"></app-new-invoice>-->

    <app-breadcrumb></app-breadcrumb>
    <transition name="slide-fade" appear mode="out-in">
      <router-view :invoices="invoices"></router-view>
    </transition>

    <!--<app-invoice-row
      :key="invoices[0].id"
      :invoices="invoices"
      @viewInvoice="viewInvoice">
    </app-invoice-row>-->
  </div>

</template>

<script>
import InvoiceRow from './InvoiceRecords'
import ViewInvoice from './ViewInvoice'
import NewInvoice from './NewInvoice'
import ButtonPill from '../common/ButtonPill'
import Breadcrumb from '../common/Breadcrumb'

export default {
  name: 'sales',
  data () {
    return {
      invoiceSection: 1,
      selectedInvoiceData: {},
      invoices: [
        {
          id: 223,
          customerName: 'Mrs. Saliu Semira.',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 324099,
          paymentStatus: 'paid'

        },
        {
          id: 2230,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 394099,
          paymentStatus: 'unpaid'

        },
        {
          id: 2293,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: '1,394,990',
          paymentStatus: 'due'

        },
        {
          id: 12293,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 394099,
          paymentStatus: 'partial'

        },
        {
          id: 93,
          customerName: 'Mrs. Mapayi Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 1394099,
          paymentStatus: 'draft'

        },
        {
          id: 2237,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 324099,
          paymentStatus: 'paid'

        },
        {
          id: 22307,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 394099,
          paymentStatus: 'unpaid'

        },
        {
          id: 22937,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: '1,394,990',
          paymentStatus: 'due'

        },
        {
          id: 122937,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 394099,
          paymentStatus: 'partial'

        },
        {
          id: 937,
          customerName: 'Mrs. Mapayi Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 1394099,
          paymentStatus: 'draft'

        },
        {
          id: 2239,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 324099,
          paymentStatus: 'paid'

        },
        {
          id: 22309,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 394099,
          paymentStatus: 'unpaid'

        },
        {
          id: 22939,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: '1,394,990',
          paymentStatus: 'due'

        },
        {
          id: 122939,
          customerName: 'Mrs. Saliu Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 394099,
          paymentStatus: 'partial'

        },
        {
          id: 939,
          customerName: 'Mrs. Mapayi Semira',
          description: '200 crates of Jumbo Eggs. 100 crates of pullets.',
          created: 'Jan. 24 2018',
          modified: 'Jan. 24 2018',
          amount: 1394099,
          paymentStatus: 'draft'

        }
      ]
    }
  },
  components: {
    appButtonPill: ButtonPill,
    appInvoiceRow: InvoiceRow,
    appViewInvoice: ViewInvoice,
    appNewInvoice: NewInvoice,
    appBreadcrumb: Breadcrumb
  },
  methods: {
    viewInvoice: function (invoice) {
      console.log(invoice)
      this.invoiceSection = 3
      this.selectedInvoiceData = invoice
    }
  }
}
</script>

<style scoped>

  .scroll-section{
    overflow-y: auto;
    height: calc(100vh - 120px);
  }

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

  .action-box svg{
    font-size: 20px !important;
  }

  .action-box span{
    font-size: 14px;
    display: block;
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
