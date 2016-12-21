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
  selectedProduct: any;
  categories: Array<{key: string, title: string}>;
  products: Array<{title: string, description: string, thumbnail: string}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coachingProductCategoryService: CoachingProductCategoryService,
    public coachingProductService: CoachingProductService
  ) {
    this.selectedProduct = navParams.get('item');
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    this.coachingProductCategoryService.load()
    .then(data => {
      this.categories = data;
      this.selectedCategory = data[0];
    });
  }

  loadProducts() {
    this.coachingProductService.load(this.selectedCategory)
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
