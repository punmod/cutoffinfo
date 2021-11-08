import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  element: any;
  subject: string;
  mode: string;
  class: string;
  topiccovered: string;
  datecontrol: string;
  urllink: string;
  innerWidth: number;
  mobstatus: boolean;
  semester: string;
  numberpresent: string;
  numberabsent: string;

  constructor(private actRoute: ActivatedRoute, 
  private router: Router     ) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth>700)
      this.mobstatus=false;
    else
    this.mobstatus=true;  
  }
  
   

  ngOnInit(): void {
    
    this.datecontrol= this.actRoute.snapshot.paramMap.get('datecontrol');

    //this.topiccovered=this.actRoute.snapshot.paramMap.get('topiccovered');
  //this.urllink=this.actRoute.snapshot.paramMap.get('urllink');
  this.actRoute.queryParams.subscribe( 
    params => { 
      this.urllink =  params['urllink'];
      this.topiccovered= params['topiccovered'];
      this.class= params['class'];
  this.semester= params['semester'];
  this.subject= params['subject'];
  
  
  this.mode= params['mode'];
  this.numberpresent= params['numberpresent'];
  this.numberabsent= params['numberabsent'];
  
});
  }
}
