<template>
  <div id="container">
    <table>
      <thead>
        <th :key="header.id"
            v-for="header in headers">
          {{header.label}}
        </th>
      </thead>
      <tbody>
        <tr v-for="record in records" :key="record.id">
          <td v-for="header in headers" :key="record.id + '-' + header.id">
            <slot :name="header.slot" v-bind:invoice="record">{{header.representedAs?header.representedAs(record) : record[header.id]}}</slot>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination v-if="usePagination"></pagination>
  </div>
</template>

<script>
import Pagination from './Pagination'

export default {
  name: 'customTable',
  props: {
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

<style scoped>
  #container {
    background-color: #FFF;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 1px 1px #000000;
    padding: 20px;
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
    padding: 10px 0;
  }

  td{
    font-size: 12px;
    padding: 5px 0;
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
</style>
