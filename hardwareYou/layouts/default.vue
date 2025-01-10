<template>
  <div>
    <LayoutPreloader v-if="isLoading" />
    <NuxtPage />
    <LayoutResponsiveNavbar />
    <LayoutLocationOption />
    <LayoutCopyright />
    <LayoutBackToUp />
<!--    <LayoutRTLSwitchBtn /> Uncomment if we want to switch left to right-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const isLoading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);
    });

    return {
      isLoading,
    };
  },
});
</script>
