import { Component } from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
      <h2>Post4</h2>
      <p>Default text</p>
    </div>
  `,
  styles: [`
    .post4 {
      padding: .5rem;
      border: 2px solid black;
      margin-bottom: .5rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  `]
})

export class Post4Component {}