import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss']
})
export class SomethingComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('SomethingComponent ngOnInit');
  }


  single: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  multi: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: [
      '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
    ]
  };


  widgets: Array<any> = [
    {
      x: 0, y: 0,
      w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 3'
    },
    {
      x: 3, y: 0,
      w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 4'
    },
    {
      x: 5, y: 0,
      w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs x'
    },
    {
      x: 0, y: 1,
      w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 3'
    },
    {
      x: 3, y: 1,
      w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 4'
    },
    {
      x: 5, y: 1,
      w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs x'
    }
  ];


  onSelect(event) {
    console.log(event);
  }

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
        lanes: 6,
        resizable: true
      }
    ]
  };



}
