import {Component, OnInit, OnDestroy} from '@angular/core';
import {PersonalizedService} from './personalized/personalized.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(private personalizedService: PersonalizedService) { }

  currentTheme:string;

  subscription = this.personalizedService.themeStream
    .subscribe({
      next: (next) => {this.currentTheme = next},
      error: (error) => {console.warn(error)}
    });

  ngOnInit() {
    console.log('AppComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('AppComponent ngOnDestroy');
    this.subscription.unsubscribe();
  }

}
