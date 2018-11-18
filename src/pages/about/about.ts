import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ItemProvider } from '../../providers/item/item';
import { Item } from '../../models/item/item';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public items: Array<Item>;
  public selectedProjectId: number = 0;
  public issue: string;

  constructor(public navCtrl: NavController, public userProvider: UserProvider, public navParams: NavParams, public itemProvider: ItemProvider) {
    this.selectedProjectId = this.navParams.data["selectedProjectId"];
    this.itemProvider.getAllItemsByProjectId(this.selectedProjectId).subscribe(response => {
      this.items = response;
    })
  }

  ionViewDidLoad() {
    this.selectedProjectId = this.navParams.data["selectedProjectId"];
  }

  public createItem = (): void => {
    if(this.issue == ""|| this.items == null) {
      return;
    }
    this.itemProvider.createNewItem(this.issue, this.selectedProjectId).subscribe(respone => {
      if (respone) {
        this.itemProvider.getAllItemsByProjectId(this.selectedProjectId).subscribe(items => {
          this.items = items;
        })
      }
    });
  }
}
