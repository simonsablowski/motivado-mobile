import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CoachingProductService } from '../../providers/coaching-product-service';
import { CoachingProductListPage } from '../coaching-product-list/coaching-product-list';
import { CoachingProductPage } from '../coaching-product/coaching-product';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
	providers: [ CoachingProductService ]
})
export class StartPage {
  products: Array<{ title: string, description: string, image: string, component: any }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coachingProductService: CoachingProductService
  ) {
    this.loadFeaturedProducts();
  }

  loadFeaturedProducts() {
    this.coachingProductService.loadFeaturedProducts()
    .then(data => {
      this.products = data;
    });
  }

  selectProduct(event, product) {
    this.navCtrl.push(CoachingProductPage, {
      product: product
    });
  }
}
