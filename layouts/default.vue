<template>
    <div>
        <Navbar />
        <NuxtLoadingIndicator />
      <slot />
    </div>
  </template>


<script setup>
import Navbar from '@/components/navbar.vue'


</script>

<style lang="scss" scoped>



</style>