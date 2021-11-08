import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSortModule} from '@angular/material/sort';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import{ MatInputModule} from '@angular/material/input';
import{ MatSliderModule} from '@angular/material/slider';
import{  MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FirsttimeinfoComponent } from './cards/firsttimeinfo/firsttimeinfo.component';
import { LectureinfoComponent } from './cards/lectureinfo/lectureinfo.component';
import { AddlectureComponent } from './cards/addlecture/addlecture.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';


import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { DetailsComponent } from './cards/details/details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    SignupComponent,
    FirsttimeinfoComponent,
    LectureinfoComponent,
    AddlectureComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, MatDatepickerModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgxMatMomentModule,
    // 3. Initialize
    AngularFireModule.initializeApp(environment.firebase),
  
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    AngularFirestoreModule.enablePersistence(), // firestore
    AngularFireAuthModule, // auth
    ReactiveFormsModule, FormsModule,
    MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule,
    MatSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
