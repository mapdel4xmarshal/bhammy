<template>
  <div>
    <div id="card">
      <table>
        <thead>
        <th :key="header.id"
            v-for="header in headers"
            :class="header.breakPoint"
            :style="{width: header.width}"
            :title="header.label">
          {{header.label}}
        </th>
        </thead>
      </table>
      <div class="scrollable">
        <table>
        <tbody>
          <tr v-for="record in records" :key="record.id">
            <td v-for="header in headers"
                :key="record.id + '-' + header.id"
                :class="header.breakPoint"
                :style="{width: header.width}"
                :title="header.representedAs? header.representedAs(record) : record[header.id]">
                <slot :name="header.slot" v-bind:invoice="record">
                  {{header.representedAs? header.representedAs(record) : record[header.id]}}
                </slot>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <pagination v-if="usePagination"></pagination>
  </div>
</template>

<script>
import Pagination from './Pagination'

export default {
  name: 'customTable',
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
    }
  },
  components: {
    Pagination
  },
  computed: {

  },
  created () {
    console.log(this.records)
  }
}
</script>

<style lang="scss" scoped>

  #card {
    background-color: #FFF;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 0px 4px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 4px -3px rgba(0,0,0,0.75);
    -webkit-box-sizing: 0px 0px 4px -3px rgba(0,0,0,0.75);
    padding: 10px 0;
    margin-bottom: 20px;
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

  tr{
    border-top: 1px solid #e0e0e0;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }

  tr:hover{
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
  }
</style>
