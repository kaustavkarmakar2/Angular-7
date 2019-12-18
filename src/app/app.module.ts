import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SomeworkComponent } from './somework/somework.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';

const appRoutes: Routes = [ 
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent },  
  
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
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
