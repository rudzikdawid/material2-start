import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { PersonalizedService } from '../personalized.service';
import {ThemeStorage, DocsSiteTheme} from './theme-storage/theme-storage';
import {StyleManager} from '../style-manager/style-manager';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThemePickerComponent implements OnInit {
  currentTheme;

  constructor(
    private personalizedService: PersonalizedService,
    public styleManager: StyleManager,
    private _themeStorage: ThemeStorage
  ) {
    const currentTheme = this._themeStorage.getStoredTheme();
    if (currentTheme) {
      this.installTheme(currentTheme);
    } else {
      this.installTheme(this.themes[0]);
    }
  }

  themes = [
    {
      primary: '#E91E63',
      accent: '#607D8B',
      href: 'pink-bluegrey.css',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      href: 'purple-green.css',
      isDark: true,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      href: 'indigo-pink.css',
      isDark: false
    },
    {
      primary: '#673AB7',
      accent: '#FFC107',
      href: 'deeppurple-amber.css',
      isDark: false,
    }
  ];
  selectedTheme: string;

  ngOnInit() {
    console.log('ThemePickerComponent ngOnInit');
    this.selectedTheme = this.personalizedService.themeStream.value;
  }


  themeChanged() {
    this.personalizedService.themeStream.next(this.selectedTheme);
  }


  installTheme(theme: DocsSiteTheme) {
    this.currentTheme = this._getCurrentThemeFromHref(theme.href);
    this.styleManager.setStyle('theme', `assets/${theme.href}`);

    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }

  private _getCurrentThemeFromHref(href: string): DocsSiteTheme {
    return this.themes.find(theme => theme.href === href);
  }



}
