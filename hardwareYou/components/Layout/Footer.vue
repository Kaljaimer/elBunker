<template>
  <div class="footer-area pb-60 bg-gray1">
    <div class="container">
      <div class="border-top pt-60 pb-35">
        <v-row class="justify-content-center">
          <v-col cols="12" lg="6" sm="6">
            <v-row class="mb-5">
              <v-col cols="12" lg="6" sm="6">
                <div class="d-flex">
                  <div class="single-footer-widget single-footer-bottom-item">
                    <h3>Subscríbete y recibe nuestras novedades</h3>
                    <form class="subscribe-form position-relative">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                      />
                      <button
                          class="btn btn-warning text-white position-absolute top-50 end-0 translate-middle-y"
                      >
                        Subscribirse
                      </button>
                    </form>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="6" sm="6">
                <div class="single-footer-widget single-footer-bottom-item">
                  <h3>Síguenos:</h3>
                  <ul
                      class="list-unstyled d-flex social-link ml-0"
                  >
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

            <div class="single-footer-widget">
              <h3>Sobre nosotros</h3>
              <p>
                Somos una empresa integradora de tecnología especializada y <b>líder en la venta de Hardware y software para empresas</b>.
                Trabajamos con material nuevo y seminuevo por lo que nuestra misión es reducir el coste de las compras sin disminuir la calidad.
              </p>

              <div class="call-info">
                <span class="title">¿Tienes alguna pregunta? Llámanos!</span>
                <div class="d-flex align-items-center">
                  <i class="flaticon-headphones-1"></i>
                  <a href="tel:664300348">+34 664 300 348</a>
<!--                  TODO: Comprobar que las llamadas funcionan-->
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="3" sm="6">
            <div class="single-footer-widget">
              <h3>Nuestros Productos</h3>

              <ul class="ps-0 mb-0 list-unstyled import-link">
                <li>
                  <NuxtLink to="/products">Hardware Seminuevo</NuxtLink>
                  <ul>
                    <li>
                      <NuxtLink to="/products">Portátiles</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products">Pantallas</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products">PC Sobremesa</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products">Mini PC seminuevo</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products">Telefonía</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products">Imperfección con ahorro</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink to="/products">Licencias Sminuevas -70%</NuxtLink>
                  <ul>
                    <li>
                      <NuxtLink to="/products">Electrónica de Red</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products">Componentes</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink to="/products">Cascos / Auriculares</NuxtLink>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" lg="3" sm="6">
            <div class="single-footer-widget">
              <h3>Más información</h3>

              <ul class="ps-0 mb-0 list-unstyled import-link">
                <li>
                  <NuxtLink to="/dashboard">Haz tu ordenador en 2 minutos</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/order-history">Pídenos Hardware para tu empresa</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/privacy-policy">Quiénes Somos & Contacto</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/faq">Blog</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/products">Contacto</NuxtLink>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
