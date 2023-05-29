import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { HitelesitService } from '../services/hitelesit.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bejelentkezes',
  templateUrl: './bejelentkezes.component.html',
  styleUrls: ['./bejelentkezes.component.css']
})

export class BejelentkezesComponent
{
  loginForm = this.formBuilder.group({
    email: this.formBuilder.control(''),
    passwd: this.formBuilder.control('')
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService, private authService: HitelesitService, private router: Router, private toastrService: ToastrService) { }

  login() {
    const loginData = this.loginForm.value as LoginDTO;

    this.userService.login(loginData).subscribe({
      next: (response) => {
        this.authService.setToken(response.accessToken);
        this.authService.setUserRole(response.user.role);
        this.authService.setUserId(response.user.id.toString());
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        this.toastrService.error(err.error.error, 'Hiba');
      }
    });
  }
}
