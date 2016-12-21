import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CoachingProductService } from '../../providers/coaching-product-service';
import { CoachingProductPage } from '../coaching-product/coaching-product';

@Component({
  selector: 'page-coaching-product-list',
  templateUrl: 'coaching-product-list.html',
	providers: [CoachingProductService]
})
export class CoachingProductListPage {
  selectedCoachingProduct: any;
  // TODO: fix this
  category: string = 'trennung';
  coachingProducts: Array<{title: string, description: string, thumbnail: string}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coachingProductService: CoachingProductService
  ) {
    this.selectedCoachingProduct = navParams.get('item');
    this.loadCoachingProducts();
  }

  loadCoachingProducts() {
    this.coachingProductService.load()
    .then(data => {
      //this.category = data.title;
      this.coachingProducts = data;
    });
  }

  selectCoachingProduct(event, coachingProduct) {
    this.navCtrl.push(CoachingProductPage, {
      coachingProduct: coachingProduct
    });
  }
}
