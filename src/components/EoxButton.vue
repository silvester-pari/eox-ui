<template>
    <a v-if="link" :href="link" :class="btnClass">
      <i v-if="icon" class="material-icons">{{ icon }}</i><slot></slot>
    </a>
    <button v-else :class="btnClass">
        <i v-if="icon" class="material-icons">{{ icon }}</i><slot></slot>
    </button>
</template>

<script>
export default {
  props: ['color', 'icon', 'link'],
  computed: {
    btnClass() {
      switch(this.color) {
        case 'eox':
          return 'bg-eox'
          break
        default:
          return 'bg-default'
          break
      }
    }
  },
}
</script>

<style lang="scss" scoped>
a {
  //reset
  text-decoration: none;
  display: inline-flex;
}
button {
  // reset
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-appearance: button; /* for input */
  -webkit-user-select: none; /* for button */
      -moz-user-select: none;
      -ms-user-select: none;
  display: flex;
}

a, button {
  // EOX style
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: .9rem;
  width: auto;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  border-radius: 3px;
}

.material-icons {
  margin-right: .5rem;
  font-size: 1.3rem;
}

.bg-default {
  background: #777;
  color: #fff;
}

.bg-eox {
  background: #004170;
  color: #fff;
}
</style>
