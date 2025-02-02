<template>
  <div class="this-month-sales-area pb-60">
    <div class="container position-relative">
      <div
        class="d-lg-flex align-items-center justify-content-between text-center mb-27 mt-minus-6"
      >
        <div class="d-lg-flex align-items-center">
          <h3 class="fs-3 mb-0 mb-1 mb-sm-0">This Month Sales</h3>
          <v-tabs
            v-model="tab"
            bg-color="white"
            class="border-0 this-month-tabs justify-content-center justify-content-lg-start mb-2 mb-lg-0"
          >
            <v-tab value="all" class="mt-3 mt-lg-0">All Products</v-tab>
            <v-tab value="smartphones" class="mt-3 mt-lg-0">Smartphones</v-tab>
            <v-tab value="headphones" class="mt-3 mt-lg-0">Headphones</v-tab>
            <v-tab value="laptop" class="mt-3 mt-lg-0">Laptop</v-tab>
            <v-tab value="monitor" class="mt-3 mt-lg-0">Monitor</v-tab>
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
            <ElectronicsTelemobileOnlineShopThisMonthSalesAllProductsItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="smartphones">
            <ElectronicsTelemobileOnlineShopThisMonthSalesSmartphonesItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="headphones">
            <ElectronicsTelemobileOnlineShopThisMonthSalesHeadphonesItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="laptop">
            <ElectronicsTelemobileOnlineShopThisMonthSalesLaptopItem />
          </v-tabs-window-item>
          <v-tabs-window-item value="monitor">
            <ElectronicsTelemobileOnlineShopThisMonthSalesMonitorItem />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThisMonthSales",
  data: () => ({
    tab: null,
  }),
};
</script>
