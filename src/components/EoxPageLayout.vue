<template>
    <div class="page">
      <eox-navbar :brand="'EOX'"></eox-navbar>
        <eox-page-content :input="pageContent">
          <slot v-slot:page-content></slot>
        </eox-page-content>
      <eox-footer>
        <div>© 2019 <a href="https://eox.at" target="_blank">EOX IT Services GmbH</a>.</div>
      </eox-footer>
    </div>
</template>

<script>
import EoxNavbar from '@/components/Navbar.vue'
import EoxPageContent from '@/components/PageContent.vue'
import EoxFooter from '@/components/Footer.vue'

export default {
  components: {
    EoxNavbar,
    EoxPageContent,
    EoxFooter,
  },
  computed: {
    pageContent() {
      return this.$slots.default[0].text
    }
  }
}
</script>

<style lang="scss">
// Unscoped global reset needed for layout
html, body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

<style>
.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: 'Open Sans';
}
</style>
