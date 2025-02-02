<template>
  <div class="product-details-area products-page pt-30 pb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="img1">
                <div class="product-details-img">
                  <img src="~/assets/images/product-66.png" alt="product" />
                </div>
              </v-tabs-window-item>
              <v-tabs-window-item value="img2">
                <div class="product-details-img">
                  <img src="~/assets/images/product-67.png" alt="product" />
                </div>
              </v-tabs-window-item>
              <v-tabs-window-item value="img3">
                <div class="product-details-img">
                  <img src="~/assets/images/product-68.png" alt="product" />
                </div>
              </v-tabs-window-item>
              <span class="discounts">-10%</span>
            </v-tabs-window>
          </v-card-text>

          <v-tabs
            v-model="tab"
            bg-color="white"
            class="products-tabs justify-content-center"
          >
            <v-tab value="img1">
              <img src="~/assets/images/product-66.png" alt="product" />
            </v-tab>
            <v-tab value="img2">
              <img src="~/assets/images/product-67.png" alt="product" />
            </v-tab>
            <v-tab value="img3">
              <img src="~/assets/images/product-68.png" alt="product" />
            </v-tab>
          </v-tabs>
        </div>
        <div class="col-lg-6">
          <div class="product-details-content">
            <span class="stock">
              <i class="ri-check-line"></i>
              In Stock
            </span>
            <h3>
              Apple MacBook Pro 16.2" with Liquid Retina XDR Display, M2 Max
              Chip with 12-Core CPU
            </h3>
            <div class="d-flex gap-1 review">
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <span>(5 Reviews)</span>
            </div>
            <h2 class="price">$399 <del>$450</del></h2>
            <div class="d-flex style-select">
              <span>Style:</span>
              <h5>{{ typeText }}</h5>
            </div>
            <div class="select-style mb-4">
              <input type="radio" class="btn-check" />
              <label
                class="btn mb-2 mb-sm-0 mr-1"
                @click="setTypeTextToFirst"
                :class="{ active: typeActiveButton === 'first' }"
              >
                Apple M1 Max Chip
              </label>
              <input type="radio" class="btn-check" />
              <label
                class="btn mb-2 mb-sm-0"
                @click="setTypeTextToSecond"
                :class="{ active: typeActiveButton === 'second' }"
              >
                Apple M1 Pro Chip
              </label>
            </div>
            <div class="d-flex style-select">
              <span>Capacity:</span>
              <h5>{{ capacityText }}</h5>
            </div>
            <div class="select-style mb-4">
              <input type="radio" class="btn-check" />
              <label
                class="btn mb-2 mb-sm-0 mr-1"
                @click="setCapacityTextToFirst"
                :class="{ active: capacityActiveButton === 'first' }"
              >
                512 GB
              </label>

              <input type="radio" class="btn-check" />
              <label
                class="btn mb-2 mb-sm-0"
                @click="setCapacityTextToSecond"
                :class="{ active: capacityActiveButton === 'second' }"
              >
                1 TB
              </label>
            </div>
            <div class="d-flex style-select">
              <span>Color:</span>
              <h5>{{ colorText }}</h5>
            </div>
            <ul class="d-flex ps-0 mb-0 list-unstyled select-color gap-2 mb-4">
              <li
                class="color1"
                @click="setColorTextToFirst"
                :class="{ active: colorActiveButton === 'first' }"
              ></li>
              <li
                class="color2"
                @click="setColorTextToSecond"
                :class="{ active: colorActiveButton === 'second' }"
              ></li>
            </ul>
            <div class="d-flex align-items-center mb-4 gap-3">
              <ProductDetailsProductQuantity />
              <button class="btn btn-success text-white rounded-pill">
                <i class="ri-shopping-cart-line"></i>
                <span>Add To Cart</span>
              </button>
            </div>
            <button class="d-flex align-items-center gap-3 wishlist mb-3">
              <i class="ri-heart-line"></i>
              <span>Add to wishlist</span>
            </button>
            <button class="d-flex align-items-center gap-3 wishlist">
              <i class="ri-eye-line"></i>
              <span><span>565 people</span> are viewing the products</span>
            </button>
            <ul class="services-list ps-0 mb-0 list-unstyled">
              <li class="d-flex align-items-center">
                <i class="ri-check-line"></i>
                <span>Free delivery today</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="ri-check-line"></i>
                <span>100% money back Guarantee</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="ri-check-line"></i>
                <span>7 days product return policy</span>
              </li>
            </ul>
            <ul class="sku-list ps-0 mb-0 list-unstyled">
              <li class="d-flex align-items-center">
                <span class="title">SKU:</span>
                <span class="title2">SMTGS6T45</span>
              </li>
              <li class="d-flex align-items-center">
                <span class="title">Category:</span>
                <span class="title2">Computer</span>
              </li>
              <li class="d-flex align-items-center">
                <span class="title">Tags:</span>
                <span class="title2">laptop, macbook, PC</span>
              </li>
            </ul>
            <ul
              class="social-link ps-0 mb-0 list-unstyled d-flex gap-2 flex-wrap"
            >
              <li class="d-flex align-items-center me-2">
                <span>Share:</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://facebook.com/" target="_blank">
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://twitter.com/" target="_blank">
                  <i class="ri-twitter-x-line"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://linkedin.com/" target="_blank">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://whatsapp.com/" target="_blank">
                  <i class="ri-whatsapp-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="pt-60"></div>

      <ProductDetailsTab />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProductDetails",
  data: () => ({
    tab: null,
  }),
  setup() {
    const typeText = ref("Apple M1 Max Chip");
    const typeActiveButton = ref("first");

    const setTypeTextToFirst = () => {
      typeText.value = "Apple M1 Max Chip";
      typeActiveButton.value = "first";
    };

    const setTypeTextToSecond = () => {
      typeText.value = "Apple M1 Pro Chip";
      typeActiveButton.value = "second";
    };

    const capacityText = ref("512 GB");
    const capacityActiveButton = ref("first");

    const setCapacityTextToFirst = () => {
      capacityText.value = "512 GB";
      capacityActiveButton.value = "first";
    };

    const setCapacityTextToSecond = () => {
      capacityText.value = "1 TB";
      capacityActiveButton.value = "second";
    };

    const colorText = ref("Silver");
    const colorActiveButton = ref("first");

    const setColorTextToFirst = () => {
      colorText.value = "Silver";
      colorActiveButton.value = "first";
    };

    const setColorTextToSecond = () => {
      colorText.value = "Gray";
      colorActiveButton.value = "second";
    };

    return {
      typeText,
      typeActiveButton,
      setTypeTextToFirst,
      setTypeTextToSecond,
      capacityText,
      capacityActiveButton,
      setCapacityTextToFirst,
      setCapacityTextToSecond,
      colorText,
      colorActiveButton,
      setColorTextToFirst,
      setColorTextToSecond,
    };
  },
});
</script>
