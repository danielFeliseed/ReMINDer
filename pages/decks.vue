<script setup>
// import { ref } from '#imports'
// import { defineProps, ref } from 'vue'
import DeckCreateModal from '@/Components/DeckCreateModal.vue'



// const supabase = createClient('https://kcvidtaxrohxytzkdygi.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdmlkdGF4cm9oeHl0emtkeWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MTk1NTksImV4cCI6MjAxODI5NTU1OX0.J8F_ijcf6Pl0lIlphzibyJMlz_FX_YbilEN529ikXEE')
// const user = useSupabaseUser()
// const diaries = ref([])
// const selectedDate = ref(new Date())
// const date = ref(new Date())
// let toastHidden = ref(true)
// let editedToastHidden = ref(true)
// let editedDiary = ref({
//   message: '',
//   id: ''
// })

// let showAria = ref([])
// let modalHidden = ref(true)
// let currentEditingId = ref(null)


// function toggleDropdown(index) {
//   showAria.value[index] = !showAria.value[index];
// }

// function openModal(diary) {
//   // currentEditingId.value = diary.value.id
//   console.log(diary)
//   editedDiary = diary
//   modalHidden.value = false
// }

// async function deleteDiary(id) {
//   const { error } = await supabase
//     .from('Diary_Entries')
//     .delete()
//     .eq('id', id)

//   if (error) {
//     console.log(error)
//   } else {
//     toastHidden.value = !toastHidden.value
//     await getDiaries()
//   }
// }

// async function updateDiary() {
//   console.log(editedDiary)
//   if (editedDiary.message) {
//     const { error } = await supabase
//       .from('Diary_Entries')
//       .update({ message: editedDiary?.message })
//       .eq("id", editedDiary.id) // Maybe?
//     console.log(error)

//     getDiaries()
//     editedToastHidden.value = !editedToastHidden.value
//     modalHidden.value = true
//     currentEditingId.value = null

//   }
// }

/*make sure to console log in the right places such as before and after if statements,
inside if statements and outside if statements
*/
// console.log(editedDiary.value)
// console.log(diaries.value)



// const attrs = ref([
//   {
//     key: 'today',
//     highlight: {
//       color: 'green',
//       fillMode: 'solid'
//     },
//     dates: new Date()
//   }
// ])

// function formatDate(date) {
//   const d = new Date(date)
//   const year = d.getFullYear()
//   const month = ('0' + (d.getMonth() + 1)).slice(-2)
//   const day = ('0' + d.getDate()).slice(-2)
//   return `${year}-${month}-${day}`
// }

// async function onDateSelect(date) {
//   console.log(date)
//   selectedDate.value = date
//   await getDiaries();
// }

// async function getDiaries() {
//   const { data } = await supabase.
//     from('Diary_Entries')
//     .select()
//     .match({ user_id: user?.value?.id })
//   diaries.value = data?.filter(diary => formatDate(diary?.created_at) === formatDate(selectedDate.value));
// }

// onMounted(async () => {
//   getDiaries()
//   showAria.value = diaries.value.map(() => false)
// })

// const props = defineProps({
//     user: Object,
//     decks: Array,
// });

// const decks = props.decks;

// let deckIdToDelete = ref(null);
// let showDeleteModal = ref(false);
// const toggleDeleteModal = (id = null) => {
//     deckIdToDelete.value = id;
//     showDeleteModal.value = !showDeleteModal.value;
// }
// let modalVisible = ref(false);

// const toggleDeckCreateModal = () => {
//     modalVisible.value = !modalVisible.value;
// }

</script>


<template >

<div class="mt-[80px]"></div>
    <div class=" flex justify-between mx-2">
        <a href="/home" class=" button border text-center md:self-start rounded-lg px-2 bg-zinc-950 hover:bg-slate-900 text-white ml-3 py-2 w-48 whitespace-nowrap">Back to Card Creator</a>
        <button @click="toggleDeckCreateModal" class=" mr-3 button border text-center md:self-start rounded-lg px-2 bg-zinc-950 hover:bg-slate-900 text-white ml-3 py-2 w-48 whitespace-nowrap">Create a New Deck</button>
    </div>
    <DeckCreateModal class="relative" :modalVisible="modalVisible" />
    <div class="md:grid md:grid-cols-3 pb-16 md:pb-0">
        <div  class="mt-16 flex flex-col items-center justify-center">
            
            <div  class="stack bg-green-700"> 
                <!-- <a  class="text-center border border-base-content shadow-md card w-[300px] bg-base-100">
                    <span class=" card-body text-2xl font-semibold text-gray-100"></span>
                </a> -->
                <a    class=" transform transition-transform duration-500 hover:rotate-12 text-center hover:shadow-2xl hover: flex items-center justify-center border border-base-content shadow-md card h-56 w-[300px] bg-base-100">
                    <span class=" self-center text-center justify-center card-body font-extrabold text-3xl  text-white"> Vue.js</span>
                </a>
                <!-- <a  class="text-center border border-base-content shadow card h-56 w-[300px] bg-base-100">
                    <span class=" card-body">2</span>
                </a>
                <a   class="text-center border border-base-content shadow-sm card h-56 w-[300px] bg-base-100">
                     <span class=" card-body">3</span>
                </a> -->
            </div>
            
            <div class=" flex gap-3 mt-5 w-1/2 items-center">
                <button  data-modal-target="popup-modal" data-modal-toggle="popup-modal" class=" text-gray-200 hover:bg-red-800 text-center w-full border mx-auto bg-slate-800 px-2 py-1 rounded-md">Delete</button>
                <div class="tooltip tooltip-bottom " >
                    <button class="btn bg-slate-800 rounded-xl">?</button>
                </div>
            </div>
        </div>
            <!-- Delete Modal -->
            <Transition :duration="550" />
            <div v-show="showDeleteModal" id="popup-modal" tabindex="-3" class="flex overflow-y-auto overflow-x-hidden absolute z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class=" p-4 w-full max-w-md max-h-full ">
                    <div class="relative rounded-lg shadow dark:bg-gray-700">
                        <button @click="toggleDeleteModal()"  type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 md:p-5 text-center">
                            <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                            <button  data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Yes, I'm sure
                            </button>
                            <button @click="toggleDeleteModal()"  data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                     </div>
                </div>
            </div>
            <Transition />
     </div>
     <!-- <DeckCreateModal class="relative" :modalVisible="modalVisible" /> -->
</div>
  
</template>

