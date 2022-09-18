<template>
<div>
<br><br><br>
    <div id="logreg-forms">
        <h1>Sign Up</h1>
        <form class="form-signup">
                <input v-model="full_name" type="text" id="user-name" class="form-control" placeholder="Full name">
                <input v-model="email" type="email" id="user-email" class="form-control" placeholder="Email address">
                <input v-model="password" type="password" id="user-pass" class="form-control" placeholder="Password">
                <input v-model="repeat_pass" type="password" id="user-repeatpass" class="form-control" placeholder="Repeat Password" required autofocus="">
                <p style="color:green" v-if="authSucces">Successfuly registered!</p>
                <p style="color:red" v-else>You are not registered.</p>
                <button @click.prevent="registerUser()" class="btn btn-primary btn-block" type="submit"><i class="fas fa-user-plus"></i> Sign Up</button>
                <p style="color:red" v-if="errorMessage">Passwords do not match.</p>
                <router-link to="/login" id="cancel_signup"><i class="fas fa-angle-left"></i> Login</router-link>
        </form>       
    </div>
</div>
</template>

<script>
import { firebase, db } from '@/firebase.js'

export default{
    data: function(){
        return {
            full_name: "",
            email: "",
            password: "",
            repeat_pass: "",
            authSucces: false,
            errorMessage: false,
        }
    },
    methods: {
        registerUser(){
            console.log("Check if firebase exists: ",firebase)
            if(this.password===this.repeat_pass)
            {
            try {
                    firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
                    const singleMail = this.email;
                    db.collection("User")
                    .doc(singleMail)
                    .set({
                        FullName: this.full_name,
                        Email: this.email,
                        Password: this.password
                    });
                    this.authSucces = true;
            }
            catch(error) {}
            }
            else{
                this.errorMessage=true;
            }
        }
    }
}
</script>


<style scoped>

#logreg-forms{
    width:412px;
    margin:10vh auto;
    background-color:#f3f3f3;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
#logreg-forms form {
    width: 100%;
    max-width: 410px;
    padding: 15px;
    margin: auto;
}
#logreg-forms .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}
#logreg-forms .form-control:focus { z-index: 2; }
#logreg-forms .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
#logreg-forms .form-signin input[type="password"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

#logreg-forms .social-login{
    width:390px;
    margin:0 auto;
    margin-bottom: 14px;
}
#logreg-forms .social-btn{
    font-weight: 100;
    color:white;
    width:190px;
    font-size: 0.9rem;
}

#logreg-forms a{
    display: block;
    padding-top:10px;
    color:lightseagreen;
}

#logreg-form .lines{
    width:200px;
    border:1px solid red;
}


#logreg-forms button[type="submit"]{ margin-top:10px; }

#logreg-forms .facebook-btn{  background-color:#3C589C; }

#logreg-forms .google-btn{ background-color: #DF4B3B; }



#logreg-forms .form-signup .social-btn{ width:210px; }

#logreg-forms .form-signup input { margin-bottom: 2px;}

.form-signup .social-login{
    width:210px !important;
    margin: 0 auto;
}

/* Mobile */

@media screen and (max-width:500px){
    #logreg-forms{
        width:300px;
    }
    
    #logreg-forms  .social-login{
        width:200px;
        margin:0 auto;
        margin-bottom: 10px;
    }
    #logreg-forms  .social-btn{
        font-size: 1.3rem;
        font-weight: 100;
        color:white;
        width:200px;
        height: 56px;
        
    }
    #logreg-forms .social-btn:nth-child(1){
        margin-bottom: 5px;
    }
    #logreg-forms  .facebook-btn:after{
        content:'Facebook';
    }
  
    #logreg-forms  .google-btn:after{
        content:'Google+';
    }
    
}
</style>