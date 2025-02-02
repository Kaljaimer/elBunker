<template>
  <div class="product-quantity">
    <div class="add-to-cart-counter">
      <div @click="decrement">
        <input type="button" class="minusBtn" value="-" />
      </div>
      <input type="text" size="25" v-model="internalValue" class="count" />
      <div @click="increment">
        <input type="button" class="plusBtn" value="+" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const internalValue = ref(0);

const increment = () => {
  internalValue.value++;
};

const decrement = () => {
  if (internalValue.value > 0) {
    internalValue.value--;
  }
};
</script>
