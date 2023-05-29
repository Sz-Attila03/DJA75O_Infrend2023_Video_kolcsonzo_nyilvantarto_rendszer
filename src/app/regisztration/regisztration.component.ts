import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserDTO } from 'models';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regisztration',
  templateUrl: './regisztration.component.html',
  styleUrls: ['./regisztration.component.css']
})
export class RegisztrationComponent
{
  regForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    firstName: this.formBuilder.control(''),
    lastName: this.formBuilder.control(''),
    username: this.formBuilder.control(''),
    email: this.formBuilder.control(''),
    passwd: this.formBuilder.control(''),
    telszam: this.formBuilder.control(''),
    szemszam: this.formBuilder.control(''),
    lakcim: this.formBuilder.control(''),
    role: this.formBuilder.control('user'),
    status: this.formBuilder.control(1)
  });

  constructor(private formBuilder: FormBuilder, private userServices: UserService, private toastrService: ToastrService, private router: Router) {}

  saveUser()
  {
    const user = this.regForm.value as UserDTO;

    this.userServices.userReg(user).subscribe({
      next: (userBeszuras) => {
        this.toastrService.success('Sikeres Regisztráció', 'Siker');
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a regisztráció sorrán', 'Hiba');
      }
    });
  }
}
