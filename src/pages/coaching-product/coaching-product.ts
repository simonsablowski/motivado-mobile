import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CoachingService } from '../../providers/coaching-service';

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
		this.title = 'Ex zurück';
    this.loadCoachingProduct();
  }

	loadCoachingProduct() {
	  this.coachingService.loadObjects()
	  .then(data => {
	    this.objects = data;
	  });
	}
}
