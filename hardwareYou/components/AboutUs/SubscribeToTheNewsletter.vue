<template>
  <div class="subscribe-area pb-60">
    <div class="container">
      <div
        class="bg-img subscribe-wrap"
        :style="{
          'background-image': `url(${bgImage})`,
        }"
      >
        <v-row class="align-items-center">
          <v-col cols="12" lg="6" md="6">
            <div class="subscribe-content">
              <h2>Subscribe To The Newsletter</h2>
              <p>Get 10% off new collection special Investigations</p>
              <form class="subscribe-form position-relative">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your email"
                />
                <button
                  class="btn btn-warning text-white position-absolute top-50 end-0 translate-middle-y"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <div class="subscribe-img">
              <img
                src="assets/images/subscribe-img.png"
                class="rounded-1"
                alt="subscribe-img"
              />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import bgImage from "~/assets/images/subscribe-bg.png";

export default defineComponent({
  name: "SubscribeToTheNewsletter",
  setup() {
    return {
      bgImage,
    };
  },
});
</script>
