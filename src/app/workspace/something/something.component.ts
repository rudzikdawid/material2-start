import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('SomethingComponent ngOnInit');
  }

  widgets: Array<any> = [
    {
      x: 0, y: 0,
      w: 1, h: 2,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 1'
    },
    {
      x: 1, y: 0, w: 3, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 2'
    },
    {
      x: 1, y: 1, w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 3'
    },
    {
      x: 3, y: 1, w: 1, h: 2,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 4'
    },
    {
      w: 1, h: 2,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs x'
    }
  ];

  gridsterOptions = {
    lanes: 5, // how many lines (grid cells) dashboard has
    direction: 'vertical', // items floating direction: vertical/horizontal
    dragAndDrop: true, // possible to change items position by drag n drop
    resizable: true // possible to resize items by drag n drop by item edge/corner
  };



}
