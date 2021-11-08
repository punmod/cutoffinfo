import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface College {
  value: string;
  viewValue: string;
}
interface Department {
  value: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();


  colleges: College[] = [
    {value: 'PGGC-11', viewValue: 'PGGC-11'},
    {value: 'PGGCG-11', viewValue: 'PGGCG-11'},
    {value: 'GHSC-10', viewValue: 'GHSC-10'},
    {value: 'PGGCG-42', viewValue: 'PGGCG-42'},
    {value: 'PGGC-46', viewValue: 'PGGC-46'},
    {value: 'GCE-20', viewValue: 'GCE-20'}
  ];

  departments: Department[]=[{value:'BIO-TECHNOLOGY'},{value:'BOTANY'},{value:'CHEMISTRY'},{value:'COMPUTER SCIENCE'},{value:'PHYSICS'},{value:'MATHEMATICS'}
  ,{value:'ZOOLOGY'},{value:'DEFENCE'},{value:'ECONOMICS'},{value:'ENGLISH'},{value:'GEOGRAPHY'},{value:'HINDI'},{value:'HISTORY'},
    {value:'MUSIC VOCAL'},{value:'PHILOSOPHY'},{value:'POLITICAL SCIENCE'},
    {value:'PSYCHOLOGY'},{value:'PUBLIC ADMINISTRATION'},{value:'PUNJABI'},{value:'SANSKRIT'},{value:'SOCIOLOGY'},{value:'STATISTICS'},
    {value:'COMMERCE'},{value:'BUSINESS ADMINSTRATION'},{value:'BCA'},{value:'IT'},{value:'PHYSICAL EDUCATION'}
    ]

    departments1=['BIO-TECHNOLOGY','BOTANY','CHEMISTRY','COMPUTER SCIENCE','PHYSICS','MATHEMATICS'
  ,'ZOOLOGY','DEFENCE','ECONOMICS','ENGLISH','GEOGRAPHY','HINDI','HISTORY',
    'MUSIC VOCAL','PHILOSOPHY','POLITICAL SCIENCE',
    'PSYCHOLOGY','PUBLIC ADMINISTRATION','PUNJABI','SANSKRIT','SOCIOLOGY','STATISTICS',
    'COMMERCE','BUSINESS ADMINSTRATION','BCA','IT','PHYSICAL EDUCATION'
    ]
  username: string;
  exampleForm: FormGroup;
  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'emailadd': [
      { type: 'required', message: 'email is required' },
      { type: 'email', message: 'Please provide proper email' }
    
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Minimum 8 Characters are required' }
    ]
  };

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  emailaddress: string;




  title = 'Chd Higher Edu';
  test : Date = new Date();
  focus;
  focus1;
  signuprequired: boolean;
forgotpasswordstatus:boolean;
signemailstatus:boolean;
closeResult:any;
uname:any;
constructor(public authservice:AuthService,public router:Router,public angularFireAuth: AngularFireAuth, private fb: FormBuilder,
  public dialog: MatDialog,) { 
  this.angularFireAuth.user.subscribe((res)=>{if(res){
                                         
                                            this.router.navigate(['lectureinfo']);
                                             }
                                      });


                                      
  this.signuprequired = false;
  this.forgotpasswordstatus= false;
  this.signemailstatus=false;
}

changesignupstatus(){
  if(this.signuprequired ==true)
  this.signuprequired = false;
  else
 { this.signuprequired = true;
  this.createForm();
   }
}

createForm() {
  this.exampleForm = this.fb.group({
   
    
    emailadd: ['',[Validators.required, Validators.email]],
    
    password:['',[Validators.required,Validators.minLength(8)]],
    
     });
}



  ngOnInit(): void {
  
  }
  forgotpasswordchangestatus()
  {
    this.forgotpasswordstatus =true;
    
  }
  signemail(){
    this.signemailstatus=true;
  }
  
  onSubmit(value){

  }
  resetpassword(email)
  { alert(email)
       this.angularFireAuth.sendPasswordResetEmail(email).then(()=>{alert("Password Reset link is sent on your registered email address");
       this.forgotpasswordstatus=false;
       }).catch((res)=>alert(res));
  }
  
}
