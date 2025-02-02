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
      nextEl: '.prev4',
      prevEl: '.next4',
    }"
    :pagination="{
      el: '.swiper-pagination-specials',
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
    class="specials-slide"
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
      <div class="controller-icon prev4">
        <i class="flaticon-chevron"></i>
      </div>
      <div class="controller-icon next4">
        <i class="flaticon-chevron"></i>
      </div>
    </div>
    <div class="swiper-pagination-specials text-center mt-3 lh-1"></div>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/product-45.png";
import image2 from "~/assets/images/product-46.png";
import image3 from "~/assets/images/product-47.png";
import image4 from "~/assets/images/product-48.png";
import image5 from "~/assets/images/product-49.png";

export default defineComponent({
  name: "HealthyFatsItem",
  data() {
    return {
      products: [
        {
          id: 1,
          image: image4,
          percent: "-20",
          title: "Food Huggers Avocado Huggers 2pc Silicone Reusable Avocado",
          reviews: "19",
          price: "11",
          oldPrice: "13",
          stock: "In Stock",
        },
        {
          id: 2,
          image: image5,
          percent: "-10",
          title: "Juicy Indian River Florida Navel Oranges Grove Fresh 2 Trays",
          reviews: "76",
          price: "59",
          oldPrice: "65",
          stock: "In Stock",
        },
        {
          id: 3,
          image: image1,
          percent: "-11",
          title: "Organic Fruits and Veggies Supplement - Support Diet",
          reviews: "35",
          price: "16",
          oldPrice: "22",
          stock: "In Stock",
        },
        {
          id: 4,
          image: image2,
          percent: "-15",
          title: "Better Oats Organic Old Fashioned Oats, 16 OZ Tub",
          reviews: "18",
          price: "39",
          oldPrice: "45",
          stock: "In Stock",
        },
        {
          id: 5,
          image: image1,
          percent: "-11",
          title: "Organic Fruits and Veggies Supplement - Support Diet",
          reviews: "35",
          price: "16",
          oldPrice: "22",
          stock: "In Stock",
        },
        {
          id: 6,
          image: image2,
          percent: "-15",
          title: "Better Oats Organic Old Fashioned Oats, 16 OZ Tub",
          reviews: "18",
          price: "39",
          oldPrice: "45",
          stock: "In Stock",
        },
        {
          id: 7,
          image: image3,
          percent: "-40",
          title:
            "Just Bare Natural Fresh Chicken Tenders | No Antibiotics Ever",
          reviews: "24",
          price: "149",
          oldPrice: "255",
          stock: "In Stock",
        },
        {
          id: 8,
          image: image3,
          percent: "-40",
          title:
            "Just Bare Natural Fresh Chicken Tenders | No Antibiotics Ever",
          reviews: "24",
          price: "149",
          oldPrice: "255",
          stock: "In Stock",
        },
        {
          id: 9,
          image: image4,
          percent: "-20",
          title: "Food Huggers Avocado Huggers 2pc Silicone Reusable Avocado",
          reviews: "19",
          price: "11",
          oldPrice: "13",
          stock: "In Stock",
        },
        {
          id: 10,
          image: image5,
          percent: "-10",
          title: "Juicy Indian River Florida Navel Oranges Grove Fresh 2 Trays",
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
