<template>
  <div class="recommended-for-you-area ptb-60">
    <div class="container position-relative">
      <div
        class="d-lg-flex align-items-center justify-content-between text-center mb-27 mt-minus-6"
      >
        <div class="d-lg-flex align-items-center">
          <h3 class="fs-3 mb-0 mb-1 mb-sm-0">Recommended For You</h3>
          <v-tabs
            v-model="tab"
            bg-color="white"
            class="border-0 this-month-tabs ms-50 justify-content-center justify-content-lg-start mb-2 mb-lg-0"
          >
            <v-tab value="all">All</v-tab>
            <v-tab value="healthy">Healthy Beverages</v-tab>
            <v-tab value="superfoods">Superfoods</v-tab>
            <v-tab value="grains">Whole Grains</v-tab>
            <v-tab value="snack">Snack Attack</v-tab>
          </v-tabs>
        </div>
        <div>
          <NuxtLink to="/products" class="read-more">
            <span>See All Deals</span>
            <i class="ri-arrow-right-up-line ms-1"></i>
          </NuxtLink>
        </div>
      </div>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="all">
            <HealthyDietFoodsShopRecommendedForYouAllProductsItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="healthy">
            <HealthyDietFoodsShopRecommendedForYouHealthyBeveragesItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="superfoods">
            <HealthyDietFoodsShopRecommendedForYouSuperfoodsItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="grains">
            <HealthyDietFoodsShopRecommendedForYouWholeGrainsItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="snack">
            <HealthyDietFoodsShopRecommendedForYouSnackAttackItem />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendedForYou",
  data: () => ({
    tab: null,
  }),
};
</script>
