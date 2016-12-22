import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CoachingProductCategoryService } from '../../providers/coaching-product-category-service';
import { CoachingProductService } from '../../providers/coaching-product-service';
import { CoachingProductPage } from '../coaching-product/coaching-product';

@Component({
  selector: 'page-coaching-product-list',
  templateUrl: 'coaching-product-list.html',
	providers: [ CoachingProductService, CoachingProductCategoryService ]
})
export class CoachingProductListPage {
  selectedCategory: any;
  selectedTopic: any;
  selectedProduct: any;
  topics: Array<{ key: string, title: string }>;
  products: Array<{ title: string, description: string, thumbnail: string }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coachingProductCategoryService: CoachingProductCategoryService,
    public coachingProductService: CoachingProductService
  ) {
    //TODO: fix these
    this.selectedCategory = { "key": "liebe", "title": "Liebe" };
    this.selectedTopic = { "key": "trennung", "title": "Ex zurück" };
    this.selectedProduct = navParams.get('item');
    this.loadTopics();
    this.loadProducts();
  }

  loadTopics() {
    this.coachingProductCategoryService.loadTopics(this.selectedCategory)
    .then(data => {
      this.topics = data;
      this.selectedTopic = data[0];
    });
  }

  loadProducts() {
    this.coachingProductService.loadTopicsProducts(this.selectedTopic)
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
