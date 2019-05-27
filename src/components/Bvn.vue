<template>
  <div>
    <div class="container main_background">
      <div class="row">
        <div class="col-md-6 main_page_left">
          <img src="/static/img/payment1.svg">
        </div>
        <div class="col-md-6 main_page_right">
          <h1 class="text-center rave_text">BVN Verification</h1>
          <p></p>
          <form @submit.prevent="verifyUser">
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                placeholder="Please enter your BVN for verification"
                v-model="user.bvn"
              >
              <br>
              <div class="text-center">
                <button :disabled="isDisabled" class="btn rave_button">Verify BVN</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        bvn: ""
      }
    };
  },

  computed: {
    isDisabled() {
      if (this.user.bvn) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    start() {
      this.$Progress.start();
    },
    finish() {
      this.$Progress.finish();
    },
    fail() {
      this.$Progress.fail();
    },
    verifyUser() {
      let verifyUser = {
        bvn: this.user.bvn
      };
      console.log("my bvn", this.user.bvn.length);
      if(this.user.bvn.length < 11 || this.user.bvn.length > 11){
        swal("Please enter a valid BVN number");
        return (false);
      }
       this.$Progress.start();
      axios
        .get(
          "https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/12345678901?seckey=FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X"
        )
        .then(res => {
          console.log(res.data);
           this.$Progress.finish();
          swal({
            title: "Your BVN is successfully verified",
            // text: "You clicked the button!",
            icon: "success",
            button: "Ok"
          });
        })
        .catch(err => {
          this.$Progress.fail();
          console.log(err);
          swal({
            title: "Sorry your BNV is not valid",
            // text: "You clicked the button!",
            icon: "error",
            // type: "danger",
            button: "Ok"
          });
        });
    }
  }
};
</script>

<style scoped>
.main_background {
  margin-top: 20px;
  margin-bottom: -100px;
}
.main_page_left img {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 150px;
}

.main_page_right {
  margin-top: 90px;
  margin-bottom: 120px;
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
</style>
