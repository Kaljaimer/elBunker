<template>
  <div class="offer-area pb-35">
    <div class="container">
      <v-row class="justify-content-cente">
        <v-col cols="12" lg="6">
          <div
            class="single-offer-item style-two position-relative z-1 bg-fff4e7"
          >
            <div class="offer-content">
              <span class="top-title">Hurry Up!</span>
              <h3>Time to Upgrade: Smart Watches Sale</h3>
              <p>Unleash Smart Savings Today!</p>
              <NuxtLink
                to="/products"
                class="btn btn-warning text-white rounded-pill"
              >
                <span>Shop Now</span>
                <i class="ri-arrow-right-up-line ms-1"></i>
              </NuxtLink>
            </div>
            <img
              src="~/assets/images/offer-4.png"
              class="position-absolute bottom-0 end-0 z-n1"
              alt="offer"
            />
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <div
            class="single-offer-item style-two position-relative z-1 bg-ffeeef"
          >
            <div class="offer-content">
              <span class="top-title">Weekend Sale</span>
              <h3>Laptop Sale - Unmissable Deals Await!</h3>
              <p>Unleash Smart Savings Today!</p>
              <NuxtLink
                to="/products"
                class="btn btn-warning text-white rounded-pill"
              >
                <span>Shop Now</span>
                <i class="ri-arrow-right-up-line ms-1"></i>
              </NuxtLink>
            </div>
            <img
              src="~/assets/images/offer-5.png"
              class="position-absolute bottom-0 end-0 z-n1"
              alt="offer"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnleashSmartSavings",
};
</script>
