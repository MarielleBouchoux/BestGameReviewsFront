import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from '../entity/avis';

const AUTH_API = 'http://localhost:8580/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor(private client:HttpClient) {}

  getAvis():Observable<Avis[]>{
    return this.client.get<Avis[]>(AUTH_API + 'liste-avis');
  }

  addAvis(
    nom : string,
    dateEnvoi : Date,
    description : string,
    note : string,
    auteur : string,
    statut : string,
  ):Observable<Avis>{
    return this.client.post<Avis>(AUTH_API + 'ajouter-avis', {
      nom,
      dateEnvoi,
      description,
      note,
      auteur,
      statut,
    }, httpOptions);
  }

  deleteAvis(id: number):Observable<Avis>{
    return this.client.delete<Avis>(AUTH_API + `supprimer-avis${id}`)
  }

  validerAvis(idAvis: number, idUser : number):Observable<Avis>{
    return this.client.put<Avis>(AUTH_API + `valider-avis`, {
      idAvis,
      idUser
    }, httpOptions)
  }

}

