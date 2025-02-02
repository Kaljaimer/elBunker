<template>
  <div class="products-area products-page ptb-60">
    <div class="container">
      <div class="d-md-flex justify-content-between align-content-center mb-4">
        <span>Showing all 12 Items</span>
        <div class="d-md-flex align-items-center mt-2 mt-md-0">
          <ul
            class="d-sm-flex align-items-center ps-0 mb-0 list-unstyled fillter-show"
          >
            <li>
              <div class="row g-3 align-items-center">
                <div class="col-auto pe-0">
                  <label class="col-form-label">Short:</label>
                </div>
                <div class="col-auto">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>By Latest</option>
                    <option value="1">Recent</option>
                  </select>
                </div>
              </div>
            </li>
            <li>
              <div class="row g-3 align-items-center">
                <div class="col-auto pe-0">
                  <label class="col-form-label">Show:</label>
                </div>
                <div class="col-auto">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>12 Items</option>
                    <option value="1">15 Items</option>
                  </select>
                </div>
              </div>
            </li>
          </ul>

          <v-tabs v-model="tab" bg-color="white" class="grid-list-tabs">
            <v-tab value="grid">
              <i class="ri-layout-grid-line"></i>
            </v-tab>
            <v-tab value="list">
              <i class="ri-list-unordered"></i>
            </v-tab>
          </v-tabs>
        </div>
      </div>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="grid">
            <v-row no-gutters class="justify-content-center g-0">
              <v-col cols="12" lg="3" sm="6">
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
              </v-col>
              <v-col cols="12" lg="3" sm="6">
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
              </v-col>
              <v-col cols="12" lg="3" sm="6">
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
              </v-col>
              <v-col cols="12" lg="3" sm="6">
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
              </v-col>
              <v-col cols="12" lg="3" sm="6">
                <div class="single-product-telemobile-item">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-20.png" alt="product" />
                    </NuxtLink>
                    <div
                      class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
                    >
                      <span class="minus-count bg-successdiv text-white">
                        New
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
                      15 Pro Max 5G Unlocked Smartphone,6GB+256GB
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(45 Reviews)</span>
                    </div>
                    <h3>$999</h3>
                    <div class="d-flex sold-stock gap-4 align-items-center">
                      <span class="sold">120 Sold</span>
                      <span class="stock">
                        <i class="ri-check-line"></i>
                        150 In Stock
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
              </v-col>
              <v-col cols="12" lg="3" sm="6">
                <div class="single-product-telemobile-item">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-21.png" alt="product" />
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
                      Wireless Bluetooth Over Ear Headphones, Noise Cancelling
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(68 Reviews)</span>
                    </div>
                    <h3>$69 <del>$99</del></h3>
                    <div class="d-flex sold-stock gap-4 align-items-center">
                      <span class="sold">345 Sold</span>
                      <span class="stock">
                        <i class="ri-check-line"></i>
                        89 In Stock
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
              </v-col>
              <v-col cols="12" lg="3" sm="6">
                <div class="single-product-telemobile-item">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-22.png" alt="product" />
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
                      Smart Watch (Answer/Make Calls), 1.85" Smart Watches
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(24 Reviews)</span>
                    </div>
                    <h3>$25 <del>$89</del></h3>
                    <div class="d-flex sold-stock gap-4 align-items-center">
                      <span class="sold">135 Sold</span>
                      <span class="stock">
                        <i class="ri-check-line"></i>
                        80 In Stock
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
              </v-col>
              <v-col cols="12" lg="3" sm="6">
                <div class="single-product-telemobile-item">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-23.png" alt="product" />
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
                      32 inch D-Series HD 720p Smart TV with Apple AirPlay
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(19 Reviews)</span>
                    </div>
                    <h3>$128 <del>$159</del></h3>
                    <div class="d-flex sold-stock gap-4 align-items-center">
                      <span class="sold">48 Sold</span>
                      <span class="stock">
                        <i class="ri-check-line"></i>
                        80 In Stock
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
              </v-col>
              <v-col cols="12" lg="3" sm="6">
                <div class="single-product-telemobile-item">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-14.png" alt="product" />
                    </NuxtLink>
                    <div
                      class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
                    >
                      <span class="minus-count bg-successdiv text-white"
                        >New</span
                      >
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
                    <NuxtLink to="/product-details" class="title"
                      >Mini Drone for Beginners, SYMA Portable Indoor
                      Quadcopter</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(19 Reviews)</span>
                    </div>
                    <h3>$31 <del>$45</del></h3>
                    <div class="d-flex sold-stock gap-4 align-items-center">
                      <span class="sold">120 Sold</span>
                      <span class="stock"
                        ><i class="ri-check-line"></i> 245 In Stock</span
                      >
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                    >
                      <span class="delivery"
                        ><i class="ri-truck-line"></i> Free Delivery</span
                      >
                      <button class="cart-btn">
                        <i class="ri-shopping-cart-line"></i>
                        <v-tooltip activator="parent" location="top">
                          Add To Cart
                        </v-tooltip>
                      </button>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="3" sm="6">
                <div class="single-product-telemobile-item">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-15.png" alt="product" />
                    </NuxtLink>
                    <div
                      class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
                    >
                      <span class="minus-count bg-successdiv text-white"
                        >New</span
                      >
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
                    <NuxtLink to="/product-details" class="title"
                      >5K Digital Camera, WiFi Vlogging with 32G SD
                      Card</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(76 Reviews)</span>
                    </div>
                    <h3>$129</h3>
                    <div class="d-flex sold-stock gap-4 align-items-center">
                      <span class="sold">70 Sold</span>
                      <span class="stock"
                        ><i class="ri-check-line"></i> 130 In Stock</span
                      >
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                    >
                      <span class="delivery"
                        ><i class="ri-truck-line"></i> Free Delivery</span
                      >
                      <button class="cart-btn">
                        <i class="ri-shopping-cart-line"></i>
                        <v-tooltip activator="parent" location="top">
                          Add To Cart
                        </v-tooltip>
                      </button>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="3" sm="6">
                <div class="single-product-telemobile-item">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-10.png" alt="product" />
                    </NuxtLink>
                    <div
                      class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
                    >
                      <span class="minus-count bg-successdiv text-white"
                        >New</span
                      >
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
                    <NuxtLink to="/product-details" class="title"
                      >Wireless Bluetooth Over Ear Headphones, with
                      Active</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(24 Reviews)</span>
                    </div>
                    <h3>$69 <del>$99</del></h3>
                    <div class="d-flex sold-stock gap-4 align-items-center">
                      <span class="sold">435 Sold</span>
                      <span class="stock"
                        ><i class="ri-check-line"></i> 180 In Stock</span
                      >
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                    >
                      <span class="delivery"
                        ><i class="ri-truck-line"></i> Free Delivery</span
                      >
                      <button class="cart-btn">
                        <i class="ri-shopping-cart-line"></i>
                        <v-tooltip activator="parent" location="top">
                          Add To Cart
                        </v-tooltip>
                      </button>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="3" sm="6">
                <div class="single-product-telemobile-item">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-24.png" alt="product" />
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
                    <NuxtLink to="/product-details" class="title"
                      >14 Pro Max 5G Unlocked Smartphone - 6GB+256GB</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(76 Reviews)</span>
                    </div>
                    <h3>$799 <del>$849</del></h3>
                    <div class="d-flex sold-stock gap-4 align-items-center">
                      <span class="sold">1560 Sold</span>
                      <span class="stock"
                        ><i class="ri-check-line"></i> 235 In Stock</span
                      >
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                    >
                      <span class="delivery"
                        ><i class="ri-truck-line"></i> Free Delivery</span
                      >
                      <button class="cart-btn">
                        <i class="ri-shopping-cart-line"></i>
                        <v-tooltip activator="parent" location="top">
                          Add To Cart
                        </v-tooltip>
                      </button>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="12">
                <div class="pagination-area text-center mt-4">
                  <a href="#" class="next page-numbers">
                    <i class="ri-arrow-left-s-line"></i>
                  </a>

                  <span class="page-numbers current" aria-current="page">
                    1
                  </span>
                  <a href="#" class="page-numbers">2</a>
                  <a href="#" class="page-numbers">3</a>

                  <a href="#" class="next page-numbers">
                    <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </v-col>
            </v-row>
          </v-tabs-window-item>
          <v-tabs-window-item value="list">
            <v-row no-gutters class="justify-content-center g-0">
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-6.png"
                          alt="product"
                        />
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
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-7.png"
                          alt="product"
                        />
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
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >GPS Smartwatch with Bright Touchscreen
                        Display</NuxtLink
                      >
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
                        <span class="stock"
                          ><i class="ri-check-line"></i> 180 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-8.png"
                          alt="product"
                        />
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
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum
                        HDR</NuxtLink
                      >
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
                        <span class="stock"
                          ><i class="ri-check-line"></i> 125 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-9.png"
                          alt="product"
                        />
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
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >Apple MacBook Pro 16.2" with Liquid Retina XDR
                        Display</NuxtLink
                      >
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
                        <span class="stock"
                          ><i class="ri-check-line"></i> 245 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-20.png"
                          alt="product"
                        />
                      </NuxtLink>
                      <div
                        class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
                      >
                        <span class="minus-count bg-successdiv text-white"
                          >New</span
                        >
                        <button class="border-0 wish-btn">
                          <i class="ri-heart-line"></i>
                          <i class="ri-heart-fill d-none"></i>
                          <v-tooltip activator="parent" location="top">
                            Favorite
                          </v-tooltip>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >15 Pro Max 5G Unlocked Smartphone,6GB+256GB</NuxtLink
                      >
                      <div class="d-flex gap-1 review">
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <span>(45 Reviews)</span>
                      </div>
                      <h3>$999</h3>
                      <div class="d-flex sold-stock gap-4 align-items-center">
                        <span class="sold">120 Sold</span>
                        <span class="stock"
                          ><i class="ri-check-line"></i> 150 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-21.png"
                          alt="product"
                        />
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
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >Wireless Bluetooth Over Ear Headphones, Noise
                        Cancelling</NuxtLink
                      >
                      <div class="d-flex gap-1 review">
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <span>(68 Reviews)</span>
                      </div>
                      <h3>$69 <del>$99</del></h3>
                      <div class="d-flex sold-stock gap-4 align-items-center">
                        <span class="sold">345 Sold</span>
                        <span class="stock"
                          ><i class="ri-check-line"></i> 89 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-22.png"
                          alt="product"
                        />
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
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >Smart Watch (Answer/Make Calls), 1.85" Smart
                        Watches</NuxtLink
                      >
                      <div class="d-flex gap-1 review">
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <span>(24 Reviews)</span>
                      </div>
                      <h3>$25 <del>$89</del></h3>
                      <div class="d-flex sold-stock gap-4 align-items-center">
                        <span class="sold">135 Sold</span>
                        <span class="stock"
                          ><i class="ri-check-line"></i> 80 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-23.png"
                          alt="product"
                        />
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
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >32 inch D-Series HD 720p Smart TV with Apple
                        AirPlay</NuxtLink
                      >
                      <div class="d-flex gap-1 review">
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <span>(19 Reviews)</span>
                      </div>
                      <h3>$128 <del>$159</del></h3>
                      <div class="d-flex sold-stock gap-4 align-items-center">
                        <span class="sold">48 Sold</span>
                        <span class="stock"
                          ><i class="ri-check-line"></i> 80 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-14.png"
                          alt="product"
                        />
                      </NuxtLink>
                      <div
                        class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
                      >
                        <span class="minus-count bg-successdiv text-white"
                          >New</span
                        >
                        <button class="border-0 wish-btn">
                          <i class="ri-heart-line"></i>
                          <i class="ri-heart-fill d-none"></i>
                          <v-tooltip activator="parent" location="top">
                            Favorite
                          </v-tooltip>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >Mini Drone for Beginners, SYMA Portable Indoor
                        Quadcopter</NuxtLink
                      >
                      <div class="d-flex gap-1 review">
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <span>(19 Reviews)</span>
                      </div>
                      <h3>$31 <del>$45</del></h3>
                      <div class="d-flex sold-stock gap-4 align-items-center">
                        <span class="sold">120 Sold</span>
                        <span class="stock"
                          ><i class="ri-check-line"></i> 245 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-15.png"
                          alt="product"
                        />
                      </NuxtLink>
                      <div
                        class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
                      >
                        <span class="minus-count bg-successdiv text-white"
                          >New</span
                        >
                        <button class="border-0 wish-btn">
                          <i class="ri-heart-line"></i>
                          <i class="ri-heart-fill d-none"></i>
                          <v-tooltip activator="parent" location="top">
                            Favorite
                          </v-tooltip>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >5K Digital Camera, WiFi Vlogging with 32G SD
                        Card</NuxtLink
                      >
                      <div class="d-flex gap-1 review">
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <span>(76 Reviews)</span>
                      </div>
                      <h3>$129</h3>
                      <div class="d-flex sold-stock gap-4 align-items-center">
                        <span class="sold">70 Sold</span>
                        <span class="stock"
                          ><i class="ri-check-line"></i> 130 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-10.png"
                          alt="product"
                        />
                      </NuxtLink>
                      <div
                        class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0"
                      >
                        <span class="minus-count bg-successdiv text-white"
                          >New</span
                        >
                        <button class="border-0 wish-btn">
                          <i class="ri-heart-line"></i>
                          <i class="ri-heart-fill d-none"></i>
                          <v-tooltip activator="parent" location="top">
                            Favorite
                          </v-tooltip>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >Wireless Bluetooth Over Ear Headphones, with
                        Active</NuxtLink
                      >
                      <div class="d-flex gap-1 review">
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <span>(24 Reviews)</span>
                      </div>
                      <h3>$69 <del>$99</del></h3>
                      <div class="d-flex sold-stock gap-4 align-items-center">
                        <span class="sold">435 Sold</span>
                        <span class="stock"
                          ><i class="ri-check-line"></i> 180 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <v-col cols="12" lg="6">
                <div
                  class="single-product-telemobile-item d-sm-flex align-items-center"
                >
                  <div class="flex-shrink-0">
                    <div class="product-img position-relative">
                      <NuxtLink to="/product-details" class="d-block">
                        <img
                          src="~/assets/images/product-24.png"
                          alt="product"
                        />
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
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <div class="product-content">
                      <NuxtLink to="/product-details" class="title"
                        >14 Pro Max 5G Unlocked Smartphone - 6GB+256GB</NuxtLink
                      >
                      <div class="d-flex gap-1 review">
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <i class="flaticon-star"></i>
                        <span>(76 Reviews)</span>
                      </div>
                      <h3>$799 <del>$849</del></h3>
                      <div class="d-flex sold-stock gap-4 align-items-center">
                        <span class="sold">1560 Sold</span>
                        <span class="stock"
                          ><i class="ri-check-line"></i> 235 In Stock</span
                        >
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between delivery-cart gap-4"
                      >
                        <span class="delivery"
                          ><i class="ri-truck-line"></i> Free Delivery</span
                        >
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
              </v-col>
              <div class="col-lg-12">
                <div class="pagination-area text-center mt-4">
                  <a href="#" class="next page-numbers">
                    <i class="ri-arrow-left-s-line"></i>
                  </a>

                  <span class="page-numbers current" aria-current="page">
                    1
                  </span>
                  <a href="#" class="page-numbers">2</a>
                  <a href="#" class="page-numbers">3</a>

                  <a href="#" class="next page-numbers">
                    <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>
            </v-row>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data: () => ({
    tab: null,
  }),
};
</script>
