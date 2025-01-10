<template>
  <div class="flash-sale-area pb-60">
    <div class="container position-relative">
      <div
        class="d-lg-flex align-items-center justify-content-between text-center mb-27 mt-minus-6"
      >
        <div class="d-lg-flex align-items-center">
          <h3 class="fs-3 mb-0 mb-1 mb-sm-0">
            Flash Sale
            <i
              class="flaticon-flash-sale text-dangerdiv position-relative tops-3"
            ></i>
          </h3>
          <div
            class="d-flex align-items-center ms-70 justify-content-center my-3 my-lg-0"
          >
            <span class="title d-none d-sm-inline-block">End of the offer</span>
            <div class="clockdiv mb-0 ms-sm-3">
              <ul
                class="ps-0 mb-0 list-unstyled d-flex align-items-center gap-1 justify-content-center"
              >
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
          </div>
        </div>
        <div>
          <NuxtLink to="/products" class="read-more">
            <span>See All Deals</span>
            <i class="ri-arrow-right-up-line ms-1"></i>
          </NuxtLink>
        </div>
      </div>

      <ElectronicsTelemobileOnlineShopFlashSaleProducts />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";

export default defineComponent({
  name: "FlashSale",
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
      countdown,
    };
  },
});
</script>
