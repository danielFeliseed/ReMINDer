<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
// const supabase = createClient('https://kcvidtaxrohxytzkdygi.supabase.co', 
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdmlkdGF4cm9oeHl0emtkeWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MTk1NTksImV4cCI6MjAxODI5NTU1OX0.J8F_ijcf6Pl0lIlphzibyJMlz_FX_YbilEN529ikXEE')
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const newDiary = ref('')
const diaries = ref([])
let toastHidden = ref(true)

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
      toastHidden.value = !toastHidden.value
      getDiaries()
    }
  }
}



</script>

<template>
  <div class="app-container flex flex-col items-center justify-center space-y-4">
    <transition name="fade">
      <div v-show="!toastHidden" id="toast-success"
        class="toast mt-[90px] fixed flex justify-center items-center w-3/5 max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
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
        <div class="ms-3 text-sm font-normal">Diary added</div>
        <button @click="() => toastHidden = !toastHidden" type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
    </transition>

    <div class="content">
      <label for="message" class="label block mb-2 text-xl font-medium text-gray-900 dark:text-white">Write your diary</label>
      <textarea id="message" rows="4"
        class="textarea block p-2.5 w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..." v-model="newDiary"></textarea>


      <button class="button bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addDiary">Add
        Diary</button>

    </div>
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

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.toast {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.label {
  font-size: 1.5rem;
  color: #333;
}

.textarea {
  width: 100%;
  min-height: 10rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: #f0f0f0;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}</style>