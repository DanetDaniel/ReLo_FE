<template>
  <div id="app">
    <h1 v-for="el in arr" :key="el.id">
      {{el}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      arr: [
        'Hello World',
        'Vue is great',
        'Long live Vue'
      ]
    }
  }
}
</script>

<style>

</style>
