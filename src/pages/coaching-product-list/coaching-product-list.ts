import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CoachingProductPage } from '../coaching-product/coaching-product';

@Component({
  selector: 'page-coaching-product-list',
  templateUrl: 'coaching-product-list.html'
})
export class CoachingProductListPage {
  selectedCoachingProduct: any;
  category: string = 'trennung';
  coachingProducts: Array<{title: string, description: string, thumbnail: string}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.selectedCoachingProduct = navParams.get('item');
    this.coachingProducts = [
			{
        title: 'Ex zurückgewinnen: Schaffen Sie jetzt den Neustart!',
        description: 'Sie wollen Ihren Ex-Partner zurückgewinnen? Wir wissen: Es gibt immer eine Chance! In unseren Beratungspaketen erwarten Sie 21 interaktive Video-Coachings mit unserem Experten Emanuel Albert.',
        thumbnail: 'assets/img/product-exzurueck.jpg'
      },
			{
        title: 'Liebeskummer: Wenn der Schmerz unerträglich wird',
        description: 'Liebeskummer ist eine Volkskrankheit und nicht zu unterschätzen. Und spätestens der Blick in den Spielgel sagt einem, was Sache ist. "Wenn man nichts macht, hängt man oft jahrelang der letzten Beziehung nach" weiß Coach Emanuel Albert. Das Gute ist: Auch wenn es sich nicht so anfühlt, es geht vorbei. Und mit diesem Coaching zünden Sie den Turbo!',
        thumbnail: 'assets/img/product-liebeskummer.jpg'
      },
		];
  }

  selectCoachingProduct(event, coachingProduct) {
    this.navCtrl.push(CoachingProductPage, {
      coachingProduct: coachingProduct
    });
  }
}
