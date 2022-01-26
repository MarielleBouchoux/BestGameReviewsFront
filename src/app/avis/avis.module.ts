import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvisRoutingModule } from './avis-routing.module';
import { AjouterAvisComponent } from './ajouter-avis/ajouter-avis.component';
import { ListeAvisComponent } from './liste-avis/liste-avis.component';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FrenchPaginator } from '../french-paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AvisComponent } from './avis/avis.component';
//example of eager loading
// export const avisModuleRoutes: Routes = [{ path:'', component:ListeAvisComponent}];

@NgModule({

  declarations: [
    ListeAvisComponent,
    AjouterAvisComponent,
    AvisComponent,
  ],
  imports: [
    CommonModule,
    AvisRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    { provide: MatPaginatorIntl, useValue: FrenchPaginator()}
  ]
})
export class AvisModule { }
