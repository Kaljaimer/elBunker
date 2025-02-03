<template>
  <div class="authentication-area ptb-20">
    <div class="container">
      <div class="authentication-content">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="login text-center">
              <img src="~/assets/images/login.png" alt="login" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="authentication-form">
              <ul class="nav nav-tabs login-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <NuxtLink to="/forgot-password" class="nav-link active">
                    Forgot Password
                  </NuxtLink>
                </li>
              </ul>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <form>
                <div class="form-group mb-4">
                  <label class="label">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div class="form-group mb-0">
                  <button
                    type="submit"
                    class="btn btn-warning btn-pill text-white w-100 d-block"
                  >
                    Forgot Password
                  </button>
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
  name: "ForgotPassword",
};
</script>
