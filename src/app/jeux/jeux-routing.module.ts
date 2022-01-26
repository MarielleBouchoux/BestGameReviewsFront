import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterJeuxComponent } from './ajouter-jeux/ajouter-jeux.component';
import { ListeJeuxComponent } from './liste-jeux/liste-jeux.component';

const routes: Routes = [
  {path:'', redirectTo:'/jeux/liste-jeux', pathMatch:'full'},
  {path:'liste-jeux', component:ListeJeuxComponent},
  {path:'ajouter-jeux', component:AjouterJeuxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JeuxRoutingModule { }
