<template>
  <div class="markdown">
    <div v-html="markdown">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  props: ["input"],
  computed: {
    markdown() {
      return marked(this.$slots.default[0].text, { sanitize: true });
    }
  }
};
</script>

<style lang="scss">
.markdown {
  pre {
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }
}
</style>
