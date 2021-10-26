<template>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossorigin="anonymous">
  <div class="container mt-4">
    
    <div class="card custom-card">
      <div class="card-body">
        <div id="photo" class="mb-4">
          <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Profile">
        </div>
        <span class="lead">
          <h1>Rubén Jimenez</h1>
          <h6>45 seguidores</h6>
        </span>
      </div>
    </div>

    <div class="row px-5 pt-5">
      <h4 class="text-start col-6">Álbumes</h4>
      <p class="text-end col-6">+ Agregar</p>
    </div>
    
    <div class="container px-4" id="custom-cards">
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background: url('https://images.pexels.com/photos/9876244/pexels-photo-9876244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat center center;">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Manzanas y otras frutas</h2>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <i class="fal fa-user-circle lead"></i>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                <small>9 mins</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background: url('https://images.pexels.com/photos/9880892/pexels-photo-9880892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') no-repeat center center;">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Paisajes a las afueras</h2>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <i class="fal fa-user-circle lead"></i>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background: url('https://images.pexels.com/photos/3757136/pexels-photo-3757136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') no-repeat center center;">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Arquitectura escondida de la ciudad</h2>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <i class="fal fa-user-circle lead"></i>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: 'Profile',
  components: {
    Footer,
  },
}
</script>

<style scoped>
#photo i {
  font-size: 1000%;
  color: black;
  padding-bottom: 5%;
}

#photo img {
  border-radius: 50%;
  width: 124px;
  height: 124px;
  object-fit: cover;
}

.custom-card {
  background: #feffff;
  max-width: 90%;
  margin: 0 auto;
  box-shadow: 0px 4px 8px rgb(20 57 128 / 8%);
  border-radius: 8px;
}
</style>