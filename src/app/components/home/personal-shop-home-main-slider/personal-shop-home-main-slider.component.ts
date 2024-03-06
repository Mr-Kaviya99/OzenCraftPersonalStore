import {Component} from '@angular/core';
import {CarouselComponent, OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-personal-shop-home-main-slider',
  templateUrl: './personal-shop-home-main-slider.component.html',
  styleUrls: ['./personal-shop-home-main-slider.component.scss']
})
export class PersonalShopHomeMainSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  carouselData = ['', '', ''];

  sliderPrev(carousel: CarouselComponent) {
    carousel.prev();
  }

  sliderNext(carousel: CarouselComponent) {
    carousel.next();
  }

}
