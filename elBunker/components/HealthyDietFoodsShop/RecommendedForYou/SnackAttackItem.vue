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
      nextEl: '.prev6',
      prevEl: '.next6',
    }"
    :pagination="{
      el: '.swiper-pagination-recommended',
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
    class="recommended-slide"
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
      <div class="controller-icon prev6">
        <i class="flaticon-chevron"></i>
      </div>
      <div class="controller-icon next6">
        <i class="flaticon-chevron"></i>
      </div>
    </div>
    <div class="swiper-pagination-recommended text-center mt-3 lh-1"></div>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/product-50.png";
import image2 from "~/assets/images/product-51.png";
import image3 from "~/assets/images/product-52.png";
import image4 from "~/assets/images/product-53.png";
import image5 from "~/assets/images/product-54.png";

export default defineComponent({
  name: "SnackAttackItem",
  data() {
    return {
      products: [
        {
          id: 1,
          image: image4,
          percent: "-20",
          title: "Canned Mild Red Chili Beans, Source of Plant Based Protein",
          reviews: "19",
          price: "11",
          oldPrice: "13",
          stock: "In Stock",
        },
        {
          id: 2,
          image: image2,
          percent: "-15",
          title: "Yupik Nuts Blanched Whole Almonds, 2.2 lb",
          reviews: "18",
          price: "39",
          oldPrice: "45",
          stock: "In Stock",
        },
        {
          id: 3,
          image: image1,
          percent: "-11",
          title: "Fresh Brand – Original Unsweetened Almondmilk",
          reviews: "35",
          price: "16",
          oldPrice: "22",
          stock: "In Stock",
        },
        {
          id: 4,
          image: image3,
          percent: "-40",
          title:
            "365 by Whole Foods Market, Bar Fruit Mango, 16 Fl Oz, 4 count",
          reviews: "24",
          price: "149",
          oldPrice: "255",
          stock: "In Stock",
        },
        {
          id: 5,
          image: image5,
          percent: "-10",
          title:
            "Juicy Cool Taste Calamansi - Philippine Lemon Fruit Juice Drink",
          reviews: "76",
          price: "59",
          oldPrice: "65",
          stock: "In Stock",
        },
        {
          id: 6,
          image: image1,
          percent: "-11",
          title: "Fresh Brand – Original Unsweetened Almondmilk",
          reviews: "35",
          price: "16",
          oldPrice: "22",
          stock: "In Stock",
        },
        {
          id: 7,
          image: image2,
          percent: "-15",
          title: "Yupik Nuts Blanched Whole Almonds, 2.2 lb",
          reviews: "18",
          price: "39",
          oldPrice: "45",
          stock: "In Stock",
        },
        {
          id: 8,
          image: image3,
          percent: "-40",
          title:
            "365 by Whole Foods Market, Bar Fruit Mango, 16 Fl Oz, 4 count",
          reviews: "24",
          price: "149",
          oldPrice: "255",
          stock: "In Stock",
        },
        {
          id: 9,
          image: image4,
          percent: "-20",
          title: "Canned Mild Red Chili Beans, Source of Plant Based Protein",
          reviews: "19",
          price: "11",
          oldPrice: "13",
          stock: "In Stock",
        },
        {
          id: 10,
          image: image5,
          percent: "-10",
          title:
            "Juicy Cool Taste Calamansi - Philippine Lemon Fruit Juice Drink",
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

<style lang="scss" scoped>
.single-product-telemobile-item {
  padding: 22px 15px;
}
</style>
