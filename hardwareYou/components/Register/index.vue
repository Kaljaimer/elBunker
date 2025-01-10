<template>
  <div class="authentication-area ptb-60">
    <div class="container">
      <div class="authentication-content">
        <div class="row">
          <div class="col-lg-5">
            <div class="login h-100 text-center">
              <img
                src="~/assets/images/register.png"
                class="h-100 object-fit-cover"
                alt="register"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="authentication-form">
              <ul class="nav nav-tabs login-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <NuxtLink to="/login" class="nav-link">Login</NuxtLink>
                </li>
                <li class="nav-item" role="presentation">
                  <NuxtLink to="/register" class="nav-link active">
                    Register
                  </NuxtLink>
                </li>
              </ul>
              <p>
                If you have an account, sign in with your username or email
                address.
              </p>
              <form>
                <div class="form-group mb-4">
                  <label class="label">Username *</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your user name"
                  />
                </div>
                <div class="form-group mb-4">
                  <label class="label">Email Address *</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your  email address"
                  />
                </div>
                <div class="form-group mb-4">
                  <label class="label">Password *</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter  password"
                  />
                </div>
                <div class="form-group mb-4">
                  <button
                    type="submit"
                    class="btn btn-warning btn-pill text-white w-100 d-block"
                  >
                    Register
                  </button>
                </div>
                <div class="form-group mb-0">
                  <p class="text-secondary ms-1 text-primary">
                    Already have an account?
                    <NuxtLink
                      to="/login"
                      class="text-decoration-none text-primary"
                    >
                      Login
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
  name: "Register",
};
</script>
