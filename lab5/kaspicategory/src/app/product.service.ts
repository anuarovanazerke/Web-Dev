import { Injectable } from '@angular/core';
import {Product} from './models/product.model';
import {Category} from './models/category.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  categories:Category[]=[
    {id:1,name:'Smartphones'},
    {id:2,name:'Laptops'},
    {id:3,name:'Headphones'},
    {id:4,name:'Tablets'}
  ];

  products: Product[]=[
    {
      id:1,
      name:'iPhone 13',
      description:'128Gb,Midnight',
      price:318.171,
      rating:4.8,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000',
      likes:0,
      categoryId:1
    },
    {
      id:2,
      name:'iPhone 15',
      description:'127Gb,Green',
      price:403.999,
      rating:4.7,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h60/h8b/86303348686878.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/apple-iphone-15-128gb-zelenyi-113137974/?c=750000000',
      likes:0,
      categoryId:1
    },
    {
      id:3,
      name:'Iphone 16',
      description:'128Gb',
      price:479.999,
      rating:4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pfe/paf/14252844.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/apple-iphone-16-128gb-dual-sim-belyi-131734933/?c=750000000',
      likes:3,
      categoryId:1
    },
    {
      id:4,
      name:'iPhone 14 Pro Max',
      description:'128Gb,silver',
      price:564.888,
      rating:4.5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h07/hcf/64428132466718.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-128gb-serebristyi-106363297/?c=750000000',
      likes:0,
      categoryId:1
    },
    {      
      id:5,
      name:'iPhone Air',
      description:'256Gb,starlight',
      price:591.513,
      rating:4.7,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p90/pb1/64171067.png?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/apple-iphone-air-256gb-zolotistyi-145468540/?c=750000000',
      likes:1,
      categoryId:1
    },

    {
      id:6,
      name:' Lenovo IdeaPad 3',
      description:'15.6" / 8 Гб / SSD 512 Гб / Win 11 / 15IAU7 / 82RK00EWRK',
      price:239.495,
      rating:4.6,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-512-gb-win-11-15iau7-82rk00ewrk-107333284/?c=750000000',
      likes:2,
      categoryId:2

    },
    {
      id:7,
      name:'Acer Aspire',
      description:'16" / 16 Гб / eMMC 512 Гб / Win 11 Pro / NX.J5REM.01C / AL16-52P',
      price:279.967,
      rating:4.5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p91/pf8/28407711.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/acer-aspire-16-16-gb-emmc-512-gb-win-11-pro-nx-j5rem-01c-al16-52p-135804242/?c=750000000',
      likes:0,
      categoryId:2

    },
    {
      id:8,
      name:'MacBook Air 13',
      description:'13.6" / 16 Гб / SSD 256 Гб / macOS / MC7X4RU/A',
      price:458.975,
      rating:4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000',
      likes:2,
      categoryId:2

    },
    {
      id:9,
      name:'ASUS Vivobook 15',
      description:'15.6" / 24 Гб / SSD 1000 Гб / Win 11 Pro / X1504ZA-BQ1105ZW /',
      price:398.997,
      rating:4.6,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h9d/h98/85775243247646.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-24-gb-ssd-1000-gb-win-11-pro-x1504za-bq1105zw-90nb1022-mzw1m0-118395132/?c=750000000',
      likes:0,
      categoryId:2

    },
    {
      id:10,
      name:' Huawei MateBook ',
      description:' 16 Гб / SSD 512 Гб / Win 11 Home / MitchellG-W5651',
      price:388.982,
      rating:4.4,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h08/h94/84934299090974.png?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/huawei-matebook-d16-16-16-gb-ssd-512-gb-win-11-home-mitchellg-w5651-115943541/?c=750000000',
      likes:1,
      categoryId:2

    },
    {
      id:11,
      name:'Huawei MatePad 11.5',
      description:'11.5 дюйм 8 Гб/128 Гб',
      price:164.891,
      rating:4.6,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pe0/p39/77818269.png?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-11-5-djuim-8-gb-128-gb-seryi-podarok-145940951/?c=750000000',
      likes:2,
      categoryId:4

    },
    {
      id:12,
      name:'Xiaomi Redmi Pad 2',
      description:'4G 11 дюйм 8 Гб/256 Гб',
      price:129.995,
      rating:4.7,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=750000000',
      likes:0,
      categoryId:4

    },
    {
      id:13,
      name:'Apple iPad Air 11',
      description:'2025 Wi-Fi 11 дюйм 8 Гб/128 Гб',
      price:328.981,
      rating:4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000',
      likes:5,
      categoryId:4

    },
    {
      id:14,
      name:' Samsung Galaxy Tab A9',
      description:'LTE 8.7 дюйм 4 Гб/64 Гб',
      price:114.693,
      rating:4.6,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/84176279076894.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-sinii-113806822/?c=750000000',
      likes:3,
      categoryId:4

    },
    {
      id:15,
      name:' Apple iPad Pro 11 ',
      description:'2024 Wi-Fi 11 дюйм 8 Гб/256 Гб',
      price:510.957,
      rating:4.8,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000',
      likes:6,
      categoryId:4

    },
    {
      id:16,
      name:' Apple AirPods 4 ',
      description:'White',
      price:61.612,
      rating:4.5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
      likes:1,
      categoryId:3

    },
    {
      id:17,
      name:'Marshall Major IV',
      description:'Black',
      price:19.805,
      rating:4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000',
      likes:5,
      categoryId:3
    },
    {
      id:18,
      name:'Huawei Freebuds SE 2',
      description:'white',
      price:13.435,
      rating:54,
      image:'https://resources.cdn-kaspi.kz/img/m/p/haf/h1d/83684356161566.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/naushniki-huawei-freebuds-se-2-belyi-113250696/?c=750000000',
      likes:3,
      categoryId:3

    },
    {
      id:19,
      name:'MCHOSE V9 Pro',
      description:'white',
      price:19.985,
      rating:4.3,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pe4/pc1/24496570.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/naushniki-mchose-v9-pro-belo-sinii-134597969/?c=750000000',
      likes:4,
      categoryId:3

    },
    {
      id:20,
      name:' Apple AirPods Max',
      description:'Green',
      price:323.469,
      rating:4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hac/hb1/64019769229342.jpg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-zelenyi-101161547/?c=750000000',
      likes:8,
      categoryId:3

    },
  ];

  getProductByCategory(categoryId:number){
    return this.products.filter(p=> Number(p.categoryId)===Number(categoryId));
  }
}
  
