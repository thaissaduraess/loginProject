import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
