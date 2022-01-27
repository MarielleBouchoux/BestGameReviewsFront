import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service.service';
import { TokenStorage } from 'src/app/services/token-storage.service.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  // initialise le thème du user
  theme: string = "";
  subscription = new Subscription;

  username = "Rudolph";
  password = "admi123";
  isAuth:boolean =false;
  email = "";
  form: any = {
    email: null,
    password: null
  };
  // on initialise l'état de connexion du user
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  // pour la possibilité de voir le mot de passe que l'utilisateur saisie
  hide = true;

  constructor(private data: DataService, private authService: AuthService, private tokenStorage: TokenStorage, private router: Router ) {};


  ngOnInit(): void {
    // onInit récupère le currentThème du data service
    this.subscription = this.data.currentTheme.subscribe(theme => this.theme = theme);
    // on Init on récupère le token
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    // onInit on récupère l'état de connexion du user
    this.subscription = this.authService.connexionState.subscribe(connexionState => this.isLoggedIn = connexionState);
  }

  ngOnDestroy(){
    if (this.subscription != null){
      this.subscription.unsubscribe();
    }
  }

  // pour la validation du formulaire de connexion
  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(true);
    this.router.navigate(['/avis/liste-avis']);



    // Nous utiliserons cette fonction lorsque nous enverrons le login à l'API
    // this.authService.login(email, password).subscribe(
    //   data => {
    //     this.tokenStorage.saveToken(data.token);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.reloadPage();
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
