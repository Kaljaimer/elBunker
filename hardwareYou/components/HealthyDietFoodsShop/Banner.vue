<template>
  <div class="banner-area bg-warningdiv1 ptb-70">
    <div class="container position-relative">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :centeredSlides="false"
        :preventClicks="true"
        :loop="true"
        :fadeEffect="{
          crossFade: true,
        }"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :navigation="{
          nextEl: '.next',
          prevEl: '.prev',
        }"
        :pagination="{
          el: '.swiper-pagination-banner-healthy',
          clickable: true,
        }"
        :modules="[SwiperEffectFade, SwiperNavigation, SwiperPagination]"
        class="banner-slide3"
      >
        <SwiperSlide v-for="banner in banners" :key="banner.id">
          <v-row class="align-items-center">
            <v-col cols="12" lg="6" md="6">
              <div class="banner-content mw-450">
                <span class="top-title bg-white px-3 mb-2">
                  <i class="flaticon-flash-sale"></i>
                  {{ banner.subTitle }}
                </span>
                <h2>{{ banner.heading }}</h2>
                <p class="mb-6">
                  {{ banner.shortDesc }}
                </p>
                <NuxtLink
                  :to="banner.btnLink"
                  class="btn btn-success rounded-pill text-white"
                >
                  <span>{{ banner.btnText }}</span>
                  <i class="ri-arrow-right-up-line ms-1 fs-15"></i>
                </NuxtLink>
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="6">
              <div class="banner-img-three text-center position-relative">
                <img :src="banner.image" alt="banner-img" />
                <img
                  src="assets/images/organic.png"
                  class="organic"
                  alt="organic"
                />
                <div :class="['offer-tag', banner.className]">
                  <img src="assets/images/offer-star.png" alt="offer-star" />
                  <div class="offer">
                    <h3>{{ banner.offerPercent }}%</h3>
                    <span>Off</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </SwiperSlide>
      </Swiper>
      <div class="banner-controller3 d-none d-lg-block">
        <div class="d-flex justify-content-between align-items-center">
          <div class="controller-icon prev">
            <i class="flaticon-chevron"></i>
          </div>
          <div class="controller-icon next">
            <i class="flaticon-chevron"></i>
          </div>
        </div>
      </div>
      <div class="swiper-pagination-banner-healthy z-1 text-center"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/banner-img-7.png";
import image2 from "~/assets/images/banner-img-8.png";
import image3 from "~/assets/images/banner-img-9.png";

export default defineComponent({
  name: "Banner",
  data() {
    return {
      banners: [
        {
          id: 1,
          image: image1,
          className: "",
          subTitle: "Buy One, Get One 50% Off",
          heading: "Unveiling the Magic of Our Organic Pantry",
          shortDesc: "Limited-Time Offers on Quick and Easy Meals - Ends Soon!",
          btnText: "Shop Now",
          btnLink: "/products",
          offerPercent: "50",
        },
        {
          id: 2,
          image: image2,
          className: "position-1",
          subTitle: "Buy One, Get One 50% Off",
          heading: "Unveiling the Magic of Our Organic Pantry",
          shortDesc: "Limited-Time Offers on Quick and Easy Meals - Ends Soon!",
          btnText: "Shop Now",
          btnLink: "/products",
          offerPercent: "50",
        },
        {
          id: 3,
          image: image3,
          className: "position-2",
          subTitle: "Buy One, Get One 15% Off",
          heading: "Unveiling the Magic of Our Organic Pantry",
          shortDesc: "Limited-Time Offers on Quick and Easy Meals - Ends Soon!",
          btnText: "Shop Now",
          btnLink: "/products",
          offerPercent: "50",
        },
      ],
    };
  },
});
</script>
