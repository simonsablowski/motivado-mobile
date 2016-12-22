import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CoachingProductCategoryService {
	category: any;
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

	loadTopics(category) {
		this.category = category;

		if (this.data) {
	    return Promise.resolve(this.data);
	  }

	  return new Promise(resolve => {
	    this.http.get('assets/json/coaching-product-categories.json')
	      .map(res => res.json().filter(category => {
					if (this.category !== undefined && this.category.key !== undefined) {
						return category.key == this.category.key;
					} else {
						return true;
					}
				}))
	      .subscribe(data => {
	        this.data = data[0].topics;
	        resolve(this.data);
	      });
	  });
	}
}
