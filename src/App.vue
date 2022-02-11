
<template>
  <router-view />
</template>

<script>
import Form from './components/Form.vue';

export default {
  components: { Form },
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: "poppins", sans-serif;
  scroll-behavior: smooth;
}
*::-webkit-scrollbar {
  width: 0;
}
</style>
