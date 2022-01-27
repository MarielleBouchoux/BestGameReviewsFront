import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { JeuxService } from '../services/jeux.service';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Jeux } from '../entity/jeux';
import {MatPaginator, MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../services/auth.service.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.scss']
})
export class JeuxComponent implements OnInit  ,AfterViewInit  {
  pageEvent: PageEvent = new PageEvent;
  pageIndex:number = 0;
  pageSize:number = 5;
  lowValue:number = 0;
  highValue:number = 5;

  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;

  // on initialise l'état de connexion du user
  isLoggedIn = false;

  //Avis pour liste jeux
  private jeu : Jeux= new Jeux(0,"Minecraft", "Truc", new Date("2019-05-27"), "C'est un chouette jeu", "FPS", "https://material.angular.io/assets/img/examples/shiba2.jpg","PEGI 16", "PS5", "play to play");
  jeux : Jeux[] = [];
  ELEMENT_DATA: Jeux[] = this.jeux;
  dataSource = new MatTableDataSource<Jeux>(this.jeux);



  constructor( private data: DataService,private jeuxService: JeuxService,private cdr: ChangeDetectorRef, private authService: AuthService) {
    // onInit on récupère le currentThème du data service
    this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme);
    this.jeux = []
   }
   @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl,this.cdr);

   ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.paginator.pageSize = 5;
   }

   getPaginatorData(event :PageEvent){
     console.log(event);
     if(event.pageIndex === this.pageIndex + 1){
        this.lowValue = this.lowValue + this.pageSize;
        this.highValue =  this.highValue + this.pageSize;
       }
    else if(event.pageIndex === this.pageIndex - 1){
       this.lowValue = this.lowValue - this.pageSize;
       this.highValue =  this.highValue - this.pageSize;
      }
       this.pageIndex = event.pageIndex;
       this.pageEvent = event;
       return event;
 }

  ngOnInit(): void {
    // onInit on récupère l'état de connexion du user
    this.subscription = this.authService.connexionState.subscribe(connexionState => this.isLoggedIn = connexionState);
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
  this.pageSize = 5;
    this.highValue = 5;
    this.lowValue = 0;
    this.pageEvent.pageSize = this.pageSize;
    this.pageEvent.pageIndex = this.lowValue;
    this.pageEvent.length = this.jeux.length;
  console.log(this.jeux);
  return this.jeux;

}

/**
 * supprime la donné dans le tableau de juex
 */
removeJeu(id:number){
  this.jeux.splice(this.jeux.findIndex(jeu => jeu.id == id),1);
  this.jeuxService.deleteJeu(id).subscribe();
  this.pageSize = 5;
  this.highValue = 5;
  this.lowValue = 0;
  this.pageEvent.pageSize = this.pageSize;
  this.pageEvent.pageIndex = this.lowValue;
  this.pageEvent.length = this.jeux.length;
}

}
