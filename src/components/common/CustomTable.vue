<template>
  <div>
    <div id="card">
      <!--<table>
        <thead>
        <th :key="header.id"
            v-for="header in headers"
            :class="header.breakPoint"
            :style="{width: header.width}"
            :title="header.label">
          {{header.label}}
        </th>
        <th v-if="expandable" class="expandable"></th>
        </thead>
      </table>-->
      <div class="scrollable">
        <div class="table__header">
          <div v-for="header in headers"
               class="table__column"
               :key="header.id"
               :class="header.breakPoint"
               :style="{width: header.width}"
               :title="header.label">
            {{header.label}}
          </div>
          <div v-if="expandable" class="table__column--expandable"></div>
        </div>
        <!-- <table>
         <tbody v-for="record in records" :key="record.id" :class="{'expanded' : record.id == 2230}">
           <tr>
             <td v-for="header in headers"
                 :key="'key-' + header.id"
                 :class="header.breakPoint"
                 :style="{width: header.width}"
                 :title="header.representedAs? header.representedAs(record) : record[header.id]">
                 <slot :name="header.slot" v-bind:invoice="record">
                   {{header.representedAs? header.representedAs(record) : record[header.id]}}
                 </slot>
             </td>
             <td v-if="expandable" class="expandable">
               <div class="dropdown__toggle">
                 <font-awesome-icon icon="angle-down" focusable="true" class="toggle"/>
               </div>
             </td>
           </tr>
           <tr v-if="record.id == 2230">
             <td colspan="1" style="text-align: left;">
               <span><strong>ID:</strong>2334</span><br>
               <span><strong>ID:</strong>2334</span><br>
               <span><strong>ID:</strong>2334</span><br>
               <span><strong>ID:</strong>2334</span>
             </td>
           </tr>
         </tbody>
       </table>-->

        <div class="table__row"
             v-for="record in records" :key="record.id" :class="{'dropdown--active' : record.id == activeDropdown}">
          <div class="table__column"
               v-for="header in headers"
               :key="'key-' + header.id"
               :class="header.breakPoint"
               :style="{width: header.width}"
               :title="header.representedAs? header.representedAs(record) : record[header.id]">
            <slot :name="header.slot" v-bind:invoice="record">
              {{header.representedAs? header.representedAs(record) : record[header.id]}}
            </slot>
          </div>

          <div v-if="expandable" class="table__column--expandable">
            <div class="dropdown__toggle" @click="toggleDropdown(record)">
              <font-awesome-icon icon="angle-down" focusable="true" class="toggle"/>
            </div>
          </div>
          <transition name="slide-fade">
            <div v-if="record.id == activeDropdown" class="table__column dropdown">
              <div>hehehehehe</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <pagination v-if="usePagination"></pagination>
  </div>
</template>

<script>
import Pagination from './Pagination'

export default {
  name: 'customTable',
  data () {
    return {
      activeDropdown: -1
    }
  },
  props: {
    title: {
      type: String,
      required: false
    },
    usePagination: {
      type: Boolean,
      required: true,
      default: false
    },
    records: {
      type: Array
    },
    headers: {
      type: Array
    },
    expandable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    Pagination
  },
  methods: {
    toggleDropdown (record) {
      //event.currentTarget.classList.toggle('dropdown--active')
      record.showDropdown = !record.showDropdown
      this.activeDropdown = record.id === this.activeDropdown ? -1 : record.id
      console.log(record)
    }
  },
  computed: {},
  created () {
    console.log(this.records)
  }
}
</script>

<style lang="scss" scoped>

  .animate {
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }

  #card {
    background-color: #FFF;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 0px 4px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 4px -3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 4px -3px rgba(0, 0, 0, 0.75);
    -o-box-shadow: 0px 0px 4px -3px rgba(0, 0, 0, 0.75);
    padding: 10px 0;
    margin-bottom: 20px;
  }

  .dropdown {
    border: none !important;
    flex: 1 100% !important;
  }

  .dropdown--active {
    @extend .animate;
    border: none !important;
    border-radius: 10px;
    height: 100%;
    /*margin: 5px auto;*/
    -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.99);
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.99);
    -o-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.99);
  }

  .dropdown--active + .table__row{
    border-top: none !important;
  }

  .dropdown__toggle {
    @extend .animate;
    border: 1px solid #CCC;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;
    text-align: center;
  }

  .dropdown__toggle:hover {
    background-color: #CCC;
  }

  .table__header {
    border-top: none !important;
  }

  .table__row, .table__header {
    @extend .animate;
    border-top: 1px solid #e0e0e0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .table__row:hover{
    background-color: #F5F5F5;
    cursor: pointer;
  }

  .table__column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    font-size: 12px;
    height: 30px;
    justify-content: center;
    overflow: hidden;
    padding: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .table__column--expandable {
    @extend .table__column;
    flex-basis: 40px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease;
  }
  .slide-fade-enter {
    height: 0;
    opacity: 0;
  }
  .slide-fade-leave-to {
    height: 0;
    opacity: 0;
  }

  /*tbody.expanded{
    border-radius: 10px;
    margin: 5px 0;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px -2px #212121;
  }

  tr {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  tbody.expanded, tbody.expanded + tbody{
    border: none;
  }

  .scrollable{
    overflow: auto;
    max-height: calc(100vh - 300px);
  }

  table{
    table-layout: fixed;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }

  th{
    color: #e0e0e0;
    font-size: 13px;
    overflow: hidden;
    padding: 10px 0 10px 5px;
    text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
  }

  td{
    font-size: 12px;
    overflow: hidden;
    padding: 10px 0 10px 5px;
    text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
  }

  th:last-child, td:last-child{
    padding-right: 5px;
    text-align: right;
  }

  tbody{
    border-top: 1px solid #e0e0e0;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }

  tbody:hover{
    background-color: #F5F5F5;
    cursor: pointer;
  }

 .small, .medium, .large{
    display: none;
  }

  @media (min-width: 500px) {
    .small{
      display: table-cell;
    }

    th:first-child, td:first-child{
      padding-left: 10px;
    }

    th:last-child, td:last-child{
      padding-right: 10px;
    }
  }

  @media (min-width: 900px) {
    .medium{
      display: table-cell;
    }

    th:first-child, td:first-child{
      padding-left: 20px;
    }

    th:last-child, td:last-child{
      padding-right: 20px;
    }
  }

  @media (min-width: 1200px) {
    .large{
      display: table-cell;
    }
  }*/
</style>
