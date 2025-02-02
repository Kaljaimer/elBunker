<template>
  <div class="offer-area">
    <div class="container">
      <div
        class="single-offer-grocery-item bg-img position-relative style-three mb-0 z-1 overflow-hidden"
        :style="{
          'background-image': `url(${bgImage})`,
        }"
      >
        <div class="content-wrap mw-600 ms-auto z-2 ps-lg-0 position-relative">
          <span class="top-title">Hurry Up!</span>
          <h3 class="mb-1">Natural Juices Buy 1 Get 1</h3>
          <p class="mb-2">
            Explore our exclusive sale on cutting-edge electronics devices
          </p>
          <span class="d-block mb-2">Offer End</span>
          <div class="clockdiv mb-4">
            <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center gap-1">
              <li class="time">
                <span class="days">{{ countdown.days }}</span>
              </li>
              <li class="time">
                <span class="hours">{{ countdown.hours }}</span>
              </li>
              <li class="time">
                <span class="minutes">{{ countdown.minutes }}</span>
              </li>
              <li class="time">
                <span class="seconds">{{ countdown.seconds }}</span>
              </li>
            </ul>
          </div>
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

import bgImage from "~/assets/images/offer-bg-3.png";

export default defineComponent({
  name: "Buy1Get1",
  setup() {
    const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    let countdownInterval: ReturnType<typeof setInterval> | undefined;

    const startCountdown = () => {
      const targetDate = new Date("2025-12-31T23:59:59").getTime();

      countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
          countdown.value.days = Math.floor(
            timeDifference / (1000 * 60 * 60 * 24)
          );
          countdown.value.hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          countdown.value.minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          countdown.value.seconds = Math.floor(
            (timeDifference % (1000 * 60)) / 1000
          );
        } else {
          countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          clearInterval(countdownInterval);
        }
      }, 1000);
    };

    onMounted(() => {
      startCountdown();
    });

    onBeforeUnmount(() => {
      clearInterval(countdownInterval);
    });

    return {
      bgImage,
      countdown,
    };
  },
});
</script>
