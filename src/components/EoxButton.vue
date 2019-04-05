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
          return 'bg-primary'
          break
        case 'info':
          return 'bg-info'
          break
        case 'success':
          return 'bg-success'
          break
        case 'warning':
          return 'bg-warning'
          break
        case 'danger':
          return 'bg-danger'
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
}

a, button {
  // EOX style
  display: inline-flex;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: .9rem;
  width: auto;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  margin: .5rem .5rem .5rem 0;
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

.bg-primary {
  background: #004170;
  color: #fff;
}

.bg-info {
  background: #00bcd4;
  color: #fff;
}

.bg-success {
  background: #4caf50;
  color: #fff;
}

.bg-warning {
  background: #ff9800;
  color: #fff;
}

.bg-danger {
  background: #f44336;
  color: #fff;
}
</style>
