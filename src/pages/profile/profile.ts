import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterUser } from '../../models/user/registerUser';
import { UserProvider } from '../../providers/user/user';

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


  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public userProvider: UserProvider, public alertController: AlertController) {
  }

  public login = (): any => {
    let usr: RegisterUser = new RegisterUser();
    usr.Email = this.loginEmail;
    usr.Password = this.loginPassword;
    usr.FullName = "fullName";
    this.authProvider.loginUser(usr).subscribe(response => {
      console.log(response);
      this.authProvider.isUserAuthorized().subscribe(x => {
        console.log("je authorizovany:" + x);
        if (x == true) {
          this.showSuccessLoginAlert();
        } else {
          this.showErrorLoginAlert();
        }
      })
    });
  }

  public registration = (): any => {
    let usr: RegisterUser = new RegisterUser();
    usr.Email = this.registrationEmail;
    usr.Password = this.registrationPassword;
    usr.FullName = this.registrationFullName;
    this.authProvider.registerUser(usr).subscribe(response => { console.log("Jsi zaregistrovaný"); });
  }

  private showSuccessLoginAlert = (): void => {
    this.alertController.create({
      title: 'Login',
      subTitle: 'Login was success!',
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

}
