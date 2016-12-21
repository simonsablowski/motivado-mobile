import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CoachingProductService {
	category: any;
	data: any;

  constructor(
		public http: Http
	) {}

	loadCategorysProducts(category) {
		if (this.data) {
	    return Promise.resolve(this.data);
	  }

	  return new Promise(resolve => {
	    this.http.get('assets/json/coaching-products.json')
	      .map(res => res.json().filter(function(element) {
					//TODO: fix category
					return element.category == 'trennung';
				}))
	      .subscribe(data => {
	        this.data = data;
	        resolve(this.data);
	      });
	  });
	}
}
