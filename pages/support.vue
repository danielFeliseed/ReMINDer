<script setup>
import { ref } from 'vue'

let ariaHidden = ref(true)

function toggleModal() {
  ariaHidden.value = !ariaHidden.value
}
</script>
<template>
    <section class="bg-gray-50 dark:bg-gray-900 mt-[100px]">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We care about your feedback</h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at ReMINDer we are striving to make our service as simple and easy to use for our users. Please contact us if you notice any issues with anything and we will fix it as soon as possible.</p>
            

<!-- Modal toggle -->
<button @click="toggleModal" data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Read our FAQs
</button>

<!-- Main modal -->
<div v-show="!ariaHidden" id="default-modal" tabindex="-1" class=" overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    FAQs
                </h3>
               
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                        How do I see diary entries for a specific day?
                    </h4>
                    <p class="text-gray-500 dark:text-gray-400">
                        You can see diary entries for a specific day by clicking on the calendar section in the middle of the navigation bar at the top of the page. This will take you to the calendar page where you can select a specific day to view diary entries for.
                    </p>
                
                
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                        How do I add a diary entry?
                    </h4>
                    <p class="text-gray-500 dark:text-gray-400">
                        You can add a diary entry by clicking on the home section and then clicking on the add diary entry button.
                    </p>
                
                
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                        How do I edit a diary entry?
                    </h4>
                    <p class="text-gray-500 dark:text-gray-400">
                        You can edit a diary entry by clicking on the home section and then clicking on the edit button next to the diary entry you wish to edit.
                    </p>

                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                        How do I delete a diary entry?
                    </h4>
                    <p class="text-gray-500 dark:text-gray-400">
                        You can delete a diary entry by clicking on the home section and then clicking on the delete button next to the diary entry you wish to delete.
                    </p>
                
            </div>
            <!-- Modal footer -->
            <div class="flex justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button @click="toggleModal" data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                
            </div>
        </div>
    </div>
</div>

        </div>
        <div>
            <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                    Contact us
                </h2>
                <form class="mt-8 space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                    </div>
                    <div>
                        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your inquiry</label>
                        <textarea type="text" name="text" id="text" placeholder="I need help with ..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required> </textarea>
                    </div>
                    <div class="flex items-start">
                
                    </div>
                    <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit inquiry</button>
                   
                </form>
            </div>
        </div>
    </div>
</section>
</template>



<style lang="scss" scoped>

</style>