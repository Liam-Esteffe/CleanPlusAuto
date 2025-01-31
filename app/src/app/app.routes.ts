import { Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { ServicesComponent } from './pages/general/services/services.component';
import { ContactComponent } from './pages/general/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },

    { path: 'home', component: HomeComponent, },

    { path: 'services/:indice', component: ServicesComponent },

    { path: 'contact', component: ContactComponent },

    { path: '**', component: NotFoundComponent }
];