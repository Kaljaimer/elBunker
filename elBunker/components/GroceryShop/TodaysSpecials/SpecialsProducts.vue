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
          <NuxtLink to="/product-details-grocery" class="d-block">
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
          <NuxtLink to="/product-details-grocery" class="title">
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

import image1 from "~/assets/images/product-25.png";
import image2 from "~/assets/images/product-26.png";
import image3 from "~/assets/images/product-27.png";
import image4 from "~/assets/images/product-28.png";
import image5 from "~/assets/images/product-29.png";

export default defineComponent({
  name: "FlashSaleProducts",
  data() {
    return {
      products: [
        {
          id: 1,
          image: image1,
          percent: "-11",
          title: "Organic Sunflower Seed Oil (16oz) USDA Certified 100% Pure",
          reviews: "10",
          price: "19",
          oldPrice: "25",
          stock: "In Stock",
        },
        {
          id: 2,
          image: image2,
          percent: "-15",
          title: "365 by Whole Foods Market, Organic Lemon Juice, 10 Fl Oz",
          reviews: "18",
          price: "10",
          oldPrice: "12",
          stock: "In Stock",
        },
        {
          id: 3,
          image: image3,
          percent: "-40",
          title: "Oroweat Whole Grains Healthy Multi Grain Bread",
          reviews: "18",
          price: "7",
          oldPrice: "10",
          stock: "In Stock",
        },
        {
          id: 4,
          image: image4,
          percent: "-20",
          title:
            "Green Giant Whole Golden Corn Niblets, 7 Ounce Can (Pack of 12)",
          reviews: "19",
          price: "13",
          oldPrice: "15",
          stock: "In Stock",
        },
        {
          id: 5,
          image: image5,
          percent: "-10",
          title: "365 by Whole Foods Market, Organic Trimmed Green Beans",
          reviews: "76",
          price: "22",
          oldPrice: "35",
          stock: "In Stock",
        },
        {
          id: 6,
          image: image1,
          percent: "-11",
          title: "Organic Sunflower Seed Oil (16oz) USDA Certified 100% Pure",
          reviews: "10",
          price: "19",
          oldPrice: "25",
          stock: "In Stock",
        },
        {
          id: 7,
          image: image2,
          percent: "-15",
          title: "365 by Whole Foods Market, Organic Lemon Juice, 10 Fl Oz",
          reviews: "18",
          price: "10",
          oldPrice: "12",
          stock: "In Stock",
        },
        {
          id: 8,
          image: image3,
          percent: "-40",
          title: "Oroweat Whole Grains Healthy Multi Grain Bread",
          reviews: "18",
          price: "7",
          oldPrice: "10",
          stock: "In Stock",
        },
        {
          id: 9,
          image: image4,
          percent: "-20",
          title:
            "Green Giant Whole Golden Corn Niblets, 7 Ounce Can (Pack of 12)",
          reviews: "19",
          price: "13",
          oldPrice: "15",
          stock: "In Stock",
        },
        {
          id: 10,
          image: image5,
          percent: "-10",
          title: "365 by Whole Foods Market, Organic Trimmed Green Beans",
          reviews: "76",
          price: "22",
          oldPrice: "35",
          stock: "In Stock",
        },
      ],
    };
  },
});
</script>
