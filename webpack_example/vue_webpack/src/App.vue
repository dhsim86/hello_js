<template>
  <div class="main">
    Hello Vue
    <button @click="clicked">Test</button>
  </div>
</template>

<script>
import { pig, duck } from './decorator/class_decorator'

export default {
  methods: {
    clicked() {
      console.log(pig.say())
      console.log(duck.say())
    }
  },
}
</script>

<style scoped>
</style>
