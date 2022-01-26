import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { Avis } from 'src/app/entity/avis';
import { Jeux } from 'src/app/entity/jeux';
import { AvisService } from 'src/app/services/avis.service';
import { Utilisateur } from 'src/app/entity/utilisateur';
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
  //private _pseudo: string, private _email: string, private _dateDeNaissance: Date, private _password: string
  user : Utilisateur = new Utilisateur("paul","paul@gmail.com",new Date("1985-10-06"),"")

  /**
   * param
   * private _nom: string,
    private _dateEnvoi : Date ,
    private _description: string,
    private _note: number,
    private _auteur: string => private _pseudo: string, private _email: string, private _dateDeNaissance: Date, private _password: string
    private _image: string,
    private _statut: string,

   */
  @Input()
  inputAvis: Avis = new Avis("League of legends", 1,  new Date("2019-05-27"), "C'est un chouette jeu", 10, "John Doe", 1, "https://material.angular.io/assets/img/examples/shiba2.jpg", false, "Trucmuche", 2  );
  // jeux: Jeux[] = [{ "Minecraft", "Truc", new Date("2019-05-27"), "C'est un chouette jeu", "FPS", "https://material.angular.io/assets/img/examples/shiba2.jpg","PEGI 16", "PS5", "play to play" }];
  jeux: Jeux[] = [];
  //filtre date envoi

  //filtre noms jeux
  listeJeux = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  constructor(private data: DataService, avisService : AvisService) {

   }

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
