import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { FirsttimeinfoComponent } from './cards/firsttimeinfo/firsttimeinfo.component';
import { LectureinfoComponent } from './cards/lectureinfo/lectureinfo.component';
import { DetailsComponent } from './cards/details/details.component';
import { AddlectureComponent } from './cards/addlecture/addlecture.component';


const routes: Routes = [ { path: '', component:SignupComponent },
{ path: 'mainpage', component:MainpageComponent },
{ path: 'firsttimeinfo', component:FirsttimeinfoComponent},
{path: 'lectureinfo', component:LectureinfoComponent},
{path: 'cutoff', component:AddlectureComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
