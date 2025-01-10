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
      nextEl: '.prev7',
      prevEl: '.next7',
    }"
    :pagination="{
      el: '.swiper-pagination-flash-products',
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
    class="flash-products-slide"
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
            <span class="minus-count" v-if="product.percent">
              {{ product.percent }}%
            </span>
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
          <h3>
            ${{ product.price }}
            <del v-if="product.oldPrice">${{ product.oldPrice }}</del>
          </h3>
          <div class="d-flex sold-stock gap-4 align-items-center">
            <span class="sold">{{ product.sold }} Sold</span>
            <span class="stock">
              <i class="ri-check-line"></i>
              {{ product.stock }} In Stock
            </span>
          </div>
          <div
            class="d-flex align-items-center justify-content-between delivery-cart gap-4"
          >
            <span class="delivery">
              <i class="ri-truck-line"></i>
              {{ product.delivery }}
            </span>
            <button class="cart-btn">
              <i class="ri-shopping-cart-line"></i>
              <v-tooltip activator="parent" location="top">
                Add To Cart
              </v-tooltip>
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <div class="product-controller">
    <div class="controller-icon prev7">
      <i class="flaticon-chevron"></i>
    </div>
    <div class="controller-icon next7">
      <i class="flaticon-chevron"></i>
    </div>
  </div>
  <div class="swiper-pagination-flash-products text-center mt-3 lh-1"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/product-20.png";
import image2 from "~/assets/images/product-21.png";
import image3 from "~/assets/images/product-22.png";
import image4 from "~/assets/images/product-23.png";
import image5 from "~/assets/images/product-24.png";

export default defineComponent({
  name: "FlashSaleProducts",
  data() {
    return {
      products: [
        {
          id: 1,
          image: image1,
          percent: "",
          tag: "New",
          title: "15 Pro Max 5G Unlocked Smartphone,6GB+256GB",
          reviews: "45",
          price: "999",
          oldPrice: "",
          sold: "120",
          stock: "150",
          delivery: "Free Delivery",
        },
        {
          id: 2,
          image: image2,
          percent: "-15",
          tag: "",
          title: "Wireless Bluetooth Over Ear Headphones, Noise Cancelling",
          reviews: "68",
          price: "69",
          oldPrice: "99",
          sold: "345",
          stock: "89",
          delivery: "Free Delivery",
        },
        {
          id: 3,
          image: image3,
          percent: "-40",
          tag: "",
          title: "Smart Watch (Answer/Make Calls), 1.85' Smart Watches",
          reviews: "24",
          price: "25",
          oldPrice: "89",
          sold: "135",
          stock: "80",
          delivery: "Free Delivery",
        },
        {
          id: 4,
          image: image4,
          percent: "-20",
          tag: "",
          title: "32 inch D-Series HD 720p Smart TV with Apple AirPlay",
          reviews: "19",
          price: "128",
          oldPrice: "159",
          sold: "48",
          stock: "80",
          delivery: "Free Delivery",
        },
        {
          id: 5,
          image: image5,
          percent: "-10",
          tag: "",
          title: "14 Pro Max 5G Unlocked Smartphone - 6GB+256GB",
          reviews: "76",
          price: "799",
          oldPrice: "849",
          sold: "1560",
          stock: "235",
          delivery: "Free Delivery",
        },
        {
          id: 6,
          image: image1,
          percent: "",
          tag: "New",
          title: "15 Pro Max 5G Unlocked Smartphone,6GB+256GB",
          reviews: "45",
          price: "999",
          oldPrice: "",
          sold: "120",
          stock: "150",
          delivery: "Free Delivery",
        },
        {
          id: 7,
          image: image2,
          percent: "-15",
          tag: "",
          title: "Wireless Bluetooth Over Ear Headphones, Noise Cancelling",
          reviews: "68",
          price: "69",
          oldPrice: "99",
          sold: "345",
          stock: "89",
          delivery: "Free Delivery",
        },
        {
          id: 8,
          image: image3,
          percent: "-40",
          tag: "",
          title: "Smart Watch (Answer/Make Calls), 1.85' Smart Watches",
          reviews: "24",
          price: "25",
          oldPrice: "89",
          sold: "135",
          stock: "80",
          delivery: "Free Delivery",
        },
        {
          id: 9,
          image: image4,
          percent: "-20",
          tag: "",
          title: "32 inch D-Series HD 720p Smart TV with Apple AirPlay",
          reviews: "19",
          price: "128",
          oldPrice: "159",
          sold: "48",
          stock: "80",
          delivery: "Free Delivery",
        },
        {
          id: 10,
          image: image5,
          percent: "-10",
          tag: "",
          title: "14 Pro Max 5G Unlocked Smartphone - 6GB+256GB",
          reviews: "76",
          price: "799",
          oldPrice: "849",
          sold: "1560",
          stock: "235",
          delivery: "Free Delivery",
        },
      ],
    };
  },
});
</script>
