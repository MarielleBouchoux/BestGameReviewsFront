import { Component, OnInit } from '@angular/core';
import { AvisService } from '../services/avis.service';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Avis } from '../entity/avis';

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

  ngOnDestroy(){
    if (this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

  getAllAvis(){
    this.avisService.getAvis().subscribe({
      next:data => {
        console.log(data);
        this.avis = data;
      }
  });


}
}



