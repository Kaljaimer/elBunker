<template>
  <div class="footer-area pb-60 bg-gray1">
    <div class="container">
      <div class="border-top pt-60 pb-35">
        <v-row class="justify-content-center">
          <v-col cols="12" lg="3" sm="6">
            <div class="single-footer-widget">
              <h3>Sobre nosotros</h3>
              <p>
                We're not just an online store; we're your gateway to a world of
                cutting-edge electronics and telemobile devices
              </p>

              <div class="call-info">
                <span class="title">Got Question? Call us 24/7</span>
                <div class="d-flex align-items-center">
                  <i class="flaticon-headphones-1"></i>
                  <a href="tel:(808)-555-0111">(808) 555-0111</a>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="3" sm="6">
            <div class="single-footer-widget">
              <h3>Popular Categories</h3>

              <ul class="ps-0 mb-0 list-unstyled import-link">
                <li>
                  <NuxtLink to="/products">Smartphone & Tablets</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/products">Laptop & Desktop</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/products">Headphones</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/products">Smart Watches</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/products">Drone & Camera</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/products">Home Electronics</NuxtLink>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" lg="3" sm="6">
            <div class="single-footer-widget">
              <h3>Let Us Help You</h3>

              <ul class="ps-0 mb-0 list-unstyled import-link">
                <li>
                  <NuxtLink to="/dashboard">Your Account</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/order-history">Your Order</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/privacy-policy">Return Policy</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/faq">Help Center</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/products">Product Replacement</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/dashboard">Shop With Points</NuxtLink>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" lg="3" sm="6">
            <div class="single-footer-widget">
              <h3>Get to Know Us</h3>

              <ul class="ps-0 mb-0 list-unstyled import-link">
                <li>
                  <NuxtLink to="/about-us">About Us</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about-us">Careers</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact">Store Location</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/our-blog">News Center</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about-us">Investor Relations</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact">Contact Us</NuxtLink>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-row class="align-items-end justify-content-center">
        <v-col cols="12" lg="6" md="6">
          <div class="single-footer-bottom-item">
            <ul
              class="ps-0 mb-0 list-unstyled d-flex align-items-center social-link ms-0 justify-content-md-start justify-content-center"
            >
              <li>
                <span class="titles">Síguenos:</span>
              </li>
              <li>
                <a href="https://www.instagram.com/hardwareyou.es/" target="_blank">
                  <i class="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2Fhardware_you" target="_blank">
                  <i class="ri-twitter-x-line"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mario-lorente-mantas-800871140/" target="_blank">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@hardwareyou.es" target="_blank">
                  <i class="ri-tiktok-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterTwo",
};
</script>
