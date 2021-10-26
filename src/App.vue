<template>
  <nav class="navbar navbar-light bg-light" id="navbar">
    <div class="container-fluid">
      <span class="navbar-brand mb-0" id="page-name"> 
        <h4>HALCONBUCKET</h4>
      </span>
      <span id="cam">
        <router-link to="/"><i class="fal fa-camera fs-1"></i></router-link>
      </span>
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
#cam {
  display: none;
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

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  #navbar {
    background-color: #345177 !important;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  #cam {
    display: flex;
  }
}
</style>
