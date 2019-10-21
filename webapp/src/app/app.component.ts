import {Component, OnInit} from '@angular/core';
import pace from 'pace';
import {AuthService} from './modules/common/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api-webapp';

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    pace.start({
      document: false
    });
  }

  canShowNavbar() {
    return true;  /** @TODO  return this.authService.isAuth(); */
  }
}
