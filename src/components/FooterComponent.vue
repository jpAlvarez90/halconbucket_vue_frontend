<template>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossorigin="anonymous">
    <div id="footerComponent">
      <div class="col-12 d-flex justify-content-around" id="nav-btns">
        <router-link to="/"><i class="fal fa-home"></i></router-link>
        <router-link to="/album"><i class="fal fa-upload"></i></router-link>
        <router-link to="/search"><i class="fal fa-search"></i></router-link>      
        <router-link v-if="isUser" to="/profile"><i class="fal fa-user-circle"></i></router-link>        
        <router-link v-else to="/register"><i class="fal fa-user-circle"></i></router-link>        
      </div>
    </div>
</template>

<script>
export default {
  name: 'footerComponent',
  data() {
    return {
      isUser: false,
    };
  },
  created() {
    if(localStorage.getItem('token') !== null){
      this.isUser = true;
    }
  }
}
</script>

<style>
#footerComponent {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #009574;
  color: white;
  text-align: center;
}

#nav-btns{
  background-color:#009574;
  color: #ffffff;
  padding: 1%;
  font-size: xx-large;
}

i {
    color: #ffffff;
}

@media screen and (max-width: 800px) {
  #nav-btns{
    background-color:#009574;
    color: #ffffff;
    padding: 1%;
    font-size: xx-large;
    width: 100%;
  }
}
</style>