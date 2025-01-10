<template>
  <div class="offer-area pb-35">
    <div class="container">
      <v-row class="justify-content-center">
        <v-col cols="12" lg="6" md="6">
          <div
            class="single-offer-grocery-item bg-img position-relative px-60 overflow-hidden"
            :style="{
              'background-image': `url(${bgImage1})`,
            }"
          >
            <span class="top-title">Today’s Deal</span>
            <h3>Natural Orange Juice</h3>
            <p>Up to 70% off!</p>
            <NuxtLink to="/products" class="read-more success">
              <span>Shop Now</span>
              <i class="ri-arrow-right-up-line ms-1"></i>
            </NuxtLink>
            <div></div>
            <img
              src="~/assets/images/offer-12.png"
              class="position-absolute top-0 end-0 offer-shape-img"
              alt="offer"
            />
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <div
            class="single-offer-grocery-item bg-img position-relative px-60 overflow-hidden"
            :style="{
              'background-image': `url(${bgImage2})`,
            }"
          >
            <span class="top-title">Monthly Deal</span>
            <h3>Organic Milk</h3>
            <p>Up to 70% off!</p>
            <NuxtLink to="/products" class="read-more success">
              <span>Shop Now</span>
              <i class="ri-arrow-right-up-line ms-1"></i>
            </NuxtLink>
            <div></div>
            <img
              src="~/assets/images/offer-13.png"
              class="position-absolute top-0 end-0 offer-shape-img"
              alt="offer"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import bgImage1 from "~/assets/images/offer-bg-1.png";
import bgImage2 from "~/assets/images/offer-bg-2.png";

export default defineComponent({
  name: "Offers",
  setup() {
    return {
      bgImage1,
      bgImage2,
    };
  },
});
</script>
