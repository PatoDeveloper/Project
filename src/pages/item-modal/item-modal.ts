import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

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

  constructor(private viewController : ViewController, public navParams: NavParams) {
    this.selectedProjectId = navParams.get('selectedProjectId');
  }

  public closeModal(){
    this.viewController.dismiss();
  }

  ionViewDidLoad() {
    console.log(this.selectedProjectId);
    console.log('ionViewDidLoad ItemModalPage');
  }

}
