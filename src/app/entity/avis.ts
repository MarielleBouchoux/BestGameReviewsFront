export class Avis {
  private _id:number= 0

  constructor(
    private _nom: string,
    private _jeu_id: number,
    private _dateEnvoi : Date,
    private _description: string,
    private _note: number,
    private _auteur: string,
    private _auteur_id: number,
    private _image: string,
    private _statut: boolean,
    private _moderateur : string,
    private _moderateur_id : number,
    ){}

  public get nom() {
    return this._nom;
  }

  public set nom(n : string) {
    this._nom = n;
  };

  public get jeu_id() {
    return this._jeu_id;
  }

  public set jeu_id(n : number) {
    this._jeu_id = n;
  };

  public get dateEnvoi(){
    return this._dateEnvoi;
 }

 public set dateEnvoi(n : Date) {
  this.dateEnvoi = n;
};

  public get description(){
    return this._description
  }

  public set description(n : string) {
    this._description = n;
  };

  public get note(){
    return this._note;
  }

  public set note(n : number) {
    this._note = n;
  };

  public get auteur(){
    return this._auteur;
  }

  public set auteur(n : string) {
    this._auteur = n;
  };

  public get auteur_id(){
    return this._auteur_id;
  }

  public set auteur_id(n : number) {
    this._auteur_id = n;
  };

  public get image(){
    return this._image;
  }

  public set image(n : string) {
    this._image = n;
  };


 public get statut(){
   return this._statut;
 }

 public set statut(n : boolean) {
  this._statut = n;
};

public get moderateur(){
  return this._moderateur;
}

public set moderateur_id(n : number) {
 this._moderateur_id = n;
};



}
