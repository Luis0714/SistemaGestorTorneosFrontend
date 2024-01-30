import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  },
  {
    path: 'website',
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  }
];

