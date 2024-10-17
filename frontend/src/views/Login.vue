<template>
  <div class="login">
    <h1>Login to TradeTrek</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Here you can implement the login logic (e.g., API call)
      // For demonstration, we'll just log the username and password
      console.log('Logging in with:', this.username, this.password);
      
      // Redirect to home or perform further actions after successful login
      // this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.login {
  text-align: center;
  padding: 20px;
}

form {
  display: inline-block;
  margin-top: 20px;
}

input {
  display: block;
  margin: 10px 0;
  padding: 10px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>
