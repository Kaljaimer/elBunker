<template>
  <div class="this-month-sales-area pt-60 pb-35">
    <div class="container position-relative">
      <div
        class="d-lg-flex align-items-center justify-content-between text-center mb-27 mt-minus-6"
      >
        <div class="d-lg-flex align-items-center">
          <h3 class="fs-3 mb-0 mb-1 mb-sm-0">Meat & Seafood</h3>
          <v-tabs
            v-model="tab"
            bg-color="white"
            class="border-0 this-month-tabs justify-content-center justify-content-lg-start mb-2 mb-lg-0"
          >
            <v-tab value="all" class="mt-3 mt-lg-0">All</v-tab>
            <v-tab value="beef" class="mt-3 mt-lg-0">Beef</v-tab>
            <v-tab value="chicken" class="mt-3 mt-lg-0">Chicken</v-tab>
            <v-tab value="coastal" class="mt-3 mt-lg-0">
              Coastal Carnivore
            </v-tab>
            <v-tab value="finest" class="mt-3 mt-lg-0">Finest Cuts</v-tab>
          </v-tabs>
        </div>
        <div>
          <NuxtLink to="/products" class="read-more">
            <span>See All</span>
            <i class="ri-arrow-right-up-line ms-1"></i>
          </NuxtLink>
        </div>
      </div>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="all">
            <div class="row g-xl-0 justify-content-center">
              <div class="col-c-20 mb-4">
                <div
                  class="bg-img h-100 offer-seafood-content text-sm-start text-end"
                  :style="{
                    'background-image': `url(${bgImage})`,
                  }"
                >
                  <span class="top-title">Today’s Deal</span>
                  <h3>Fresh Meat</h3>
                  <p>Up to 70% off!</p>
                  <NuxtLink to="/products" class="read-more warning">
                    <span>Shop Now</span>
                    <i class="ri-arrow-right-up-line ms-1"></i>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-30.png" alt="product" />
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
                    <NuxtLink to="/product-details" class="title"
                      >Fresh Brand – Beef Chuck Center Roast, USDA
                      Choice</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(18 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$79 <del>$89</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock text-danger">
                          <i class="ri-check-line text-white"></i> Out of
                          Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-31.png" alt="product" />
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
                    <NuxtLink to="/product-details" class="title"
                      >All Natural Fresh Chicken Wingless & Drumettes</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(24 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$12 <del>$15</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock"
                          ><i class="ri-check-line"></i> In Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-32.png" alt="product" />
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
                    <NuxtLink to="/product-details" class="title"
                      >Wild Caught Pacific Cod Fillet Portions, 1 lb
                      (Frozen)</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(19 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$29 <del>$30</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock"
                          ><i class="ri-check-line"></i> In Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-33.png" alt="product" />
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
                      >Essential Atlantic Salmon Portions 2-portions</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(76 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$30 <del>$32</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock"
                          ><i class="ri-check-line"></i> In Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="beef">
            <div class="row g-xl-0 justify-content-center">
              <div class="col-c-20 mb-4">
                <div
                  class="bg-img h-100 offer-seafood-content text-sm-start text-end"
                  :style="{
                    'background-image': `url(${bgImage})`,
                  }"
                >
                  <span class="top-title">Today’s Deal</span>
                  <h3>Fresh Meat</h3>
                  <p>Up to 70% off!</p>
                  <NuxtLink to="/products" class="read-more warning">
                    <span>Shop Now</span>
                    <i class="ri-arrow-right-up-line ms-1"></i>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-31.png" alt="product" />
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
                    <NuxtLink to="/product-details" class="title"
                      >All Natural Fresh Chicken Wingless & Drumettes</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(24 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$12 <del>$15</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock"
                          ><i class="ri-check-line"></i> In Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-32.png" alt="product" />
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
                    <NuxtLink to="/product-details" class="title"
                      >Wild Caught Pacific Cod Fillet Portions, 1 lb
                      (Frozen)</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(19 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$29 <del>$30</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock"
                          ><i class="ri-check-line"></i> In Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-33.png" alt="product" />
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
                      >Essential Atlantic Salmon Portions 2-portions</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(76 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$30 <del>$32</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock"
                          ><i class="ri-check-line"></i> In Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-30.png" alt="product" />
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
                    <NuxtLink to="/product-details" class="title"
                      >Fresh Brand – Beef Chuck Center Roast, USDA
                      Choice</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(18 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$79 <del>$89</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock text-danger">
                          <i class="ri-check-line text-white"></i> Out of
                          Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="chicken">
            <div class="row g-xl-0 justify-content-center">
              <div class="col-c-20 mb-4">
                <div
                  class="bg-img h-100 offer-seafood-content text-sm-start text-end"
                  :style="{
                    'background-image': `url(${bgImage})`,
                  }"
                >
                  <span class="top-title">Today’s Deal</span>
                  <h3>Fresh Meat</h3>
                  <p>Up to 70% off!</p>
                  <NuxtLink to="/products" class="read-more warning">
                    <span>Shop Now</span>
                    <i class="ri-arrow-right-up-line ms-1"></i>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-30.png" alt="product" />
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
                    <NuxtLink to="/product-details" class="title"
                      >Fresh Brand – Beef Chuck Center Roast, USDA
                      Choice</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(18 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$79 <del>$89</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock text-danger">
                          <i class="ri-check-line text-white"></i> Out of
                          Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-31.png" alt="product" />
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
                    <NuxtLink to="/product-details" class="title"
                      >All Natural Fresh Chicken Wingless & Drumettes</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(24 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$12 <del>$15</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock"
                          ><i class="ri-check-line"></i> In Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-32.png" alt="product" />
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
                    <NuxtLink to="/product-details" class="title"
                      >Wild Caught Pacific Cod Fillet Portions, 1 lb
                      (Frozen)</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(19 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$29 <del>$30</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock"
                          ><i class="ri-check-line"></i> In Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-33.png" alt="product" />
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
                      >Essential Atlantic Salmon Portions 2-portions</NuxtLink
                    >
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(76 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$30 <del>$32</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock"
                          ><i class="ri-check-line"></i> In Stock</span
                        >
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="coastal">
            <div class="row g-xl-0 justify-content-center">
              <div class="col-c-20 mb-4">
                <div
                  class="bg-img h-100 offer-seafood-content text-sm-start text-end"
                  :style="{
                    'background-image': `url(${bgImage})`,
                  }"
                >
                  <span class="top-title">Today’s Deal</span>
                  <h3>Fresh Meat</h3>
                  <p>Up to 70% off!</p>
                  <NuxtLink to="/products" class="read-more warning">
                    <span>Shop Now</span>
                    <i class="ri-arrow-right-up-line ms-1"></i>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-30.png" alt="product" />
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
                      Fresh Brand – Beef Chuck Center Roast, USDA Choice
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(18 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$79 <del>$89</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock text-danger">
                          <i class="ri-check-line text-white"></i> Out of Stock
                        </span>
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-31.png" alt="product" />
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
                      All Natural Fresh Chicken Wingless & Drumettes
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(24 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$12 <del>$15</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock">
                          <i class="ri-check-line"></i>
                          In Stock
                        </span>
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-32.png" alt="product" />
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
                      Wild Caught Pacific Cod Fillet Portions, 1 lb (Frozen)
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(19 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$29 <del>$30</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock">
                          <i class="ri-check-line"></i>
                          In Stock
                        </span>
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-33.png" alt="product" />
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
                      Essential Atlantic Salmon Portions 2-portions
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(76 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$30 <del>$32</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock">
                          <i class="ri-check-line"></i>
                          In Stock
                        </span>
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="finest">
            <div class="row g-xl-0 justify-content-center">
              <div class="col-c-20 mb-4">
                <div
                  class="bg-img h-100 offer-seafood-content text-sm-start text-end"
                  :style="{
                    'background-image': `url(${bgImage})`,
                  }"
                >
                  <span class="top-title">Today’s Deal</span>
                  <h3>Fresh Meat</h3>
                  <p>Up to 70% off!</p>
                  <NuxtLink to="/products" class="read-more warning">
                    <span>Shop Now</span>
                    <i class="ri-arrow-right-up-line ms-1"></i>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-30.png" alt="product" />
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
                      Fresh Brand – Beef Chuck Center Roast, USDA Choice
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(18 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$79 <del>$89</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock text-danger">
                          <i class="ri-check-line text-white"></i>
                          Out of Stock
                        </span>
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-31.png" alt="product" />
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
                      All Natural Fresh Chicken Wingless & Drumettes
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(24 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$12 <del>$15</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock">
                          <i class="ri-check-line"></i>
                          In Stock
                        </span>
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-32.png" alt="product" />
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
                      Wild Caught Pacific Cod Fillet Portions, 1 lb (Frozen)
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(19 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$29 <del>$30</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock">
                          <i class="ri-check-line"></i>
                          In Stock
                        </span>
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-c-20">
                <div class="single-product-telemobile-item mx-minus-1 mb-4">
                  <div class="product-img position-relative">
                    <NuxtLink to="/product-details" class="d-block">
                      <img src="~/assets/images/product-33.png" alt="product" />
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
                      Essential Atlantic Salmon Portions 2-portions
                    </NuxtLink>
                    <div class="d-flex gap-1 review">
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <i class="flaticon-star"></i>
                      <span>(76 Reviews)</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3>$30 <del>$32</del></h3>
                      <div class="d-flex sold-stock align-items-center">
                        <span class="stock">
                          <i class="ri-check-line"></i>
                          In Stock
                        </span>
                      </div>
                    </div>
                    <button class="btn btn-success text-white rounded-pill">
                      <i class="ri-shopping-cart-line"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import bgImage from "~/assets/images/offer-9.png";

export default defineComponent({
  name: "MeatSeafood",
  data: () => ({
    tab: null,
  }),
  setup() {
    return {
      bgImage,
    };
  },
});
</script>
