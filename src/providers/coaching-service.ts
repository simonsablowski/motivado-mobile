import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CoachingService {
	data: any;

  constructor(
		public http: Http
	) {}

	loadCoaching() {
	  if (this.data) {
	    return Promise.resolve(this.data);
	  }

	  return new Promise(resolve => {
	    //this.http.get('http://tools.motivado.de/ui/query/bez-rapid-ruin/1')
		  this.http.get('assets/json/sample-coaching.json')
	      .map(res => res.json())
	      .subscribe(data => {
	        this.data = data;
	        resolve(this.data);
	      });
	  });
	}

}
