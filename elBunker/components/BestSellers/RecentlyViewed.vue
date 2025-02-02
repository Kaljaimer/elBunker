<template>
  <div class="recently-viewed-area pb-60 products-page">
    <div class="container position-relative">
      <div
        class="d-lg-flex align-items-center justify-content-between text-center mb-27 mt-minus-6 border-top pt-4"
      >
        <h3 class="fs-3 mb-0 mb-1 mb-sm-0">Recently Viewed</h3>
        <div>
          <NuxtLink to="/products" class="read-more">
            <span>See All Deals</span>
            <i class="ri-arrow-right-up-line ms-1"></i>
          </NuxtLink>
        </div>
      </div>
      <div class="row justify-content-center g-0">
        <div class="col-c-20">
          <div class="single-product-telemobile-item">
            <div class="product-img position-relative">
              <NuxtLink to="/product-details" class="d-block">
                <img src="~/assets/images/product-1.png" alt="product" />
              </NuxtLink>
              <div
                class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
              >
                <span class="minus-count">-11%</span>
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
                Microwave Oven With LED Lighting - 700 Watts, 0.7 cu ft
              </NuxtLink>
              <div class="d-flex gap-1 review">
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <span>(5 Reviews)</span>
              </div>
              <h3>$399 <del>$450</del></h3>
              <div class="d-flex sold-stock gap-4 align-items-center">
                <span class="sold">620 Sold</span>
                <span class="stock">
                  <i class="ri-check-line"></i> 150 In Stock
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
        </div>
        <div class="col-c-20">
          <div class="single-product-telemobile-item">
            <div class="product-img position-relative">
              <NuxtLink to="/product-details" class="d-block">
                <img src="~/assets/images/product-6.png" alt="product" />
              </NuxtLink>
              <div
                class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
              >
                <span class="minus-count">-15%</span>
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
                Multiplatform Wireless Noise-Cancelling Gaming Headset
              </NuxtLink>
              <div class="d-flex gap-1 review">
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <span>(18 Reviews)</span>
              </div>
              <h3>$279 <del>$329</del></h3>
              <div class="d-flex sold-stock gap-4 align-items-center">
                <span class="sold">20 Sold</span>
                <span class="stock">
                  <i class="ri-check-line"></i>
                  78 In Stock
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
        </div>
        <div class="col-c-20">
          <div class="single-product-telemobile-item">
            <div class="product-img position-relative">
              <NuxtLink to="/product-details" class="d-block">
                <img src="~/assets/images/product-7.png" alt="product" />
              </NuxtLink>
              <div
                class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
              >
                <span class="minus-count">-40%</span>
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
                GPS Smartwatch with Bright Touchscreen Display
              </NuxtLink>
              <div class="d-flex gap-1 review">
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <span>(24 Reviews)</span>
              </div>
              <h3>$119 <del>$199</del></h3>
              <div class="d-flex sold-stock gap-4 align-items-center">
                <span class="sold">435 Sold</span>
                <span class="stock">
                  <i class="ri-check-line"></i>
                  180 In Stock
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
        </div>
        <div class="col-c-20">
          <div class="single-product-telemobile-item">
            <div class="product-img position-relative">
              <NuxtLink to="/product-details" class="d-block">
                <img src="~/assets/images/product-8.png" alt="product" />
              </NuxtLink>
              <div
                class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
              >
                <span class="minus-count">-20%</span>
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
                SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR
              </NuxtLink>
              <div class="d-flex gap-1 review">
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <span>(19 Reviews)</span>
              </div>
              <h3>$397 <del>$497</del></h3>
              <div class="d-flex sold-stock gap-4 align-items-center">
                <span class="sold">35 Sold</span>
                <span class="stock">
                  <i class="ri-check-line"></i>
                  125 In Stock
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
        </div>
        <div class="col-c-20">
          <div class="single-product-telemobile-item">
            <div class="product-img position-relative">
              <NuxtLink to="/product-details" class="d-block">
                <img src="~/assets/images/product-9.png" alt="product" />
              </NuxtLink>
              <div
                class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
              >
                <span class="minus-count">-10%</span>
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
                Apple MacBook Pro 16.2" with Liquid Retina XDR Display
              </NuxtLink>
              <div class="d-flex gap-1 review">
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <span>(76 Reviews)</span>
              </div>
              <h3>$3,499 <del>$3,799</del></h3>
              <div class="d-flex sold-stock gap-4 align-items-center">
                <span class="sold">348 Sold</span>
                <span class="stock">
                  <i class="ri-check-line"></i>
                  245 In Stock
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentlyViewed",
};
</script>
