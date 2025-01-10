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
              <h3>Entrega rápida</h3>
              <span>Experiencia en entrega rápida</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <div class="d-flex align-items-center single-servives-item">
            <div class="flex-shrink-0">
              <img src="~/assets/images/credit.png" alt="shipped" />
            </div>
            <div class="flex-grow-1 ms-3">
              <h3>Pago seguro</h3>
              <span>Compra de confianza</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <div class="d-flex align-items-center single-servives-item">
            <div class="flex-shrink-0">
              <img src="~/assets/images/wallet.png" alt="shipped" />
            </div>
            <div class="flex-grow-1 ms-3">
              <h3>Devoluciones</h3>
              <span>Devoluciones 100% garantizadas</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <div class="d-flex align-items-center single-servives-item">
            <div class="flex-shrink-0">
              <img src="~/assets/images/headphones.png" alt="shipped" />
            </div>
            <div class="flex-grow-1 ms-3">
              <h3>Soporte 24/7</h3>
              <span>Siempre disponibles para ti</span>
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
