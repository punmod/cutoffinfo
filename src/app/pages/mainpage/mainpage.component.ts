import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  name:any;
  onlymainstatus: boolean;
  lectureinfostatus: boolean;
  realmain: any;
  lecturenumber: any;
  lectures: any;
  constructor(public angularFireAuth: AngularFireAuth,public route:ActivatedRoute, public firestore: AngularFirestore,public router:Router,public authservice:AuthService) { 
    this.onlymainstatus=true;
    this.lectureinfostatus=false;
    this.angularFireAuth.user.subscribe((res)=>{
      this.firestore.collection('usersfire').doc(res.email).get()
      .subscribe(docSnapshot => {
        if (docSnapshot.exists) {
       this.name=docSnapshot.get('name');
       this.lectures = docSnapshot.get('lecturerecords')   
     this.lecturenumber=this.lectures.length;
       this.router.navigate(['lectureinfo']);
    }
      else{//alert("Their is no record of user in firestore thus do something");
       this.router.navigate(['firsttimeinfo'])
    }
  });
  this.router.navigate(['lectureinfo']);
  });
}


  ngOnInit(): void {
   
  }

}



