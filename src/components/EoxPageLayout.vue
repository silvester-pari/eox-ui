<template>
  <div class="page">
    <eox-navbar :brand="'EOX'"></eox-navbar>
    <eox-page-content>
      <slot v-slot:page-content></slot>
    </eox-page-content>
    <eox-footer>
      <a href="https://eox.at/impressum/" target="_blank">LEGAL NOTICE</a>
    </eox-footer>
  </div>
</template>

<script>
import EoxNavbar from "@/components/EoxNavbar.vue";
import EoxPageContent from "@/components/EoxPageContent.vue";
import EoxFooter from "@/components/EoxFooter.vue";

export default {
  components: {
    EoxNavbar,
    EoxPageContent,
    EoxFooter
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Material+Icons");

// TODO global css
a {
  text-decoration: none;
}
.img-raised {
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
}
.rounded {
  border-radius: 6px !important;
}

// Unscoped global reset needed for layout
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
* {
  font-family: "Open Sans", sans-serif;
}
</style>

<style lang="scss" scoped>
.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: "Open Sans";
  max-width: 100vw;
  overflow: hidden;
}
</style>
