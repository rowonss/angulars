import { Component } from '@angular/core';

const Array : Array<string> = ['A','B','C'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'rowonss';

  showArray : Array<string>;

  constructor() {
    this.showArray = Array;
  }

  public clickAfter() : void {
    this.innerfunc();
    console.log(Array);
    console.log(this.title);
  }

  private innerfunc(){
    Array.push('data'+Array.length);
  }
}
