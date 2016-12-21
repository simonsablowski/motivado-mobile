import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CoachingService } from '../../providers/coaching-service';
//import { VideoCoachingObject } from '../coaching-object/video-coaching-object.html';
//import { TextCoachingObject } from '../coaching-object/text-coaching-object.html';

@Component({
  selector: 'page-coaching-product',
  templateUrl: 'coaching-product.html',
	providers: [CoachingService]
})
export class CoachingProductPage {
  selectedCoachingProduct: any;
  title: string;
  description: string;
  objects: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coachingService: CoachingService
  ) {
    this.selectedCoachingProduct = navParams.get('item');
    this.loadCoachingProduct();
  }

  loadCoachingProduct() {
    this.coachingService.load()
    .then(data => {
      this.title = data.title;
      this.description = data.description;
      this.objects = data.objects;
    });
  }
}
