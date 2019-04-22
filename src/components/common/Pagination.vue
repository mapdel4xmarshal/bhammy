<template>
    <div class="pagination">
      <div class="pagination__records">
        <div>Records per page</div>
        <div>20</div>
      </div>
      <div class="pagination__controls">
        <div>1 - 20 of 200</div>
        <div>
          <div> <font-awesome-icon icon="angle-left"/> </div>
          <div> <font-awesome-icon icon="angle-right"/> </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style scoped>
  div {
    display: inline-block;
  }

  .pagination{
    display: block;
    width: 100%;
    height: 40px;
  }

  .pagination__records{
    font-size: 12px;
  }

  .pagination__controls{
    float: right;
  }

  .pagination__controls > div:last-of-type{
    display: inline-grid;
    border: 1px solid #ccc;
    grid-template-columns: 40px 40px;
    margin-left: 10px;
    line-height: 40px;
    text-align: center;
    align-content: center;
    cursor: pointer;
  }

  .pagination__controls > div:last-of-type div:hover{
    background-color: #FAFAFA;
  }

  .pagination__controls > div:last-of-type div:first-of-type{
    border-right: 1px solid #ccc;
  }
</style>
