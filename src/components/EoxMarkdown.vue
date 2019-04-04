<template>
  <div class="markdown">
    <div class="test" v-html="markdown">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  props: ['input'],
  computed: {
    markdown() {
      return marked(this.$slots.default[0].text, { sanitize: true })
    }
  }
}
</script>

<style>

</style>
