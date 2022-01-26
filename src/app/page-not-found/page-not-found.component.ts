import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  theme: string = "";
  subscription = new Subscription;

  constructor(private data: DataService) { }
  // constructor(){};

  ngOnInit(): void {
    this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme);

  }

  ngOnDestroy(){
    if (this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

}
