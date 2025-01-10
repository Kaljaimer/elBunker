<template>
  <Swiper
    :slidesPerView="5"
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
      nextEl: '.prev5',
      prevEl: '.next5',
    }"
    :pagination="{
      el: '.swiper-pagination-monthly',
      clickable: true,
    }"
    :breakpoints="{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 5,
      },
    }"
    :modules="[SwiperEffectFade, SwiperNavigation, SwiperPagination]"
    class="monthly-slide"
  >
    <SwiperSlide v-for="product in products" :key="product.id">
      <div class="single-product-telemobile-item">
        <div class="product-img position-relative">
          <NuxtLink to="/product-details" class="d-block">
            <img :src="product.image" alt="product" />
          </NuxtLink>
          <div
            class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
          >
            <span class="minus-count">{{ product.percent }}%</span>
            <button class="border-0 wish-btn">
              <i class="ri-heart-line"></i>
              <i class="ri-heart-fill d-none"></i>
              <v-tooltip activator="parent" location="top">
                Favorite
              </v-tooltip>
            </button>
          </div>
        </div>
        <div class="product-content">
          <NuxtLink to="/product-details" class="title">
            {{ product.title }}
          </NuxtLink>
          <div class="d-flex gap-1 review">
            <i class="flaticon-star"></i>
            <i class="flaticon-star"></i>
            <i class="flaticon-star"></i>
            <i class="flaticon-star"></i>
            <i class="flaticon-star"></i>
            <span>({{ product.reviews }} Reviews)</span>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <h3>
              ${{ product.price }} <del>${{ product.oldPrice }}</del>
            </h3>
            <div class="d-flex sold-stock align-items-center">
              <span class="stock">
                <i class="ri-check-line"></i>
                {{ product.stock }}
              </span>
            </div>
          </div>
          <button class="btn btn-success text-white rounded-pill">
            <i class="ri-shopping-cart-line"></i>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </SwiperSlide>

    <div class="product-controller">
      <div class="controller-icon prev5">
        <i class="flaticon-chevron"></i>
      </div>
      <div class="controller-icon next5">
        <i class="flaticon-chevron"></i>
      </div>
    </div>
    <div class="swiper-pagination-monthly text-center mt-3 lh-1"></div>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/product-55.png";
import image2 from "~/assets/images/product-56.png";
import image3 from "~/assets/images/product-57.png";
import image4 from "~/assets/images/product-58.png";
import image5 from "~/assets/images/product-59.png";

export default defineComponent({
  name: "FreshProduceItem",
  data() {
    return {
      products: [
        {
          id: 1,
          image: image3,
          percent: "-40",
          title: "Whole Foods Market Organic Orange Juice, 89 Fl Oz Bottle",
          reviews: "24",
          price: "149",
          oldPrice: "255",
          stock: "In Stock",
        },
        {
          id: 2,
          image: image4,
          percent: "-20",
          title: "Versatile Olive Oil Spray Bottle for Cooking",
          reviews: "19",
          price: "11",
          oldPrice: "13",
          stock: "In Stock",
        },
        {
          id: 3,
          image: image5,
          percent: "-10",
          title: "Foods Market, Organic Juice Not from Concentrate",
          reviews: "76",
          price: "59",
          oldPrice: "65",
          stock: "In Stock",
        },
        {
          id: 4,
          image: image1,
          percent: "-11",
          title: "Vital Farms Pasture-Raised Grade A Large Eggs",
          reviews: "35",
          price: "16",
          oldPrice: "22",
          stock: "In Stock",
        },
        {
          id: 5,
          image: image2,
          percent: "-15",
          title: "Whole Foods Market, Corn Fire Roasted Organic, 16 Ounce",
          reviews: "18",
          price: "39",
          oldPrice: "45",
          stock: "In Stock",
        },
        {
          id: 6,
          image: image1,
          percent: "-11",
          title: "Vital Farms Pasture-Raised Grade A Large Eggs",
          reviews: "35",
          price: "16",
          oldPrice: "22",
          stock: "In Stock",
        },
        {
          id: 7,
          image: image2,
          percent: "-15",
          title: "Whole Foods Market, Corn Fire Roasted Organic, 16 Ounce",
          reviews: "18",
          price: "39",
          oldPrice: "45",
          stock: "In Stock",
        },
        {
          id: 8,
          image: image3,
          percent: "-40",
          title: "Whole Foods Market Organic Orange Juice, 89 Fl Oz Bottle",
          reviews: "24",
          price: "149",
          oldPrice: "255",
          stock: "In Stock",
        },
        {
          id: 9,
          image: image4,
          percent: "-20",
          title: "Versatile Olive Oil Spray Bottle for Cooking",
          reviews: "19",
          price: "11",
          oldPrice: "13",
          stock: "In Stock",
        },
        {
          id: 10,
          image: image5,
          percent: "-10",
          title: "Foods Market, Organic Juice Not from Concentrate",
          reviews: "76",
          price: "59",
          oldPrice: "65",
          stock: "In Stock",
        },
      ],
    };
  },
});
</script>
