import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  booleanValue: boolean;
  constructor() { 
  }

  ngOnInit() {
  }

  badRequest(booleanValue: boolean) {
    this.booleanValue = booleanValue;
  }

  onSubmit (): void {
    console.log('BAD PLA REQUEST:, ', this);
      if (this.booleanValue === true) {
        alert('Does Not Exist');
        throw (new Error('Does Not Exist'));
    }
  }
}