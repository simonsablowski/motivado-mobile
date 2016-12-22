import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CoachingProductService {
	topic: any;
	data: any;

  constructor(
		public http: Http
	) {}

	loadTopicsProducts(topic) {
		this.topic = topic;

		if (this.data) {
	    return Promise.resolve(this.data);
	  }

	  return new Promise(resolve => {
			this.http.get('assets/json/coaching-products.json')
	      .map(res => res.json().filter(product => {
					if (this.topic !== undefined && this.topic.key !== undefined) {
						return product.topic == this.topic.key;
					} else {
						return true;
					}
				}))
	      .subscribe(data => {
	        this.data = data;
	        resolve(this.data);
	      });
	  });
	}

	loadFeaturedProducts() {
		if (this.data) {
	    return Promise.resolve(this.data);
	  }

	  return new Promise(resolve => {
	    this.http.get('assets/json/coaching-products.json')
	      .map(res => res.json().filter(function(product) {
					return product.featured == true;
				}))
	      .subscribe(data => {
	        this.data = data;
	        resolve(this.data);
	      });
	  });
	}
}
