<template>
  <div class="offer-area pb-35">
    <div class="container">
      <v-row class="justify-content-center">
        <v-col cols="12" lg="4" md="6">
          <div class="single-offer-item position-relative z-1">
            <span class="top-title">Black Friday Sale</span>
            <h3>Computer & Gaming</h3>
            <p>Up to 70% off!</p>
            <NuxtLink to="/products" class="read-more">
              <span>Shop Now</span>
              <i class="ri-arrow-right-up-line ms-1"></i>
            </NuxtLink>
            <img
              src="~/assets/images/offer-1.png"
              class="position-absolute bottom-0 end-0 z-n1"
              alt="offer"
            />
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="6">
          <div class="single-offer-item position-relative z-1 bg-fff4e7">
            <span class="top-title">Black Friday Sale</span>
            <h3 class="text-warning">Home Electronics</h3>
            <p>Up to 70% off!</p>
            <NuxtLink to="/products" class="read-more">
              <span>Shop Now</span>
              <i class="ri-arrow-right-up-line ms-1"></i>
            </NuxtLink>
            <img
              src="~/assets/images/offer-2.png"
              class="position-absolute bottom-0 end-0 z-n1"
              alt="offer"
            />
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="6">
          <div class="single-offer-item position-relative z-1 bg-eaffd9">
            <span class="top-title">Black Friday Sale</span>
            <h3 class="text-success">Mobile Accessories</h3>
            <p>Up to 70% off!</p>
            <NuxtLink to="/products" class="read-more">
              <span>Shop Now</span>
              <i class="ri-arrow-right-up-line ms-1"></i>
            </NuxtLink>
            <img
              src="~/assets/images/offer-3.png"
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
  name: "BlackFridaySale",
};
</script>
