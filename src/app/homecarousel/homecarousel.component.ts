import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { interval, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { trigger, animate, transition, style, group, query } from '@angular/animations';
@Component({
  selector: 'app-homecarousel',
  templateUrl: './homecarousel.component.html',
  styleUrls: ['./homecarousel.component.css']
})
export class HomecarouselComponent implements OnInit {

  
  images = ['assets/image/home_finger.gif',
    'assets/bg/background-transparent-yellowblue.png',
    'assets/bg/background-transparent-matrixs.jpg'];

  carouselBanner: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 200,
    /*interval: {
      timing: 3000,
      initialDelay: 1000
    },*/
    point: {
      visible: true
    },
    load: 2,
    animation: 'lazy',
    /*custom: 'banner',*/
    loop: true,
    touch: true, // touch is not currently in active for vertical carousel, will enable it in future build
    velocity: 0.2,
  	easing: 'ease',
    vertical: {
      enabled: true,
      height: 498,
    }
  };
  constructor() {}
  tempData: any[];
  public carouselTileItems$: Observable<number[]>;
  ngOnInit() {
    this.tempData = [];

    this.carouselTileItems$ = interval(500).pipe(
      startWith(2),
      take(this.images.length),
      map(i => {
        const data = (this.tempData = [
          ...this.tempData,
          this.images[i]
        ]);
        return data;
      })
    );
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: any) {
    console.log(data);
  }
}