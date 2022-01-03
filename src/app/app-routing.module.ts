import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './components/auth/auth.module'
import { AuthComponent } from './components/auth/auth.component';
/**/
import { PagesComponent } from './components/pages/pages.component';
import { PagesModule } from './components/pages/pages.module'
const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: './components/auth/auth.module#AuthModule'
      },
    ]
  },
  {
    path: 'panel',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: './components/pages/pages.module#PagesModule'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


