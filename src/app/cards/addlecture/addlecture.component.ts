import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';

interface Classcollege {
  value: string;
  
}
interface Semester {
  value: string;
}
interface Mode {
  value: string;
}
export interface lectrecordsi {
  class: string;
  totalstudents:string;
  UTgencoff: string;
  UTsccoff:string;
  outgencoff: string;
  outsccoff:string;
  outstcoff:string;
  UTgenh: string;
  UTsch:string;
  outgenh: string;
  outsch:string;
  outsth:string;
  country:string;
}
@Component({
  selector: 'app-addlecture',
  templateUrl: './addlecture.component.html',
  styleUrls: ['./addlecture.component.css']
})
export class AddlectureComponent implements OnInit {

  @ViewChild('picker') picker: any;

  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  classes: Classcollege[] = [
    {value: 'BA I'},
    {value: 'BSc I(Non-Med)'},
    {value: 'BSc I(Med)'},
    {value: 'BCOM I'},
    {value: 'BCA I'},
    {value: 'BBA I'},
    {value: 'BPed I'}
    
      
  ];

  semesters: Semester[] = [
    {value: 'I'},
    {value: 'II'},
    {value: 'III'},
    {value: 'IV'},
    {value: 'V'},
    {value: 'VI'}      
  ];
  modes: Mode[] = [
    {value: 'Google Meet'},
    {value: 'Youtube Stream'},
    {value: 'Recorded Lecture'},
    {value: 'Audio PPT'},
    {value: 'Other'},
       
  ];

  
  username: string;
  exampleForm: FormGroup;
  validation_messages = {
    'class': [
      { type: 'required', message: 'Class is required' }
    ],
     'totalstudents': [
      { type: 'required', message: 'This field is required' }
    ],
    'UTgencoff': [
      { type: 'required', message: 'This field is required' }
    ],
    'UTsccoff': [
      { type: 'required', message: 'This field is required' }
    ],
     'outgencoff': [
      { type: 'required', message: 'This field is required' }
    ],
    'outsccoff': [
      { type: 'required', message: 'This field is required' }
    ],
    'outstcoff': [
      { type: 'required', message: 'This field is required' }
    ]
    
    
  };

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  emailaddress: string;
  stateCtrl: any;
  optionselectedstatus: boolean;

  /*public formGroup = new FormGroup({
    date: new FormControl(null, [Validators.required]),
    date2: new FormControl(null, [Validators.required])
  })*/
  //public dateControl = new FormControl(new Date(2021,9,4,5,6,7));
  //public dateControlMinMax = new FormControl(new Date());

  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  public listColors = ['primary', 'accent', 'warn'];

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];

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

  
}

createForm() {
  this.exampleForm = this.fb.group({
    class: [''],
    totalstudents:[''],
    UTgencoff:[''],
    UTsccoff:[''],
    outgencoff:[''],
    outsccoff:[''],
    outstcoff:[''],
    UTgenh:[''],
    UTsch:[''],
    outgenh:[''],
    outsch:[''],
    outsth:['']
     });
}



onSubmit(value){
  this.authservice.savelectureinfo(value);
  this.router.navigate(['lectureinfo']);
//console.log(value); 
//console.log(this.myControl['_pendingValue']);
}

}
