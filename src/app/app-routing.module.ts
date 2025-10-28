import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PcdFranchiseComponent } from './components/pcd-franchise/pcd-franchise.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product/:slug', component: ProductDetailComponent },
  { path: 'pcd-pharma-franchise', component: PcdFranchiseComponent },
  { path: 'pcd-pharma-franchise/:slug', component: PcdFranchiseComponent },
  { path: '**', redirectTo: '' },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',  // <--- enables scroll to top
  anchorScrolling: 'enabled',             // <--- allows scrolling to #anchors
  scrollOffset: [0, 0],                   // <--- optional offset
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
