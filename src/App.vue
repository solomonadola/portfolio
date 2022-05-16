<template>
  <nav class="fixed top-0 left-0 right-0 z-10 bg-zinc-900   px-2 sm:px-4 py-3 font-poppins" >
    <header-page></header-page>
  </nav>
  <my-intro></my-intro>
  <about-me></about-me>
  <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800   font-poppins ">
    <footer-page />
  </footer>

</template>

<script>
import FooterPage from "./components/FooterPage.vue"
import HeaderPage from "./components/HeaderPage.vue"
import MyIntro from "./components/MyIntro.vue"
import AboutMe from "./components/AboutMe.vue"

export default {
  components: {
    FooterPage,
    HeaderPage,
    MyIntro,
    AboutMe
  },
}
</script>
