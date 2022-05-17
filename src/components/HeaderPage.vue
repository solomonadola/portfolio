<template>
    <div class="container flex flex-wrap justify-between items-center mx-auto " data-aos="zoom-out-left"
        data-aos-offset="200" data-aos-delay="500" data-aos-duration="2000" data-aos-easing="ease-in-out"
        data-aos-mirror="true" data-aos-once="false">
        <div>
            <a href="#" class="flex items-center py-1">
                <span
                    class="self-center text-xl font-normal whitespace-nowrap dark:text-green-500 hover:shadow-red-600 shadow-lg">sol</span>
            </a>

            <div class="fixed top-2 right-4 flex justify-end  md:order-2">

                <button @click="showclas = !showclas" data-collapse-toggle="mobile-menu-3" type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-3" aria-expanded="false">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>

        </div>

        <div class=" justify-between items-center w-full md:flex md:w-auto md:order-1 z-50 bg-transparent"
            :class="{ 'hidden': showclas }" id="mobile-menu-3">

            <ul class=" flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-normal">
                <li>
                    <a href="#"
                        class="block py-2 pr-4 pl-3 text-green-500 border-b-2 border-green-500 rounded-lg font-semibold shadow-lg hover:shadow-red-600"
                        aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#about"
                        class="block py-2  pr-4 pl-3 text-gray-500 border-b-2 font-semibold rounded-xl hover:text-green-500 transition duration-300 shadow-lg hover:shadow-red-600">About</a>
                </li>
                <li>
                    <a href="#resume"
                        class="block py-2  pr-4 pl-3 text-gray-500 border-b-2 font-semibold rounded-xl hover:text-green-500 transition duration-300 shadow-lg hover:shadow-red-600">Resume</a>
                </li>

                <li>
                    <a href="#services"
                        class="block py-2  pr-4 pl-3 text-gray-500 border-b-2 font-semibold rounded-xl hover:text-green-500 transition duration-300 shadow-lg hover:shadow-red-600">Services</a>
                </li>
               
                <li>
                    <a href="#contact"
                        class="block py-2  pr-4 pl-3 text-gray-500 border-b-2 font-semibold rounded-xl hover:text-green-500 transition duration-300 shadow-lg hover:shadow-red-600">Contact</a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            showclas: true
        }
    }
}
</script>
