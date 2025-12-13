import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PcdFranchiseComponent } from './components/pcd-franchise/pcd-franchise.component';

export function pcdFranchiseMatcher(url: UrlSegment[]): UrlMatchResult | null {
  const path = url[0]?.path;
  if (path && path.startsWith('pcd-pharma-franchise-in-')) {
    const slug = path.replace('pcd-pharma-franchise-in-', '');
    return {
      consumed: url,
      posParams: { slug: new UrlSegment(slug, {}) },
    };
  }
  return null;
}

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Rapid Pharmaceuticals — WHO-GMP Medicines & PCD Franchise' },
  { path: 'about', component: AboutComponent, title: 'About Rapid Pharmaceuticals — WHO-GMP Medicines & PCD Franchise' },
  { path: 'products', component: ProductsComponent, title: 'Products - Rapid Pharmaceuticals' },
  { path: 'contact', component: ContactComponent, title: 'Contact Rapid Pharmaceuticals' },
  { path: 'product/:slug', component: ProductDetailComponent },
  { path: 'pcd-pharma-franchise', component: PcdFranchiseComponent },
  { path: 'franchise', component: PcdFranchiseComponent },
  { matcher: pcdFranchiseMatcher, component: PcdFranchiseComponent },
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
