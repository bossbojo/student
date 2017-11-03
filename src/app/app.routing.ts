import { RouterModule, Routes } from '@angular/router';
import { UrlConfig } from './configs/url.config';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';


const Url = UrlConfig;

export const RoutesList: Routes = [
    { path: Url.Home, component: HomeComponent },
    { path: Url.Product, component: ProductComponent},
    { path: Url.Cart, component: CartComponent },
    { path: '**', redirectTo: Url.Home, pathMatch: 'full' }
];

export const RoutingModule = RouterModule.forRoot(RoutesList);