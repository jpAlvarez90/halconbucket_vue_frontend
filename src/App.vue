<template>
  <nav class="navbar navbar-light bg-light" id="navbar">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1" id="page-name">HALCONBUCKET</span>
    </div>
  </nav>
  <router-view/>
</template>


<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#page-name {
  color: #ffffff !important;
}

#navbar {
  background-color: #345177 !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
