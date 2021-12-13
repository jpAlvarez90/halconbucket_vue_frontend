<template>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossorigin="anonymous">
    
<div class="container-fluid h-auto my-5">
  <div class="row text-center">
    <div class="form-signin">
      <form>
        <img class="mb-4"  alt="halcon" width="92" height="82" src="@/assets/HALCÓN_2016.png"/>
        <h1 class="h3 mb-3 fw-normal">Iniciar sesión</h1>

        <div class="form-floating">
          <input type="text" class="form-control" id="floatingInput" placeholder="user_name" v-model="user.username" autocomplete="off">
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password" autocomplete="off">
          <label for="floatingPassword">Contraseña</label>
        </div>

        <div class="checkbox mb-3">
          <!-- <label>
            <input type="checkbox" value="remember-me"> Recordarme
          </label> -->
        </div>
        <button class="w-100 btn btn-lg btn-primary" @click="login" type="button">Ingresar</button>
        <div class="d-flex align-items-center justify-content-center pt-4">
          <p class="mb-0 me-2">¿No tienes cuenta? <router-link to="/register" class="text-decoration-none"> Registrate</router-link></p>
        </div>
        <p class="mt-5 mb-3 text-muted">©2021 HALCONBUCKET</p>
      </form>
    </div>
</div>
</div>
<FooterComponent/>
</template>

<script>
import FooterComponent from "../../components/FooterComponent.vue";
import axios from "axios";

export default {
  name: 'Login',
  data() {
      return {
          user: {},
      };
  },
  components: {
    FooterComponent,
  },
  methods: {
    login(){
      axios.post('http://localhost:3000/login', this.user)
      .then(({data}) => {
          console.log(data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          this.$swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '¡Bienvenido!',
            showConfirmButton: false,
            timer: 1500
          });
          this.$router.push({ name: 'Home' });
      });
    }
  }
}
</script>

<style scoped>
.container-fluid {
  width: 35%!important;
}

@media screen and (max-width: 800px) {
  .container-fluid {
    width: 75%!important;
  }
}
</style>