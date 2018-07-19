import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatIconRegistry} from '@angular/material/icon';

import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {DialogComponent} from '../../../dialog/dialog.component';
import {PatientsService} from '../patients.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private dialog: MatDialog,
              private router: Router,
              private patientsService: PatientsService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }


  users = this.patientsService.users.value;

  ngOnInit() {
    console.log('ListComponent ngOnInit');
  }


  onSelect(user) {
    this.router.navigate(['/workspace/patients/details/', user.num]);
  }


  openAdminDialog() {
    this.dialog.open(DialogComponent).afterClosed()
      .pipe(
        filter(result => !!result)
      )
      .subscribe(user => {
        this.users.push(user);
      });
  }

}
