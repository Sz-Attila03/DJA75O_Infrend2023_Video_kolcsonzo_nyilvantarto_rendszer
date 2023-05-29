import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-felkeres',
  templateUrl: './felkeres.component.html',
  styleUrls: ['./felkeres.component.css']
})
export class FelkeresComponent
{
  felkeresForm = this.formBuilder.group({
    idd: this.formBuilder.control(0),
    usern: this.formBuilder.control(''),
    szemsz: this.formBuilder.control('')
  });

  userlistForm = this.formBuilder.group({
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

  users : UserDTO[] = [];

  constructor( private formBuilder: FormBuilder, private toasterService: ToastrService, private userSerrvice: UserService ) {}

  serchId()
  {
    const userId  =  this.felkeresForm.value.idd?this.felkeresForm.value.idd:-1;

    console.log( userId );

    this.userSerrvice.getkeresId(userId).subscribe({
      next: (u) => {
        console.log(u);
        this.userlistForm.setValue(u as UserDTO);
        console.log(u);
      },
      error: (err) => console.error(err)
    });
  }

  serchUsername()
  {
    const userN = this.felkeresForm.value.usern?this.felkeresForm.value.usern:'';

    this.userSerrvice.getkeresUsername(userN).subscribe({
      next: (u) => {
        console.log(u);
        this.userlistForm.setValue(u as UserDTO);
        console.log(u);
      },
      error: (err) => console.error(err)
    });
  }

  serchSzemszam()
  {
    const szemsz = this.felkeresForm.value.szemsz?this.felkeresForm.value.szemsz:'';

    this.userSerrvice.getkeresSzemSzam(szemsz).subscribe({
      next: (u) => {
        console.log(u);
        this.userlistForm.setValue(u as UserDTO);
        console.log(u);
      },
      error: (err) => console.error(err)
    });
  }
}
