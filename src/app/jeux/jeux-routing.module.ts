import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterJeuxComponent } from './ajouter-jeux/ajouter-jeux.component';
import { JeuxComponent } from './jeux.component';
import { ListeJeuxComponent } from './liste-jeux/liste-jeux.component';

const routes: Routes = [
  {path:'', redirectTo:'/jeux', pathMatch:'full'},
  {path:'liste-jeux', component:JeuxComponent},
  {path:'detail', component:ListeJeuxComponent},
  {path:'ajouter-jeux', component:AjouterJeuxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JeuxRoutingModule { }
