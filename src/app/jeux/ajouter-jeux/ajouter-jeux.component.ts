import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Genre } from 'src/app/entity/genre';
import { Classification } from 'src/app/entity/classification';
import { ModeleEconomique } from 'src/app/entity/modele-economique';
import { Editeur } from 'src/app/entity/editeur';
import { Plateforme } from 'src/app/entity/plateforme';

@Component({
  selector: 'app-ajouter-jeux',
  templateUrl: './ajouter-jeux.component.html',
  styleUrls: ['./ajouter-jeux.component.scss']
})
export class AjouterJeuxComponent implements OnInit {

  @Input()
  genres : Genre []= [];
  @Input()
  classifications:Classification [] = [];
  @Input()
  modeleEcos: ModeleEconomique[] =[];
  @Input()
  editeur: Editeur[]=[];
  @Input()
  plateforme: Plateforme[]=[];

  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;

  constructor(private data: DataService) { }
  //constructor(){};

  ngOnInit(): void {
    // onInit on récupère le currentThème du data service
    this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme);
  }

  ngOnDestroy(){
    if (this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

}
