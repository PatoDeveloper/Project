import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterUser } from '../../models/user/registerUser';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public loginEmail : string;
  public loginpassword : string;
  public registerEmail : string;
  public registerFullName : string;
  public registerPassword : string;


  constructor(public navCtrl: NavController, public authProvider : AuthProvider,public  userProvider : UserProvider) {

  }

  public login = () : any => {
    let usr : RegisterUser = new RegisterUser();
    usr.Email = this.loginEmail;
    usr.Password = this.loginpassword;
    this.authProvider.loginUser(usr).subscribe( response => { this.authProvider.isUserAuthorized().subscribe(x => {console.log("isAuth: " + x);}) });
  }

  public register = () : any => {
    let usr : RegisterUser = new RegisterUser();
    usr.Email = this.registerEmail;
    usr.Password = this.registerPassword;
    usr.FullName = this.registerFullName;
    this.authProvider.registerUser(usr).subscribe( response => { console.log("Jsi zaregistrovaný"); });
  }

}
