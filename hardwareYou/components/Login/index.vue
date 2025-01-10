<template>
  <div class="authentication-area ptb-60">
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
                  <NuxtLink to="/login" class="nav-link active">Login</NuxtLink>
                </li>
                <li class="nav-item" role="presentation">
                  <NuxtLink to="/register" class="nav-link">Register</NuxtLink>
                </li>
              </ul>
              <p>
                If you have an account, sign in with your username or email
                address.
              </p>
              <form>
                <div class="form-group mb-4">
                  <label class="label">Username or Email Address *</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your user name"
                  />
                </div>
                <div class="form-group mb-4">
                  <label class="label">Your Password *</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter your  password"
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
                      Remember
                    </label>
                  </div>
                  <NuxtLink to="/forgot-password" class="text-primary">
                    Lost your password?
                  </NuxtLink>
                </div>
                <div class="form-group mb-4">
                  <button
                    type="submit"
                    class="btn btn-warning btn-pill text-white w-100 d-block"
                  >
                    Login
                  </button>
                </div>
                <div class="form-group mb-0">
                  <p class="text-secondary ms-1 text-primary">
                    Don’t have an account?
                    <NuxtLink
                      to="/register"
                      class="text-decoration-none text-primary"
                    >
                      Register
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
