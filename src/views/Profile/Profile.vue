<template>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossorigin="anonymous">
  <div class="container my-5">
    
    <div class="card custom-card">
      <div class="card-body">
        <div id="photo" class="mb-4">
          <img src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png" alt="Profile">
        </div>
        <span class="lead">
          <h1>{{user.username}}</h1>
          <h6>{{user.email}}</h6>
          <!-- <h6>45 seguidores</h6> -->
        </span>
      </div>
    </div>

    <div class="row px-5 pt-5">
      <h4 class="text-start col-6">Álbumes</h4>
      <span class="text-end col-6">
        <span class="btn-add-album" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Agregar</span>
      </span>
    </div>
    
    <div class="container px-4" id="custom-cards">
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <span v-if="albums.length == 0">
          <span class="lead">
            <h2>Aún no hay álbumes</h2>
            <h6>Crea tu primer álbum haciendo clic en +Agregar</h6>
          </span>
        </span>
        <span v-else v-for="album in albums" :key="album.album_id">
          <div class="col" @click="openAlbum(album.album_id)">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" 
            :style="`background: url('${album.url_cover}') no-repeat center center;`">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{album.album_name}}</h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <i class="fal fa-user-circle lead"></i>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                    <small>By {{album.username}}</small>
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
          <h5 class="modal-title" id="exampleModalLabel">Agregar álbum</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Nombre del álbum</label>
              <input type="text" class="form-control" id="recipient-name" v-model="album_name" autocomplete="off">
            </div>
            <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Imagen del álbum</label>
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
          <button type="button" class="btn btn-primary" id="btn-save" @click="addAlbum">Publicar</button>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import FooterComponent from "../../components/FooterComponent.vue";
import axios from "axios";
const $ = require('jquery')
window.$ = $

export default {
  name: 'Profile',
  components: {
    FooterComponent,
  },
  data() {
    return {
        user: JSON.parse(localStorage.getItem('user')),
        albums: [],
        album_name: '',
        img_name: '',
        photoCoded: null,
        previewPhoto: null,
    };
  },
  async created() {
    await axios.get(`http://localhost:3000/get-album-by-user/${this.user.user_id}`)
    .then(({data}) => {
        this.albums = data.result;
    });
  },
  methods: {
    addAlbum() {
      console.log(this.album_name);
      axios.post(`http://localhost:3000/insert-album`,{ album_name: this.album_name, url_cover: this.photoCoded.src.split('base64,')[1], user_fk_id: this.user.user_id})
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
      console.log(image);
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
    openAlbum(album_id){
        this.$router.push(`/album/${album_id}`);
    },
  }
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

.btn-add-album {
  cursor: pointer;
}
</style>