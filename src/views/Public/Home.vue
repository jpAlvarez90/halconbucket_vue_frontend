<template>
  <div class="home">
    <div class="row p-4"> 
      <span v-if="images.length == 0">
        <span class="lead">
          <h2>Aún no hay imágenes</h2>
          <i class="fal fa-image-polaroid mt-4" id="preview-icon"></i>
        </span>
      </span>
      <span v-else v-for="image in images" :key="image.id_album_images" class="col-sm">
        <div class="col img-card mb-2" data-bs-toggle="modal" 
        data-bs-target="#exampleModal2" @click="showImg(image.img_name, image.album_images, image.username)">
          <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" 
          :style="`background: url('${image.album_images}') no-repeat center center;`">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{image.img_name}}</h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <i class="fal fa-user-circle lead"></i>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                  <small>By {{image.username}}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </span>
    </div>

    <!-- Modal preview image -->
  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel2">
            {{tempTitle}} 
          </h5>
            - by {{tempUsername}}
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="tempImg" alt="temp" class="cover_img">
        </div>
      </div>
    </div>
  </div>
    <FooterComponent/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FooterComponent from "../../components/FooterComponent.vue";
import axios from "axios";

export default {
  name: 'Home',
  data(){
      return {
        user: JSON.parse(localStorage.getItem('user')) || null,
        images: [],
        tempImg: null,
        tempTitle: '',
        tempUsername: '',
      }
  },
  components: {
    FooterComponent,
  },
  computed: {
    ...mapState(['contador']),
  },
  async created() {
    await axios.get(`http://localhost:3000/get-album-images`)
    .then(({data}) => {
      this.images = data.results;
    });
  },
  methods: {
    showImg(title, image, username){
      this.tempImg = null;
      this.tempImg = image;
      this.tempTitle = '';
      this.tempTitle = title;
      this.tempUsername = '';
      this.tempUsername = username;
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#preview-icon {
    color: #345177;
    font-size: 100px;
}

.cover_img {
  width : 100%;
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
.home {
  padding-bottom: 8%;
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