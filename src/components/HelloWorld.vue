<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <button @click="updateUI">Custom Button</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to BHAMMY FARMS'
    }
  },
  methods: {
    updateUI () {
      this.msg = 'Applied'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
