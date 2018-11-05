import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const appRoutes: Routes = [
    { path: '', component: LoginPageComponent},
    { path: 'home', component: HomePageComponent},
    { path: 'signup', component: SignupPageComponent},
    { path: 'cart', component: CartPageComponent}
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
