<template>
  <div>
    <LayoutPreloader v-if="isLoading" />
    <NuxtPage />
    <LayoutBackToUp />
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
