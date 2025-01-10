<template>
  <div class="discover-new-deals-area pb-35">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="discover-style-two">
            <div class="discover-new-deals-content pb-0">
              <div class="row align-items-center">
                <div class="col-lg-5 col-md-5">
                  <NuxtLink
                    to="/product-details"
                    class="d-block text-center discover-new-deals-img text-decoration-none"
                  >
                    <img src="~/assets/images/product-38.png" alt="product" />
                    <span class="discount">-50%</span>
                  </NuxtLink>
                </div>
                <div class="col-lg-7 col-md-7">
                  <div class="pe-58">
                    <NuxtLink to="/product-details" class="title">
                      Amazon Fresh - Wavy Salted Potato Chips, 11 oz
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(220 reviews)</span>
                    </div>
                    <h3 class="price">$14 <del>$28</del></h3>

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
              </div>
              <div class="clockdiv">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="title d-none d-sm-block">End of the offer</span>
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
          </div>
        </div>
        <div class="col-lg-6">
          <div class="discover-style-two">
            <div class="discover-new-deals-content pb-0">
              <div class="row align-items-center">
                <div class="col-lg-5 col-md-5">
                  <NuxtLink
                    to="/product-details"
                    class="d-block text-center discover-new-deals-img text-decoration-none"
                  >
                    <img src="assets/images/product-39.png" alt="product" />
                    <span class="discount">-50%</span>
                  </NuxtLink>
                </div>
                <div class="col-lg-7 col-md-7">
                  <div class="pe-58">
                    <NuxtLink to="/product-details" class="title">
                      Santa Cruz, Lemon 100% Organic Juice, 16 Fl Oz
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(115 reviews)</span>
                    </div>
                    <h3 class="price">$11 <del>$22</del></h3>

                    <v-progress-linear
                      height="5"
                      model-value="40"
                    ></v-progress-linear>
                    <div
                      class="d-flex sold-stock justify-content-between align-items-center"
                    >
                      <span class="sold">1234 Sold</span>
                      <span class="stock">
                        <i class="ri-check-line"></i> 69 In Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clockdiv">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="title d-none d-sm-block">End of the offer</span>
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
