<template>
  <nav :class="{ shadow : false }">
    <div class="inner">
      <a class="brand" href="#">
        <eox-logo class="brand-img"/>
      </a>

    </div>
  </nav>  
</template>
<script>
import EoxLogo from '@/components/EoxLogo.vue'

export default {
  props: {
    brand: {
      type: String,
      default: 'brand',
    },
    logo: {
      type: String,
      default: 'eox',
    },
  },
  data() {
    return {
      logoEox: require('@/assets/EOX_Logo.svg')
    };
  },
  computed: {
    brandSrc() {
      return this.logoEox
    },
  },
  components: {
    EoxLogo,
  }
};
</script>

<style lang="scss" scoped>
nav {
  background: #fff;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
}
.shadow {
  box-shadow: 0 4px 18px 0 rgba(0,0,0,.12),0 7px 10px -5px rgba(0,0,0,.15);
}
.inner {
  width: 100%;
  margin: 0;
  max-width: 1140px;
  padding: 2rem;
}
.brand-img {
  height: 2rem
}
</style>