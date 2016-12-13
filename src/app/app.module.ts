import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MotivadoApp } from './app.component';
import { StartPage } from '../pages/start/start';
import { CoachingProductListPage } from '../pages/coaching-product-list/coaching-product-list';
import { CoachingProductPage } from '../pages/coaching-product/coaching-product';

@NgModule({
  declarations: [
    MotivadoApp,
    StartPage,
    CoachingProductListPage,
    CoachingProductPage
  ],
  imports: [
    IonicModule.forRoot(MotivadoApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MotivadoApp,
    StartPage,
    CoachingProductListPage,
    CoachingProductPage
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  }]
})
export class AppModule {}
