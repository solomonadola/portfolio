<template>
    <div  id="contact" class="min-h-screen grid grid-cols-1 gap-10 items-center py-36 bg-slate-900 mt-2 p-10" >
        <div class="flex flex-col md:flex-row justify-center items-center" data-aos="flip-up">
            <div class="md:w-2/5 ">
                <h1 class="font-bold text-4xl pb-8 text-gray-200">
                    You might wonder how we can
                    <span class="text-green-600">place an order</span> or
                    <span class="text-green-600">hire</span> you
                </h1>
                <p class="font-bold text-2xl pb-8 text-gray-200">
                    I'm looking forward to meeting you. Please use one of the platforms
                    mentioned to hire me
                </p>
            </div>
            <div class="flex flex-col gap-5">
                <div class="bg-gray-200 p-5 rounded-lg hover:bg-gray-300">
                    <a href=""><img src="../assets/images/upwork.png" alt="" width="100" height="100" /></a>
                </div>
                <div class="bg-gray-200 px-5 py-2 rounded-lg hover:bg-gray-300">
                    <a href=""><img src="../assets/images/Fiverr.png" alt="" width="100" height="100" /></a>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row justify-center gap-5 pt-32" data-aos="zoom-in-down">
            <div class="md:w-1/4  sm:1/2">
                <form>
                    <div class="mb-6">
                        <input type="text" id="fullname"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required placeholder="Full name*" />
                    </div>

                    <div class="mb-6">
                        <input type="email" id="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="email*" required />
                    </div>

                    <div class="mb-6">
                        <textarea required
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            name="message" id="message" cols="30" rows="5"
                            placeholder="write your message*"></textarea>
                    </div>
                    <div class="flex justify-center">
                        <button type="submit"
                            class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full ">
                            send message
                        </button>
                    </div>

                </form>
            </div>

            <div class="md:w-2/5">
                <h1 class="font-bold text-4xl pb-8 text-gray-200">
                    <span class="text-green-600">Thanks</span> for your interest in my
                    work, feel free to contact me
                </h1>
                <p class="text-xl pb-8 text-gray-200">
                    Please share your thoughts with me. I will reply as soon as possible
                </p>
                <div class="flex flex-col md:flex-row gap-5 text-gray-200">
                    <p class="bg-gray-400 text-lg p-1 rounded-lg text-gray-800 border-2">
                        <fa icon="phone" /> +251984695747
                    </p>
                    <p class="bg-gray-400 text-lg p-1 rounded-lg text-gray-800 border-2">
                        <fa icon="envelope" /> solomonadola84@gmail.com
                    </p>
                </div>
                <div>
                    <div>
                        <ul class="text-gray-300 flex justify-start gap-3 p-5">
                            <li class="border-2 border-gray-600 p-2 rounded-full hover:border-white">
                                <a href="#" class="text-gray-400 hover:text-white">
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 44 44" aria-hidden="true">
                                        <path
                                            d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"
                                            id="Shape"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="border-2 border-gray-600 p-2 rounded-full hover:border-white">
                                <a href="#" class="text-gray-400 hover:text-white">
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
