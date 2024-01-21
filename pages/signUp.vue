<script setup>
import { ref } from 'vue'



const email = ref('')
const password = ref('')
const user = useSupabaseUser()
const supabase = useSupabaseClient()


async function signUp() {
  const {data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
}


// async function magicLink() {
//   const { data, error } = await supabase.auth.signInWithOtp({
//     email: email.value,
//     options: {
//       emailRedirectTo: 'http://localhost:3000/home'
//     }
//   })
 
// }
console.log(user.value)
function signOut() {
  supabase.auth.signOut()
}


</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-4 mt-[200px]">

  

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign up</h5>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
        </div>
        <div class="flex items-start">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <nuxt-link href="#" @click="signUp">
        <button type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Submit</button>
      </nuxt-link>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered? <a href="/" class="text-blue-700 hover:underline dark:text-blue-500">Log in</a>
        </div>
    </form>
</div>




     



  </div>
</template>



<style lang="scss" scoped></style>
