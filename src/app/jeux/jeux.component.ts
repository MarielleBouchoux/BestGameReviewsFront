import { Component, OnInit } from '@angular/core';
import { JeuxService } from '../services/jeux.service';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Jeux } from '../entity/jeux';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.scss']
})
export class JeuxComponent implements OnInit {

  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;

  private jeu : Jeux= new Jeux(0,"Minecraft", "Truc", new Date("2019-05-27"), "C'est un chouette jeu", "FPS", "https://material.angular.io/assets/img/examples/shiba2.jpg","PEGI 16", "PS5", "play to play");

  jeux : Jeux[];

  constructor( private data: DataService,private jeuxService: JeuxService) {
    // onInit on récupère le currentThème du data service
    this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme);
    this.jeux = []
   }

  ngOnInit(): void {
    this.getAllJeux();
  }

  ngOnDestroy(){
    if (this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

  getAllJeux(){
    this.jeuxService.getJeux().subscribe({
      next: data => {
        data.forEach( element => {
          this.jeu = new Jeux(
            element.id,
            element.nom,
            element.editeur,
            element.dateDeSortie,
            element.description,
            element.genre,
            element.image,
            element.classification,
            element.plateforme,
            element.modeleEconomique
          ),
          this.jeux.push(this.jeu)
        })
      },
      error: error => {
        alert(`Une erreur s'est produite ${error}`)
      }
  });
  console.log(this.jeux);
  return this.jeux;

}
}
