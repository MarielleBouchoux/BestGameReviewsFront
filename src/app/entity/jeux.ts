export class Jeux {

  constructor(
    private _id : number,
    private _nom: string,
    private _editeur: string,
    private _dateDeSortie: Date,
    private _description: string,
    private _genre: string,
    private _image: string,
    private _classification: string,
    private _plateforme: string,
    private _modeleEconomique: string,
    ){}

    public get id() : number{
      return this._id;
    }

    public set id(v : number) {
      this._id = v;
    }

    public get nom() {
      return this._nom;
    }


    public set nom(v : string) {
      this._nom = v;
    }


    public get editeur() {
      return this._editeur;
    }


    public set editeur(v : string) {
      this._editeur = v;
    }

    public get dateDeSortie() {
      return this._dateDeSortie;
    }


    public set dateDeSortie(v : Date) {
      this._dateDeSortie = v;
    }

    public get description() {
      return this._description;
    }


    public set description(v : string) {
      this._description = v;
    }


    public get genre() {
      return this._genre;
    }


    public set genre(v : string) {
      this._genre = v;
    }

    public get image() {
      return this._image;
    }


    public set image(v : string) {
      this._image = v;
    }

    public get classification() {
      return this._classification;
    }


    public set classification(v : string) {
      this._classification = v;
    }

    public get plateforme() {
      return this._plateforme;
    }


    public set plateforme(v : string) {
      this._plateforme = v;
    }

    public get modeleEconomique() {
      return this._modeleEconomique;
    }


    public set modeleEconomique(v : string) {
      this._modeleEconomique = v;
    }

}
