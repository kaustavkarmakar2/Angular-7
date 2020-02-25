import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {ContactComponent} from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SomeworkComponent } from './somework/somework.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { CourasalComponent } from './courasal/courasal.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [ 
    { path: 'about', component: AboutComponent },
    {path:'login',component: LoginComponent},
    {path: '', component: HomeComponent },
    {path:'portfolio', component:PortfolioComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'contact', component:ContactComponent},
    {path:'signup', component:SignupComponent},
  
  ];  

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent ,
    PortfolioComponent,
    SomeworkComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    LoginComponent,
    CourasalComponent,
    ContactComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
