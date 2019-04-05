<template>
  <div class="outer">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.outer {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
}
.inner {
  width: 100%;
  margin: 2rem;
  max-width: 1140px;
  height: auto;
}
</style>
