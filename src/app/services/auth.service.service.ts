import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../entity/utilisateur';
import { BehaviorSubject } from 'rxjs';

const AUTH_API = 'http://localhost:8580/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   /**
   * Gérer de manière simplifiée la connexion
   */
    public _connexion = new BehaviorSubject<boolean>(false);
    connexionState = this._connexion.asObservable();

  constructor(private client: HttpClient) { }


  changeConnexionState(newConnexion: boolean){
    this._connexion.next(newConnexion);
  }

  public get connexion() {
    return  this._connexion;
  }

  // Nous utiliserons cette fonction lorsque nous demanderons le login à l'API.
  // login(email: string, password: string): Observable<Utilisateur> {
  //   return this.client.post<Utilisateur>(AUTH_API + 'connexion', {
  //     email,
  //     password
  //   }, httpOptions);
  // }

  login(logStatus:boolean){
    this.changeConnexionState(logStatus);
  }

  inscription(pseudo: string, email: string, dateNaissance: Date, password: string, confirmPassword : string): Observable<Utilisateur> {
    return this.client.post<Utilisateur>(AUTH_API + 'inscription', {
      pseudo,
      email,
      dateNaissance,
      password,
      confirmPassword
    }, httpOptions);
  }

}
