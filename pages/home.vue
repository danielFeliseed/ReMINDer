<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
// const supabase = createClient('https://kcvidtaxrohxytzkdygi.supabase.co', 
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdmlkdGF4cm9oeHl0emtkeWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MTk1NTksImV4cCI6MjAxODI5NTU1OX0.J8F_ijcf6Pl0lIlphzibyJMlz_FX_YbilEN529ikXEE')
const supabase = useSupabaseClient()
const user  = useSupabaseUser()
const newDiary = ref('')
const diaries = ref([])

console.log(user.value)
async function getDiaries() {
  const { data } = await supabase
  .from('Diary_Entries')
  .select()
}

  async function addDiary() {
  if (newDiary.value !== '') {
    const { data, error } = await supabase
      .from('Diary_Entries')
      .insert([{ message: newDiary.value, user_id: user?.value?.id }])
      .single()

    if (error) {
      console.log(error)
    } else {
      diaries.value.push(data)
      newDiary.value = ''
      getDiaries()
    }
  }
}



</script>

<template>
    

<div class="flex flex-col items-center justify-center space-y-4 mt-[300px]">
    
<label for="message" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Diary</label>
<textarea id="message" rows="4" class="block p-2.5 w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
placeholder="Write your thoughts here..." v-model="newDiary"></textarea>


    <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addDiary">Add Diary</button>
    
</div>


</template>



<style lang="scss" scoped>



.flex.border.border-gray-700.rounded-lg.overflow-hidden.shadow-md {
  border-color: #e2e8f0; // Softer border color
  border-radius: 1rem; // More rounded corners
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Subtle shadow
  background-color: #f7fafc; // Light background color
}

input.flex-grow.p-2.text-black {
  color: #2d3748; // High contrast text color
  &::placeholder {
    color: #a0aec0; // Lighter placeholder text
  }
  padding: 1rem; // Increased padding
}

button.bg-blue-500.hover\:bg-blue-700.text-white.font-bold.py-2.px-4.rounded {
  background-color: #63b3ed; // Softer button color
  &:hover {
    background-color: #4299e1; // Transition color on hover
    transition: background-color 0.3s; // Smooth transition
  }
}


</style>