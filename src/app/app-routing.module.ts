import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path:'avis', loadChildren: () => import('./avis/avis.module').then((m)=> m.AvisModule)},
  { path:'user', loadChildren: () => import('./user/user.module').then((m)=> m.UserModule)},
  { path: 'jeux', loadChildren:() => import('./jeux/jeux.module').then((m)=> m.JeuxModule)},
  { path: '**', component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
