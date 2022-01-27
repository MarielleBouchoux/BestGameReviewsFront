import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Jeux } from 'src/app/entity/jeux';
import { JeuxService } from 'src/app/services/jeux.service';
import { AuthService } from 'src/app/services/auth.service.service';

@Component({
  selector: 'app-liste-jeux',
  templateUrl: './liste-jeux.component.html',
  styleUrls: ['./liste-jeux.component.scss']
})
export class ListeJeuxComponent implements OnInit {
  /**
   * pour transmette le remove
   */
  @Output()
  removeEvent = new EventEmitter();
  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;
   // on initialise l'état de connexion du user
   isLoggedIn = false;

  @Input()
  inputJeux: Jeux = new Jeux(0,"Minecraft", "Truc", new Date("2019-05-27"), "C'est un chouette jeu", "FPS", "https://material.angular.io/assets/img/examples/shiba2.jpg","PEGI 16", "PS5", "play to play");

  constructor(private data: DataService, private jeuxService : JeuxService, private authService: AuthService) { }
  //constructor(){};

  ngOnInit(): void {
    // onInit on récupère le currentThème du data service
    this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme);
    this.subscription = this.authService.connexionState.subscribe(connexionState => this.isLoggedIn = connexionState);
  }

  ngOnDestroy(){
    if (this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

  /**
   * Remove this Jeu
  */
 removeGame(div:HTMLDivElement, id:number){
   console.log("remove");
   div.remove;
   this.removeEvent.emit(id);
 }

}
