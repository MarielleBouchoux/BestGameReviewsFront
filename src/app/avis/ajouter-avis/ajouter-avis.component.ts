import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Jeux } from 'src/app/entity/jeux';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-avis',
  templateUrl: './ajouter-avis.component.html',
  styleUrls: ['./ajouter-avis.component.scss']
})
export class AjouterAvisComponent implements OnInit {

  //Importe l'objet Jeux pour le 1er filtre obligatoire
  jeu: Jeux = new Jeux("World of Warcraft", "un éditeur", new Date("2019-05-21"), "ceci est un jeu", "FPS", "https://material.angular.io/assets/img/examples/shiba2.jpg", "PEGI 12", "PS5", "Free2Play" );

  jeuxControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  jeux: Jeux[] = []
  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;

  constructor( private data: DataService) { }
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

  enregistrerAvis(){
    // faire la fonction pour enregistrer l'avis
  }

}
