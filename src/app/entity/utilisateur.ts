export class Utilisateur {

  private _id:number= 0
  private _role: string = 'anonymous';
  private _token: string = 'default';
  constructor(private _pseudo: string, private _email: string, private _dateDeNaissance: Date, private _password: string){}

  public get pseudo() {
    return this._pseudo;
  };

  public get email() {
    return this._email;
  };

  public get dateDeNaissance() {
    return this._dateDeNaissance;
  };

  public get password() {
    return this._password;
  };

  public get id() {
    return this._id;
  };

  public set id(v : number) {
    this._id = v;
  };

  public get role() {
    return this._role;
  };

  public set role(r : string) {
    this._role = r;
  };

  public get token(){
    return this._token;
  }

  public set token(t : string) {
    this._role = t;
  };

}
