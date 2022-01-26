import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';
import { style } from '@angular/animations';
import { Avis } from './entity/avis';
import { AvisService } from './services/avis.service';


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

  //Avis pour liste avis
  avis : Avis[];

  constructor(private data: DataService, private avisService:AvisService){
    this.avis=[];

  };


  ngOnInit(){
    // onInit récupère le currentThème du data service
    this.subscription = this.data.currentTheme.subscribe(theme => this.otherTheme = theme);
    this.getAllAvis();
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


}
