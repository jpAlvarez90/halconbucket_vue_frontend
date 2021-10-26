<template>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossorigin="anonymous">
    <div id="footer">
      <div class="col-12 d-flex justify-content-around" id="nav-btns">
        <router-link to="/"><i class="fal fa-home"></i></router-link>
        <router-link to="/album"><i class="fal fa-upload"></i></router-link>
        <router-link to="/search"><i class="fal fa-search"></i></router-link>      
        <router-link to="/profile"><i class="fal fa-user-circle"></i></router-link>        
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#footer {
  padding-top: 13%;
  width: 100%;
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