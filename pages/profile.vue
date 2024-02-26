<script setup>
import { ref } from 'vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
let loading = ref(true)
let email = ref('')
let password = ref('')
let editedToastHidden = ref(true);

const { data } = await supabase
  .from('user')
  .select('email, password')
  .eq('id', user?.value?.id)
  .single()

if (data) {
  email.value = data?.email
  password.value = data?.password
}

loading.value = false

async function updateProfile() {
 const { data, error } = await supabase.auth.updateUser({
   email: email.value,
   password: password.value
 })
 if(error) {
  console.log(error)
  alert("Couldn't update profile, please try again")
  } else {
    editedToastHidden.value = false
 }
}
console.log(user)
</script>

<template>
  <NuxtLoadingIndicator />

<transition name="fade">
    <div v-show="!editedToastHidden" id="toast-danger" position="sticky"
      class="fixed mt-[100px] flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert">
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          viewBox="0 0 20 20">
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ms-3 text-sm font-normal whitespace-nowrap">Password has been updated.</div>
      <button @click="() => editedToastHidden = !editedToastHidden" type="button"
        class=" ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100  h-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-danger" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  </transition>

    <div class="app-container flex justify-center">
        <form class="">
            <div class="mt-[150px] grid gap-6 mb-6 md:grid-cols-2">

            </div>
            <div class="container md:w-[700px]">
            <h1 class="text-2xl font-bold mb-10 text-black text-center">Account info</h1>
           

            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" v-model="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Enter new password" required>
            </div>
        

            <div class="flex justify-center">
                

                <button type="submit"
                    class="button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click.prevent="updateProfile"
                    >Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.app-container {

 
  height: 100vh;
  background-color: #060606;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
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
    background: #000000;
  }
}


</style>