<template>
  <div class="w-full">
    <!-- <Navbar />  FOR TESTING PURPOSES ONLY, IT LOOKS LIKE SHIT. ONLY USE IF NECESSARY TO TEST ROUTES, THX PWP :* -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    // Navbar
  },
  data: function () {
    return {
      name: '',
      age: '',
      location: ''
    }
  },
  methods: {
    sendData: (e) => {
      e.preventDefault()
      const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: 'Dani', age: 18, location: 'Coronini' }),
        mode: 'no-cors'
      }
      fetch('http://localhost:3001/api/persons', requestOptions)
        .then(res => res.json())
    }
  }
}
</script>

<style scoped lang='scss'>
.transition-100 {
  transition-duration: 100ms
}
</style>
