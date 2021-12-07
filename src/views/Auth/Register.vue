<template>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB" crossorigin="anonymous">
    <section class="vh-100 gradient-custom">
        <div class="container pt-4 h-100">
            <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
                <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                <div class="card-body p-4 p-md-5">
                    <img class="mb-4"  alt="halcon" width="92" height="82" src="@/assets/HALCÓN_2016.png"/>
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registrarse</h3>
                    <form class="needs-validation" novalidate>

                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatingUsername" v-model="user.username" placeholder="username" :username="isNameStateValid" required>
                                <label for="floatingUsername">Username</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingEmail" v-model="user.email" placeholder="Correo electrónico">
                                <label for="floatingEmail">Correo electrónico</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-4 pb-2">
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" v-model="user.password" placeholder="Contraseña">
                                <label for="floatingPassword">Contraseña</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4 pb-2">
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPasswordRepeat" v-model="user.password" placeholder="Contraseña">
                                <label for="floatingPassword">Contraseña</label>
                            </div>
                        </div>
                    </div>

                    <div class="mt-1 py-4">
                        <input class="btn btn-primary btn-lg" @click.prevent="registerUser();" value="Enviar" />
                    </div>

                    </form>
                    <router-link to="/login" class="text-decoration-none"> Ya tengo una cuenta</router-link>
                    <p class="mt-5 mb-3 text-muted">©2021 HALCONBUCKET</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  <FooterComponent/>
</template>

<script>
import FooterComponent from "../../components/FooterComponent.vue";
import axios from "axios";

export default {
    name: 'register',
    data() {
        return {
            user: {},
        };
    },
    components: {
        FooterComponent,
    },
    created() {
        //   axios.get('http://localhost:3000/get-users')
        //   .then(({data}) => {
        //       console.log(data);
        //   });
    },
    methods: {
        registerUser() {
            this.$swal({
                title: 'Registrarse',
                text: "Confirma que sus datos son correctos",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#088974',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Registrar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.user.role_fk_id = 2
                    axios.post('http://localhost:3000/register', this.user)
                    .then(({data}) => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('user', JSON.stringify(data.user));
                        this.$swal.fire(
                            '¡Registrado!',
                            'Bienvenido a HALCONBUCKET',
                            'success'
                        );
                        this.$router.push({ name: 'Home' });
                    });
                }
            });
            
        },
        isValid() {
            return this.user.username != '' ? true : false; //your validation criteria goes here
        }
    },
    computed: {
        isNameStateValid() {
            if (this.user.username) {
            return this.isValid(this.user.username);
            }
            return null;
        }
    },
}
</script>


<style scoped>
/* .container {
    padding-bottom: 90%;
} */

.card {
    margin-bottom: 12%;
}

section {
    background: linear-gradient(to bottom right, rgb(52 81 119), rgb(0 149 116));
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: .75em;
  padding-right: .75em;
}
.card-registration .select-arrow {
  top: 13px;
}
</style>