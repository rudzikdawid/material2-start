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
    lanes: 2, // how many lines (grid cells) dashboard has
    direction: 'horizontal', // items floating direction: vertical/horizontal
    dragAndDrop: true, // possible to change items position by drag n drop
    resizable: true, // possible to resize items by drag n drop by item edge/corner
    responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
    responsiveDebounce: 500, // window resize debounce time
    responsiveOptions: [
      {
        breakpoint: 'sm',
        direction: 'vertical',
        lanes: 2
      },
      {
        breakpoint: 'md',
        minWidth: 768,
        direction: 'vertical',
        lanes: 4,
        resizable: true
      },
      {
        breakpoint: 'lg',
        minWidth: 1250,
        direction: 'vertical',
        lanes: 6,
        resizable: true
      },
      {
        breakpoint: 'xl',
        minWidth: 1800,
        direction: 'vertical',
        lanes: 8,
        resizable: true
      }
    ]
  };



}
