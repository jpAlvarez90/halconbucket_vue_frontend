<template>
    <section class="vh-100 gradient-custom">
        <div class="container pt-4 h-100">
            <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
                <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registrarse</h3>
                    <form>

                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="form-outline">
                                <input type="text" id="firstName" class="form-control form-control-lg" />
                                <label class="form-label" for="firstName">Username</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4 pb-2">
                            <div class="form-outline">
                                <input type="email" id="emailAddress" class="form-control form-control-lg" />
                                <label class="form-label" for="emailAddress">Correo electrónico</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-4 pb-2">
                            <div class="form-outline">
                                <input type="password" id="password" class="form-control form-control-lg" />
                                <label class="form-label" for="password">Contraseña</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4 pb-2">
                            <div class="form-outline">
                                <input type="password" id="password_repeat" class="form-control form-control-lg" />
                                <label class="form-label" for="password_repeat">Repetir contraseña</label>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 pt-2">
                        <input class="btn btn-primary btn-lg" type="submit" value="Enviar" />
                    </div>

                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  <Footer/>
</template>

<script>
import Footer from "../../components/Footer.vue";
import axios from "axios";

export default {
  name: 'register',
  components: {
    Footer,
  },
  created() {
      axios.get('http://localhost:3000/get-roles')
      .then((data) => {
          console.log(data);
      });
  },
}
</script>


<style scoped>
/* .container {
    padding-bottom: 90%;
} */

.card {
    margin-bottom: 30%;
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