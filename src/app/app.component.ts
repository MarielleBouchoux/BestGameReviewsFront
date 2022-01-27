import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';
import { style } from '@angular/animations';
import { Avis } from './entity/avis';
import { AvisService } from './services/avis.service';
import { AuthService } from './services/auth.service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BestGameReviews';


  // initialise le thème du user
  otherTheme: string = "";
  subscription = new Subscription;

  // on initialise l'état de connexion du user
  isLoggedIn = false;

  //Avis pour liste avis
  avis : Avis[];

  constructor(private data: DataService, private avisService:AvisService, private authService : AuthService){
    this.avis=[];

  };


  ngOnInit(){
    // onInit récupère le currentThème du data service
    this.subscription = this.data.currentTheme.subscribe(theme => this.otherTheme = theme);
    this.getAllAvis();
    // onInit on récupère l'état de connexion du user
    this.subscription = this.authService.connexionState.subscribe(connexionState => this.isLoggedIn = connexionState);

  }

  ngOnDestroy(){
    if (this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

  changeTheme(){
    if (this.otherTheme == "darkMode")
      this.otherTheme = "lightMode";
    else this.otherTheme = "darkMode";
    this.data.changeTheme(this.otherTheme);
  }

  getAllAvis(){
    this.avisService.getAvis();
  }

  /*
  *Pour que le user soit déconnecté
  */
  logout(){
    this.authService.login(false);
  }

}
