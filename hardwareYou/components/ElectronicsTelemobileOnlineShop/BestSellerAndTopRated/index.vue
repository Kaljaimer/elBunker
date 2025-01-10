<template>
  <div class="best-top-area ptb-60">
    <div class="container">
      <v-row class="justify-content-center">
        <v-col cols="12" lg="6">
          <div
            class="d-sm-flex align-items-center justify-content-between text-center mb-38 mt-minus-6"
          >
            <h3 class="fs-3 mb-0 mb-1 mb-sm-0">Best Seller</h3>
            <div class="">
              <NuxtLink to="/products" class="read-more">
                <span>See All Products</span>
                <i class="ri-arrow-right-up-line ms-1"></i>
              </NuxtLink>
            </div>
          </div>

          <ElectronicsTelemobileOnlineShopBestSellerAndTopRatedBestSellerProduct />
        </v-col>
        <v-col cols="12" lg="6" class="mt-4 mt-lg-0">
          <div
            class="d-sm-flex align-items-center justify-content-between text-center mb-38 mt-minus-6"
          >
            <h3 class="fs-3 mb-0 mb-1 mb-sm-0">Top Rated</h3>
            <div class="">
              <NuxtLink to="/products" class="read-more">
                <span>See All Products</span>
                <i class="ri-arrow-right-up-line ms-1"></i>
              </NuxtLink>
            </div>
          </div>

          <ElectronicsTelemobileOnlineShopBestSellerAndTopRatedProduct />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "BestSellerAndTopRated",
};
</script>
