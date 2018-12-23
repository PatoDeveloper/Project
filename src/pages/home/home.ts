import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectProvider } from '../../providers/project/project';
import { Project } from '../../models/project/project';
import { ItemProvider } from '../../providers/item/item';
import { ItemsPage } from '../items/items';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public isAuth : boolean = false;
  public projects: Array<Project> = new Array<Project>();

  constructor(public navCtrl: NavController, public projectProvider: ProjectProvider, public itemProvider: ItemProvider, public authProvider : AuthProvider) {
    setTimeout(() => {
    this.authProvider.isUserAuthorized().subscribe(response => {this.isAuth = response;}); //Pouze pro zpoždění inicialiaze. Zázračně pomohlo ale asi prasárna
    this.refresh();
    }, 1000);
  }

  ionViewDidLoad() {
    this.authProvider.isUserAuthorized().subscribe(response => {this.isAuth = response});
    this.refresh();
  }

  public doRefresh(refresh) {
      this.authProvider.isUserAuthorized().subscribe(isAuth => {
        if(isAuth===true){
          this.isAuth = isAuth; 
          this.projectProvider.getAllProjects().subscribe((response) => { this.projects = response; refresh.complete()});
        }else{
          this.isAuth = false;
          this.projects = new Array<Project>();
        }
        refresh.complete();
      });
  }

  public refresh = (): void => {
    this.projectProvider.getAllProjects().subscribe((response) => { this.projects = response });
  }

  public getItemsByProject = (projectID: number) => {
    this.navCtrl.push(ItemsPage,{selectedProjectId : projectID});
  }
}
