import { Component } from '@angular/core';
import { CoachingProductListPage } from '../coaching-product-list/coaching-product-list';
import { CoachingProductPage } from '../coaching-product/coaching-product';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {
  slides: Array<{
    title: string,
    description: string,
    image: string,
    component: any
  }>;

  constructor() {
    this.slides = [
      {
        title: 'Ex zurückgewinnen',
        description: 'Erstellen Sie mit unseren Experten Ihre persönliche Ex-Zurück-Strategie.',
        image: 'assets/img/slide-exzurueck.jpg',
        component: CoachingProductPage
      },
      {
        title: 'Endlich abnehmen',
        description: 'Abnehmen ist zu 85% Kopfsache! Jetzt bis zu 0,5kg pro Woche zusätzlich abnehmen.',
        image: 'assets/img/slide-abnehmen.jpg',
        component: CoachingProductListPage
      },
      {
        title: 'Jedes 3. Kind wird gemobbt!',
        description: 'TV-Experte Thomas Sonnenburg hilft Ihnen richtig gegen Mobbing vorzugehen.',
        image: 'assets/img/slide-mobbing.jpg',
        component: CoachingProductListPage
      }
    ];
  }
}
