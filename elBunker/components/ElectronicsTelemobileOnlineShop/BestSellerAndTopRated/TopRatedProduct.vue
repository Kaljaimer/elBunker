<template>
  <Swiper
    :slidesPerView="2"
    :spaceBetween="24"
    :centeredSlides="false"
    :preventClicks="true"
    :loop="true"
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
      el: '.swiper-pagination-best-product',
      clickable: true,
    }"
    :breakpoints="{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 2,
      },
    }"
    :modules="[SwiperEffectFade, SwiperNavigation, SwiperPagination]"
    class="best-product-slide"
  >
    <SwiperSlide v-for="product in products" :key="product.id">
      <div class="single-product-telemobile-item px-46">
        <div class="product-img position-relative">
          <NuxtLink to="/product-details" class="d-block">
            <img :src="product.image" alt="product" />
          </NuxtLink>
          <div
            class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
          >
            <span class="minus-count" v-if="product.percent"
              >{{ product.percent }}%</span
            >
            <span
              class="minus-count bg-successdiv text-white"
              v-if="product.tag"
            >
              {{ product.tag }}
            </span>
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
          <h3 class="mb-0">
            ${{ product.price }}
            <del v-if="product.oldPrice">${{ product.oldPrice }}</del>
          </h3>
          <div class="d-flex justify-content-between align-items-end">
            <div class="sold-stock mb-0">
              <span class="stock">
                <i class="ri-check-line"></i>
                {{ product.stock }} In Stock
              </span>
            </div>
            <div class="delivery-cart mb-0">
              <button class="cart-btn">
                <i class="ri-shopping-cart-line"></i>
                <v-tooltip activator="parent" location="top">
                  Add To Cart
                </v-tooltip>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <div class="product-controller best">
      <div class="controller-icon prev">
        <i class="flaticon-chevron"></i>
      </div>
      <div class="controller-icon next">
        <i class="flaticon-chevron"></i>
      </div>
    </div>
    <div class="swiper-pagination-best-product text-center mt-4 lh-1"></div>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/product-18.png";
import image2 from "~/assets/images/product-19.png";

export default defineComponent({
  name: "TopRatedProduct",
  data() {
    return {
      products: [
        {
          id: 1,
          image: image1,
          percent: "-40",
          tag: "",
          title: "Portable Bluetooth Speakers, IPX7 Waterproof Wireless",
          reviews: "24",
          price: "37",
          oldPrice: "40",
          stock: "220",
        },
        {
          id: 2,
          image: image2,
          percent: "",
          tag: "Sell",
          title: "Apple iPad Air (5th Generation): with M1 chip, 10.9-inch",
          reviews: "19",
          price: "597",
          oldPrice: "",
          stock: "78",
        },
        {
          id: 3,
          image: image1,
          percent: "-40",
          tag: "",
          title: "Portable Bluetooth Speakers, IPX7 Waterproof Wireless",
          reviews: "24",
          price: "37",
          oldPrice: "40",
          stock: "220",
        },
        {
          id: 4,
          image: image2,
          percent: "",
          tag: "Sell",
          title: "Apple iPad Air (5th Generation): with M1 chip, 10.9-inch",
          reviews: "19",
          price: "597",
          oldPrice: "",
          stock: "78",
        },
      ],
    };
  },
});
</script>
