import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, DateTime } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Item } from '../../models/item/item';
import { ItemProvider } from '../../providers/item/item';

/**
 * Generated class for the ItemModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-modal',
  templateUrl: 'item-modal.html',
})
export class ItemModalPage {

  public selectedProjectId : number;
  public item : Item = new Item();

  constructor(private viewController : ViewController, public navParams: NavParams, private notificationService : LocalNotifications, private itemProvider : ItemProvider) {
    this.selectedProjectId = navParams.get('selectedProjectId');
  }

  public closeModal(){
    this.viewController.dismiss();
  }

  public addNewTodo(){
    console.log("asdasdasdasdasd" + this.item.Content);
    this.itemProvider.createNewItem(this.item.Content, this.selectedProjectId);
    if(this.item.DueDate == undefined || this.item.DueDate == null){
      return;
    }else{
      console.log(this.item.DueDate.getMilliseconds());
      console.log(new Date(this.item.DueDate.toString()).getDate());
      

      window["asdasd"] = this.item.DueDate;
    //   this.notificationService.schedule({
    //     text: 'To do: '+ this.item.Content,
    //     trigger: {at: new Date(this.item.DueDate.getDate())},
    //     led: 'FF0000',
    //     sound: null
    //  });

    // ionic cordova run android --prod -lcs
    }
  }

  ionViewDidLoad() {
    console.log(this.selectedProjectId);
    console.log('ionViewDidLoad ItemModalPage');
  }

}
