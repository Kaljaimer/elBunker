<template>
  <section class="dashboard-area ptb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <CommonDashboardNavigation />
        </div>

        <div class="col-lg-8">
          <div class="address-list">
            <h3>Change Password</h3>
            <p>Here you can change your password please fill up the form.</p>

            <form class="submit-property-form">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Old Password</label>
                    <input type="password" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>New Password</label>
                    <input type="password" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-12">
                  <button type="submit" class="btn btn-warning text-white">
                    Change Password
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
  name: "Password",
};
</script>
