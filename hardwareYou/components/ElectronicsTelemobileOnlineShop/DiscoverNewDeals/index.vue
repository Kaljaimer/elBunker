<template>
  <div class="discover-new-deals-area pb-60">
    <div class="container">
      <div
        class="d-lg-flex align-items-center justify-content-between text-center mb-38 mt-minus-6"
      >
        <v-tabs
          v-model="tab"
          bg-color="white"
          class="border-0 discover-month-tabs justify-content-center justify-content-lg-start mb-2 mb-lg-0"
        >
          <v-tab value="newIn">New In</v-tab>
          <v-tab value="bestSelling">Best Selling</v-tab>
          <v-tab value="featured">Featured</v-tab>
        </v-tabs>
        <div>
          <NuxtLink to="/products" class="read-more">
            <span>View all Products</span>
            <i class="ri-arrow-right-up-line ms-1"></i>
          </NuxtLink>
        </div>
      </div>

      <v-row>
        <v-col cols="12" lg="5" md="5">
          <div class="discover-new-deals-content text-center">
            <h3>Discover New Deals!</h3>
            <span class="offer">End of the offer</span>
            <div class="clockdiv">
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
            <img
              src="~/assets/images/discover-img.png"
              class="discover-img"
              alt="discover-img"
            />
            <div class="mw-345 m-auto">
              <NuxtLink to="/product-details" class="title">
                Apple 2023 iMac All-in-One Desktop Computer with M3 chip
              </NuxtLink>
              <div class="d-flex gap-1 review justify-content-center">
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <span>(5 reviews)</span>
              </div>
              <h3 class="price">$1,699 <del>$1,899</del></h3>

              <v-progress-linear
                height="5"
                model-value="25"
              ></v-progress-linear>
              <div
                class="d-flex sold-stock justify-content-between align-items-center"
              >
                <span class="sold">920 Sold</span>
                <span class="stock">
                  <i class="ri-check-line"></i> 76 In Stock
                </span>
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" lg="7" md="7">
          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="newIn">
                <ElectronicsTelemobileOnlineShopDiscoverNewDealsNewInItems />
              </v-tabs-window-item>
              <v-tabs-window-item value="bestSelling">
                <ElectronicsTelemobileOnlineShopDiscoverNewDealsBestSellingItems />
              </v-tabs-window-item>
              <v-tabs-window-item value="featured">
                <ElectronicsTelemobileOnlineShopDiscoverNewDealsFeaturedItems />
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";

export default defineComponent({
  name: "DiscoverNewDeals",
  data: () => ({
    tab: null,
  }),
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
