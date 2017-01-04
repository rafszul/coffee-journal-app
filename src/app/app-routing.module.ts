import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { LostComponent } from './lost/lost.component';
import { EspressoJournalComponent } from './espresso-journal/espresso-journal.component';
import { FilterJournalComponent } from './filter-journal/filter-journal.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'espresso-journal', component: EspressoJournalComponent },
    { path: 'filter-journal', component: FilterJournalComponent },
    { path: '**', component: LostComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
