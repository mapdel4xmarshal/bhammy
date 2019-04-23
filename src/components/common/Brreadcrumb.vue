<template>
  <ul class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Sales</a></li>
    <li>Edit</li>
  </ul>
</template>

<script>
    export default {
        name: "Brreadcrumb"
    }
</script>

<style scoped>
  ul.breadcrumb {
    padding: 5px 16px;
    list-style: none;
    /*background-color: #eee;*/
  }
  ul.breadcrumb li {
    display: inline;
    font-size: 14px;
  }
  ul.breadcrumb li+li:before {
    padding: 8px;
    color: black;
    content: "/\00a0";
  }
  ul.breadcrumb li a {
    color: var(--base-color);
    text-decoration: none;
  }
  ul.breadcrumb li a:hover {
    color: #01447e;
    text-decoration: underline;
  }
</style>
