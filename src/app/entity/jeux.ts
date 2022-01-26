export class Jeux {

  constructor(private _nom: string, private _editeur: string, private _dateDeSortie: Date,
    private _description: string, private _genre: string, private _image: string,
    private _classification: string, private _plateforme: string, private _modeleEconomique: string){}


    public get nom() {
      return this._nom;
    }

    public get editeur() {
      return this._editeur;
    }

    public get dateDeSortie() {
      return this._dateDeSortie;
    }

    public get description() {
      return this._description;
    }

    public get genre() {
      return this._genre;
    }

    public get image() {
      return this._image;
    }

    public get classification() {
      return this._classification;
    }

    public get plateforme() {
      return this._plateforme;
    }

    public get modeleEconomique() {
      return this._modeleEconomique;
    }
}
