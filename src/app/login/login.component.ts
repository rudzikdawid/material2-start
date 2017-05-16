import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('LoginComponent ngOnInit');
  }

  user = {
    login: '',
    password: ''
  };

  onSubmit(user) {
    if (user.login === 'admin' && user.password === 'admin') {
      this.router.navigate(['/workspace/patients/list']);
    }
  }

}
