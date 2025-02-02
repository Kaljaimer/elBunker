<template>
  <div class="best-deals-area pt-60 pb-35">
    <div class="container">
      <div
        class="d-sm-flex align-items-center justify-content-between text-center mb-38 mt-minus-6"
      >
        <h3 class="fs-3 mb-0 mb-1 mb-sm-0">Today’s Best Deals</h3>
        <div class="">
          <NuxtLink to="/products" class="read-more">
            <span>See All Deals</span>
            <i class="ri-arrow-right-up-line ms-1"></i>
          </NuxtLink>
        </div>
      </div>
      <v-row class="justify-content-center">
        <v-col cols="12" xl="3" lg="3" sm="6">
          <div class="single-best-deals-item bg-gray1 pb-0">
            <div class="best-deals-content">
              <h3>iPad & Tablets</h3>
              <p>Up to 50% off today!</p>
              <NuxtLink to="/products" class="read-more">
                <span>Shop Now</span>
                <i class="ri-arrow-right-up-line"></i>
              </NuxtLink>
            </div>
            <img src="~/assets/images/product-2.png" alt="product" />
          </div>
        </v-col>
        <v-col cols="12" xl="3" lg="3" sm="6">
          <div class="single-best-deals-item bg-gray1 pb-0">
            <div class="best-deals-content">
              <h3>Cell Phones & Smartphones</h3>
              <p>Up to 20% off today!</p>
              <NuxtLink to="/products" class="read-more">
                <span>Shop Now</span>
                <i class="ri-arrow-right-up-line"></i>
              </NuxtLink>
            </div>
            <img src="~/assets/images/product-3.png" alt="product" />
          </div>
        </v-col>
        <v-col cols="12" xl="3" lg="3" sm="6">
          <div class="single-best-deals-item bg-gray1 pb-0">
            <div class="best-deals-content">
              <h3>Audio & SmartTV</h3>
              <p>Up to 70% off today!</p>
              <NuxtLink to="/products" class="read-more">
                <span>Shop Now</span>
                <i class="ri-arrow-right-up-line"></i>
              </NuxtLink>
            </div>
            <img src="~/assets/images/product-4.png" alt="product" />
          </div>
        </v-col>
        <v-col cols="12" xl="3" lg="3" sm="6">
          <div class="single-best-deals-item bg-gray1 pb-0">
            <div class="best-deals-content">
              <h3>Premium Headphones</h3>
              <p>Up to 40% off today!</p>
              <NuxtLink to="/products" class="read-more">
                <span>Shop Now</span>
                <i class="ri-arrow-right-up-line"></i>
              </NuxtLink>
            </div>
            <img src="~/assets/images/product-5.png" alt="product" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayBestDeals",
};
</script>
