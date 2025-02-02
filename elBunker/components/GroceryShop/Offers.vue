<template>
  <div class="offer-area pb-35">
    <div class="container">
      <v-row class="justify-content-center">
        <v-col cols="12" lg="4" md="6">
          <div
            class="single-offer-grocery-item bg-img"
            :style="{
              'background-image': `url(${bgImage1})`,
            }"
          >
            <span class="top-title">Today’s Deal</span>
            <h3>Fresh Egg’s</h3>
            <p>Up to 70% off!</p>
            <NuxtLink to="/products" class="read-more success">
              <span>Shop Now</span>
              <i class="ri-arrow-right-up-line ms-1"></i>
            </NuxtLink>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="6">
          <div
            class="single-offer-grocery-item bg-img"
            :style="{
              'background-image': `url(${bgImage2})`,
            }"
          >
            <span class="top-title">Weekend Sale</span>
            <h3>Breads & Bakery</h3>
            <p>Flat 40% off!</p>
            <NuxtLink to="/products" class="read-more success">
              <span>Shop Now</span>
              <i class="ri-arrow-right-up-line ms-1"></i>
            </NuxtLink>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="6">
          <div
            class="single-offer-grocery-item bg-img"
            :style="{
              'background-image': `url(${bgImage3})`,
            }"
          >
            <span class="top-title">Organic Foods</span>
            <h3>Fresh Egg’s</h3>
            <p>Up to 50% off!</p>
            <NuxtLink to="/products" class="read-more success">
              <span>Shop Now</span>
              <i class="ri-arrow-right-up-line ms-1"></i>
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import bgImage1 from "~/assets/images/offer-6.png";
import bgImage2 from "~/assets/images/offer-7.png";
import bgImage3 from "~/assets/images/offer-8.png";

export default defineComponent({
  name: "Offers",
  setup() {
    return {
      bgImage1,
      bgImage2,
      bgImage3,
    };
  },
});
</script>
