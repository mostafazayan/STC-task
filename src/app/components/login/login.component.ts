import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string | any;
  password: string | any;
  constructor(private router: Router, private _coreService: CoreService) {

  }

  login() {
    // Perform login logic here (e.g., send login request to server)
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin-panel']);
    } else if (this.username === 'user' && this.password === 'user') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'user');
      this.router.navigate(['/user-panel']);
    } else {
      this._coreService.openSnackBar('Invalid username or password', 'Error');
    }
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Reset the form
    this.username = '';
    this.password = '';
  }
}
