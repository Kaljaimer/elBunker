<template>
  <div class="top-selling-area pb-60">
    <div class="container position-relative">
      <div
        class="d-lg-flex align-items-center justify-content-between text-center mb-27 mt-minus-6"
      >
        <div class="d-lg-flex align-items-center">
          <h3 class="fs-3 mb-0 mb-1 mb-sm-0">Top Selling</h3>
        </div>
        <div>
          <NuxtLink to="/products" class="read-more">
            <span>See All Deals</span>
            <i class="ri-arrow-right-up-line ms-1"></i>
          </NuxtLink>
        </div>
      </div>

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
          nextEl: '.prev',
          prevEl: '.next',
        }"
        :pagination="{
          el: '.swiper-pagination-top-selling',
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
        class="top-selling-slide"
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
                  Free Delivery
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
        <div class="controller-icon prev">
          <i class="flaticon-chevron"></i>
        </div>
        <div class="controller-icon next">
          <i class="flaticon-chevron"></i>
        </div>
      </div>
      <div class="swiper-pagination-top-selling text-center mt-3 lh-1"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/product-40.png";
import image2 from "~/assets/images/product-41.png";
import image3 from "~/assets/images/product-42.png";
import image4 from "~/assets/images/product-43.png";
import image5 from "~/assets/images/product-44.png";

export default defineComponent({
  name: "TopSelling",
  data() {
    return {
      products: [
        {
          id: 1,
          image: image1,
          percent: "-11",
          title: "Organic Pure Unrefined By Muse Celtic Salt Hand Harvested",
          reviews: "5",
          price: "30",
          oldPrice: "49",
          sold: "620",
          stock: "150",
          delivery: "Free Delivery",
        },
        {
          id: 2,
          image: image2,
          percent: "-15",
          title: "Drink Mix Variety Pack Of Aguas Frescas | Mango & Pineapple",
          reviews: "18",
          price: "14",
          oldPrice: "17",
          sold: "20",
          stock: "78",
          delivery: "Free Delivery",
        },
        {
          id: 3,
          image: image3,
          percent: "-40",
          title: "Whole Foods Market, Organic Tomato Basil Pasta Sauce, 25",
          reviews: "24",
          price: "35",
          oldPrice: "39",
          sold: "435",
          stock: "180",
          delivery: "Free Delivery",
        },
        {
          id: 4,
          image: image4,
          percent: "-20",
          title: "Tortuga Caribbean Rum Cake, Key Lime, net weight .32 Ounce",
          reviews: "10",
          price: "29",
          oldPrice: "39",
          sold: "35",
          stock: "125",
          delivery: "Free Delivery",
        },
        {
          id: 5,
          image: image5,
          percent: "-10",
          title: "Fleamart Irish Sea Moss Gel Organic Raw 18.5OZ Natural",
          reviews: "76",
          price: "16",
          oldPrice: "18",
          sold: "348",
          stock: "245",
          delivery: "Free Delivery",
        },
        {
          id: 6,
          image: image1,
          percent: "-11",
          title: "Organic Pure Unrefined By Muse Celtic Salt Hand Harvested",
          reviews: "5",
          price: "30",
          oldPrice: "49",
          sold: "620",
          stock: "150",
          delivery: "Free Delivery",
        },
        {
          id: 7,
          image: image2,
          percent: "-15",
          title: "Drink Mix Variety Pack Of Aguas Frescas | Mango & Pineapple",
          reviews: "18",
          price: "14",
          oldPrice: "17",
          sold: "20",
          stock: "78",
          delivery: "Free Delivery",
        },
        {
          id: 8,
          image: image3,
          percent: "-40",
          title: "Whole Foods Market, Organic Tomato Basil Pasta Sauce, 25",
          reviews: "24",
          price: "35",
          oldPrice: "39",
          sold: "435",
          stock: "180",
          delivery: "Free Delivery",
        },
        {
          id: 9,
          image: image4,
          percent: "-20",
          title: "Tortuga Caribbean Rum Cake, Key Lime, net weight .32 Ounce",
          reviews: "10",
          price: "29",
          oldPrice: "39",
          sold: "35",
          stock: "125",
          delivery: "Free Delivery",
        },
        {
          id: 10,
          image: image5,
          percent: "-10",
          title: "Fleamart Irish Sea Moss Gel Organic Raw 18.5OZ Natural",
          reviews: "76",
          price: "16",
          oldPrice: "18",
          sold: "348",
          stock: "245",
          delivery: "Free Delivery",
        },
      ],
    };
  },
});
</script>
