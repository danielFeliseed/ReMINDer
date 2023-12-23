<script setup>
import { ref } from 'vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
let loading = ref(true)
let email = ref('')
let password = ref('')

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
}
console.log(user)
</script>

<template>
    <div class="app-container flex justify-center">
        <form class="w-3/4">
            <div class="mt-[150px] grid gap-6 mb-6 md:grid-cols-2">

            </div>
            <div class="container">
            <h1 class="text-2xl font-bold mb-10 text-black whitespace-nowrap">You can change your login information below</h1>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Email
                    address</label>
                <input type="email" id="email" v-model="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com" required>
            </div>

            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                <input type="" id="password" v-model="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password" required>
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

.app-container {

 
  height: 100vh;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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