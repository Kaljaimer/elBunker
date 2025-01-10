<template>
  <section class="dashboard-area ptb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <CommonDashboardNavigation />
        </div>

        <div class="col-lg-8">
          <div class="edit-profile">
            <h3>Edit Address</h3>

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

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Company Name (Optional)</label>
                    <input
                      type="text"
                      class="form-control"
                      value="EnvytTheme"
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      class="form-control"
                      value="United Kingdom"
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Street Address</label>
                    <input type="text" class="form-control" value="Cities" />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Town / City</label>
                    <input type="text" class="form-control" value="Cities" />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>State / County</label>
                    <input type="text" class="form-control" value="Liverpool" />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Zip</label>
                    <input type="text" class="form-control" value="1457856" />
                  </div>
                </div>

                <div class="col-lg-12">
                  <button type="submit" class="btn btn-warning text-white">
                    Save
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
  name: "EditAddress",
};
</script>
