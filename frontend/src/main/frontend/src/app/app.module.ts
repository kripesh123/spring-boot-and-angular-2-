import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { DefaultService } from './services/default.service';
import { HomeService } from './services/home.service';

import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DefaultService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
