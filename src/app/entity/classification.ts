export class Classification {
   constructor(
private _id:number,
private _nom:string
   ){};


   public get id() : number {
     return this._id;
   }

   public set id(v : number) {
     this._id = v;
   }


   public get nom() : string {
     return this._nom;
   }

   public set nom(v : string) {
     this._nom = v;
   }



}
