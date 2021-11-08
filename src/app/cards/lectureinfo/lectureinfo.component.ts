import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireAuth } from '@angular/fire/auth';


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
  }
@Component({
  selector: 'app-lectureinfo',
  templateUrl: './lectureinfo.component.html',
  styleUrls: ['./lectureinfo.component.css']
})
export class LectureinfoComponent implements OnInit {
//  displayedColumnsmob: string[] = ['Class','Date&Time','Details'];

//  displayedColumnspc: string[] = ['Class','Subject', 'Date&Time','Topic_Covered',"Present", "Absent",];
@ViewChild(MatSort,{static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['class','totalstudents','UTgencoff','UTsccoff','outgencoff','outsccoff','outstcoff'];

  lectureinfostatus: boolean;
lectrecords:any[];
robj:any;
j:any; i:any;
uemail:string;
currentuseremail:string;
loggedin:boolean
  dataSource: MatTableDataSource<lectrecordsi>;
  constructor(public authservice:AuthService,public angularFireAuth:AngularFireAuth,public router:Router ,public firestore: AngularFirestore   )
     {
      
   }
  ngOnInit() {
    
    this.angularFireAuth.user.subscribe((res)=>{if(res){
      this.loggedin=true;  this.currentuseremail =res.email         }
     
     
    this.firestore.collection('usersfire').doc(this.currentuseremail).valueChanges()
      .subscribe((lrecs)=>{    if(lrecs){
                this.robj=lrecs; this.lectrecords=this.robj.lecturerecords; 
                  
               /*  this.i=0;
                   for ( this.j in this.lectrecords){
                    this.lectrecords[this.i].dateControl= (this.lectrecords[this.i].dateControl.toDate()).toString() // = this.j.dateControl.seconds*1000;
                       this.i=this.i+1;
                          
                   } */
                this.dataSource = new MatTableDataSource<lectrecordsi>(this.lectrecords);
               console.log("Firestore is referred");
            
                setTimeout(()=>{       this.dataSource.sort=this.sort; 
                  this.dataSource.paginator = this.paginator;
                
                      },500);
                      this.lectureinfostatus=true;
                                  } else{this.router.navigate(['firsttimeinfo'])}});
     
                                })
    
  }
  changelectureinfostatus(){
   
    this.router.navigate(['cutoff']) 
    setTimeout(()=>{       this.dataSource.sort=this.sort; 
      this.dataSource.paginator = this.paginator;
    
          },500);
         
  }
  
  taketomainpage()
  {     
    this.router.navigate(['']);
  }

}
