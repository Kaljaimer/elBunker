<template>
  <div class="ptb-60 error-wrapper">
    <div class="container">
      <div class="error-content text-center">
        <h1>4<span>0</span>4</h1>
        <h3>Oops! page is not found</h3>
        <p>Sorry, but the page you are looking for does not exist.</p>
        <NuxtLink to="/" class="btn btn-warning text-white">
          Back To Homepage
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style lang="scss" scoped>
.error-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
