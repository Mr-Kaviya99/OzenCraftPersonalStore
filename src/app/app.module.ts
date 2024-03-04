import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalShopHomeContextComponent } from './components/home/personal-shop-home-context/personal-shop-home-context.component';
import { PersonalShopMainHeaderComponent } from './components/shared/personal-shop-main-header/personal-shop-main-header.component';
import { PersonalShopMainFooterComponent } from './components/shared/personal-shop-main-footer/personal-shop-main-footer.component';
import { PersonalShopStoreContextComponent } from './components/shop/personal-shop-store-context/personal-shop-store-context.component';
import { PersonalShopHomeMainSliderComponent } from './components/home/personal-shop-home-main-slider/personal-shop-home-main-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalShopHomeContextComponent,
    PersonalShopMainHeaderComponent,
    PersonalShopMainFooterComponent,
    PersonalShopStoreContextComponent,
    PersonalShopHomeMainSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
