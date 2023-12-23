<template>
    <div>
        <Navbar />
      <slot />
    </div>
  </template>

<script setup>
import Navbar from '@/components/navbar.vue'



 let fruits = [
  { name: 'Apple', color: 'red' },
  { name: 'Banana', color: 'yellow' },
  { name: 'Grape', color: 'purple' },
  { name: 'Kiwi', color: 'green' },
  { name: 'Orange', color: 'orange' },
  { name: 'Strawberry', color: 'red' },
  { name: 'Watermelon', color: 'green' },
]


</script>

<style lang="scss" scoped>
.body {
  background-color: #373737;
}

</style>