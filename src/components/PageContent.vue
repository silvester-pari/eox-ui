<template>
  <div class="outer">
    <div class="inner" v-html="markdown">
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  props: ['input'],
  computed: {
    markdown() {
      return marked(this.input, { sanitize: true })
    }
  }
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
  margin: 1rem;
  max-width: 1140px;
  height: auto;
}
</style>
