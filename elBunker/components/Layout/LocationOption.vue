<template>
  <div :class="['location-option', { show: stateStoreInstance.open }]">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0 pb-0">
          <h3 class="modal-title" id="exampleModal2Label">
            Where to deliver your products?
          </h3>
          <button
            type="button"
            class="btn-close"
            @click="stateStoreInstance.onChange"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group mb-4">
              <label class="label">Search your location</label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control ps-5"
                  placeholder="Search your location"
                />
                <i
                  class="ri-map-pin-line position-absolute top-50 start-0 translate-middle-y ps-3"
                ></i>
              </div>
            </div>
            <h6>Select a Location</h6>

            <ul class="ps-0 mb-0 list-unstyled location-list">
              <li>
                <div class="form-check ps-0 position-relative mb-0">
                  <label
                    class="form-check-label d-block"
                    for="flexRadioDefault4"
                  >
                    <span class="title1">Alberta</span>
                    <span class="dec">Athabasca T9S</span>
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault4"
                    id="flexRadioDefault4"
                  />
                </div>
              </li>
              <li>
                <div class="form-check ps-0 position-relative mb-0">
                  <label
                    class="form-check-label d-block"
                    for="flexRadioDefault5"
                  >
                    <span class="title1">British Columbia</span>
                    <span class="dec">Athabasca T9S</span>
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault5"
                    id="flexRadioDefault5"
                  />
                </div>
              </li>
              <li>
                <div class="form-check ps-0 position-relative mb-0">
                  <label
                    class="form-check-label d-block"
                    for="flexRadioDefault6"
                  >
                    <span class="title1">New Brunswick</span>
                    <span class="dec">Athabasca T9S</span>
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault6"
                    id="flexRadioDefault6"
                  />
                </div>
              </li>
              <li>
                <div class="form-check ps-0 position-relative mb-0">
                  <label
                    class="form-check-label d-block"
                    for="flexRadioDefault7"
                  >
                    <span class="title1">Nova Scotia</span>
                    <span class="dec">Athabasca T9S</span>
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault7"
                    id="flexRadioDefault7"
                  />
                </div>
              </li>
              <li>
                <div class="form-check ps-0 position-relative mb-0">
                  <label
                    class="form-check-label d-block"
                    for="flexRadioDefault8"
                  >
                    <span class="title1">Ontario</span>
                    <span class="dec">Athabasca T9S</span>
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault8"
                    id="flexRadioDefault8"
                  />
                </div>
              </li>
              <li>
                <div class="form-check ps-0 position-relative mb-0">
                  <label
                    class="form-check-label d-block"
                    for="flexRadioDefault9"
                  >
                    <span class="title1">Quebec</span>
                    <span class="dec">Athabasca T9S</span>
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault9"
                    id="flexRadioDefault9"
                  />
                </div>
              </li>
              <li>
                <div class="form-check ps-0 position-relative mb-0">
                  <label
                    class="form-check-label d-block"
                    for="flexRadioDefault10"
                  >
                    <span class="title1">Yukon</span>
                    <span class="dec">Athabasca T9S</span>
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault10"
                    id="flexRadioDefault10"
                  />
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "~/utils/store";

export default defineComponent({
  name: "MobileDeviceNavbar",
  setup() {
    const stateStoreInstance = stateStore;
    const handleClick = () => {
      stateStoreInstance.open = false;
    };

    return {
      stateStoreInstance,
      handleClick,
    };
  },
});
</script>
