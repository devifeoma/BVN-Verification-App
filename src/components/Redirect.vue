<template>
  <div>
    <div class="container main_background">
      <div class="row">
        <div class="col-md-4"></div>
         <div class="col-md-4">
            <img src="/static/img/success.svg" class="img-success">
            <!-- <h1>Thank you for riding with us</h1> -->
         </div>
          <div class="col-md-4"></div>
        
          <!-- <div class="redirect">
              {{message}}
          </div> -->
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        message: "Thank you for your support"
      }
    }
  }
</script>

<style scoped>
.main_background {
  margin-top: 10px;
  /* margin-bottom: -100px; */
}
.main_page_left img {
  height: 800px;
  width: 530px;
  margin-top: -170px;
}

.main_page_right {
  margin-top: 150px;
}

.rave_button {
  background-color: #6db052;
  color: #ffff !important;
}
.rave_text {
  color: #6db052;
  font-size: 40px;
  font-weight: 700;
  font-family: "Acme", sans-serif;
}

.rave_flow_text {
  color: #666;
}

.redirect{
    display: block;
    margin: auto;
}
/* .thank_you{
  display: block;
  margin: auto;
  background-color: red;
} */
.img-success{
  width: 100%;
  height: 100%;
  margin-bottom: 250px;
}
</style>
