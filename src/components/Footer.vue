<template>

    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h3 class="footer-title">RaveRide</h3>
            <p>RaveRide verifies your BVN and makes payment easy for you from anywhere.</p>
          </div>
          <div class="col-md-2 footer-column">
            <p>Contact</p>
            <ul class="footer-list">
              <li>
                <a>Registration</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 footer-column">
            <p>Help</p>
            <ul class="footer-list">
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>How it works</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 footer-column">
            <p>Stay Connected</p>
            <!-- <div>
              <span>
                <i class="fab fa-facebook"></i>
              </span>
              <span>
                <i class="fab fa-instagram"></i>
              </span>
              <span>
                <i class="fab fa-twitter-square"></i>
              </span>
            </div> -->
          </div>
          <div class="col-md-2 footer-column">
            <p>Back to top</p>
          </div>
        </div>
      </div>

      <div class="text-center sub-footer">
        <p>©{{ new Date().getFullYear() }}  RaveRide</p>
      </div>
    </div>

</template>

<script>
export default {
  data() {}
};
</script>

<style scoped>
.footer {
  background-color: #6c63ff;
  max-height: 100%;
  margin-top: 0px;
  padding-top: 80px;
}

.footer h3 {
  color: #ffffff;
  font-weight: 700;
}
.footer p {
  color: #ffffff;
}

ul.footer-list {
  list-style: none;
  color: #fff;
}

.footer-column p {
  padding-left: 40px;
}
.sub-footer {
  background-color: #3d35c4;
  color: #fff;
  height: 70px;
  padding-top: 30px;
}
</style>
