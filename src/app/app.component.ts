import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Introduction';
  name = 'Max';
  elements: number[] = [1, 2, 3];
  message: string;

  changeName() {
    this.name = 'Anna';
  }

  addElementToList() {
    this.elements.push(this.elements.length + 1);
  }

  getListElementBGColor(index: number) {
    return (index % 2 === 0) ? 'green' : 'red';
  }

  // Listen the event emitted by the username component.
  onUserWasClicked(usrName: string) {
    alert('A username component emitted an event with returning value: ' + usrName);
  }

}
