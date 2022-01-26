import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   *
   */
  public _theme = new BehaviorSubject<string>("darkMode");
  currentTheme = this._theme.asObservable();

  constructor() { }

  changeTheme(newTheme: string){
    this._theme.next(newTheme);
  }


  public get theme() {
    return  this._theme;
  }

}
