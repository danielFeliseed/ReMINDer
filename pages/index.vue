<script setup>
import { ref } from 'vue'



const email = ref('')
const password = ref('')
const user = useSupabaseUser()
const supabase = useSupabaseClient()
let editedToastHidden = ref(true);
let spinnerHidden = ref(true);


async function signIn() {
  spinnerHidden.value = false
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
  spinnerHidden.value = true
}

async function resetPassword() {
  try{
const { data, error } = await supabase.auth.resetPasswordForEmail(email.value, {
  redirectTo: 'https://nuxt-diary.vercel.app/profile'
})
if(error) {
  console.error('Error sending password reset email:', error)
} else {
  alert('Password reset email has been sent. Please check your inbox')
}
  } catch (e) {
    console.error('An error occured while resetting password:', e)
  }
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

async function signOut() {
  const {data, error } = await supabase.auth.signOut()
  window.location.href = '/'
}


</script>



<template>
  <div class="app-container flex flex-col items-center justify-center space-y-4 mt-[200px]">

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Log in</h5>
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
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800">
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button href="#" @click="resetPassword" class="ms-auto text-sm text-blue-700 hover:underline font-bold">Forgot Password?</button>
        </div>
        <nuxt-link href="#" @click="signIn">
        <button v-if="spinnerHidden" type="submit"
          class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
          >Log in</button>
      </nuxt-link>
      <div>
      <button v-if="!spinnerHidden" v-show="!spinnerHidden" role="status">
    <svg class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
  </button>
  </div>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="/signUp" class="text-blue-700 font-bold hover:underline dark:text-blue-500">Create account</a>
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
  background: linear-gradient(120deg, #ffffff 0%, #feffff 100%);
}

.button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background: #1c39dd;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #060606;
  }
}
</style>
