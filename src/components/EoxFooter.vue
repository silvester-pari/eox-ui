<template>
  <footer>
    <div class="inner">
      <div class="left">
        <slot></slot>
      </div>
      <div class="right">
        © {{ new Date().getFullYear() }}
        <a
          href="https://eox.at"
          target="_blank"
        >EOX IT Services GmbH</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
}
.inner {
  width: 100%;
  max-width: 1140px;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .right {
    text-align: right;
  }

  .left,
  .right {
    margin: 1rem 0;
  }
}
</style>

