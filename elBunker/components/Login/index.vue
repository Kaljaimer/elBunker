<template>
  <div class="authentication-area ptb-20">
    <div class="container">
      <div class="authentication-content">
        <div class="row">
          <div class="col-lg-5">
            <div class="login h-100 text-center">
              <img
                src="~/assets/images/login.png"
                class="h-100 object-fit-cover"
                alt="login"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="authentication-form">
              <ul class="nav nav-tabs login-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <NuxtLink to="/login" class="nav-link active">Acceso</NuxtLink>
                </li>
                <li class="nav-item" role="presentation">
                  <NuxtLink to="/register" class="nav-link">Registro</NuxtLink>
                </li>
              </ul>
              <p>
                Si tienes una cuenta, inicia sesión con tu nombre de usuario o tu email.
              </p>
              <form>
                <div class="form-group mb-4">
                  <label class="label">Usuario o email *</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Introduce usuario o email"
                  />
                </div>
                <div class="form-group mb-4">
                  <label class="label">Contraseña *</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Introduce contraseña"
                  />
                </div>
                <div class="d-flex justify-content-between mb-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Recordarme
                    </label>
                  </div>
                  <NuxtLink to="/forgot-password" class="text-primary">
                    ¿Olvidaste tu contraseña?
                  </NuxtLink>
                </div>
                <div class="form-group mb-4">
                  <button
                    type="submit"
                    class="btn btn-warning btn-pill text-white w-100 d-block"
                  >
                    Acceso
                  </button>
                </div>
                <div class="form-group mb-0">
                  <p class="text-secondary ms-1 text-primary">
                    ¿No tienes una cuenta?
                    <NuxtLink
                      to="/register"
                      class="text-decoration-none text-primary"
                    >
                      Registro
                    </NuxtLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
