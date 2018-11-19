import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterUser } from '../../models/user/registerUser';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public loginEmail: string;
  public loginPassword: string;
  public registrationEmail: string;
  public registrationFullName: string;
  public registrationPassword: string;
  typeOfSingIn: string = "login";
  public user: User = new User();

  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public userProvider: UserProvider, public alertController: AlertController) {
    this.authProvider.isUserAuthorized().subscribe(isAuth => {
      if(isAuth === true){
        userProvider.get().subscribe(user => { this.user = user});
      }
    })
  }


  public login = (): any => {
    let usr: RegisterUser = new RegisterUser();
    usr.Email = this.loginEmail;
    usr.Password = this.loginPassword;
    usr.FullName = "fullName";
    this.authProvider.loginUser(usr).subscribe(response => {
      console.log(response);
      this.authProvider.isUserAuthorized().subscribe(x => {
        if (x === true) {
          this.showSuccessLoginAlert();
          this.loginEmail = "";
          this.loginPassword = "";
          this.userProvider.get().subscribe(user => this.user = user);
        }
        else {
          this.showErrorLoginAlert();
          this.loginPassword = "";
        }
      })
    });
  }

  public registration = (): any => {
    let usr: RegisterUser = new RegisterUser();
    usr.Email = this.registrationEmail;
    usr.Password = this.registrationPassword;
    usr.FullName = this.registrationFullName;
    this.authProvider.registerUser(usr).subscribe(response => { this.showSuccessRegistrationAlert() });
  }

  private showSuccessLoginAlert = (): void => {
    this.alertController.create({
      title: 'Login',
      subTitle: 'Login was success!',
      buttons: ['OK']
    }).present();
  }

  private showSuccessRegistrationAlert = (): void => {
    this.alertController.create({
      title: 'Registration',
      subTitle: 'Registration was success!',
      buttons: ['OK']
    }).present();
  }

  private showErrorLoginAlert = (): void => {
    this.alertController.create({
      title: 'Login',
      subTitle: 'Error!',
      buttons: ['OK']
    }).present();
  }

  public logout = () => {
    this.authProvider.logout();
    localStorage.clear();
    sessionStorage.clear();
    document.cookie = "ASP.NET_SessionId"+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.user = new User();
  }
}
