<template>
  <ul class="breadcrumb">
    <li v-for="p in getCurrentPath" :key="p.name">
      <router-link :to="p.path" exact-active-class="active">{{p.name}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {

    }
  },
  computed: {
    getCurrentPath () {
      const paths = {}
      let path
      this.$route.matched.forEach(route => {
        path = route.path.endsWith('/') ? route.path.replace(/\/$/, '') : route.path
        const normalizedPath = route.path.substring(route.path.lastIndexOf('/') + 1)

        if (!paths[path]) {
          paths[path] = {
            name: normalizedPath.charAt(0).toUpperCase() + normalizedPath.slice(1),
            path
          }
        }
      })
      return paths
    }
  }
}
</script>

<style scoped>
  ul.breadcrumb {
    padding: 5px 16px;
    list-style: none;
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

  .active{
    pointer-events: none;
    cursor: default;
  }
</style>
