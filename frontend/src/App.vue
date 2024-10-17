<template>
  <div id="app">
    <nav class="side-menu">
      <h1>MARKET MAVERICKS</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <div class="main-content">
      <header>
        <h1>MARKET MAVERICKS</h1>
      </header>
      <main>
        <router-view />
      </main>
      <footer>
        <p>&copy; 2024 Agni. All rights reserved.</p>
        <p>Join us on Telegram: <a href="https://t.me/cold_wallet_hot" style="color: white;">📬@cold_wallet_hot</a></p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.side-menu {
  width: 250px;
  background-color: #35424a;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.side-menu h1 {
  color: white;
  font-size: 1.5em;
  padding: 0 15px;
  margin-bottom: 20px;
}

.side-menu a {
  display: block;
  padding: 15px;
  color: white;
  text-decoration: none;
  text-align: left;
}

.side-menu a:hover,
.side-menu a.router-link-active {
  background-color: #2c3e50;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: calc(100% - 250px);
  overflow-x: hidden;
}

header {
  background-color: #35424a;
  color: white;
  padding: 20px 0;
  text-align: center;
}

main {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
}

footer {
  margin-top: auto;
  padding: 10px;
  background-color: #35424a;
  color: white;
  text-align: center;
}

footer a {
  color: white;
}

@media (max-width: 768px) {
  #app {
    flex-direction: column;
  }

  .side-menu {
    width: 100%;
    order: -1;
  }

  .side-menu a {
    text-align: center;
  }

  .main-content {
    width: 100%;
  }
}
</style>