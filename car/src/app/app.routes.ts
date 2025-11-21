import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Businesses } from './businesses/businesses';

export const routes: Routes = [
    {
        path:'',
        component: Home
    },
    {
        path:'Businesses',
        component: Businesses
    }
];
