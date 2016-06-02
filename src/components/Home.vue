<template>
  <div class="home">
    <div class="banner">
      <img class="logo" src="../assets/logo.png">
      <h1> {{ title }} </h1>
      <p> Thanks for signing up. Let’s take a look around. </p>
    </div>
  
    <footer class="app-footer">
      <p> impress is not important </p>
    </footer>
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
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  flex: 1;
  
  color: #86969C;
}

.banner {
  flex: 1;
  
  text-align: center;
  padding: 8rem 0;
}
.banner p {
  font-size: 1.2em;
}
.banner h1 {
  margin-top: 0;
}

footer {
  text-transform: capitalize;
}
</style>