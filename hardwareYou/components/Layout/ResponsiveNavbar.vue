<template>
  <div
    :class="[
      'mobile-navbar offcanvas offcanvas-end border-0',
      { show: stateStoreInstance.show },
    ]"
  >
    <div class="offcanvas-header justify-space-between">
      <NuxtLink to="/" class="logo d-inline-block">
        <img src="~/assets/images/logoHY.svg" alt="logo" width="200"/>
      </NuxtLink>

      <button
        type="button"
        class="close-btn bg-transparent position-relative lh-1 p-0 border-0"
        @click="stateStoreInstance.onChangeShow"
      >
        <i class="ri-close-fill"></i>
      </button>
    </div>

    <div class="offcanvas-body">
      <v-expansion-panels variant="accordion" v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-title>Inicio</v-expansion-panel-title>
          <v-expansion-panel-text>
            <ul class="mobile-menu-items">
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/"
                  @click="stateStoreInstance.onChangeShow"
                >
                  Electronics & Telemobile Online Shop
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/grocery-shop"
                  @click="stateStoreInstance.onChangeShow"
                >
                  Grocery Shop
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/healthy-diet-foods-shop"
                  @click="stateStoreInstance.onChangeShow"
                >
                  Healthy Diet Foods Shop
                </NuxtLink>
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Pages</v-expansion-panel-title>
          <v-expansion-panel-text>
            <ul class="mobile-menu-items">
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/about-us"
                  @click="stateStoreInstance.onChangeShow"
                >
                  About Us
                </NuxtLink>
              </li>
              <li class="mobile-menu-list">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      Authentication
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <ul class="mobile-menu-items sub-dropdown">
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/login"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Login
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/register"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Register
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/my-account"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            My Account
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/change-password"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Change Password
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/forgot-password"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Forgot Password
                          </NuxtLink>
                        </li>
                      </ul>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/faq"
                  @click="stateStoreInstance.onChangeShow"
                >
                  FAQ
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/privacy-policy"
                  @click="stateStoreInstance.onChangeShow"
                >
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/terms-conditions"
                  @click="stateStoreInstance.onChangeShow"
                >
                  Terms & Conditions
                </NuxtLink>
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Shop</v-expansion-panel-title>
          <v-expansion-panel-text>
            <ul class="mobile-menu-items">
              <li class="mobile-menu-list">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      Product Layouts
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <ul class="mobile-menu-items sub-dropdown">
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/best-sellers"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Best Sellers
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/featured-products"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Featured Products
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/trending-products"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Trending Products
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/new-arrivals"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            New Arrivals
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/categories"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Categories
                          </NuxtLink>
                        </li>
                      </ul>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
              <li class="mobile-menu-list">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      Products Step
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <ul class="mobile-menu-items sub-dropdown">
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/products"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Products
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/cart"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Cart
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/wishlist"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Wishlist
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/checkout"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Checkout
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/product-details"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Product Details
                          </NuxtLink>
                        </li>
                      </ul>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
              <li class="mobile-menu-list">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      Admin Page
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <ul class="mobile-menu-items sub-dropdown mb-3">
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/dashboard"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Dashboard
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/edit-profile"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Edit Profile
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/order-history"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Order History
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/order-details"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Order Details
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            class="dropdown-item"
                            to="/change-password"
                            @click="stateStoreInstance.onChangeShow"
                          >
                            Change Password
                          </NuxtLink>
                        </li>
                      </ul>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Blog</v-expansion-panel-title>
          <v-expansion-panel-text>
            <ul class="mobile-menu-items">
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/our-blog"
                  @click="stateStoreInstance.onChangeShow"
                >
                  Our Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/blog-details"
                  @click="stateStoreInstance.onChangeShow"
                >
                  Blog Details
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/tags"
                  @click="stateStoreInstance.onChangeShow"
                >
                  Tags
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/categories"
                  @click="stateStoreInstance.onChangeShow"
                >
                  Categories
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item"
                  to="/author"
                  @click="stateStoreInstance.onChangeShow"
                >
                  Author
                </NuxtLink>
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title class="without-icon">
            <NuxtLink to="/contact" @click="stateStoreInstance.onChangeShow">
              Contact
            </NuxtLink>
          </v-expansion-panel-title>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import stateStore from "~/utils/store";

export default defineComponent({
  name: "ResponsiveNavbar",
  data: () => ({
    panel: [0],
  }),
  setup() {
    const show = ref(false);
    const stateStoreInstance = stateStore;
    const activeMobileMenu = ref<string | null>(null);

    const toggleMobileMenu = (mobileMenu: string) => {
      activeMobileMenu.value =
        activeMobileMenu.value === mobileMenu ? null : mobileMenu;
    };

    return {
      show,
      stateStoreInstance,
      toggleMobileMenu,
      activeMobileMenu,
    };
  },
});
</script>
