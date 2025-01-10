<template>
  <div class="settings-btn rtl-btn">
    <label id="switch" class="switch">
      <input type="checkbox" @change="toggleRTL" id="slider" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "RTLSwitchBtn",
  setup() {
    const isRTLEnabled = ref(false);

    const toggleRTL = () => {
      isRTLEnabled.value = !isRTLEnabled.value;
      document.body.classList.toggle("rtl", isRTLEnabled.value);
      localStorage.setItem("isRTLEnabled", JSON.stringify(isRTLEnabled.value));
    };

    onMounted(() => {
      const savedRTLEnabled = localStorage.getItem("isRTLEnabled");
      if (savedRTLEnabled) {
        isRTLEnabled.value = JSON.parse(savedRTLEnabled);
        if (isRTLEnabled.value) {
          document.body.classList.add("rtl");
        }
      }
    });

    return {
      toggleRTL,
      isRTLEnabled,
    };
  },
});
</script>
