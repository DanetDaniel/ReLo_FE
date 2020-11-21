<template>
  <nav class="flex w-full fixed top-0 left-0 shadow-lg py-2 justify-around bg-white">
    <router-link to="/" class="font-bold text-gray-800 mx-2 px-2 py-3 hover:text-black duration-50">Home</router-link>
    <router-link to="/login" class="font-bold text-gray-800 mx-2 px-2 py-3 hover:text-black duration-50">Login</router-link>
    <router-link to="/signup" class="font-bold text-gray-800 mx-2 px-2 py-3 hover:text-black duration-50">Signup</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
  .router-link-active {
    @apply text-green-600;

    &:hover {
      @apply text-green-600
    }
  }
</style>
