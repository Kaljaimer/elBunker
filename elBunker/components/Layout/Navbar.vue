<template>
  <div :class="['navbar navbar-expand-lg bg-white', { sticky: isSticky }]">
    <div class="container mw-1610">
      <NuxtLink class="navbar-brand d-lg-none" to="/">
        <img
          src="~/assets/images/logoBunker.svg"
          class="main-logo"
          alt="white-logo"
          width="300px"
        />
      </NuxtLink>
      <a
        class="navbar-toggler"
        href="javascript:void(0);"
        @click="stateStoreInstance.onChangeShow"
      >
        <span class="burger-menu">
          <span class="top-bar"></span>
          <span class="middle-bar"></span>
          <span class="bottom-bar"></span>
        </span>
      </a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"> Inicio </a>

            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/">
                  Electronics & Telemobile Online Shop
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/grocery-shop">
                  Grocery Shop
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/healthy-diet-foods-shop">
                  Healthy Diet Foods Shop
                </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"> Pages </a>

            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/about-us">
                  About Us
                </NuxtLink>
              </li>

              <li>
                <a class="dropdown-item sub-dropdown dropdown-toggle" href="#">
                  Authentication
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <NuxtLink class="dropdown-item" to="/login">
                      Login
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/register">
                      Register
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/my-account">
                      My Account
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/change-password">
                      Change Password
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/forgot-password">
                      Forgot Password
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/faq"> FAQ </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/privacy-policy">
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/terms-conditions">
                  Terms & Conditions
                </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item mega-menu">
            <a href="#" class="nav-link dropdown-toggle"> Shop </a>

            <ul class="dropdown-menu">
              <li class="nav-item">
                <div class="row">
                  <div class="col">
                    <h6 class="sub-menu-title">Product Layouts</h6>

                    <ul class="sub-menu">
                      <li>
                        <NuxtLink class="dropdown-item" to="/best-sellers">
                          Best Sellers
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/featured-products">
                          Featured Products
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/trending-products">
                          Trending Products
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/new-arrivals">
                          New Arrivals
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/categories">
                          Categories
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <h6 class="sub-menu-title">Products Step</h6>

                    <ul class="sub-menu">
                      <li>
                        <NuxtLink class="dropdown-item" to="/products">
                          Products
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/cart">
                          Cart
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/wishlist">
                          Wishlist
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/checkout">
                          Checkout
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/product-details">
                          Product Details
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <h6 class="sub-menu-title">Admin Page</h6>

                    <ul class="sub-menu">
                      <li>
                        <NuxtLink class="dropdown-item" to="/dashboard">
                          Dashboard
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/edit-profile">
                          Edit Profile
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/order-history">
                          Order History
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/order-details">
                          Order Details
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/password">
                          Change Password
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <NuxtLink
                      to="/products"
                      class="bg-img menu-img"
                      :style="{
                        'background-image': `url(${image})`,
                      }"
                    >
                    </NuxtLink>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"> Blog </a>

            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/our-blog">
                  Our Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/blog-details">
                  Blog Details
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/tags"> Tags </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/categories">
                  Categories
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/author"> Author </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <NuxtLink class="nav-link" to="/contact"> Contact </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
import stateStore from "~/utils/store";

import image from "~/assets/images/menu-product.jpg";

export default defineComponent({
  name: "Navbar",
  setup() {
    const isSticky = ref(false);
    const show = ref(false);
    const buttonShowState = ref(false);
    const activeSubDropdown = ref<string | null>(null);
    const stateStoreInstance = stateStore;

    const toggleCategories = () => {
      show.value = !show.value;
      buttonShowState.value = !buttonShowState.value;
    };

    const toggleSubDropdown = (subDropdown: string) => {
      activeSubDropdown.value =
        activeSubDropdown.value === subDropdown ? null : subDropdown;
    };

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      isSticky.value = scrollPos >= 100;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    watch(isSticky, (newValue: any) => {
      if (newValue) {
        show.value = false;
        buttonShowState.value = false;
      }
    });

    return {
      isSticky,
      show,
      buttonShowState,
      toggleCategories,
      toggleSubDropdown,
      activeSubDropdown,
      stateStoreInstance,
      image,
    };
  },
});
</script>
