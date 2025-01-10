<template>
  <div class="hurry-up-area">
    <div class="container">
      <div class="bg-gray1 rounded-2 position-relative z-1 overflow-hidden">
        <v-row class="align-items-end">
          <v-col cols="12" lg="6">
            <div class="hurry-conetnt">
              <span class="top-title">Hurry Up!</span>
              <h2>Year Ending Sale Up To 70% Off!</h2>
              <p>
                Explore our exclusive sale on cutting-edge electronics devices
              </p>
              <NuxtLink
                to="/products"
                class="btn btn-warning text-white rounded-pill"
              >
                <span>Shop Now</span>
                <i class="ri-arrow-right-up-line ms-1 fs-15"></i>
              </NuxtLink>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <div class="hurry-img text-center">
              <img src="~/assets/images/iphone.png" alt="hurry-shape" />
            </div>
          </v-col>
        </v-row>
        <img
          src="~/assets/images/hurry-shape.png"
          class="position-absolute bottom-0 end-0 z-n1 shape"
          alt="hurry-shape"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YearEndingSale",
};
</script>
