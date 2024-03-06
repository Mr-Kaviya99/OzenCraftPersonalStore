import {Component, OnInit} from '@angular/core';
import {CarouselComponent, OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-personal-shop-home-weekly-deal',
  templateUrl: './personal-shop-home-weekly-deal.component.html',
  styleUrls: ['./personal-shop-home-weekly-deal.component.scss']
})
export class PersonalShopHomeWeeklyDealComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      475: {
        items: 2,
      },
      575: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1100: {
        items: 5, // Adjust the number of items for this breakpoint
      },
      // nav: true
    }
  }
  carouselData = ['', '', '', '', '', '', '', '', '', '', ''];

  sliderPrev(carousel: CarouselComponent) {
    carousel.prev();
  }

  sliderNext(carousel: CarouselComponent) {
    carousel.next();
  }

  ngOnInit(): void {

  }
}
