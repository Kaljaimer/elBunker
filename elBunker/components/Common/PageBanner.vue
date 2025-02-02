<template>
  <div class="page-banner bg-gray4 py-3">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <ul class="d-flex align-content-center list-unstyled mb-0 page-content">
          <li>
            <NuxtLink to="/" class="text-decoration-none">Inicio</NuxtLink>
          </li>
          <li>
            <span>{{ pageTitle }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageBanner",
  props: ["pageTitle"],
};
</script>
