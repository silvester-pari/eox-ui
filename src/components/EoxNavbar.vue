<template>
  <nav>
    <div class="inner">
      <a class="brand" href="#">
        <eox-logo class="brand-img"/>
        <!-- <img class="brand-img" :src="brandSrc" :alt="brand"> -->
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
    }
  },
  components: {
    EoxLogo,
  }
};
</script>

<style lang="scss" scoped>
nav {
  background: #fff;
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
}
.inner {
  width: 100%;
  margin: 0 1rem;
  max-width: 1140px;
}
.brand-img {
  height: 2rem
}
</style>