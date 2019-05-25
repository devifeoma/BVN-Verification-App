<template>
  <div class="container">
    <app-main-page></app-main-page>
  </div>
</template>

<script>
  import MainPage from "../components/MainPage.vue";
  export default {
    name: "Home",
    components: {
      appMainPage: MainPage,
    }
  };
</script>

