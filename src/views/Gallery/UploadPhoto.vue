<template>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossorigin="anonymous">
  <div class="container mt-4">
    <h1>Subir foto</h1>

    <div class="row mt-4">
        <p>Publica una fotografía de tu biblioteca.</p>
        <form id="form" class="form-floating" enctype="multipart/form-data">
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="img_name"
                name="img_name" id="img_name" placeholder="Título de la imagen" autocomplete="off">
            </div>
            
            <div class="input-group mb-3">
                <input type="file" class="form-control" id="photo" @click="preview">
            </div>
            
            <div class="d-grid gap-2">
                <button class="btn btn-primary btn-save" id="btn-save" type="button">Subir <i class="fal fa-cloud-upload"></i></button>
            </div>
        </form>
    </div>
    <div class="row mt-4">
        <div class="img-review mb-4">
            <img v-if="previewPhoto" :src="previewPhoto" alt="preview">
            <i v-else id="preview-icon" class="far fa-image"></i>
        </div>
    </div>

  </div>
  <FooterComponent/>
</template>

<script>
import FooterComponent from "../../components/FooterComponent.vue";
import axios from "axios";

export default {
    name: 'uploadphoto',
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            album_image: {},
            img_name: '',
            photoCoded: null,
            previewPhoto: null,
        }
    },
    components:{
        FooterComponent,
    },
    methods: {
        uploadImage() {
            console.log(this.album_image);
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
            
            axios.post(`http://localhost:3000/insert-album-images`, { album_images: this.photoCoded.src.split('base64,')[1], img_name: this.img_name})
            .then(() => {
                this.$router.go();
            });
        },
    },
}
</script>

<style scoped>

#preview-icon {
    color: #345177;
    font-size: 100px;
}

.btn-save {
    background-color: #345177 !important;
    border: 1px solid #ced4da;
}
</style>