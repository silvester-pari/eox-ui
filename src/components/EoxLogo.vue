<template>
  <img :src="logoSrc" height="100%">
</template>

<script>
import logo from "@/assets/EOX_Logo.svg";

export default {
  data() {
    return {
      logoSrc: logo
    };
  }
};
</script>

<style>
</style>
