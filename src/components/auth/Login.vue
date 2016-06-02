<template>
<div class="login">
  <h3> Log In </h3>
  
  <input type="email" placeholder="email" v-model="user.username">
  <input type="passwrod" placeholder="password" v-model="user.password">
  
  <a class="button" @click="doLogin(user)">
    Begin Tour
  </a>
</div>
</template>

<script>
import { doLogin } from '../../vuex/actions'

export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
    }
  },

  vuex: {
    actions: {
      doLogin,
    },
  },
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  min-height: 300px;
  padding: 1rem;
  color: #86969C;
}

.login h3 {
  font-size: 30px;
  font-weight: 700;
}

input {
  padding: 1rem;
  margin: 1rem;
  
  border: 1px dotted #ccc;
  outline-offset: 0
}

.button {
  padding: 5px 15px;
  color: #FFF;
  background-color: #4EBBE4;
  border: 1px solid #16A2D7;
  border-radius: 4px;
  
  cursor: pointer;
}
</style>