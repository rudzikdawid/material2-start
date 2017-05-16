import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientsService} from '../patients.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private patientsService: PatientsService
  ) {}

  userId: number;
  selectedUser;

  subscription = this.route.params.subscribe({
    next: (param) => {
      this.userId = +param.id;
      this.selectedUser = this.patientsService.users.value.find(user => user.num === this.userId);
      console.log('next', param, this.selectedUser);
    }
  });


  ngOnInit() {
    console.log('ngOnInit DetailsComponent', this.userId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
