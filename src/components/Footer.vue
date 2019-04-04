<template>
    <footer>
        <slot></slot>
    </footer>
</template>

<script>
export default {

}
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
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    padding: 3rem;
    width: 100%;
}
</style>

