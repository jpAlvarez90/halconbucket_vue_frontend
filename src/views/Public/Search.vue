<template>
  <div class="home">
    <div class="row">
        <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-6">
            <div class="form"> 
                <i class="fa fa-search"></i> 
                <input type="text" class="form-control form-input" placeholder="Buscar">
            </div>
        </div>
    </div>
    </div>
    <div class="row"> 
      <div class="column">
        <img src="https://www.w3schools.com/w3images/wedding.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/rocks.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/falls2.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/paris.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/nature.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/mist.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/paris.jpg" style="width:100%">
      </div>
      <div class="column">
        <img src="https://www.w3schools.com/w3images/underwater.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/ocean.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/wedding.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/mountainskies.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/rocks.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/underwater.jpg" style="width:100%">
      </div>  
      <div class="column">
        <img src="https://www.w3schools.com/w3images/wedding.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/rocks.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/falls2.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/paris.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/nature.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/mist.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/paris.jpg" style="width:100%">
      </div>
      <div class="column">
        <img src="https://www.w3schools.com/w3images/underwater.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/ocean.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/wedding.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/mountainskies.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/rocks.jpg" style="width:100%">
        <img src="https://www.w3schools.com/w3images/underwater.jpg" style="width:100%">
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import { mapState } from "vuex";
import FooterComponent from "../../components/FooterComponent.vue";
export default {
  name: 'Search',
  components: {
    FooterComponent,
  },
  computed: {
    ...mapState(['contador']),
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}

.header {
  text-align: center;
  padding: 32px;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}
.height {
    height: 20vh
}

.home {
  margin-bottom: 8%;
}

.form {
    position: relative
}

.form .fa-search {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #9ca3af
}

.form span {
    position: absolute;
    right: 17px;
    top: 13px;
    padding: 2px;
    border-left: 1px solid #d1d5db
}

.left-pan {
    padding-left: 7px
}

.left-pan i {
    padding-left: 10px
}

.form-input {
    height: 55px;
    text-indent: 33px;
    border-radius: 10px
}

.form-input:focus {
    color: black;
    box-shadow: 0 0 5px #d1d5db;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #d1d5db;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>