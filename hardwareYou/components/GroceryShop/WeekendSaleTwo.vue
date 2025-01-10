<template>
  <div class="year-ending-offer-area">
    <div class="container">
      <div
        class="year-ending-offer-bg bg-img"
        :style="{
          'background-image': `url(${bgImage})`,
        }"
      >
        <div class="year-ending-offer-content">
          <span class="top-title">Hurry Up!</span>
          <h3>Weekend Sale Up To 70% Off!</h3>
          <p>Explore our exclusive sale on cutting-edge electronics devices</p>
          <NuxtLink
            to="/products"
            class="btn btn-warning text-white rounded-pill"
          >
            <span>Shop Now</span>
            <i class="ri-arrow-right-up-line"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import bgImage from "~/assets/images/offer-10.png";

export default defineComponent({
  name: "WeekendSaleTwo",
  setup() {
    return {
      bgImage,
    };
  },
});
</script>
