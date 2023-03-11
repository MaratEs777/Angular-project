import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products = [
    {
      id: 1,
      name: 'Analog Watch',
      price: '109',
      color: 'Grey',
      available: 'Available',
      category: 'Watch',
      image:
        'https://cdn.shopify.com/s/files/1/0027/2357/7914/articles/A22A1281_1200x.jpg?v=1597178612',
    },
    {
      id: 2,
      name: 'Smart TV',
      price: '250',
      color: 'black',
      available: 'Available',
      category: 'Tv',
      image: 'https://filearchive.cnews.ru/img/zoom/2020/12/01/4.jpg',
    },
    {
      id: 3,
      name: 'iPhone 14',
      price: '170',
      color: 'Red',
      available: 'Not Available',
      category: 'Phone',
      image: 'https://twigo.ru/center/iblock/826/iphone_14_256_gb_krasnyy.jpeg',
    },
    {
      id: 4,
      name: 'LG Washing Machine',
      price: '278',
      color: 'Silver',
      available: 'Available',
      category: 'Washing Machine',
      image: 'https://m.media-amazon.com/images/I/714vSwERZUL._SL1500_.jpg',
    },
    {
      id: 5,
      name: 'ASUS Laptop',
      price: '320',
      color: 'Blue',
      available: 'Not Available',
      category: 'Laptop',
      image:
        'https://www.tradeinn.com/f/13821/138219674_5/asus-vivobook-15.6-i3-1115g4-8gb-256gb-ssd-%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA.jpg',
    },
    {
      id: 6,
      name: 'Fridge',
      price: '109',
      color: 'black',
      available: 'Available',
      category: 'Fridge',
      image:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDxAPDxEPEBAPEA8PDg4PEBAPEBAPFREWFxURExUZHDQgGBomHhMWIT0iJis3Li4uFx8zODMtQygtLi4BCgoKDg0OFxAQFy4hICUrLS8tMi01LS0tMi03LS0tKy0rNSsxNy4uNy0rNyswLjgxLS4vNS8tLSstLzUwKzQ1N//AABEIALcBFAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABAcDBQIGCAH/xABOEAACAQIDAgcJCQ4FBQAAAAAAAQIDEQQSIQUxBgcTIjVBsTIzUWF0gZGUtERxcnN1hLLS0xQVFiRSVFWTs8HC0ePwI0JDYqElNIOkw//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAmEQEAAgECBAYDAAAAAAAAAAAAAQIRAyEEEjFBBVGRobHwImHR/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAVZtfjiVDE4jDLAuf3PXrUM/3TlzcnUcc1uTdr2vYwR46G/cC9b/AKIFtAqmPHDJ+4I+tv7EyR43JP3DH1p/ZAWkCsVxry/Mo+sv7I5S42E+4wikrJSbxDjadudHveqTur9dhgWYCsHxsyXuKPrT+yMb43pL3CvW39kMC0wVRLjka9wL1v8ApGKXHYlvwH/t/wBIC3AaDgRwlW08IsUqTo/4lSnybmqncNa3svCb8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzZjOD+Ix21NqrD5L0cbiXPPJx0liaiVrJ/ks0+JwsqNWpRqWz0qk6c7arNFtO3nRv5bbpYTam1uVp1KiqY7EZVCUFZwxNXSSkmpJ5t3iNFj8Uq1etVipRjUqTnGMnmklKTaUn1vxkocqbJMCLTJMCRIiR6U1GNST3KdR6b+6M8SJLvVb4VXtAxy2nDwT9Ef5mGePh4JehfzO18FFTeEpx5CjUm5VefOhCq2s8nq3F28HmRPjgotr8XwrvutQovXzRLxTO+VJvjsr2pjYf7vQv5mT791nShQU3yVNVVCDhTaiqms9bX11/cWHhMNRi808LhZRi1mtQoztd23KJ0LhXGKxs8kIwjkp82MVBX5NXdkLU5e6a2yuriO6IXlOI7UWCV9xG9EfOcR2osEyXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeVeFnSe0fLsZ7RMi0iVws6T2j5djPaJkWiWQl0yTAjUyRACRAiT71V+FV7SVAiS73W+FV7QO08DqlFYWk51JU5QlV3xvF3qSejWu42EaeFeVU6lROLu2nPnPw+BeY+cA4xlgKcZc15qzjUaSs1Vl/ma943VXaEo1IUXKvUUo86dpShvfdy3f2rmtZrGIllNZmZwjbO2PGpmhTnJZ2m7py3XfgK34cUFT2jUgm3aFF3as7uknqvOXNwZrQjinmqVEmpd8klT3dV9z3lScZ0k9r1nFprk8PqtV/28CtrxbomkYlbHEb0T85xHbEsEr3iN6J+dV/4SwjJqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8q8LOk9oeXYz2iZFoolcLOk9o+XYz2iZBwVV/dKg7uHJZnFWu3ntvt4CyE+mn4H6GSIe8/QzLQqRV9JZstk8zjaV+6t73UZsyebLdR1tG/cq//ACBiiRJd7rfCqdpj4P151KClN5pOUleyWifiMku91fh1O0DuHANYaWCdKrFQlKVSbrukk5pTyqCq9fXzfFpuOxQxmDw8+TeDjUgsmSosJCskssV3Up3ve5XOxsK50aeXunKorZb6Jp3016zYYVNu17++l9YvikbyynOXa9jbOgq/L1o0ZwzWnh8kK2bMmm4wjo43fX7/AIyueHFOlDaNWNGnGlTjCilTjT5JRfIxvzbaa398s7g3jFRq01Kyu4SvZ5VHMovVder08RXPGTUhPa+KlCzjLk3ddb5KN2V5axX8U0mZlbfEZ0S/Kq/8JYRXvEZ0S/Kq/wDCWEUagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPK3C3pPaHl2M/bzOv4+UlOLi2nkSum07Znob/hb0ptDy7Gft5mix650PeX0mWQ3uxqcsuWtVo0nd5JYh1GpLK33UYtLc97WrSRrdqOpKcp05ZqcYq06eenFpLV5ZJS33Wq6jsMoRW/LaytmdkRsXBcnWtaypS3aq6jJ6ekCNwcVsOvhT7TPLvdX4VTtMOwO8L4Uu0zS73V+FU7QNjsPaEKOFfMvVztwm1pFOST8+/wBJsY7Swe6WHmufJuVOFLSNmlZS39Ttp16nV8NFci5f7or6T/kYMS+e7RbulLRJ71q/Tcvthnjd3zD7dwirU7UnThUinNOKWSStrFR3q6b8Oh0vhdiIVMfVnB3i1T1s1ryUbrXx3M6op5IbrQfpacu1s02M79L++oWnbBSN19cRnRL8qr9kCwyvOIvomXldfsgWGZNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHlXhb0ptDy7Gft5mnxC50PN9Jm94XYaa2rtCLi4v7sxdS07U26brSams1rxaad/A0QZ7Nk8s5OEUrZXKtRinrfe5FkN/oR8d3mr8XU+izjTc3/nw3rOG+0Mk8JUnGUXUwqUouL/G8Hua8dUCDsbvS+FI+y73W+FU7Sdgtkypxyqphnq3d43A9f/lPlHZk5QqrNh0uUqRbeLwaV/PU13gazDY2nGnklBt5nJu/h08PgM1Pa8YK0YNeNXv6cxklsFr/AFcN65gftTBU2Pb/AFcP63g/tBnMYwjlhwntWDlnyPN5/reM1teqp1HKKsn1eYlT2er2VSg31JYnDN/8TMVTAyg3fLdLVcpSuk/EpEzOSKxC9uIromXldf6MCxCveI2Elsm7TSliq8otprNG0VdX3q6foLCKLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPLHCecHtPaSq53fHYpKUbSlaNeaS5z3WsvMjDSpYN908T5qdF9sjjws6U2j5fjfaJkWkyyG5pYbZvW8Z5qOG+uS6eE2V1y2h5qGEf8A9DSU2SIMDcrBbJ/Lx/q2E+0MOz8Ns7LVjKpj7cvVtGNHDZXHNzW06m/REGLOGDek/janaBtZ4PZX5WP/AFGE+0I9XC7N6njvPSwq/jI0mYZsDlWw+BXcvF+enh/rEKrHDrVcs2k7Kcadr2trZn2qyHWYF98Rb/6R72KrpLwLm7vS/SWGV5xFdEfOsR/CWGVSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8n8LOlNo+X432iZEpsk8K+k9o/KGO9pmRKZZCXTJEGRabJEGBnizhg3pP42p2n2LMeDek/jKnaBnkzBNmWTMM2BHqsiVSVVZEqgX7xFdEfOsR2xLDK84iuiF5TiO1FhlUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPJnCvpPaPyhjvaahEpslcLOk9o/KGO9pmQqbLISoMkRZFgzNFgSYs4YR6T+MqfSEWcMI9J/GVPpAZ5MwzZzkzDNgYqjIlUkVGRarA9A8RPQ68pxHaiwyu+InodeVYjtRYhVI2abGcIaUXlprlGmot5lGCbdkszIHCzbChKNBOVnZ1nHusvg/vf4UdcxG0INuEHKNPJkco86U0lbLqlZWcldrXfpdnmcVx8UtNKzvDq0tCbRmYdmocIa09Y06bWecLXnn5qbby+DS3hvbQl4HhHSm1GonSlJyUXJpwlZ2dpLRq/WtDo33ZC+6rbM5N8tK7k/81rd0SKW0Y6wm3KEoZc01zoNSUoq6vonHqWl1pLKkcen4jaOtvvs1tw0eSywdZ4K7XU5Sw7d1HWk3fVW1ir6tLXf1Lx2OzHtaOtXVpFquO9JpOJAAaqAAAAAAAAAAAAAAAAAAAAADyTws6T2j8oY72moQqbJnC3pTaPyhjvaZkGmyUJMWZosjRZliyRIjI44SWk/jKnacUzjhXpL4yfaBIlIwyZ9lIxyYGObI1RmabMFRgeg+Id/9HXlWJ+kixCuuIbodeVYn6SLFKpdDxNLla2JmqSxFWNWEY0W5LLSabc7Rab1svFe5jo7OoNUnLmTlDGt0OdUUnCVVR/xE7c3Kvfy+M+cIPxfE1b0qNRVXykXVhKVtN0bSWm41/3zX5tg/wBXP658xqXpTUmLxGcz858s9P3h6dYtNYmPuzZS2dSyv/CSoqnSlSxeeV61R5bwtezveSslpY+YnAQiqnJYeNZKrio1JOpKPIKE5KEVraPNSld3vexovwij+Z4bde/JTSfNvpz/AHvHqiZ981+bYP8AVz+uL2069YiPT+ERae/31btUFQxWF5OkoQnkvUSmnJuCbjdys/Dol4Dux0Dg7+MYmnalRpqk+UbpQlG/gUryem87+ev4dMWra0RiJnb0cnEbTET1wAA9BzgAAAAAAAAAAAAAAAAAAAADyRwu6U2j8oY72moa+B6Q2pxW7NxGPe0Kiq5pyU62GTp/c1WSVnKcHC93ZN2er162br8DNk/o3Z3qeH+qTkeW4mVHp58Cdkfo7Z/qlD6pxfAfZH6OwPmw1JdiGR5nicMK9JfGT+kemvwH2T+YYT9TBfuMlXgbsuVnLBYV5Yxgr0oaRirRXmSsMjzLIxM9OfgRsn9H4Lz4em/3H1cCdkfo7Aeq0PqjI8uzI82erY8Ddkrds7Z6+Z4f6pq+FHFxs7HUo040oYSUJqSq4SjQpzas7wlzbOL0fvxQyNTxC9DryrE9qLGNbwd2LRwGFpYTDpqnRjlTds05b5Tm0tZN3b982RA1W39jxxNO26cdYS/czpU9mxgnTrKVOpFSlyj3SfVGPU1aLetm20rpO5ZRjrUYTVpxjJeNJnFxPA01rc3dvp69qRjsreWx3eynfS6ajbMubaSu7OHPV5X01OcdlRqcyinObacKilmUou2+2kVa+j1TtvWp3j7x4W9+RhfffW/pJtGjGCtCMYrwRSRyU8Kr3x7z8tZ4qezX7A2RHDU7b5y1nLx+BG0APVpStKxWsbQ5LWm05kABdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=',
    },
  ];

  onlyAvailable() {
    return this.products.filter((product) => product.available === 'Available')
      .length;
  }

  onlyOrder() {
    return this.products.filter(
      (product) => product.available === 'Not Available'
    ).length;
  }

  all() {
    return this.products.length;
  }

  courseCountRadioButton: string = 'All goods';

  selectCategory: string = 'Select a category';

  onFilterRadioButtonChange(data: string) {
    this.courseCountRadioButton = data;
    console.log(this.courseCountRadioButton);
  }

  objCategory() {
    let newArr = [];
    for (let i = 0; i < this.products.length; i++) {
      newArr.push(this.products[i].category);
    }
    return newArr;
  }
}

