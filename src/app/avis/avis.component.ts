import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AvisService } from '../services/avis.service';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Avis } from '../entity/avis';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit ,AfterViewInit  {

  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;

  //Avis pour liste avis
  avis : Avis[]= [];
  ELEMENT_DATA: Avis[] = this.avis;
  dataSource = new MatTableDataSource<Avis>(this.avis);
  constructor(private data: DataService, private avisService: AvisService,private cdr: ChangeDetectorRef) {

  }
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl,this.cdr);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
    this.avisService.getAvis().subscribe({
      next: data => {
        data.forEach( element => {
          this.avis.push(new Avis(
            element.id,
            element.nom,
            element.jeu_id,
            element.dateEnvoi,
            element.description,
            element.note,
            element.auteur,
            element.auteur_id,
            element.image,
            element.statut,
            element.moderateur,
            element.moderateur_id))
        })
      },
      error: error => {
        alert(`Une erreur c'est produite${error}`)
      }
    });

    console.log(this.avis);
  return this.avis;
  }

}
