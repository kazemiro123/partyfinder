<template>
    <section class="page-section" id="contact">
        <br><br><br><br><br><br><br>
            <div class="container">
                <!-- Contact Section Heading-->
                <h2 style="color:#1e88e5;" class="page-section-heading text-center text-uppercase mb-0">Make a party</h2>
                <!-- Icon Divider-->   <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div class="form-floating mb-3">
                                <input v-model="party_name" class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Party name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="party_location" class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="location">Party location</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="img_url" class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="image">Party image</label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea v-model="party_desc" class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                            </div>
                                <form class="form-inline" role="form">
                                    <div class="form-group">
                                    <label class="control-label">People expected: </label>
                                    </div>
                                    <div class="form-group">
                                    <div class="radio" style="margin-left:15px">
                                        <label class="radio-inline control-label">
                                        <input type="radio" id="amount_25" name="amount" checked="" v-model="amount_50">
                                        50
                                        </label>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <div class="radio" style="margin-left:15px">
                                        <label class="radio-inline control-label">
                                        <input type="radio" id="amount_50" name="amount" v-model="amount_150">
                                        150
                                        </label>
                                    </div>
                                    </div>
                                    <div class="form-group">
                                    <div class="radio" style="margin-left:15px">
                                        <label class="radio-inline control-label">
                                        <input type="radio" id="amount_100" name="amount" v-model="amount_300">
                                        300+
                                        </label>
                                    </div>
                                    </div>
                                </form>
                            <!-- Message input-->
                            <!---->
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            <button class="btn btn-primary btn-xl" @click.prevent="sendPartyData()" style="margin-top:20px" id="submitButton">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import store from '@/store.js'
import { firebase, db } from '@/firebase.js'
export default{
    data:function(){
        return{
            store,
            party_name:"",
            party_location:"",
            img_url:"",
            party_desc:"",
            amount_50:"",
            amount_150:"",
            amount_300:""
        }
    },
    methods:{
        sendPartyData(){
            console.log("trying",store.currentUserEmail)
            let selected_amount
            if(this.amount_50!=""){
                selected_amount="50";
            }
            else if(this.amount_150!=""){
                selected_amount="150";
            }
            else if(this.amount_300!=""){
                selected_amount="300+";
            }
            try {
                console.log(this.party_name,this.party_location,this.img_url,store.currentUserEmail,selected_amount)
                db.collection("party")
                    .doc()
                    .set({
                        party_name: this.party_name,
                        party_location: this.party_location,
                        img_url: this.img_url,
                        party_desc: this.party_desc,
                        userEmail: store.currentUserEmail,
                        selected_amount: selected_amount
                    });
            }
            catch(error) {}
        }
    }
}
</script>


<style scoped>

.divider-custom {
  margin: 1.25rem 0 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.divider-custom .divider-custom-line {
  width: 100%;
  max-width: 7rem;
  height: 0.25rem;
  background-color: red;
  border-radius: 1rem;
  border-color: red;
}
.divider-custom .divider-custom-line:first-child {
  margin-right: 1rem;
}
.divider-custom .divider-custom-line:last-child {
  margin-left: 1rem;
}
.divider-custom .divider-custom-icon {
  color: #1e88e5;
  font-size: 2rem;
}
.text-color{
    color:#1e88e5;
}

</style>