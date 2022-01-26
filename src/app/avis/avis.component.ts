import { Component, OnInit } from '@angular/core';
import { AvisService } from '../services/avis.service';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Avis } from '../entity/avis';
import { Utilisateur } from '../entity/utilisateur';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;

  //Avis pour liste avis
  avis : Avis[];

  constructor(private data: DataService, private avisService: AvisService) {

    this.avis = [];
  }

  ngOnInit(): void {
    // onInit on récupère le currentThème du data service
    this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme);
    this.getAllAvis();
  }
  /**
   * param
   * private _nom: string,
    private _dateEnvoi : Date ,
    private _description: string,
    private _note: string,
    private _auteur: string => private _pseudo: string, private _email: string, private _dateDeNaissance: Date, private _password: string
    private _image: string,
    private _statut: string,

   */

  ngOnDestroy(){
    if (this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

  getAllAvis(){
  return this.avisService.getAvis().subscribe({
      next: data => {
        console.log(data);
        data.forEach(element => {
          let art: Avis = new Avis(element.nom, element.dateEnvoi, element.description,element.note,new Utilisateur(element.joueur.pseudo,element.joueur.email,element.joueur.dateDeNaissance,""),element.image,element.statut,new Utilisateur(element.moderateur.pseudo,element.moderateur.email,element.moderateur.dateDeNaissance,""));
          art.id = element.id;
          this.avis.push(art);
        })
      },
      error: error => {
        alert(`Une erreur c'est produite${error}`)
      }
    });
  }

}
