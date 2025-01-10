<template>
  <div class="offer-area">
    <div class="container">
      <div
        class="single-offer-grocery-item bg-img position-relative style-three mb-0"
        :style="{
          'background-image': `url(${bgImage})`,
        }"
      >
        <div class="content-wrap">
          <span class="top-title">Hurry Up!</span>
          <h3>
            Experience with Our Handpicked Selection of Organic and Healthy
            Foods
          </h3>
          <p>Explore our exclusive sale on cutting-edge electronics devices</p>
          <NuxtLink
            to="/products"
            class="btn btn-warning text-white rounded-pill"
          >
            <span>Shop Now</span>
            <i class="ri-arrow-right-up-line ms-1"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import bgImage from "~/assets/images/offer-14.png";

export default defineComponent({
  name: "OurHandpickedSelection",
  setup() {
    return {
      bgImage,
    };
  },
});
</script>
