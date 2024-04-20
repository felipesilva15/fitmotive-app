import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Token } from 'src/app/main/api/token';
import { User } from 'src/app/main/api/user';
import { AuthService } from 'src/app/main/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user!: User;
  remerberme: boolean = false;
  submitted: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = {};
  }

  login() {
    this.authService.login(this.user).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    )
  }
}
