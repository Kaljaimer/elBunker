<template>
  <div class="middle-header-area border-bottom ptb-20">
    <div class="container">
      <div class="d-lg-flex justify-content-between align-items-center">
        <div
          class="d-flex align-items-center middle-header-left justify-content-center justify-content-lg-end"
        >
          <NuxtLink to="/" class="d-none d-lg-block middle-logo style-two">
            <img src="~/assets/images/grocery-shop-logo.png" alt="logo" />
          </NuxtLink>
          <div class="position-relative search-style-two">
            <input
              type="text"
              class="form-control border-2"
              placeholder="Search for products..."
            />
            <button
              type="submit"
              class="position-absolute top-50 end-0 translate-middle-y btn btn-success fs-14 fw-medium text-white"
            >
              <i class="ri-search-line"></i>
              <span class="d-none d-sm-inline-block">Search</span>
            </button>
          </div>
        </div>

        <ul
          class="d-flex middle-header-right ps-0 mb-0 list-unstyled justify-content-center justify-content-lg-end mt-3 mt-lg-0"
        >
          <li class="info">
            <NuxtLink to="/login" class="text-decoration-none">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <i class="ri-phone-line bg-danger-10"></i>
                </div>
                <div class="flex-grow-1 ms-10">
                  <span>Hotline</span>
                  <h3>(808) 555-0111</h3>
                </div>
              </div>
            </NuxtLink>
          </li>
          <li class="buy-info position-relative tops-3">
            <NuxtLink to="/login" class="text-decoration-none success-hover-bg">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <i class="ri-user-line"></i>
                </div>
              </div>
            </NuxtLink>
          </li>
          <li class="buy-info tops-4 position-relative">
            <NuxtLink
              to="/wishlist"
              class="text-decoration-none success-hover-bg"
            >
              <div class="position-relative me-9">
                <i class="ri-heart-line"></i>
                <span class="count bg-success">0</span>
              </div>
            </NuxtLink>
          </li>
          <li class="buy-info">
            <div class="dropdown">
              <a
                class="text-decoration-none success-hover-bg"
                href="javascript:void(0);"
                @click="toggleBuyInfo"
                :aria-pressed="active ? 'true' : 'false'"
                :class="{ active: buttonActiveState }"
              >
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="position-relative me-9">
                      <i class="ri-shopping-cart-line"></i>
                      <span class="count bg-success">0</span>
                    </div>
                  </div>
                </div>
              </a>
              <ul
                class="dropdown-menu cart-dropdown dropdown-menu-end"
                :class="{ toggler: active }"
              >
                <li
                  class="d-flex justify-content-between align-items-center cart-item"
                >
                  <button class="p-0 border-0 bg-transparent delete-btn">
                    <i class="ri-delete-bin-7-line"></i>
                  </button>
                  <NuxtLink
                    class="dropdown-item d-flex align-items-center"
                    to="/product-details"
                  >
                    <img src="~/assets/images/product-26.png" alt="product" />
                    <div class="ms-3 d-inline-block text-truncate">
                      <span
                        >365 by Whole Foods Market, Organic Lemon Juice, 10 Fl
                        Oz</span
                      >
                      <h3>$10.00</h3>
                    </div>
                  </NuxtLink>
                </li>
                <li
                  class="d-flex justify-content-between align-items-center cart-item"
                >
                  <button class="p-0 border-0 bg-transparent delete-btn">
                    <i class="ri-delete-bin-7-line"></i>
                  </button>
                  <NuxtLink
                    class="dropdown-item d-flex align-items-center"
                    to="/product-details"
                  >
                    <img src="~/assets/images/product-27.png" alt="product" />
                    <div class="ms-3 d-inline-block text-truncate">
                      <span
                        >365 by Whole Foods Market, Organic Lemon Juice, 10 Fl
                        Oz</span
                      >
                      <h3>$7.00</h3>
                    </div>
                  </NuxtLink>
                </li>
                <li
                  class="d-flex justify-content-between align-items-center cart-item"
                >
                  <button class="p-0 border-0 bg-transparent delete-btn">
                    <i class="ri-delete-bin-7-line"></i>
                  </button>
                  <NuxtLink
                    class="dropdown-item d-flex align-items-center"
                    to="/product-details"
                  >
                    <img src="~/assets/images/product-28.png" alt="product" />
                    <div class="ms-3 d-inline-block text-truncate">
                      <span
                        >Green Giant Whole Golden Corn Niblets, 7 Ounce Can
                        (Pack of 12)</span
                      >
                      <h3>$13.00</h3>
                    </div>
                  </NuxtLink>
                </li>
                <li
                  class="d-flex justify-content-between align-items-center cart-item"
                >
                  <h3 class="fs-15 mb-0">Total</h3>
                  <h3 class="fs-15 mb-0">$30.00</h3>
                </li>
                <li
                  class="d-flex justify-content-between align-items-center cart-item"
                >
                  <NuxtLink to="/cart" class="btn btn-primary fs-14 text-white">
                    View Cart
                  </NuxtLink>
                  <NuxtLink
                    to="/checkout"
                    class="btn btn-warning fs-14 text-white"
                  >
                    Checkout
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MiddleHeaderThree",
  setup() {
    const active = ref(false);
    const buttonActiveState = ref(false);

    const toggleBuyInfo = () => {
      active.value = !active.value;
      buttonActiveState.value = !buttonActiveState.value;
    };

    return {
      active,
      buttonActiveState,
      toggleBuyInfo,
    };
  },
});
</script>
