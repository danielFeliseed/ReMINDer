<template>
    <div>
        <Navbar />
      <slot />
    </div>
  </template>

<script setup>
import Navbar from '@/components/navbar.vue'


</script>

<style lang="scss" scoped>
.body {
  background-color: #373737;
}



</style>