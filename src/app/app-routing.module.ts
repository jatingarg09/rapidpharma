import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes, UrlMatchResult, UrlSegment } from '@angular/router';

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
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent), title: 'Rapid Pharmaceuticals — WHO-GMP Medicines & PCD Franchise' },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent), title: 'About Rapid Pharmaceuticals — WHO-GMP Medicines & PCD Franchise' },
  { path: 'products', loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent), title: 'Products - Rapid Pharmaceuticals' },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent), title: 'Contact Rapid Pharmaceuticals' },
  { path: 'products/:slug', loadComponent: () => import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
  { path: 'pcd-pharma-franchise', loadComponent: () => import('./components/pcd-franchise/pcd-franchise.component').then(m => m.PcdFranchiseComponent) },
  { path: 'franchise', loadComponent: () => import('./components/pcd-franchise/pcd-franchise.component').then(m => m.PcdFranchiseComponent) },
  { matcher: pcdFranchiseMatcher, loadComponent: () => import('./components/pcd-franchise/pcd-franchise.component').then(m => m.PcdFranchiseComponent) },

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
