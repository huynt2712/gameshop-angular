import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  slidesStore=['../../assets/img/banner_tet_97ded58690f445dabebfb0153874192c.jpg','../../assets/img/banner_chinh_copy_647ad40e474a4c35baa2e67e4d7e8ca7.jpg'];
  carouselImages=['../../assets/img/top_banner_ps_tet_46f070ba6c0d4122bf757c2f94832107.jpg','../../assets/img/top_banner_sw_tet_bf87928caa2f46349a9eec68cb7b56ac.jpg','../../assets/img/top_banner_xb_tet_70dbcb53ae394c3bb6326ca860692f0c.jpg'];
  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
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
    }
  }
  customOptions1: OwlOptions = {
    loop:true,
    mouseDrag:false,
    touchDrag:true,
    responsive:{
      0:{
        items:1
      },
      400:{
        items:3
      },
      900:{
        items:3
      }
    }
  }
}
