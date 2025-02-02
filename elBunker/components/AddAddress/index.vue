<template>
  <section class="dashboard-area ptb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <CommonDashboardNavigation />
        </div>

        <div class="col-lg-8">
          <div class="address-list">
            <h3 class="mb-3">Address</h3>

            <div class="row">
              <div class="col-lg-6">
                <div class="added-address">
                  <NuxtLink to="/address" class="text-decoration-none">
                    <i class="ri-add-line"></i>
                    <span>Add address</span>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="billing-address-bar mb-0">
                  <h3>Billing Address</h3>
                  <ul>
                    <li class="p-0">Doreen McCool</li>
                    <li>
                      <span>Address:</span>
                      2491 Reel Avenue Albuquerque
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <span>Phone:</span>
                      <a href="tel:+1-(514)-321-4566">+1 (514) 321-4566</a>
                    </li>
                    <li>
                      <span>Email:</span>
                      <a href="mailto:hello@tuan.com">hello@tuan.com</a>
                    </li>
                  </ul>

                  <div class="edit-address">
                    <NuxtLink
                      to="/edit-address"
                      class="btn edit btn-warning text-white"
                    >
                      Edit
                    </NuxtLink>

                    <button class="btn btn-warning text-white ms-3">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddAddress",
};
</script>
