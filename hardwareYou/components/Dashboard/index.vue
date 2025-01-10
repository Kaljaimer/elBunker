<template>
  <div class="dashboard-area ptb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <CommonDashboardNavigation />
        </div>

        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-6">
              <div class="profile-bar">
                <div class="profile-info">
                  <img src="~/assets/images/user-9.jpg" alt="user" />

                  <h3>
                    <NuxtLink to="/edit-profile">Amanda McCarter</NuxtLink>
                  </h3>
                  <a href="mailto:contact@tuan.com">contact@tuan.com</a>
                  <a href="tel:973-635-8147">973-635-8147</a>
                </div>

                <div class="edit-profiles">
                  <NuxtLink
                    to="/edit-profile"
                    class="btn btn-warning text-white"
                  >
                    Edit Profile
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="billing-address-bar">
                <h3>Default</h3>
                <ul>
                  <li class="p-0">Amanda McCarter</li>
                  <li>
                    <span>Address:</span>
                    4 Shady Pines Drive Bowling Green
                  </li>
                </ul>

                <ul>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:270-957-9995">270-957-9995</a>
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:contact@tuan.com">contact@tuan.com</a>
                  </li>
                </ul>

                <div class="edit-address">
                  <NuxtLink
                    to="/edit-address"
                    class="btn btn-warning text-white"
                  >
                    Edit Address
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <DashboardRecentOrder />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>
