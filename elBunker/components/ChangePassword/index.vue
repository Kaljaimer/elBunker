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
                  <NuxtLink to="/change-password" class="nav-link active">
                    Change Password
                  </NuxtLink>
                </li>
              </ul>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <form>
                <div class="form-group mb-4">
                  <label class="label">Old Password *</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter your  password"
                  />
                </div>
                <div class="form-group mb-4">
                  <label class="label">New Password *</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter your  password"
                  />
                </div>
                <div class="form-group mb-4">
                  <label class="label">Confirm Password *</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter your  password"
                  />
                </div>
                <div class="form-group mb-0">
                  <button
                    type="submit"
                    class="btn btn-warning btn-pill text-white w-100 d-block"
                  >
                    Save Password
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
  name: "ChangePassword",
};
</script>
