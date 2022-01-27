import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jeux } from '../entity/jeux';

const AUTH_API = 'http://localhost:8580/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  constructor(private client:HttpClient) {}

  getJeux():Observable<Array<Jeux>>{
    return this.client.get<Array<Jeux>>(AUTH_API + 'liste-jeux-dto');
  };


  addJeux(
    nom : string,
    editeur: string,
    dateDeSortie : Date,
    description : string,
    genre : string,
    image : string,
    classification : string,
    plateforme : string,
    modeleEconomique : string
    ):Observable<Jeux>{
    return this.client.post<Jeux>(AUTH_API + 'ajouter-jeux-dto', {
      nom,
      editeur,
      dateDeSortie,
      description,
      genre,
      image,
      classification,
      plateforme,
      modeleEconomique
    }, httpOptions);
  }

  deleteAvis(id: number):Observable<Jeux>{
    return this.client.delete<Jeux>(AUTH_API + `supprimer-jeux/${id}`)
  }

}


