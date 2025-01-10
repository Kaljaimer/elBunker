<template>
  <div class="banner-area bg-gray1">
    <div class="banner-slide position-relative">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :centeredSlides="false"
        :preventClicks="true"
        :loop="true"
        :effect="'fade'"
        :fadeEffect="{
          crossFade: true,
        }"
        :speed="2000"
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
          el: '.swiper-pagination-banner',
          clickable: true,
        }"
        :modules="[SwiperEffectFade, SwiperNavigation, SwiperPagination]"
        class="banner-slide position-relative"
      >
        <SwiperSlide v-for="banner in banners" :key="banner.id">
          <div class="container">
            <div class="banner-wrap">
              <v-row>
                <v-col cols="12" lg="6" md="6">
                  <div class="banner-content">
                    <span class="top-title">
                      <i class="flaticon-flash-sale"></i>
                      {{ banner.subTitle }}
                    </span>
                    <h2>{{ banner.heading }}</h2>
                    <p>
                      {{ banner.shortDesc }}
                    </p>
                    <NuxtLink
                      :to="banner.btnLink"
                      class="btn btn-warning rounded-pill text-white"
                    >
                      <span>{{ banner.btnText }}</span>
                      <i class="ri-arrow-right-up-line ms-2 fs-15"></i>
                    </NuxtLink>
                  </div>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                  <div class="banner-img">
                    <img :src="banner.image" alt="banner-img" />
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="container">
        <div class="banner-controller">
          <div class="d-flex justify-content-between align-items-center">
            <div class="controller-icon prev">
              <i class="flaticon-chevron"></i>
            </div>
            <div class="controller-icon next">
              <i class="flaticon-chevron"></i>
            </div>
          </div>
        </div>

        <div class="swiper-pagination-banner"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/banner-img.png";
import image2 from "~/assets/images/banner-img-2.png";
import image3 from "~/assets/images/banner-img-3.png";

export default defineComponent({
  name: "Banner",
  data() {
    return {
      banners: [
        {
          id: 1,
          image: image1,
          subTitle: "Mega Sale Madness! Enjoy 50% off",
          heading: "Spark Your Savings on Electronics!",
          shortDesc:
            "New Electronics Deals Added! Explore the latest discounts on cameras, wearables, and smart home devices.",
          btnText: "Shop Now",
          btnLink: "/products",
        },
        {
          id: 2,
          image: image2,
          subTitle: "Mega Sale Madness! Enjoy 30% off",
          heading: "Mobile Madness - Save Big Today!",
          shortDesc:
            "New Electronics Deals Added! Explore the latest discounts on cameras, wearables, and smart home devices.",
          btnText: "Shop Now",
          btnLink: "/products",
        },
        {
          id: 3,
          image: image3,
          subTitle: "Mega Sale Madness! Enjoy 30% off",
          heading: "Wrist Tech Marvels on a Budget!",
          shortDesc:
            "New Electronics Deals Added! Explore the latest discounts on cameras, wearables, and smart home devices.",
          btnText: "Shop Now",
          btnLink: "/products",
        },
      ],
    };
  },
});
</script>
