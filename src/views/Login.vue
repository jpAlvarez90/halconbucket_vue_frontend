<template>
<section class="gradient-form" style="background-color: #eee;">
  <div class="container pt-4">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body mx-md-4">

                <div class="text-center">
                  <img src="https://scontent.fcvj4-1.fna.fbcdn.net/v/t1.18169-9/15027581_1791890234410487_1442999991889340112_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHvU-TyEvQJ_kDs2X4lrofadZC83KJrm291kLzcomubbyOnHc-t_t2ZyMDQ7znLFZzmlqZX1p9LXVXLE00bclCy&_nc_ohc=tQu5sWqfUtEAX82JJqG&_nc_ht=scontent.fcvj4-1.fna&oh=259a30ab7541cfec3db74705d24cdf05&oe=61A8A1C7" style="width: 185px;" alt="logo">
                </div>

                <form>
                  <p>Inicio de sesión</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control" placeholder="Phone number or email address"/>
                    <label class="form-label" for="form2Example11">Correo electrónico</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Contraseña</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log in</button>
                    <a class="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn btn-outline-danger">Create new</button>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 mx-md-4">
                <h4 class="mb-4">HALCONBUCKET</h4>
                <p class="small mb-0">El lugar perfecto para compartir ideas, recuerdos y experiencias visuales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: 'Login',
  components: {
    Footer,
  },
}
</script>

<style scoped>
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(178deg, rgba(30,48,94,1) 0%, rgba(27,145,112,1) 100%);
}

::v-deep #footer {
    background-color: black !important;
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}
@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
  }
}

</style>