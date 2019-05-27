<template>
      <div class="mb-5">
    <div class="container main_background">
      <div class="row">
        <div class="col-md-6 main_page_left">
          <img src="/static/img/payment1.svg">
        </div>
        <div class="col-md-6 main_page_right">
            <h1 class="text-center rave_text">Ride Completed</h1>
            <div class="ml-5 mt-3">
              
            <p><i class="fas fa-user pr-3"></i><strong>Driver:</strong> Damilola Sheriff</p>
            <p><i class="fas fa-receipt pr-3"></i><strong>Invoice Id:</strong> we56779uhj</p>
             <p class="pl-6"><i class="fas fa-location-arrow pr-3"></i><strong>Location:</strong>6 Badore Ajah, Lagos</p>
            <p class="pl-6"><i class="fas fa-location-arrow pr-3"></i><strong>Destination:</strong> 8 Providence Street, Lekki</p>
            <p><i class="fas fa-clock pr-3"></i><strong>Duration:</strong> 30mins</p>
            <p><i class="fas fa-motorcycle pr-3"></i><strong>Distance:</strong> 24km</p>
            <p><i class="fas fa-money-bill-alt pr-3"></i><strong>Amount:</strong> N2000</p>
            </div>

            <form>
                <div class="form-group">
                <!-- <input type="number" class="form-control" placeholder="Please enter your BVN for verification" v-model="user.bvn"><br> -->
                <div class="text-center"><button class="btn rave_button" type="button" @click="payWithRave">Pay Now</button></div>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
// import axios from "axios";
export default {
  data() {
    return {
        API_publicKey:"FLWPUBK_TEST-81e32bdd0374c120f85cde6e8d114662-X"
    };
  },

  methods:{
        payWithRave() {
            var x = getpaidSetup({
                PBFPubKey: this.API_publicKey,
                customer_email: "judith@gmail.com",
                amount: 2000,
                currency: "NGN",
                txref: "rave-123456",
                subaccounts: [
                {
                    id: "RS_1770B4221C5E9352F4BAD9ED1AA689A5"
                }
                ],
                meta: [{
                    metaname: "flightID",
                    metavalue: "AP1234"
                }],
                onclose: function() {},
                callback: function(response) {
                    var txref = response.tx.txRef; // collect flwRef returned and pass to a server page to complete status check.
                    console.log("This is the response returned after a charge", response);
                    if (
                        response.tx.chargeResponseCode == "00" ||
                        response.tx.chargeResponseCode == "0"
                    ) {
                        // redirect to a success page
                        // this.$router.push('Redirect') 
                    } else {
                        // redirect to a failure page.
                    }

                    x.close(); // use this to close the modal immediately after payment.
                }
            });
        }
    }
};
</script>

<style scoped>
.main_background{
  margin-top: 20px;
  margin-bottom: -100px;
}
.main_page_left img {
  width: 100%;
  margin-top: 70px;
}

.main_page_right {
  margin-top: 70px;
  margin-bottom: 75px;
}

.rave_button{
  background-color: 	#6db052;
  color: #ffff!important;
}
.rave_text {
  color: 	#6db052;
  font-size: 40px;
  font-weight: 700;
  font-family: 'Acme', sans-serif;
}


.rave_flow_text{
  color: #666;
}

.footer{
  margin-top: 200px !important;
}
</style>
