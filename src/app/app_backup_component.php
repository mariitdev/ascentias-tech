<mdb-carousel [animation]="'slide'">
  <mdb-carousel-item>
    <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="First slide">
  </mdb-carousel-item>
  <mdb-carousel-item>
    <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" alt="Second slide">
  </mdb-carousel-item>
  <mdb-carousel-item>
    <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Third slide">
  </mdb-carousel-item>
</mdb-carousel>


ngOnInit() {
    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, xl:1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      loop: true,
      touch: true, // touch is not currently in active for vertical carousel, will enable it in future build
      vertical: {
        enabled: true,
        height: 400
      }
    };
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: NguCarousel) {
    console.log(data);
  }
}

/*imgags = [
    'assets/image/home_finger.gif',
    'assets/bg/background-transparent-yellowblue.png',
    'assets/bg/background-transparent-matrixs.jpg'
  ];
  public carouselTileItems: Array<any> = [0, 1, 2];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 1,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    loop: true,
    velocity: 0,
    touch: true,
  	vertical: {
    	enabled: true,
	    height: 400
  	},
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor() {}

  ngOnInit() {
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
  }

  public carouselTileLoad(j) {
     //console.log(this.carouselTiles[j]);
    const len = this.carouselTiles[j].length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTiles[j].push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }*/



  
/*export class HomecarouselComponent implements OnInit {

  
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
    velocity: 0,
  	easing: 'ease',
    vertical: {
      enabled: true,
      height: 498,
    }
  };
  constructor() {}
  tempData: any[];
  public carouselTileItems$: Observable<string>;
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
}*/