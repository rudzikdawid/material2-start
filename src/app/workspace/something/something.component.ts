import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss']
})
export class SomethingComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log('SomethingComponent ngOnInit');
  }

  ignoreEvents = false;

  widgets: Array<any> = [
    {
      x: 0, y: 0,
      w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'ISS',
      src: this.youtubeSrc('RtU_mdL2vBM')
    },
    {
      x: 3, y: 0,
      w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'ISS',
      src: this.youtubeSrc('-NFGAF3HgkM')
    },
    {
      x: 5, y: 0,
      w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'ISIS',
      src: this.youtubeSrc('ddFvjfvPnqk')
    },
    {
      x: 0, y: 1,
      w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Donair',
      src: this.youtubeSrc('AfhkvQFjwUg')
    }
  ];

  private youtubeSrc(ytId) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${ytId}?rel=0&amp;controls=0&amp;showinfo=0`)
  }

  onSelect(event) {
    console.log(event);
  }

  itemChanged = function(ignoreEventsFlag) {
    this.ignoreEvents = ignoreEventsFlag;
  };

  gridsterOptions = {
    useCSSTransforms: true,
    floating: false,
    lanes: 2, // how many lines (grid cells) dashboard has
    lines: {
      visible: true,
      color: 'grey'
    },
    direction: 'horizontal', // items floating direction: vertical/horizontal
    dragAndDrop: true, // possible to change items position by drag n drop
    resizable: true, // possible to resize items by drag n drop by item edge/corner
    responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
    responsiveDebounce: 500, // window resize debounce time
    widthHeightRatio: 0.9,
    responsiveOptions: [
      {
        breakpoint: 'sm',
        direction: 'vertical',
        lanes: 1
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
        lanes: 6,
        resizable: true
      }
    ]
  };



}
