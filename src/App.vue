<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    appNavbar: Navbar,
    appFooter: Footer
  }
};
</script>

