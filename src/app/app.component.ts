import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StartPage } from '../pages/start/start';
import { CoachingProductListPage } from '../pages/coaching-product-list/coaching-product-list';

@Component({
  templateUrl: 'app.html'
})
export class MotivadoApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = StartPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.pages = [
      {
        title: 'Start',
        component: StartPage
      },
      {
        title: 'Alle Coachings',
        component: CoachingProductListPage
      },
      {
        title: 'Trennung',
        component: CoachingProductListPage
      }
    ];
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
