import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Jeux } from 'src/app/entity/jeux';
import { JeuxService } from 'src/app/services/jeux.service';

@Component({
  selector: 'app-liste-jeux',
  templateUrl: './liste-jeux.component.html',
  styleUrls: ['./liste-jeux.component.scss']
})
export class ListeJeuxComponent implements OnInit {

  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;

  @Input()
  inputJeux: Jeux = new Jeux("Minecraft", "Truc", new Date("2019-05-27"), "C'est un chouette jeu", "FPS", "https://material.angular.io/assets/img/examples/shiba2.jpg","PEGI 16", "PS5", "play to play");

  constructor(private data: DataService, private jeuxService : JeuxService) { }
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
