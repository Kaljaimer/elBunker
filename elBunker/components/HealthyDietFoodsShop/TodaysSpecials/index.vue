<template>
  <div class="this-month-sales-area pb-60">
    <div class="container position-relative">
      <div
        class="d-lg-flex align-items-center justify-content-between text-center mb-27 mt-minus-6"
      >
        <div class="d-lg-flex align-items-center">
          <h3 class="fs-3 mb-0 mb-1 mb-sm-0">Today’s Specials: Big Savings!</h3>
          <v-tabs
            v-model="tab"
            bg-color="white"
            class="border-0 this-month-tabs ms-50 justify-content-center justify-content-lg-start mb-2 mb-lg-0"
          >
            <v-tab value="all">All</v-tab>
            <v-tab value="fresh">Fresh Produce</v-tab>
            <v-tab value="grains">Whole Grains</v-tab>
            <v-tab value="proteins">Lean Proteins</v-tab>
            <v-tab value="healthy">Healthy Fats</v-tab>
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
            <HealthyDietFoodsShopTodaysSpecialsAllProductsItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="fresh">
            <HealthyDietFoodsShopTodaysSpecialsFreshProduceItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="grains">
            <HealthyDietFoodsShopTodaysSpecialsWholeGrainsItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="proteins">
            <HealthyDietFoodsShopTodaysSpecialsLeanProteinsItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="healthy">
            <HealthyDietFoodsShopTodaysSpecialsHealthyFatsItem />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodaysSpecials",
  data: () => ({
    tab: null,
  }),
};
</script>
