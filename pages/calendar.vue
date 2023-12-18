<script setup>
  import { ref } from '#imports'
  import { createClient } from '@supabase/supabase-js'
  import { onMounted } from 'vue'

  const supabase = createClient('https://kcvidtaxrohxytzkdygi.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdmlkdGF4cm9oeHl0emtkeWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MTk1NTksImV4cCI6MjAxODI5NTU1OX0.J8F_ijcf6Pl0lIlphzibyJMlz_FX_YbilEN529ikXEE')
    let newDiary = ref('')
    const diaries = ref([])
    const selectedDate = ref(new Date())





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
  diaries.value = data?.filter(diary => formatDate(diary.created_at) === formatDate(selectedDate.value));
}

  async function addDiary() {
  if (newDiary.value !== '') {
    const { data, error } = await supabase
      .from('Diary_Entries')
      .insert([{ message: newDiary.value }])
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


onMounted(() => {
  getDiaries()
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
</script>

<template>
  <div class="flex flex-col items-center mt-28 min-h-screen">
    <div>
        <h1 class="font-bold text-2xl text-blue-700 shadow-sm mb-3">Look back at previous entries</h1>
    </div>
   
      <VDatePicker value="selectedDate" @update:modelValue="onDateSelect" :attributes="attrs" />
      <div class="flex items-start gap-2.5 mt-2" v-for="diary in diaries">
    <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
       <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ new Date(diary.created_at).toLocaleDateString() }}</span>
       </div>
       <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{{ diary.message}}</p>
    </div>
    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
    </button>
    <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
       <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
          <li>
             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
          </li>
          <li>
             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
          </li>
          <li>
             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
          </li>
          <li>
             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
          </li>
          <li>
             <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
          </li>
       </ul>
    </div>
 </div>
      <!-- <li v-for="diary in diaries" :key="diary.id" class="bg-white p-4 rounded-lg shadow-md text-black">
        {{ diary.message }}</li>
    </messageBuble> -->
    
  </div>
</template>

<style lang="scss" scoped>

</style>