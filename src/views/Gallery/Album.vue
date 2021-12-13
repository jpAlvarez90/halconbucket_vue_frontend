<template>
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
            <span v-else  v-for="album in albums" :key="album.album_id" >
                <div class="col" >
                    <div class="card" @click="openAlbum(album.album_id)">
                    <img :src="album.url_cover" class="card-img-top" alt=" ">
                    </div>
                    <p class="lead">{{album.album_name}}</p>
                </div>
            </span>
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
                        <input type="file" class="form-control" id="photo" @click="preview">
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

export default {
    name: 'Album',
    data(){
        return {
            user: JSON.parse(localStorage.getItem('user')),
            albums: [],
            album_name: '',
            img_name: '',
            photoCoded: null,
            previewPhoto: null,
        }
    },
    components:{
        FooterComponent,
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
            axios.post(`http://localhost:3000/insert-album`, 
            { album_name: this.album_name, url_cover: this.photoCoded.src.split('base64,')[1], user_fk_id: this.user.user_id})
            .then(() => {
                this.$router.go();
            });
        },
        preview() {
            const inputFile = document.querySelector('#photo');
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
        openAlbum(album_id){
            this.$router.push(`/album/${album_id}`);
        },
    }
}
</script>

<style>
#custom-cards {
    padding-bottom: 5%;
}
</style>