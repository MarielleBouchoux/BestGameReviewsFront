import { Component, OnInit } from '@angular/core';
import { AvisService } from '../services/avis.service';
import { Avis } from '../entity/avis';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  //Avis pour liste avis
  avis : Avis[];

  constructor(private avisService: AvisService) {
    this.avis = [];
  }

  ngOnInit(): void {
    this.getAllAvis();
  }

  getAllAvis(){
    this.avisService.getAvis().subscribe(data => this.avis = data);
  }

}
