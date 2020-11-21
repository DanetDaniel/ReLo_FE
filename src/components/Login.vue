<template>
  <div class="flex w-full min-h-screen justify-center items-center">
    <form action="" class="flex flex-col items-start w-full md:w-3/4 lg:w-2/4 xl:w-1/3 p-10 rounded-xl shadow-xl">
      <label
        for="username"
        class="font-semibold text-lg text-gray-900"
      >Username</label>
      <input
        type="text"
        name="username"
        id="username"
        class="w-full border border-4 border-transparent rounded mb-4 p-2 bg-gray-300 font-normal text-gray-700 focus:outline-none focus:border-blue-400"
      >
      <label
        for="password"
        class="font-semibold text-lg text-gray-900"
      >Password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="w-full border border-4 border-transparent rounded mb-4 p-2 bg-gray-300 font-normal text-gray-700 focus:outline-none focus:border-blue-400"
      >
      <button
        type="submit"
        class="rounded mb-4 py-3 w-full bg-blue-600 font-bold text-lg text-white hover:bg-blue-700 hover:shadow-xl duration-100 focus:outline-none focus:shadow-xl focus-bg-blue-700"
      >Log me in!</button>
      <p
        class="text-xl text-gray-900 font-medium"
      >Don't have an account yet?
        <router-link to='/signup'
          class="text-blue-700 font-semibold"
        >Sign up!</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>

</style>
