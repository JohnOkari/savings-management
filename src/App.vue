<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/customer-list">Customer List</router-link> <!-- Add the new customer list link -->
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global CSS styles go here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>