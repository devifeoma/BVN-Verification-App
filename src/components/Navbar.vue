<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-style">
      <router-link to="/" class="nav-link btn pay_botton rave_ride">RaveRide</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/Bvn" class="nav-link btn pay_botton">Verify your BVN here</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link pay_botton">|</a>
          </li>
          <li class="nav-item">
            <router-link to="/Pay-for-ride" class="nav-link btn pay_botton">Pay for Ride</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>


<style scoped>
.navbar-style {
  background-color: #6c63ff !important;
}

.rave_ride {
  font-size: 30px;
  font-weight: 700;
  font-family: "Acme", sans-serif;
}
.pay_botton {
  color: #fff !important;
}
</style>