import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {


  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;
  dateNaissance= new Date(1600000000000);
  password= "";
  confirmPassword= "";
  checkPasswordMismatchPassword : boolean = false;
  form: any = {
    pseudo: null,
    email: null,
    password: null,
    confirmPassword: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  tomorrow = new Date();


  // pour la possibilité de voir le mot de passe que l'utilisateur saisie
  hide = true;



  constructor(private data: DataService, private authService: AuthService ) {};

  // onInit récupère le currentThème du data service
  ngOnInit(): void {
    this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme)
  }

  ngOnDestroy(){
    if (this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

  // pour la validation du formulaire de connexion
  onSubmit(): void {
    const { pseudo, email, password, confirmPassword } = this.form;
    const dateNaissance = this.dateNaissance;
    this.authService.inscription(pseudo, email, dateNaissance, password, confirmPassword).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  checkPasswordMismatch(input1 : HTMLInputElement, input2 : HTMLInputElement){

    if (input1.value.trim() === input2.value.trim()){
      this.checkPasswordMismatchPassword = true;
    } else {
     this.checkPasswordMismatchPassword = false;
    }
    return this.checkPasswordMismatchPassword;
  }
}
