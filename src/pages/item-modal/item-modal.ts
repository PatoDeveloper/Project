import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Item } from '../../models/item/item';

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

  constructor(private viewController : ViewController, public navParams: NavParams, private notificationsService : LocalNotifications) {
    this.selectedProjectId = navParams.get('selectedProjectId');
  }

  public closeModal(){
    this.viewController.dismiss();
  }

  public addNewItem(){
    this.notificationsService.schedule({
      text: 'Delayed ILocalNotification',
      trigger: {at: this.item.DueDate},
      led: '00FF00',
      sound: null
   });
  }


  ionViewDidLoad() {
    console.log(this.selectedProjectId);
    console.log('ionViewDidLoad ItemModalPage');
  }

}
