import { Component, ViewChild } from '@angular/core';
import { TestComponentComponent } from './test-component/test-component.component'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  isDisabled = true;
  @ViewChild(TestComponentComponent) hijo: TestComponentComponent;
  flip() {
    this.isDisabled = !this.isDisabled;
    this.hijo.badRequest(false);
  }
  myClick() {
    this.hijo.badRequest(true);
  }
  


}
