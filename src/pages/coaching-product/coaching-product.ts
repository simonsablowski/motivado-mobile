import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CoachingService } from '../../providers/coaching-service';
//import { VideoCoachingObject } from '../coaching-object/video-coaching-object.html';
//import { TextCoachingObject } from '../coaching-object/text-coaching-object.html';

@Component({
  selector: 'page-coaching-product',
  templateUrl: 'coaching-product.html',
	providers: [ CoachingService ]
})
export class CoachingProductPage {
  selectedProduct: any;
  title: string;
  description: string;
  objects: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coachingService: CoachingService
  ) {
    this.selectedProduct = navParams.get('item');
    this.loadProduct();
  }

  loadProduct() {
    this.coachingService.loadCoaching()
    .then(data => {
      this.title = data.title;
      this.description = data.description;
      this.objects = data.objects;
    });
  }
}
