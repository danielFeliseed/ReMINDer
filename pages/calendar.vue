<script setup>
import { ref } from '#imports'
import { createClient } from '@supabase/supabase-js'
import { onMounted } from 'vue'



const supabase = createClient('https://kcvidtaxrohxytzkdygi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdmlkdGF4cm9oeHl0emtkeWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MTk1NTksImV4cCI6MjAxODI5NTU1OX0.J8F_ijcf6Pl0lIlphzibyJMlz_FX_YbilEN529ikXEE')
const user = useSupabaseUser()
const diaries = ref([])
const selectedDate = ref(new Date())

let newDiary = ref('')
let showAria = ref([])
let modalHidden = ref(true)
let selectedDiary = ref(null)

function toggleDropdown(index) {
  showAria.value[index] = !showAria.value[index];
}


function openModal() {
  selectedDiary.value = diary
  modalHidden.value = false
}

async function deleteDiary() {
  const { data, error } = await supabase
    .from('Diary_Entries')
    .delete()
    .match({ id: diaries.value.id})

    if (error) {
      console.log(error)
    } else {
      getDiaries()
    }
}




const date = ref(new Date())

const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'green',
      fillMode: 'solid'
    },
    dates: new Date()
  }
])

function formatDate(date) {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = ('0' + (d.getMonth() + 1)).slice(-2)
  const day = ('0' + d.getDate()).slice(-2)
  return `${year}-${month}-${day}`
}

async function onDateSelect(date) {
  console.log(date)
  selectedDate.value = date
  await getDiaries();
}

async function getDiaries() {
  const { data } = await supabase.
    from('Diary_Entries')
    .select()
    .match({ user_id: user?.value?.id })
  diaries.value = data?.filter(diary => formatDate(diary.created_at) === formatDate(selectedDate.value));
}

//   async function addDiary() {
//   if (newDiary.value !== '') {
//     const { data, error } = await supabase
//       .from('Diary_Entries')
//       .insert([{ message: newDiary.value }])
//       .single()

//     if (error) {
//       console.log(error)
//     } else {
//       diaries.value.push(data)
//       newDiary.value = ''
//       getDiaries()
//     }
//   }
// }


onMounted(async () => {
  getDiaries()
  showAria.value = diaries.value.map(() => false)
})

// async function addDiary() {
//   if (newDiary.value !== '') {
//     const { data, error } = await supabase
//       .from('Diary_Entries')
//       .insert([{ message: newDiary.value, mood_rating: mood.value }])
//       .single()

//     if (error) {
//       console.log(error)
//     } else {
//       diaryMessage.value.push(data)
//       newDiary.value = ''
//       mood.value = 0
//       getDiaries()
//     }


//   }
// }
console.log(diaries.value)
</script>

<template>
  <div class="flex flex-col items-center mt-28 min-h-screen">
    <div>
      <h1 class="font-bold text-2xl text-blue-700 shadow-sm mb-3">Look back at previous entries</h1>
    </div>

    <VDatePicker style="height: 350px; width: 350px;" value="selectedDate" @update:modelValue="onDateSelect"
      :attributes="attrs" />
    <div class="flex items-start gap-2.5 mt-2" v-for="(diary, index) in diaries">
      <div class="flex">
        <div
          class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 ml-7">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ new
              Date(diary.created_at).toLocaleDateString() }}</span>
          </div>
          <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{{ diary.message }}</p>
        </div>


        <button @click="toggleDropdown(index)" id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
          data-dropdown-placement="bottom-start"
          class="flex-shrink-0 inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
          type="button">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 4 15">
            <path
              d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
      </div>

      <div v-show="showAria[index]" id="dropdownDots"
        class="z-10 bg-gray-100 divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
          <li>
            <button @click="() => modalHidden = !modalHidden">
            <a href="#" data-modal-target="default-modal" data-modal-toggle="default-modal" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
          </button>
          </li>
          <li>
            <button @click="deleteDiary" >
            <a href="#" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
            </button>
          </li>
        </ul>

      </div>
    </div>


    <!-- Modal toggle -->


    <!-- Main modal -->
    
    <div v-show="!modalHidden" id="default-modal" tabindex="-1" aria-hidden="true"
     
      class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Edit Diary
            </h3>
  
          </div>
          <!-- Modal body -->
          <div v-for="diary of diaries" class="p-4 md:p-5 space-y-4">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             {{ diary.message }}
            </p>
           
          </div>
          <!-- Modal footer -->
          <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button data-modal-hide="default-modal" type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Save changes</button>
            <button @click="() => modalHidden = !modalHidden" data-modal-hide="default-modal" type="button"
              class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              Cancel</button>
        </div>
      </div>
      
    </div>
    
  </div>

  <!-- <li v-for="diary in diaries" :key="diary.id" class="bg-white p-4 rounded-lg shadow-md text-black">
        {{ diary.message }}</li>
    </messageBuble> -->

</div></template>

<style lang="scss" scoped></style>