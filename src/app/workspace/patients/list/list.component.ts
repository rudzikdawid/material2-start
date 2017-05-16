import { Component, OnInit } from '@angular/core';
import {MdIconRegistry, MdDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {DialogComponent} from '../../../dialog/dialog.component';
import {PatientsService} from '../patients.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(iconRegistry: MdIconRegistry,
              sanitizer: DomSanitizer,
              private dialog: MdDialog,
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
      .filter(result => !!result)
      .subscribe(user => {
        this.users.push(user);
      });
  }

}
