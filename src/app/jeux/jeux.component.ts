import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { JeuxService } from '../services/jeux.service';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Jeux } from '../entity/jeux';
import {MatPaginator, MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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

  //Avis pour liste jeux
  private jeu : Jeux= new Jeux(0,"Minecraft", "Truc", new Date("2019-05-27"), "C'est un chouette jeu", "FPS", "https://material.angular.io/assets/img/examples/shiba2.jpg","PEGI 16", "PS5", "play to play");
  jeux : Jeux[] = [];
  ELEMENT_DATA: Jeux[] = this.jeux;
  dataSource = new MatTableDataSource<Jeux>(this.jeux);



  constructor( private data: DataService,private jeuxService: JeuxService,private cdr: ChangeDetectorRef) {
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
  this.pageSize = this.jeux.length;
    this.pageIndex = 0;
    this.highValue = 5;
    this.lowValue = 0;
  console.log(this.jeux);
  return this.jeux;

}

}
