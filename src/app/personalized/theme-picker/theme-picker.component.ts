import { Component, OnInit } from '@angular/core';
import { PersonalizedService } from '../personalized.service';
@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  constructor(private personalizedService: PersonalizedService) { }

  themes = ['dark-blue', 'light-blue'];
  selectedTheme: string;

  themeChanged() {
    this.personalizedService.themeStream.next(this.selectedTheme);
  }

  ngOnInit() {
    console.log('ThemePickerComponent ngOnInit');
    this.selectedTheme = this.personalizedService.themeStream.value;
  }

}
