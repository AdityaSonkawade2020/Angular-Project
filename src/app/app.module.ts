import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {DataService} from './data.service';
import { AboutComponent } from './about/about.component';
import { SuccessComponent } from './success/success.component';
const appRoutes:Routes=[

  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    SuccessComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  
  providers: [DataService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
