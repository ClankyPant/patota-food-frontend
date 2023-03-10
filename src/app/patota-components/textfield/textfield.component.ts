import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent {

  @Input()
  public title: string = "";

  @Input()
  public theme: string = "primary";

}
