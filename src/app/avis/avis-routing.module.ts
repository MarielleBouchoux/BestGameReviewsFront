import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAvisComponent } from './ajouter-avis/ajouter-avis.component';
import { ListeAvisComponent } from './liste-avis/liste-avis.component';
import { AvisComponent } from './avis/avis.component';

const routes: Routes = [
  {path:'', redirectTo:'/avis/liste-avis', pathMatch:'full'},
  {path:'liste-avis', component:ListeAvisComponent},
  {path:'ajouter-avis', component:AjouterAvisComponent},
  {path:'avis/{avis.id}', component:AvisComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisRoutingModule { }
