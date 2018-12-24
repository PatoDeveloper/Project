import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ItemProvider } from '../../providers/item/item';
import { Item } from '../../models/item/item';
import { ProjectProvider } from '../../providers/project/project';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {

  public items: Array<Item> = new Array<Item>();
  public selectedProjectId: number = 0;
  public issue: string;
  public projectName: string = "Loading...";
  public loader: any;

  constructor(
    public navCtrl: NavController,
    public userProvider: UserProvider,
    public navParams: NavParams,
    public itemProvider: ItemProvider,
    public projectProvider: ProjectProvider,
    public loadingControler: LoadingController,
    public modalController: ModalController) {
    this.loader = this.loadingControler.create({
      content: "Please wait...",
      duration: 3000,
    });
    this.loader.present();
    this.selectedProjectId = this.navParams.data["selectedProjectId"];
    this.projectProvider.getProjectById(this.selectedProjectId).subscribe(x => this.projectName = x.Content);
    this.itemProvider.getAllItemsByProjectId(this.selectedProjectId).subscribe(response => {
      this.items = response;
      this.loader.dismiss();
    })
  }

  ionViewDidLoad() {
    this.selectedProjectId = this.navParams.data["selectedProjectId"];
    this.itemProvider.getAllItemsByProjectId(this.selectedProjectId).subscribe(response => {
      this.items = response;})
  }

  public deleteItem = (itemId: number) => {
    this.itemProvider.deleteItem(itemId).subscribe(response => {
      this.itemProvider.getAllItemsByProjectId(this.selectedProjectId).subscribe(resp => { this.items = resp; });
    })
  }

  public addNewTodo() {
    var modal = this.modalController.create('ItemModalPage', { selectedProjectId: this.selectedProjectId });
    modal.present();
  }

  public reload(){
    this.itemProvider.getAllItemsByProjectId(this.selectedProjectId).subscribe(response => {
      this.items = response;});
  }

  public createItem = (): void => {
    console.log(this.issue);
    if (this.issue == "" || this.items == null) {
      return;
    }
    this.itemProvider.createNewItem(this.issue, this.selectedProjectId).subscribe(respone => {
      if (respone) {
        this.itemProvider.getAllItemsByProjectId(this.selectedProjectId).subscribe(items => {
          this.items = items;
          this.issue = "";
        })
      }
    });
  }
}
