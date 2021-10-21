<template>
  <div class="row px-5 pt-5 pb-2">
      <div class="col-sm-10 text-start"> 
          <h1>Manzanas</h1>
      </div>
      <div class="col-sm-2 text-end">+ Agregar</div>
  </div>
    <div class="row row-cols-1 row-cols-md-4 g-4 px-4">
    <div class="col">
        <div class="card">
        <img  src="https://images.pexels.com/photos/9876244/pexels-photo-9876244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt=" ">
        </div>
        <p class="lead">Foto 1</p>
    </div>

    <div class="col">
        <div class="card">
        <img  src="https://images.pexels.com/photos/9876244/pexels-photo-9876244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt=" ">
        </div>
        <p class="lead">Foto 2</p>
    </div>

    <div class="col">
        <div class="card">
        <img  src="https://images.pexels.com/photos/9876244/pexels-photo-9876244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt=" ">
        </div>
        <p class="lead">Foto 3</p>
    </div>

    <div class="col">
        <div class="card">
        <img  src="https://images.pexels.com/photos/9876244/pexels-photo-9876244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt=" ">
        </div>
        <p class="lead">Foto 3</p>
    </div>

    </div>
  <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
    name: 'Album',
    components:{
        Footer,
    }
}
</script>

<style>

</style>