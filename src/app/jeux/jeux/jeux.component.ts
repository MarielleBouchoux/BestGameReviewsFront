import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Jeux } from 'src/app/entity/jeux';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.scss']
})
export class JeuxComponent implements OnInit {

  // jeux : Jeux[];
   // initialise le thème du user
   theme: string = "";
   subscription = new Subscription;

   constructor(private data: DataService) { }
   //constructor(){};

   ngOnInit(): void {
     // onInit on récupère le currentThème du data service
     this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme);
   }

   ngOnDestroy(){
     if (this.subscription != null){
       this.subscription.unsubscribe();
     }
   }

}
