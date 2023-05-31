import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DvdDTO, KazetakDTO, KolcdonzottDvdDTO, KolcsonzottkazetaDTO, UserDTO } from 'models';
import { UserService } from '../services/user.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DvdService } from '../services/dvd.service';
import { KazetakService } from '../services/kazetak.service';
import { KolcsonottdvdService } from '../services/kolcsonottdvd.service';
import { KolcsonzottkazetaService } from '../services/kolcsonzottkazeta.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-fellist',
  templateUrl: './fellist.component.html',
  styleUrls: ['./fellist.component.css']
})

export class FellistComponent implements OnInit
{
  torlesForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    status: this.formBuilder.control(0)
  });

  dvdkolcsonzesForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    dvdId: this.formBuilder.control(0),
    varhatoVege: this.formBuilder.control( formatDate(new Date(), 'yyyy-MM-dd', 'en') )
  });

  kazetakolcsonzesForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    kazetaId: this.formBuilder.control(0)
  });

  dvdForm = this.formBuilder.group({
    id: this.formBuilder.control( 0 ),
    status: this.formBuilder.control('kikülcsönzött')
  });

  kazetaForm = this.formBuilder.group({
    id: this.formBuilder.control( 0 ),
    status: this.formBuilder.control('kikülcsönzött'),
  });

  kolcsonzottDvdForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    dvdid: this.formBuilder.control(0),
    userid: this.formBuilder.control(0),
    kolcsKezdet: this.formBuilder.control( formatDate(new Date(), 'yyyy-MM-dd', 'en') )
  });

  kolcsonzottKazetaForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    kazetaid: this.formBuilder.control(0),
    userid: this.formBuilder.control(0),
    kolcsKezdet: this.formBuilder.control( formatDate(new Date(), 'yyyy-MM-dd', 'en') )
  });

  userForm = this.formBuilder.group({});


  fellist : UserDTO[] = [];

  dvdKolcsonzosSetVisible : boolean = false;
  dvdKolcsonzoId : number = 0;
  kazetaKolcsonzosSetVisible : boolean = false;
  kazetaKolcsonzoId : number = 0;

  constructor( 
    private router: Router, 
    private userService: UserService, 
    private formBuilder: FormBuilder, 
    private toasterService: ToastrService, 
    private dvdService: DvdService, 
    private kazetaService: KazetakService, 
    private kolcsonzottDvd: KolcsonottdvdService,
    private kolcsonzottKazeta: KolcsonzottkazetaService
) {}

  ngOnInit(): void
  {
    this.userService.getAll().subscribe({
      next: (fellist) => {
        this.fellist = fellist;
        console.log(fellist);
      },
      error: (err) => console.error(err)
    })
  }

  mouveEdit(id: Number)
  {
    this.router.navigate( [ '/felhasznaloszerkezt', id ] )
  }

  userTorle(id: number)
  {
    const user = this.torlesForm.value as UserDTO;
    user.id = id;

    this.userService.update(user).subscribe({
      next: (user) => {
        this.toasterService.success('A törlés sikeres volt!', 'Siker');
        this.router.navigateByUrl('/felhasznalok');
      },
      error: (err) => {
        this.toasterService.error('Hiba a törlés során!', 'Hiba');
      }
    });
  }

  dvdKolcsonzes(id: number)
  {
    this.dvdKolcsonzosSetVisible = true;
    this.kazetaKolcsonzosSetVisible = false;
    this.dvdKolcsonzoId = id;
  }

  kazetaKolcsonzes(id: number)
  {
    this.kazetaKolcsonzosSetVisible = true;
    this.dvdKolcsonzosSetVisible = false;
    this.kazetaKolcsonzoId = id;

  }

  megse()
  {
    this.dvdKolcsonzosSetVisible = false;
    this.kazetaKolcsonzosSetVisible = false;
  }

  dvdRogzit()
  {
    const Id  = this.dvdkolcsonzesForm.value.dvdId;
    const kId = this.dvdKolcsonzoId;

    const dvd = this.dvdForm.value as DvdDTO;
    dvd.id = this.dvdkolcsonzesForm.value.dvdId?this.dvdkolcsonzesForm.value.dvdId:-1;

    this.dvdService.update(dvd).subscribe({
      next: (d) => {
        console.log(d);
        this.dvdKolcsonzosSetVisible = false;
      },
      error: (err) => {
        this.toasterService.error('hiba dvd', 'Hiba');
      }
    });

    const kolcsdvd = this.kolcsonzottDvdForm.value as KolcdonzottDvdDTO;
    kolcsdvd.userid = kId;
    kolcsdvd.dvdid = dvd.id;

    console.log('value');
    console.log(this.kolcsonzottDvdForm.value);
    console.log('kesz');
    console.log(kolcsdvd);

    this.kolcsonzottDvd.creatWithDate(kolcsdvd).subscribe({
      next: (k) => {
        console.log(k);
      },
      error: (err) => {
        this.toasterService.error('hiba kolcsonzottdvd', 'Hiba');
      }
    });
  }

  kazetaRogzit()
  {
    const Id = this.kazetakolcsonzesForm.value.kazetaId;
    const kId = this.kazetaKolcsonzoId;

    const kazeta = this.kazetaForm.value as KazetakDTO;
    kazeta.id = this.kazetakolcsonzesForm.value.kazetaId?this.kazetakolcsonzesForm.value.kazetaId:-1;

    this.kazetaService.update(kazeta).subscribe({
      next: (kaz) => {
        console.log(kaz);
        this.kazetaKolcsonzosSetVisible = false;
      },
      error: (err) => {
        this.toasterService.error('hiba a kazetaban', 'Hiba');
      }
    });

    const kolcskazeta = this.kolcsonzottKazetaForm.value as KolcsonzottkazetaDTO;
    kolcskazeta.userid = kId;
    kolcskazeta.kazetaid = kazeta.id;

    this.kolcsonzottKazeta.creatWithDate(kolcskazeta).subscribe({
      next: (k) => {
        console.log(k);
      },
      error: (err) => {
        this.toasterService.error('hiba kolcsonzottkazeta', 'Hiba');
      }
    });
  }

}
