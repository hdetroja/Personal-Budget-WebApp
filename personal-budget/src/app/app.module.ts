import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';
import { JanuaryComponent } from './january/january.component';
import { JanuaryService } from './services/january.service';
import { AddJanuaryComponent } from './add-january/add-january.component';
import { FormsModule } from '@angular/forms';
import { FebruaryComponent } from './february/february.component';
import { AddFebruaryComponent } from './add-february/add-february.component';
import { MarchComponent } from './march/march.component';
import { AddMarchComponent } from './add-march/add-march.component';
import { AprilComponent } from './april/april.component';
import { AddAprilComponent } from './add-april/add-april.component';
import { MayComponent } from './may/may.component';
import { AddMayComponent } from './add-may/add-may.component';
import { JuneComponent } from './june/june.component';
import { AddJuneComponent } from './add-june/add-june.component';
import { JulyComponent } from './july/july.component';
import { AddJulyComponent } from './add-july/add-july.component';
import { AugustComponent } from './august/august.component';
import { SeptemberComponent } from './september/september.component';
import { OctoberComponent } from './october/october.component';
import { NovemberComponent } from './november/november.component';
import { DecemberComponent } from './december/december.component';
import { AddAugustComponent } from './add-august/add-august.component';
import { AddSeptemberComponent } from './add-september/add-september.component';
import { AddOctoberComponent } from './add-october/add-october.component';
import { AddNovemberComponent } from './add-november/add-november.component';
import { AddDecemberComponent } from './add-december/add-december.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    JanuaryComponent,
    AddJanuaryComponent,
    FebruaryComponent,
    AddFebruaryComponent,
    MarchComponent,
    AddMarchComponent,
    AprilComponent,
    AddAprilComponent,
    MayComponent,
    AddMayComponent,
    JuneComponent,
    AddJuneComponent,
    JulyComponent,
    AddJulyComponent,
    AugustComponent,
    SeptemberComponent,
    OctoberComponent,
    NovemberComponent,
    DecemberComponent,
    AddAugustComponent,
    AddSeptemberComponent,
    AddOctoberComponent,
    AddNovemberComponent,
    AddDecemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCh7QoBIf4UAGeWyRv-Vij9G5xjAw5qJxU",
      authDomain: "personal-budget-d8165.firebaseapp.com",
      databaseURL: 'https://personal-budget-d8165-default-rtdb.firebaseio.com/',
      projectId: "personal-budget-d8165",
      storageBucket: "personal-budget-d8165.appspot.com",
      messagingSenderId: "948519437366",
      appId: "1:948519437366:web:eb2bebecbf480ae1390497"
    }),
    FormsModule
  ],
  providers: [FirebaseService, JanuaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
