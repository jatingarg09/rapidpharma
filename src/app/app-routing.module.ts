import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  RouterModule,
  Routes,
  UrlMatchResult,
  UrlSegment,
} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PcdFranchiseComponent } from './components/pcd-franchise/pcd-franchise.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { products } from './data/products';
import { validLocationSlugs } from './data/state-districts';
import {
  CATEGORY_SLUG_MAP,
  THERAPEUTIC_SLUG_MAP,
} from './data/product-category.config';
import { blogPosts } from './data/blog-posts';

export function pcdFranchiseMatcher(url: UrlSegment[]): UrlMatchResult | null {
  const prefix = 'pcd-pharma-franchise-in-';

  if (url.length !== 1 || !url[0].path.startsWith(prefix)) {
    return null;
  }

  const slug = url[0].path.slice(prefix.length);

  if (!validLocationSlugs.has(slug)) {
    return null;
  }

  return {
    consumed: url,
    posParams: {
      slug: new UrlSegment(slug, {}),
    },
  };
}

export function productMatcher(url: UrlSegment[]): UrlMatchResult | null {
  if (url.length !== 2 || url[0].path !== 'products') {
    return null;
  }

  const slug = url[1].path;

  const productExists = products.some((product) => product.slug === slug);

  if (!productExists) {
    return null;
  }

  return {
    consumed: url,
    posParams: {
      slug: url[1],
    },
  };
}

export function categoryMatcher(url: UrlSegment[]): UrlMatchResult | null {
  if (url.length !== 2 || url[0].path !== 'category') {
    return null;
  }

  const slug = url[1].path;

  if (!Object.prototype.hasOwnProperty.call(CATEGORY_SLUG_MAP, slug)) {
    return null;
  }

  return {
    consumed: url,
    posParams: {
      categorySlug: url[1],
    },
  };
}

export function therapeuticMatcher(url: UrlSegment[]): UrlMatchResult | null {
  if (url.length !== 2 || url[0].path !== 'type') {
    return null;
  }

  const slug = url[1].path;

  if (!Object.prototype.hasOwnProperty.call(THERAPEUTIC_SLUG_MAP, slug)) {
    return null;
  }

  return {
    consumed: url,
    posParams: {
      typeSlug: url[1],
    },
  };
}

export function blogMatcher(url: UrlSegment[]): UrlMatchResult | null {
  if (url.length !== 2 || url[0].path !== 'blogs') {
    return null;
  }

  const slug = url[1].path;

  const exists = blogPosts.some((post) => post.slug === slug);

  if (!exists) {
    return null;
  }

  return {
    consumed: url,
    posParams: {
      slug: url[1],
    },
  };
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Rapid Pharmaceuticals — WHO-GMP Medicines & PCD Franchise',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Rapid Pharmaceuticals — WHO-GMP Medicines & PCD Franchise',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products - Rapid Pharmaceuticals',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Rapid Pharmaceuticals',
  },
  { matcher: productMatcher, component: ProductDetailComponent },
  {
    path: 'blogs',
    component: BlogListComponent,
    title: 'Blogs - Rapid Pharmaceuticals',
  },
  {
    matcher: blogMatcher,
    component: BlogDetailComponent,
  },
  {
    path: 'pcd-pharma-franchise',
    component: PcdFranchiseComponent,
    title: 'Best PCD Pharma Franchise Company in India | Rapid Pharmaceuticals',
  },
  {
    path: 'franchise',
    redirectTo: 'pcd-pharma-franchise',
    pathMatch: 'full',
  },
  { matcher: pcdFranchiseMatcher, component: PcdFranchiseComponent },
  {
    matcher: categoryMatcher,
    component: ProductsComponent,
  },
  {
    matcher: therapeuticMatcher,
    component: ProductsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Not Found | Rapid Pharmaceuticals',
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // <--- enables scroll to top
  anchorScrolling: 'enabled', // <--- allows scrolling to #anchors
  scrollOffset: [0, 0], // <--- optional offset
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
