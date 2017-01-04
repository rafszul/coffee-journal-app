import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import 'hammerjs';

import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LostComponent } from './lost/lost.component';
import { ChatComponent } from './chat/chat.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { EspressoJournalComponent } from './espresso-journal/espresso-journal.component';
import { FilterJournalComponent } from './filter-journal/filter-journal.component';


// Must export the config

export const firebaseConfig = {
  apiKey: 'AIzaSyAhxWY0zQpZr8_4plD0b3SGW6gbvjUQT9U',
  authDomain: 'coffee-journal-app.firebaseapp.com',
  databaseURL: 'https://coffee-journal-app.firebaseio.com',
  storageBucket: 'coffee-journal-app.appspot.com',
  messagingSenderId: '604494717959'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LostComponent,
    ChatComponent,
    HeaderComponent,
    FooterComponent,
    EspressoJournalComponent,
    FilterJournalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [MaterialModule.forRoot()],
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
