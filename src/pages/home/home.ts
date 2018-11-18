import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectProvider } from '../../providers/project/project';
import { Project } from '../../models/project/project';
import { ItemProvider } from '../../providers/item/item';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public projects: Array<Project> = new Array<Project>();

  constructor(public navCtrl: NavController, public projectProvider: ProjectProvider, public itemProvider: ItemProvider) {
    // this.projectProvider.getAllProjects().subscribe( (response) => console.log(response));
  }

  
  public refresh = (): void => {
    this.projectProvider.getAllProjects().subscribe((response) => { this.projects = response });
    console.log(this.projects);
  }

  public getItemsByProject = (projectID: number) => {
    console.log(projectID);
    this.navCtrl.push(AboutPage,{selectedProjectId : projectID});
    // this.navCtrl.parent.select(1);
    // this.itemProvider.getAllItemsByProjectId(projectID).subscribe((response) => { console.log(response) });
  }
}
