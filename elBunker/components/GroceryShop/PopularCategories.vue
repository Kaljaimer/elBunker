<template>
  <div class="popular-categories-area ptb-60">
    <div class="container">
      <div
        class="d-sm-flex align-items-center justify-content-between text-center mb-38 mt-minus-6"
      >
        <h3 class="fs-3 mb-0 mb-1 mb-sm-0">Popular Categories</h3>
        <div class="">
          <NuxtLink to="/products" class="read-more">
            <span>See All</span>
            <i class="ri-arrow-right-up-line ms-1"></i>
          </NuxtLink>
        </div>
      </div>

      <Swiper
        :slidesPerView="8"
        :spaceBetween="-1"
        :centeredSlides="false"
        :preventClicks="true"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :navigation="{
          nextEl: '.next3',
          prevEl: '.prev3',
        }"
        :breakpoints="{
          0: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1199: {
            slidesPerView: 6,
          },
          1440: {
            slidesPerView: 7,
          },
          1600: {
            slidesPerView: 8,
          },
        }"
        :modules="[SwiperEffectFade, SwiperNavigation]"
        class="popular-categories-slide"
      >
        <SwiperSlide v-for="categorie in categories" :key="categorie.id">
          <NuxtLink
            to="/products"
            class="single-popular-categories-item d-block"
          >
            <img :src="categorie.image" alt="categories" />
            <h3>{{ categorie.title }}</h3>
            <span>{{ categorie.products }} Products</span>
          </NuxtLink>
        </SwiperSlide>

        <div class="popular-categories">
          <div class="controller-icon prev3">
            <i class="flaticon-chevron"></i>
          </div>
          <div class="controller-icon next3">
            <i class="flaticon-chevron"></i>
          </div>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/categories-1.png";
import image2 from "~/assets/images/categories-2.png";
import image3 from "~/assets/images/categories-3.png";
import image4 from "~/assets/images/categories-4.png";
import image5 from "~/assets/images/categories-5.png";
import image6 from "~/assets/images/categories-6.png";
import image7 from "~/assets/images/categories-7.png";
import image8 from "~/assets/images/categories-8.png";

export default defineComponent({
  name: "PopularCategories",
  data() {
    return {
      categories: [
        {
          id: 1,
          image: image1,
          title: "Dairy & Eggs",
          products: "16",
        },
        {
          id: 2,
          image: image2,
          title: "Meat and Seafood",
          products: "25",
        },
        {
          id: 3,
          image: image3,
          title: "Frozen Foods",
          products: "17",
        },
        {
          id: 4,
          image: image4,
          title: "Pantry Staples",
          products: "32",
        },
        {
          id: 5,
          image: image5,
          title: "Beverages",
          products: "19",
        },
        {
          id: 6,
          image: image6,
          title: "Cereal and Breakfast",
          products: "22",
        },
        {
          id: 7,
          image: image7,
          title: "Sauces and Spices",
          products: "15",
        },
        {
          id: 8,
          image: image8,
          title: "Bakery",
          products: "42",
        },
        {
          id: 9,
          image: image1,
          title: "Dairy & Eggs",
          products: "16",
        },
        {
          id: 10,
          image: image2,
          title: "Meat and Seafood",
          products: "25",
        },
        {
          id: 11,
          image: image3,
          title: "Frozen Foods",
          products: "17",
        },
        {
          id: 12,
          image: image4,
          title: "Pantry Staples",
          products: "32",
        },
        {
          id: 13,
          image: image5,
          title: "Beverages",
          products: "19",
        },
        {
          id: 14,
          image: image6,
          title: "Cereal and Breakfast",
          products: "22",
        },
        {
          id: 15,
          image: image7,
          title: "Sauces and Spices",
          products: "15",
        },
        {
          id: 16,
          image: image8,
          title: "Bakery",
          products: "42",
        },
      ],
    };
  },
});
</script>
