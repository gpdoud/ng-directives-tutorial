import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  btnCls: string = "btn btn-primary";

  arrData: any[] = [
    { id: 1, name: "Dave", favColor: `red` },
    { id: 2, name: "Jon", favColor: `orange` },
    { id: 3, name: "Steve", favColor: `yellow` },
    { id: 4, name: "Matt", favColor: `green` },
    { id: 5, name: "Jada", favColor: `blue` },
  ];
  howIFeel: number = 3;

  chgColor(): void { this.btnCls = "btn btn-danger"; }

  great(): void { this.howIFeel = 3; }
  ok(): void { this.howIFeel = 2; }
  blah(): void { this.howIFeel = 1; }
  crappy(): void { this.howIFeel = 0; }
}
