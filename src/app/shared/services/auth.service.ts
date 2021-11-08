import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedin: boolean;
  currentuseremail: string;

  constructor(public angularFireAuth: AngularFireAuth, public firestore: AngularFirestore,public router:Router) {

    this.loggedin=false;
    this.angularFireAuth.user.subscribe((res)=>{if(res){
                                                     this.loggedin=true;  this.currentuseremail =res.email         }
                                                    
                                                    })
   }
   signingoogle(){
    this.angularFireAuth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((user) => { ;
     
}).catch((e)=>alert(e));
  }

saveuser(value){
this.firestore.collection('usersfire').doc(value.email).set(value, { merge: true }).then(()=>{
  console.log("Writing in firestore has happened");                                                                        
  this.router.navigate(['']);

                                                                                               })

}
Logout()
{
this.angularFireAuth.signOut().then(()=>this.router.navigate(['']));

}
loginunamepassword(email, password){
this.angularFireAuth.signInWithEmailAndPassword(email,password).then().catch((res)=>alert(res))

}
signupwithemailpassword(value){
this.angularFireAuth.createUserWithEmailAndPassword(value.emailadd,value.password).then(()=>this.router.navigate(['']));

}
resetpassword(email){

return this.angularFireAuth.sendPasswordResetEmail(email)
}

savelectureinfo(lecturedatarecord){
  //this.firestore.collection('usersfire').doc(lecturedatarecord.email).set(lecturedatarecord, { merge: true }).then(()=>this.router.navigate(['mainpage']))
  
  /*this.firestore.collection('usersfire')
  .doc(lecturedatarecord.email)
  .set(
    { lecturerecords: [lecturedatarecord] },
    { merge: true }
  )*/
  
    this.firestore.collection('usersfire')
  .doc(this.currentuseremail)
  .set({ lecturerecords:firebase.firestore.FieldValue.arrayUnion( lecturedatarecord),
      time:firebase.firestore.FieldValue.serverTimestamp()}, { merge: true} ).then(()=>console.log("Writing of lectureinfo in firestore happened"));

}
}
