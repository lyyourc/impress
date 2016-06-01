<template>
  <div class="banner">
    <img class="logo" src="../assets/logo.png">
    <h1> {{ title }} </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Impress',
    }
  },
}
</script>

<style scoped>
.banner {
  text-align: center;
}
</style>