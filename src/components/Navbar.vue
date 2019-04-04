<template>
  <nav>
    <div class="inner">
      <a class="brand" href="#">
        <img class="brand-img" :src="brandSrc" :alt="brand">
      </a>

    </div>
  </nav>  
</template>
<script>
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
  }
};
</script>

<style lang="scss">
// Unscoped global reset
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

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