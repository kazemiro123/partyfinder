<template>
    <div class="container">
  
        <h2>List group with Badges</h2>
        <br><br><br>
        <ul v-for="matchedParties in partyData" :key="matchedParties.id" class="list-group">
            <li class="list-group-item">You matched with: {{matchedParties.pairedUser}}<span class="badge">{{matchedParties.partyDate}}</span></li>
            <li class="list-group-item">And this is his party: {{matchedParties.partyName}}<span class="badge">{{matchedParties.partyDate}}</span></li>
            <li class="list-group-item">Come to {{matchedParties.partyLocation}}<span class="badge">{{matchedParties.partyDate}}</span></li>
        </ul>
    </div>
</template>

<script>
import { db } from '@/firebase.js'
import store from '@/store.js'

export default{
    data:function(){
        return{
        store,
        partyData:[],
        }
    },
    methods:{
        fetchPartyInfo() {
            db.collection("MatchedParties")
            .get()
            .then((query) => {
                
                query.forEach((doc) => {
                    const data = doc.data();
                    console.log(data);
                    if(data.currentUser==store.currentUserEmail){
                        this.partyData.push({
                            currentUser: data.currentUser,
                            partyName: data.partyName,
                            pairedUser: data.pairedUser,
                            partyDate: data.partyDate,
                            partyLocation: data.partyLocation,
                        })
                }});
            });
            
        },
    },
    mounted(){
        this.fetchPartyInfo();
    }
}
</script>
