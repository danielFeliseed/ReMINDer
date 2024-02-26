<script setup>
// import { ref } from 'vue'
// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient('https://kcvidtaxrohxytzkdygi.supabase.co', 
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdmlkdGF4cm9oeHl0emtkeWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MTk1NTksImV4cCI6MjAxODI5NTU1OX0.J8F_ijcf6Pl0lIlphzibyJMlz_FX_YbilEN529ikXEE')
const supabase = useSupabaseClient()
const user = useSupabaseUser()
import StatsGraph from '../Components/StatsGraph.vue';
import CardForm from '../Components/CardForm.vue';


const props = defineProps({
   user: Object,
});
// async function getDiaries() {
//   const { data } = await supabase
//     .from('Diary_Entries')
//     .select()
// }

// async function addDiary() {
//   if (newDiary.value !== '') {
//     const { data, error } = await supabase
//       .from('Diary_Entries')
//       .insert([{ message: newDiary.value, user_id: user?.value?.id }])
//       .single()

//     if (error) {
//       console.log(error)
//     } else {
//       diaries.value.push(data)
//       newDiary.value = ''
//       window.scrollTo(0, 0)
//       toastHidden.value = !toastHidden.value
//       getDiaries()


      
//     }
//   }
// }



</script>

<template>
  

  

  <div class=" w-full flex flex-col items-center md:items-stretch md:mx-8">

     <div class=" w-full flex flex-col md:flex-row items-center justify-center md:flex mt-7 gap-5">
        <!--TODO: Fix the issue where the Create deck modal only opens once without reloading-->
        <CardForm class=" w-3/4 md:w-1/2 mb-5 md:mb-0" />
        <StatsGraph class="w-full" />
     </div>
     

     
  </div>


</template>


<style>


</style>
