<template>

    <div class="bg-slate-900 min-h-screen">
        <div data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            class=" p-16 grid grid-cols-1 md:grid-cols-2  justify-items-center mt-2 md:space-x-10 md:pt-36" id="resume">
            <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
                data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                <h1 class="font-bold  text-4xl pb-8  text-green-600">Education</h1>
                <div class="grid grid-cols-2  pb-8">
                    <div class="text-green-600">


                        <p>Aug 2021-</p>
                        <p>present</p>

                    </div>
                    <div>
                        <p class="font-bold  text-xl text-green-600">Full Stack Web Development</p>
                        <div class="font-thin  text-sm text-gray-400 ">
                            <h3>Zero to Mastery, Udemy, Coursera</h3>
                        </div>

                    </div>

                </div>
                <div class="grid grid-cols-2 pb-8">
                    <div class="text-green-600">
                        <p>Sept 2019-</p>
                        <p>present</p>
                    </div>
                    <div>
                        <p class="font-bold  text-xl text-green-600">Computer Science and Engineering</p>
                        <h3 class="font-thin  text-sm text-gray-400 ">Adama Science and Technology University</h3>
                    </div>

                </div>
            </div>
            <div data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
                data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                <h1 class="font-bold  text-4xl pb-8  text-green-600">Experience</h1>
                <div class="grid grid-cols-2 pb-8">
                    <div class="text-green-600">
                        <p>Nov 2021-</p>
                        <p>present</p>
                    </div>
                    <div>
                        <p class="font-bold  text-xl text-green-600">Freelance Web Development</p>
                        <h3 class="font-thin  text-sm text-gray-400 ">remote</h3>
                    </div>

                </div>
            </div>

        </div>
        <div class="flex flex-col md:flex-row justify-center gap-10 items-center px-10" data-aos="flip-left">
            <div class="flex flex-row gap-5 justify-center items-center  border-green-600 border-2 rounded-full w-60 h-60">
                <div><img src="../assets/images/vuejss.png" alt="" width="50" height="50"></div>
                <div><img src="../assets/images/nux.png" alt="" width="50" height="50"></div>
                <div><img src="../assets/images/laravel.png" alt="" width="50" height="50"></div>
            </div>
            <div class="sm:w-96">
                <h1 class="font-bold  text-4xl pb-8  text-gray-200"><span class="text-green-600">Skills </span>that I am
                    highly experienced with</h1>
                <p class="  text-2xl pb-8  text-gray-200">
                    I am quite comfortable working with <span class="text-green-600">Vuejs</span> , <span
                        class="text-green-600">Nuxtjs</span>, <span class="text-green-600">PWA</span>,
                    <span class="text-red-600">Laravel</span> and many other technologies
                </p>
            </div>
        </div>

        <!-- <div class=" flex flex-col justify-center gap-10  pb-16 md:flex-row p-10 ">
            <div class="md:w-1/2" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="500" data-aos-duration="1000"
                data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                <h1 class="font-bold  text-4xl pb-8  text-green-600">Coding Skills</h1>
                <div class="flex flex-col gap-5">

                    <div>
                        <div class="mb-1 text-base font-medium text-green-600">HTML/CSS</div>
                        <div class="w-full bg-gray-200 rounded-full h-6">
                            <div class="bg-green-600 h-6 rounded-full text-center" style="width: 90%;"> 90%</div>
                        </div>
                    </div>

                    <div>
                        <div class="mb-1 text-base font-medium text-green-600">JavaScript</div>
                        <div class="w-full bg-gray-200 rounded-full h-6">
                            <div class="bg-green-600 h-6 rounded-full text-center" style="width: 70%;"> 70%</div>
                        </div>
                    </div>



                    <div>
                        <div class="mb-1 text-base font-medium text-green-600">VUE/NUXT</div>
                        <div class="w-full bg-gray-200 rounded-full h-6">
                            <div class="bg-green-600 h-6 rounded-full text-center" style="width: 70%;"> 70%</div>
                        </div>
                    </div>


                    <div>
                        <div class="mb-1 text-base font-medium text-green-600">PHP/LARAVEL</div>
                        <div class="w-full bg-gray-200 rounded-full h-6">
                            <div class="bg-green-600 h-6 rounded-full text-center" style="width: 60%;"> 60%</div>
                        </div>
                    </div>


                    <div>
                        <div class="mb-1 text-base font-medium text-green-600">DATABASE DESIGN</div>
                        <div class="w-full bg-gray-200 rounded-full h-6">
                            <div class="bg-green-600 h-6 rounded-full text-center" style="width: 55%;"> 55%</div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="md:w-1/2" data-aos="zoom-in-up" data-aos-offset="200" data-aos-delay="500"
                data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                <h1 class="font-bold  text-4xl pb-8  text-green-600">Other Skills</h1>
                <div class="flex flex-col gap-5">

                    <div>
                        <div class="mb-1 text-base font-medium text-green-600">PHOTOSHOP</div>
                        <div class="w-full bg-gray-200 rounded-full h-6">
                            <div class="bg-green-600 h-6 rounded-full text-center" style="width: 60%;"> 60%</div>
                        </div>
                    </div>
                    <div>
                        <div class="mb-1 text-base font-medium text-green-600">ILLUSTRATOR</div>
                        <div class="w-full bg-gray-200 rounded-full h-6">
                            <div class="bg-green-600 h-6 rounded-full text-center" style="width: 50%;"> 50%</div>
                        </div>
                    </div>

                    <div>
                        <div class="mb-1 text-base font-medium text-green-600">VIDEO EDITING</div>
                        <div class="w-full bg-gray-200 rounded-full h-6">
                            <div class="bg-green-600 h-6 rounded-full text-center" style="width: 50%;"> 50%</div>
                        </div>
                    </div>


                </div>
            </div>
        </div> -->
        <div class="flex justify-end p-10">
            <a class="bg-green-600 p-4 text-white rounded-lg hover:bg-green-400 hover:text-slate-900" href="">DOWNLOAD
                RESUME</a>
        </div>
    </div>

</template>