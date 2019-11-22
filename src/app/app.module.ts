import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {PusherService} from './pusher.service';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [ AppComponent, ChatComponent, HomeComponent, AdminComponent ],
  imports: [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule ],
  providers: [ PusherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
