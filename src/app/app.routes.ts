import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./screens/bean-scene-coffee-landingpage.component').then(m => m.BeanSceneCoffeeLandingpageComponent) },
];
