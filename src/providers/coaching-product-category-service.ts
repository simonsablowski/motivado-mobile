import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CoachingProductCategoryService {
	data: any;

  constructor(
		public http: Http
	) {}

	loadCategories() {
	  if (this.data) {
	    return Promise.resolve(this.data);
	  }

	  return new Promise(resolve => {
	    this.http.get('assets/json/coaching-product-categories.json')
	      .map(res => res.json())
	      .subscribe(data => {
	        this.data = data;
	        resolve(this.data);
	      });
	  });
	}
}
