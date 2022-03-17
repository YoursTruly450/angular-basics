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

  displayMode = 'flex';
}
