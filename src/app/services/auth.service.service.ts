import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../entity/utilisateur';

const AUTH_API = 'http://localhost:8580/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient) { }

  login(email: string, password: string): Observable<Utilisateur> {
    return this.client.post<Utilisateur>(AUTH_API + 'connexion', {
      email,
      password
    }, httpOptions);
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
