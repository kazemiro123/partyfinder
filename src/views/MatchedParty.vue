<template>
<div class="party-section">
    <div v-if="store.currentUser" class="card-customm">
      <br><br><br><br>
      <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
        <i class="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>You just matched with: {{store.matchedPartyData.partyEmail}} <br/> We'll be in touch shortly! See you in {{store.matchedPartyData.partyName}}</p>
        <img :src="store.matchedPartyData.partyImg">
    </div>
    <div v-if="!store.currentUser" class="error-message card-customm">
        <br><br><br><br>
        <span class="error-text">Matching could not be completed. Please make sure you are logged in!</span>
    </div>
    <br><br><br><br><br>
</div>
</template>

<script>
import store from '@/store.js'

export default{
    data:function(){
        return{
            store
        }
    },
    mounted(){
        console.log("matchs",store.currentUserEmail)
    }
}
</script>


<style scoped>
.card-custom {
    background-color:antiquewhite;
}
.party-section {
  text-align: center;
  padding: 40px 0;
  background: #EBF0F5;
  min-height:500px;
}
h1 {
  color: #88B04B;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 10px;
}
p {
  color: #404F5E;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-size:20px;
  margin: 0;
}
i {
  color: #9ABC66;
  font-size: 100px;
  line-height: 200px;
  margin-left:-15px;
}
.cardSuccess {
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #C8D0D8;
  display: inline-block;
  margin: 0 auto;
}
.error-message {
  background-color: #fce4e4;
  border: 1px solid #fcc2c3;
  float: left;
  padding: 20px 30px;
}

.error-text {
  color: #cc0033;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  text-shadow: 1px 1px rgba(250,250,250,.3);
}
</style>