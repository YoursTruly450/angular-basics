import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Dynamic value';
  // article = "Initial article";

  // number = 42;

  // arr = [1, 2, 3, 4, 5, 6, 7,];

  // obj = {
  //   a: 1,
  //   b: {
  //     c: 2
  //   }
  // }

  // imgReact = 'https://image.pngaaa.com/930/2507930-middle.png';

  // imgVue = 'https://masteringjs.io/assets/images/vue/vue-transparent.png';

  // inputValue = '';

  // constructor() {
    // setTimeout(() => {
    //   console.log('Reac time is over');
      
    //   this.imgReact = this.imgVue;
    // }, 5000);
  // }

  // onInput(e: Event) {
  //   this.inputValue = (<HTMLInputElement>e.target).value;
  // }

  // onClick() {
  //   console.log('Clack');
  // }

  // onBlur(str: string) {
  //   this.inputValue = str;
  // }

  // onInputTitle(e: Event) {
  //   this.title = (<HTMLInputElement>e.target).value;
  // }

  // displayMode = 'flex';

  // isRed: any = true;

  // arr = [1, 1, 2, 3 ,5, 8, 13];

  // objs = [
  //   {
  //     title: 'post1',
  //     author: 'author1',
  //     comments: [
  //       {name: 'name11', text: 'text11'},
  //       {name: 'name12', text: 'text12'}
  //     ]
  //   },
  //   {
  //     title: 'post2',
  //     author: 'author2',
  //     comments: [
  //       {name: 'name21', text: 'text21'},
  //       {name: 'name22', text: 'text22'},
  //       {name: 'name23', text: 'text23'}
  //     ]
  //   }
  // ]

  now: Date =  new Date();
}
