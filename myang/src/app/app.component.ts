import { Component } from '@angular/core';

const Array : Array<string> = ['A','B','C'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id! : string;
  pwd! : string;
  visible1 : boolean = false;
  visible2 : boolean = false;

  tryToLogin() : void{
    if(this.id == 'admin' && this.pwd == '1234'){
      this.visible1 = true;
      this.visible2 = false;
    }
    else if(this.id == 'root' && this.pwd == '1234'){
      this.visible2 = true;
      this.visible1 = false;
    }
  }


}
