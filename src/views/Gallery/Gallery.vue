<template>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossorigin="anonymous">
  <div class="container my-5">
    
    <div class="card custom-card">
      <div class="card-body">
        <div id="photo" class="mb-4">
          <img :src="album.url_cover" class="cover_img" alt="Profile">
        </div>
        <span class="lead">
          <h1>{{album.album_name}}</h1>
          <small>By {{user.username}}</small>
          <!-- <h6>45 seguidores</h6> -->
        </span>
      </div>
    </div>

    <div class="row px-5 pt-5">
      <h4 class="text-start col-6">Imágenes</h4>
      <span class="text-end col-6">
        <span class="btn-add-album" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Agregar</span>
      </span>
    </div>
    
    <div class="container px-4" id="custom-cards">
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <span v-if="images.length == 0">
          <span class="lead">
            <h2>Aún no hay imágenes</h2>
            <h6>Publica tu primera imagen haciendo clic en +Agregar</h6>
          </span>
        </span>
        <span v-else v-for="image in images" :key="image.id_album_images">
          <div class="col img-card" data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="showImg(image.img_name, image.album_images)">
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
                    <small>By {{user.username}}</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>

  <!-- Modal para registrar album -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Agregar imagen</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Título de la imagen</label>
              <input type="text" class="form-control" id="recipient-name" v-model="img_name" autocomplete="off">
            </div>
            <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Imagen</label>
                <input type="file" class="form-control" id="photoInput" @click="preview">
            </div>
            <div class="row mt-4">
                <div class="img-review mb-4">
                    <img v-if="previewPhoto" :src="previewPhoto" alt="preview">
                    <i v-else id="preview-icon" class="far fa-image"></i>
                </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" id="btn-save" @click="addImg">Publicar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal preview image -->
  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel2">{{tempTitle}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="tempImg" alt="temp" class="cover_img">
        </div>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import FooterComponent from "../../components/FooterComponent.vue";
import axios from "axios";

export default {
  name: "albumgallery",
  data(){
      return {
        user: JSON.parse(localStorage.getItem('user')),
        album: [],
        images: [],
        img_name: '',
        photoCoded: null,
        previewPhoto: null,
        tempImg: null,
        tempTitle: '',
        album_id: this.$route.params.album_id,
      }
  },
  components:{
      FooterComponent,
  },
  async created() {
      await axios.get(`http://localhost:3000/get-album/${this.$route.params.album_id}`)
      .then(({data}) => {
        this.album = data.result;
      });
      await axios.get(`http://localhost:3000/get-album-images-by-album/${this.$route.params.album_id}`)
      .then(({data}) => {
        this.images = data.results;
      });
  },
  methods: {
    addImg() {
        axios.post(`http://localhost:3000/insert-album-images`, 
        { img_name: this.img_name, album_images: this.photoCoded.src.split('base64,')[1], album_fk_id: this.album_id})
        .then(() => {
            this.$router.go();
        });
    },
    preview() {
      const inputFile = document.querySelector('#photoInput');
      const preview = document.querySelector('.img-review');
      const btnSend = document.getElementById('btn-save');
      const image = new Image(500, 500);

      inputFile.addEventListener('change', function() {
          const file = this.files[0];
          const fileType = this.files[0].type;
          if (fileType == 'image/jpeg' || fileType  == 'image/png') {
              const reader =  new FileReader();
              reader.onload = () => {
                  const result = reader.result;
                  image.src = result;
                  image.className = 'img-thumbnail';
                  preview.innerHTML = '';
                  preview.append(image);
              }
              reader.readAsDataURL(file);
          }
      });
      this.photoCoded = image;

      btnSend.onclick = e => {
          e.preventDefault();
          btnSend.disabled = true;
          const data = new FormData();
          let date = new Date();
          let time = new String(date.getTime());
          let name = time + Math.floor(Math.random * 10);
          preview.innerHTML = '<i class="fas fa-circle-notch fa-2x fa-spin" style="color: #345177"></i>';
          if (data.get('img_name') == '') {
              data.set('img_name', `img_${name}`);
          }

          this.sendData(data);
      }
    },
    sendData(){
        let date = new Date();
        let time = new String(date.getTime());
        let name = time + Math.floor(Math.random * 10);
        if (this.img_name == '') {
            this.img_name = name;
        }
    },
    showImg(title, image){
      this.tempImg = null;
      this.tempImg = image;
      this.tempTitle = '';
      this.tempTitle = title;
    },
  },
}
</script>

<style scoped>
.cover_img {
  width : 100%;
}
.img-card {
  cursor: pointer;
}
</style>