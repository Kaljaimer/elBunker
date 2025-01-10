<template>
  <div class="services-area pt-60 pb-35">
    <div class="container">
      <v-row class="justify-content-center">
        <v-col cols="12" lg="3" sm="6">
          <div class="d-flex align-items-center single-servives-item">
            <div class="flex-shrink-0">
              <img src="~/assets/images/shipped.png" alt="shipped" />
            </div>
            <div class="flex-grow-1 ms-3">
              <h3>Fast Delivery</h3>
              <span>Experience Lightning-Fast Delivery</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <div class="d-flex align-items-center single-servives-item">
            <div class="flex-shrink-0">
              <img src="~/assets/images/credit.png" alt="shipped" />
            </div>
            <div class="flex-grow-1 ms-3">
              <h3>Secured Payment</h3>
              <span>Shop with Confidence</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <div class="d-flex align-items-center single-servives-item">
            <div class="flex-shrink-0">
              <img src="~/assets/images/wallet.png" alt="shipped" />
            </div>
            <div class="flex-grow-1 ms-3">
              <h3>Money Back</h3>
              <span>100% Money-Back Guarantee</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <div class="d-flex align-items-center single-servives-item">
            <div class="flex-shrink-0">
              <img src="~/assets/images/headphones.png" alt="shipped" />
            </div>
            <div class="flex-grow-1 ms-3">
              <h3>24/7 Support</h3>
              <span>Always Here for You</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>
