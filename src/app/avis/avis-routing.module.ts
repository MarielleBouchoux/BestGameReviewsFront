import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAvisComponent } from './ajouter-avis/ajouter-avis.component';
import { AvisComponent } from './avis.component';
import { ListeAvisComponent } from './liste-avis/liste-avis.component';


const routes: Routes = [
  {path:'', redirectTo:'/avis', pathMatch:'full'},
  {path:'avis', component:AvisComponent},
  {path:'liste-avis', component:ListeAvisComponent},
  {path:'ajouter-avis', component:AjouterAvisComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisRoutingModule { }
