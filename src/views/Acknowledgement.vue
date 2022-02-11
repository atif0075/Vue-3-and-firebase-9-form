<template>
  <section class="h-screen w-full flex flex-col justify-center items-center">
    <h1 class="text-3xl font-bold text-center text-green-600">Your Message has been submitted</h1>
    <button class="py-2 px-7 bg-green-500 hover:bg-green-700 rounded my-3 text-gray-50">
      <router-link to="/">Go Back</router-link>
    </button>
  </section>
</template>

<script>
export default {
  name: "Acknowledgement"

}
</script>

<style>
</style>