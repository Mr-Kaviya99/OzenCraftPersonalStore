import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  PersonalShopHomeContextComponent
} from "./components/home/personal-shop-home-context/personal-shop-home-context.component";
import {
  PersonalShopStoreContextComponent
} from "./components/shop/personal-shop-store-context/personal-shop-store-context.component";

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: PersonalShopHomeContextComponent},
  {path: 'shop', component: PersonalShopStoreContextComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
