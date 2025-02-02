<template>
  <div>
    <LayoutMiddleHeader />
    <LayoutNavbarStyleFour />
    <CommonPageBanner pageTitle="Contacto" />
<!--    <ContactInfo /> Commented since we don´t know the location-->
    <ContactForm />
    <CommonServices class="bg-gray1" />
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>
