import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { JeuxRoutingModule } from './jeux-routing.module';
import { ListeJeuxComponent } from './liste-jeux/liste-jeux.component';
import { AjouterJeuxComponent } from './ajouter-jeux/ajouter-jeux.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { JeuxComponent } from './jeux/jeux.component';

@NgModule({
  declarations: [
    ListeJeuxComponent,
    AjouterJeuxComponent,
    JeuxComponent
  ],
  imports: [
    CommonModule,
    JeuxRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class JeuxModule { }
