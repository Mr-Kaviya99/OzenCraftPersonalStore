import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalShopHomeContextComponent } from './components/home/personal-shop-home-context/personal-shop-home-context.component';
import { PersonalShopMainHeaderComponent } from './components/shared/personal-shop-main-header/personal-shop-main-header.component';
import { PersonalShopMainFooterComponent } from './components/shared/personal-shop-main-footer/personal-shop-main-footer.component';
import { PersonalShopStoreContextComponent } from './components/shop/personal-shop-store-context/personal-shop-store-context.component';
import { PersonalShopHomeMainSliderComponent } from './components/home/personal-shop-home-main-slider/personal-shop-home-main-slider.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { PersonalShopHomeTopOffersComponent } from './components/home/personal-shop-home-top-offers/personal-shop-home-top-offers.component';
import { PersonalShopHomeWeeklyDealComponent } from './components/home/personal-shop-home-weekly-deal/personal-shop-home-weekly-deal.component';
import { PersonalShopHomeOurServicesComponent } from './components/home/personal-shop-home-our-services/personal-shop-home-our-services.component';
import { PersonalShopHomeTopProductsComponent } from './components/home/personal-shop-home-top-products/personal-shop-home-top-products.component';
import { PersonalShopHomeSaleBannerComponent } from './components/home/personal-shop-home-sale-banner/personal-shop-home-sale-banner.component';
import { PersonalShopHomeSpecialsComponent } from './components/home/personal-shop-home-specials/personal-shop-home-specials.component';
import { PersonalShopHomeSubscriptionComponent } from './components/home/personal-shop-home-subscription/personal-shop-home-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalShopHomeContextComponent,
    PersonalShopMainHeaderComponent,
    PersonalShopMainFooterComponent,
    PersonalShopStoreContextComponent,
    PersonalShopHomeMainSliderComponent,
    PersonalShopHomeTopOffersComponent,
    PersonalShopHomeWeeklyDealComponent,
    PersonalShopHomeOurServicesComponent,
    PersonalShopHomeTopProductsComponent,
    PersonalShopHomeSaleBannerComponent,
    PersonalShopHomeSpecialsComponent,
    PersonalShopHomeSubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
