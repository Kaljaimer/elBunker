<template>
  <section class="dashboard-area ptb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <CommonDashboardNavigation />
        </div>

        <div class="col-lg-8">
          <div class="edit-profile">
            <h3>Edit Profile</h3>

            <form class="submit-property-form">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" value="Amanda" />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" value="McCarter" />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      value="contact@liva.com"
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      value="+270-957-9995"
                    />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Change Your Image</label>
                    <div class="file-upload">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        class="inputfile"
                      />
                      <label class="upload" for="file">
                        <i class="ri-image-2-fill"></i>
                        Click here
                      </label>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <img
                      src="~/assets/images/user-9.jpg"
                      class="img-thumbnail rounded-1"
                      alt="user"
                    />
                  </div>
                </div>

                <div class="col-lg-12">
                  <button type="submit" class="btn btn-warning text-white">
                    Save Change
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EditProfile",
};
</script>
