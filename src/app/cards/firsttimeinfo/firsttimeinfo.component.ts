import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';


interface College {
  value: string;
  viewValue: string;
}
interface Department {
  value: string;
}
@Component({
  selector: 'app-firsttimeinfo',
  templateUrl: './firsttimeinfo.component.html',
  styleUrls: ['./firsttimeinfo.component.css']
})


export class FirsttimeinfoComponent implements OnInit {
  colleges: College[] = [
    {value: 'PGGC-11', viewValue: 'PGGC-11'},
    {value: 'PGGCG-11', viewValue: 'PGGCG-11'},
    {value: 'GHSC-10', viewValue: 'GHSC-10'},
    {value: 'PGGCG-42', viewValue: 'PGGCG-42'},
    {value: 'PGGC-46', viewValue: 'PGGC-46'},
    {value: 'GCE-20', viewValue: 'GCE-20'},
    {value: 'GGDSD-32', viewValue: 'GGDSD-32'},
    {value: 'DAV-10', viewValue: 'DAV-10'},
    {value: 'DSCW-45', viewValue: 'DSCW-45'},
    {value: 'DSCE-36', viewValue: 'DSCE-36'},
    {value: 'MCMDAV-36', viewValue: 'MCMDAV-36'},
    {value: 'SGGSC-26', viewValue: 'SGGSC-26'},
    {value: 'GSCW-26', viewValue: 'GSCW-26'},
    {value: 'GCBA-50', viewValue: 'GCBA-50'},
    {value: 'RIE-32', viewValue: 'RIE-32'}
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
    'college': [
      { type: 'required', message: 'College is required' }
    ]
  };

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  emailaddress: string;

  constructor(public authservice:AuthService,public router:Router,public angularFireAuth: AngularFireAuth,
    private fb: FormBuilder,
    public dialog: MatDialog,
     )
     {

this.angularFireAuth.user.subscribe((res)=>{this.username= res.displayName;
                                            this.emailaddress=res.email;
                                                this.createForm(); }  );
    
   }

  ngOnInit() {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
}

createForm() {
  this.exampleForm = this.fb.group({
    name: [this.username],
    college:[''],
  
    email:[this.emailaddress]
     });
}

private _filter(value: string): string[] {
  const filterValue = value.toUpperCase();

  return this.departments1.filter(option => option.toUpperCase().indexOf(filterValue) === 0);
}


onSubmit(value){
  value.department=this.myControl['_pendingValue'];
  this.authservice.saveuser(value);
//console.log(value); 
//console.log(this.myControl['_pendingValue']);
}

}
