<script setup>
import { ref } from 'vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
let navBarHidden = ref(true)
// check database later

async function signOut() {
  const { data, error } = await supabase.auth.signOut({
  })
  window.location.href = '/'
}
console.log(user.value)

</script>

<template>

<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a v-if="user" href="/home" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="header-text self-center text-2xl font-semibold whitespace-nowrap ">ReMINDer</span>
    </a>
    <a v-if="!user" href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="header-text self-center text-2xl font-semibold whitespace-nowrap ">ReMINDer</span>
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
 
        <button v-if="user" @click="() => navBarHidden = !navBarHidden"
      data-collapse-toggle="navbar-sticky"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-sticky"
    >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div v-if="user" :class="{ 'hidden md:flex': navBarHidden }" class="items-center justify-between w-full md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul class="flex flex-col gap-5 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li v-if="!user">
          <nuxt-link to="/" @click="navBarHidden = true">Home</nuxt-link>
        </li>
        <li v-if="user">
            <nuxt-link to="/home" @click="navBarHidden = true">Home</nuxt-link>
            
        </li>
        <li v-if="!user">
            <nuxt-link to="/" @click="navBarHidden = true">Calendar</nuxt-link>
        </li>
        <li v-if="user">
          <nuxt-link to="/calendar" @click="navBarHidden = true">Calendar</nuxt-link>
        </li>
        <li v-if="!user">
            <nuxt-link to="/" @click="navBarHidden = true">Help</nuxt-link>
        </li>
        <li v-if="user">
            <nuxt-link to="/support" @click="navBarHidden = true">Help</nuxt-link>
        </li>
        <li v-if="!user">
            <nuxt-link to="/" @click="navBarHidden = true">Profile</nuxt-link>
        </li>
        <li v-if="user">
            <nuxt-link to="/profile" @click="navBarHidden = true">Profile</nuxt-link>
        </li>
        <li>
          <div v-if="user">
            Welcome back {{ user?.email  }}
          </div>
          <div v-else>
            <nuxt-link to="/"></nuxt-link>
          </div>
        </li>
        <li v-if="user">
            <button class="button bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="signOut">Sign Out</button>
        </li>
        <li>
          <div v-if="!user">
            <nuxt-link to="/" @click="navBarHidden = true">Login</nuxt-link>
          </div>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  
  
</template>

<style scoped>
@media (min-width: 768px) {
  .hidden.md\:flex {
    display: flex !important;
  }
}

.button {
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 0.5rem;
  background: #1c39dd;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #101010;
  }
}

.header-text {
  color: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.025em;
  line-height: 1.5;
  
}
</style>