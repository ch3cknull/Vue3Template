<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const msg = ref('hello, world')
</script>

<template>
  <p class="title">{{ msg }}</p>
</template>

<style lang="css" scoped>
.title {
  @apply text-center;
}
</style>
