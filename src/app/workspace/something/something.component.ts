import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {GridsterComponent } from 'angular2gridster';
import * as data from './data.json';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss']
})
export class SomethingComponent implements OnInit {
  widgets$;
  constructor(private sanitizer: DomSanitizer) {}

  @ViewChildren('widgetRef') widgets: QueryList<GridsterComponent>;

  ngOnInit() {
    console.log('SomethingComponent ngOnInit');
    this.widgets$ = this.loadWidgets();
  }


  gridsterOptions = {
    lanes: 2, // how many lines (grid cells) dashboard has
    lines: {
      visible: true,
      color: 'grey'
    },
    direction: 'vertical', // items floating direction: vertical/horizontal
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
        lanes: 6,
        resizable: true
      }
    ]
  };


  loadWidgets() {
    return {
      charts: window.localStorage['widgets-charts'] && JSON.parse(window.localStorage['widgets-charts']) || [
        {
          x: 0, y: 0,
          xSm: 2, ySm: 0,
          xMd: 2, yMd: 0,
          xLg: 2, yLg: 0,
          xXl: 2, yXl: 0,
          w: 2, h: 1,
          wLg: 2, hLg: 1,
          dragAndDrop: true,
          resizable: true,
          title: 'Bar',
          chart: {
            type: 'Bar',
            data: data['Bar']
          }
        },
        {
          x: 0, y: 1,
          xSm: 0, ySm: 0,
          xMd: 0, yMd: 0,
          xLg: 0, yLg: 0,
          xXl: 0, yXl: 0,
          w: 2, h: 1,
          wLg: 2, hLg: 1,
          dragAndDrop: true,
          resizable: true,
          title: 'Pie',
          chart: {
            type: 'Pie',
            data: data['Pie']
          }
        },
        {
          x: 0, y: 2,
          xSm: 4, ySm: 0,
          xMd: 4, yMd: 0,
          xLg: 4, yLg: 0,
          xXl: 4, yXl: 0,
          w: 2, h: 1,
          wLg: 2, hLg: 1,
          dragAndDrop: true,
          resizable: true,
          title: 'Line',
          chart: {
            type: 'Line',
            data: data['Line']
          }
        }
      ],
      streams: (window.localStorage['widgets-streams'] && JSON.parse(window.localStorage['widgets-streams']) || [
        {
          x: 0, y: 3,
          xSm: 2, ySm: 1,
          xMd: 2, yMd: 1,
          xLg: 2, yLg: 1,
          xXl: 2, yXl: 1,
          w: 2, h: 1,
          wLg: 2, hLg: 1,
          dragAndDrop: true,
          resizable: true,
          title: 'ISS middle',
          ytID: 'RtU_mdL2vBM'
        },
        {
          x: 0, y: 4,
          xSm: 4, ySm: 1,
          xMd: 4, yMd: 1,
          xLg: 4, yLg: 1,
          xXl: 4, yXl: 1,
          w: 2, h: 1,
          wLg: 2, hLg: 1,
          dragAndDrop: true,
          resizable: true,
          title: 'ISIS right',
          ytID: 'ddFvjfvPnqk'
        },
        {
          x: 0, y: 5,
          xSm: 0, ySm: 1,
          xMd: 0, yMd: 1,
          xLg: 0, yLg: 1,
          xXl: 0, yXl: 1,
          w: 2, h: 1,
          wLg: 2, hLg: 1,
          dragAndDrop: true,
          resizable: true,
          title: 'ISS left',
          ytID: '-NFGAF3HgkM'
        },
        /*{
          x: 0, y: 1,
          w: 2, h: 1,
          dragAndDrop: true,
          resizable: true,
          title: 'Donair',
          src: this.youtubeSrc('AfhkvQFjwUg')
        }*/
      ]).map(widget => {
        widget.src = this.youtubeSrc(widget.ytID);
        return widget;
      }),
    }
  }

  saveWidgets() {
    window.localStorage['widgets-charts'] = JSON.stringify(this.widgets$.charts);
    window.localStorage['widgets-streams'] = JSON.stringify(this.widgets$.streams);
  }

  itemChanged = function(ignoreEventsFlag) {
    this.ignoreEvents = ignoreEventsFlag;
    window.dispatchEvent(new Event('resize'));

    if (!ignoreEventsFlag) {
      this.saveWidgets();
    }
  };

  private youtubeSrc(ytId) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${ytId}?rel=0&amp;controls=0&amp;showinfo=0`)
  }

}
