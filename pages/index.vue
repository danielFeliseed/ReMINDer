<script setup>
import { ref } from 'vue'



const email = ref('')
const password = ref('')
const user = useSupabaseUser()
const supabase = useSupabaseClient()


async function signIn() {
  const {data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (!user.value) {
    window.location.href = '/'
    alert('User does not exist, please sign up')
  } else {
  window.location.href = '/home'
  }
}

const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: 'https://nuxt-diary.vercel.app/profile',
})




// async function magicLink() {
//   const { data, error } = await supabase.auth.signInWithOtp({
//     email: email.value,
//     options: {
//       emailRedirectTo: 'http://localhost:3000/home'
//     }
//   })
 
// }
console.log(user.value)

async function signOut() {
  const {data, error } = await supabase.auth.signOut()
  window.location.href = '/'
}


</script>

<template>
  <div class="app-container flex flex-col items-center justify-center space-y-4">

  

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
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
            <a href="#" class="ms-auto text-sm text-blue-700 hover:underline text-green-400 font-bold">Lost Password?</a>
        </div>
        <nuxt-link href="#" @click="signIn">
        <button type="submit"
          class="button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Submit</button>
      </nuxt-link>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="/signUp" class="text-green-400 font-bold hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
</div>




     



  </div>
</template>



<style lang="scss" scoped>

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background: #84fab0;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #8fd3f4;
  }
}
</style>
