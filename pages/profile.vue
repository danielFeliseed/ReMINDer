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
    <div class="flex justify-center">
        <form class="w-3/4">
            <div class="grid gap-6 mb-6 md:grid-cols-2 mt-[120px]">

            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                    address</label>
                <input type="email" id="email" v-model="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com" required>
            </div>

            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" v-model="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••" required>
            </div>

            <div class="flex justify-center">
                

                <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click.prevent="updateProfile"
                    >Save</button>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>