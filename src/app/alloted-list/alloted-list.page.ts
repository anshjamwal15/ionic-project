import { Component, OnInit } from '@angular/core';
import { AllotedModel } from './alloted-list.model';

@Component({
  selector: 'app-alloted-list',
  templateUrl: './alloted-list.page.html',
  styleUrls: ['./alloted-list.page.scss'],
})
export class AllotedListPage {

  public items: AllotedModel[] = [
    new AllotedModel('Rajesh kumar', 'Pick up from downstairs', new Date('2024-12-15')),
    new AllotedModel('Ashley Jhonson', 'Close the door, After pickup', new Date('2024-12-15')),
    new AllotedModel('Akash Gupta', 'Knock first', new Date('2024-12-15')),
    new AllotedModel('Heinz Doofenshmirtz ', 'Beawre of dogs', new Date('2024-12-15')),
    new AllotedModel('Rick Sanchez', 'Dont ring', new Date('2024-12-15')),
    new AllotedModel('Lenard Hofstader', 'Dont come', new Date('2024-12-15'))
  ]
  constructor() { }
}
