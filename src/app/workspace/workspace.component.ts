import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  providers: []
})
export class WorkspaceComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('WorkspaceComponent ngOnInit');
  }

  navigations = [
    {name: 'Patients', icon: 'accessible', link: 'patients'},
    {name: 'Something', icon: 'keyboard', link: 'something'},
    {name: 'Settings', icon: 'settings', link: 'settings'},
  ];

}
