import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { Avis } from 'src/app/entity/avis';
import { Jeux } from 'src/app/entity/jeux';
/**
 * @title Paginator
 */
@Component({
  selector: 'app-liste-avis',
  templateUrl: './liste-avis.component.html',
  styleUrls: ['./liste-avis.component.scss']
})


export class ListeAvisComponent implements OnInit {

  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;

  avis: Avis = new Avis("League of legends", new Date("2019-05-27"), "C'est un chouette jeu", "10/20", "John Doe", "https://material.angular.io/assets/img/examples/shiba2.jpg", "A modérer" );
  // jeux: Jeux[] = [{ "Minecraft", "Truc", new Date("2019-05-27"), "C'est un chouette jeu", "FPS", "https://material.angular.io/assets/img/examples/shiba2.jpg","PEGI 16", "PS5", "play to play" }];
  jeux: Jeux[] = [];
  //filtre date envoi

  //filtre noms jeux
  listeJeux = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  constructor(private data: DataService) { }

  ngOnInit(): void {
    // onInit récupère le currentThème du data service
    this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme);
  }

  ngOnDestroy(){
    if (this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

}
