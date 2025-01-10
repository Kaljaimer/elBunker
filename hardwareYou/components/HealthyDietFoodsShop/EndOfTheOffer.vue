<template>
  <div class="discover-new-deals-area pb-60">
    <div class="container">
      <div class="discover-style-three">
        <div class="discover-new-deals-content">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-5">
              <div class="discover-new-wraps">
                <span class="d-block mb-2">End of the offer</span>
                <div class="clockdiv border-0 p-0 mb-0">
                  <ul
                    class="ps-0 mb-4 list-unstyled d-flex align-items-center gap-1"
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
                <NuxtLink to="/product-details" class="title mb-4">
                  Simply Orange Juice, 52 fl oz, 100% Juice Not from
                  Concentrate, Pulp Free
                </NuxtLink>
                <div class="d-flex gap-1 review">
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                  <i class="flaticon-star"></i>
                  <span>(76 reviews)</span>
                </div>
                <h3 class="price">$32 <del>$35</del></h3>

                <v-progress-linear
                  height="5"
                  model-value="40"
                ></v-progress-linear>
                <div
                  class="d-flex sold-stock justify-content-between align-items-center"
                >
                  <span class="sold">2365 Sold</span>
                  <span class="stock">
                    <i class="ri-check-line"></i>
                    289 In Stock
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-7">
              <NuxtLink
                to="/product-details"
                class="d-block text-center discover-new-deals-three text-decoration-none text-center mt-4 mt-lg-0"
              >
                <img src="~/assets/images/product-60.png" alt="product" />
                <div class="offer-tag">
                  <img src="~/assets/images/offer-star.png" alt="offer-star" />
                  <div class="offer">
                    <h3>50%</h3>
                    <span>Off</span>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";

export default defineComponent({
  name: "EndOfTheOffer",
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
