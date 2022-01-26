import { Component, OnInit } from '@angular/core';
import { JeuxService } from '../services/jeux.service';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Jeux } from '../entity/jeux';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.scss']
})
export class JeuxComponent implements OnInit {

  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;

  //Avis pour liste jeux
  jeux : Jeux[];

  constructor( private data: DataService,private jeuxService: JeuxService) {
    // onInit on récupère le currentThème du data service
    this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme);
    this.jeux = []
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
    this.jeuxService.getJeux().subscribe(data => this.jeux = data);
  }

}
