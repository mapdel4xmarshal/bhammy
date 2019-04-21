<template>
    <div class="pagination">
      <div class="pagination__records">
        <div>Records per page</div>
        <div>20</div>
      </div>
      <div class="pagination__controls">
        <div>1 - 20 of 200</div>
        <div>
          <div> < </div>
          <div>></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Pagination"
    }
</script>

<style scoped>
  div {
    display: inline-block;
  }

  .pagination{
    display: block;
    width: 100%
  }

  .pagination__records{
    font-size: 12px;
  }

  .pagination__controls{
    float: right;
  }

  .pagination__controls > div:last-of-type{
    display: inline-grid;
    width: 60px;
    height: 30px;
    border: 1px solid grey;
    grid-template-columns: auto auto;
  }
</style>
