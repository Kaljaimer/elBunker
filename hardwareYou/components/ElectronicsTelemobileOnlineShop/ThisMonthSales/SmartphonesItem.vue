<template>
  <Swiper
    :slides-per-view="5"
    :space-between="-1"
    :centered-slides="false"
    :prevent-clicks="true"
    :loop="true"
    :autoplay="autoplayOptions"
    :navigation="navigationOptions"
    :pagination="paginationOptions"
    :breakpoints="breakpoints"
    :modules="[SwiperEffectFade, SwiperNavigation, SwiperPagination]"
    class="product-slide"
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
            <span>({{ product.reviews }} reviews)</span>
          </div>
          <h3>
            ${{ product.price }} <del>${{ product.oldPrice }}</del>
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
    <div class="product-controller">
      <div class="controller-icon prev">
        <i class="flaticon-chevron"></i>
      </div>
      <div class="controller-icon next">
        <i class="flaticon-chevron"></i>
      </div>
    </div>
    <div class="swiper-pagination-product text-center mt-3 lh-1"></div>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/product-1.png";
import image2 from "~/assets/images/product-6.png";
import image3 from "~/assets/images/product-7.png";
import image4 from "~/assets/images/product-8.png";
import image5 from "~/assets/images/product-9.png";

export default defineComponent({
  name: "SmartphonesItem",
  data() {
    return {
      products: [
        {
          id: 1,
          image: image3,
          percent: "-40",
          title: "GPS Smartwatch with Bright Touchscreen Display",
          reviews: "24",
          price: "119",
          oldPrice: "199",
          sold: "435",
          stock: "180",
          delivery: "Free Delivery",
        },
        {
          id: 2,
          image: image4,
          percent: "-20",
          title: "SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR",
          reviews: "19",
          price: "397",
          oldPrice: "497",
          sold: "35",
          stock: "125",
          delivery: "Free Delivery",
        },
        {
          id: 3,
          image: image5,
          percent: "-10",
          title: "Apple MacBook Pro 16.2' with Liquid Retina XDR Display",
          reviews: "76",
          price: "3,499",
          oldPrice: "3,799",
          sold: "348",
          stock: "245",
          delivery: "Free Delivery",
        },
        {
          id: 4,
          image: image1,
          percent: "-11",
          title: "Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft",
          reviews: "5",
          price: "399",
          oldPrice: "450",
          sold: "620",
          stock: "150",
          delivery: "Free Delivery",
        },
        {
          id: 5,
          image: image1,
          percent: "-11",
          title: "Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft",
          reviews: "5",
          price: "399",
          oldPrice: "450",
          sold: "620",
          stock: "150",
          delivery: "Free Delivery",
        },
        {
          id: 6,
          image: image2,
          percent: "-15",
          title: "Multiplatform Wireless Noise-Cancelling Gaming Headset",
          reviews: "18",
          price: "279",
          oldPrice: "329",
          sold: "20",
          stock: "78",
          delivery: "Free Delivery",
        },
        {
          id: 7,
          image: image2,
          percent: "-15",
          title: "Multiplatform Wireless Noise-Cancelling Gaming Headset",
          reviews: "18",
          price: "279",
          oldPrice: "329",
          sold: "20",
          stock: "78",
          delivery: "Free Delivery",
        },
        {
          id: 8,
          image: image3,
          percent: "-40",
          title: "GPS Smartwatch with Bright Touchscreen Display",
          reviews: "24",
          price: "119",
          oldPrice: "199",
          sold: "435",
          stock: "180",
          delivery: "Free Delivery",
        },
        {
          id: 9,
          image: image4,
          percent: "-20",
          title: "SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR",
          reviews: "19",
          price: "397",
          oldPrice: "497",
          sold: "35",
          stock: "125",
          delivery: "Free Delivery",
        },
        {
          id: 10,
          image: image5,
          percent: "-10",
          title: "Apple MacBook Pro 16.2' with Liquid Retina XDR Display",
          reviews: "76",
          price: "3,499",
          oldPrice: "3,799",
          sold: "348",
          stock: "245",
          delivery: "Free Delivery",
        },
      ],
      autoplayOptions: {
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigationOptions: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      paginationOptions: {
        el: ".swiper-pagination-product",
        clickable: true,
      },
      breakpoints: {
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
      },
    };
  },
});
</script>
