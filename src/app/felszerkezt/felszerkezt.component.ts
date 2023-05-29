import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { UserDTO } from 'models';

@Component({
  selector: 'app-felszerkezt',
  templateUrl: './felszerkezt.component.html',
  styleUrls: ['./felszerkezt.component.css']
})
export class FelszerkeztComponent implements OnInit
{
  felszerkeztForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    firstName: this.formBuilder.control(''),
    lastName: this.formBuilder.control(''),
    username: this.formBuilder.control(''),
    email: this.formBuilder.control(''),
    telszam: this.formBuilder.control(''),
    szemszam: this.formBuilder.control(''),
    lakcim: this.formBuilder.control(''),
    role: this.formBuilder.control('user'),
    status: this.formBuilder.control(1)
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private toasterService: ToastrService, private aktivRoute: ActivatedRoute, private userService: UserService) {}
  
  ngOnInit(): void
  {
    const id =this.aktivRoute.snapshot.params['id'];

    this.userService.getOne(id).subscribe({
      next: (u) => {
        this.felszerkeztForm.setValue(u),
        console.log(u);
      },
      error: (err) => {
        console.error(err);
        this.toasterService.error('Hiba a felhasználó adatainak betöltése közben!', 'Hiba');
      }
    })
  }

  updateUser()
  {
    const user = this.felszerkeztForm.value as UserDTO;

    this.userService.update(user).subscribe({
      next: (u) => {
        this.toasterService.success('A felhasználó adatainak frisítése sikeres volt!', 'Siker');
        this.router.navigateByUrl('/felhasznalok');
      },
      error: (err) => {
        this.toasterService.error('Hiba a felhasználó adatainak frissítése közben!', 'Hiba');
      }
    })
  }
}
