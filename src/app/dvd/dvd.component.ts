import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  DvdDTO, KolcdonzottDvdDTO } from 'models';
import { DvdService } from '../services/dvd.service';
import { HitelesitService } from '../services/hitelesit.service';
import { FormBuilder } from '@angular/forms';
import { KolcsonottdvdService } from '../services/kolcsonottdvd.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})

export class DvdComponent implements OnInit
{
  dvdForm = this.formBuilder.group({
    id: this.formBuilder.control( 0 ),
    status: this.formBuilder.control('szabad')
  });

  kolcsonzottDvdForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    dvdid: this.formBuilder.control(0),
  });

  dvds: DvdDTO[] = [];

  constructor( private router: Router, public hitelesítService: HitelesitService, private dvdService: DvdService, private formBuilder: FormBuilder, private kolcsonzottDvdService: KolcsonottdvdService, private toasterService: ToastrService ){}

  hit = this.hitelesítService;
  userIdI : number = + this.hit.getUserId;

  ngOnInit(): void
  {
    this.dvdService.getAll().subscribe({
      next: (dvds) => {
        this.dvds = dvds;
        console.log(dvds);
      },
      error: (err) => console.error(err)
    })
  }

  editMovie(id: Number)
  {
    this.router.navigate( [ '/szerkeztes', 'dvd', id] );
  }

  vissahoz(id: number)
  {
    const dvd = this.dvdForm.value as DvdDTO;
    dvd.id = id;

    this.dvdService.update(dvd).subscribe({
      next: (d) => {
        console.log(d);
      },
      error: (e) => {
        this.toasterService.error('hiba dvd', 'Hiba');
      }
    });

    const kolcsdvd = this.kolcsonzottDvdForm.value as KolcdonzottDvdDTO;
    kolcsdvd.dvdid = id;

    this.kolcsonzottDvdService.deletbyuiddid(kolcsdvd.dvdid).subscribe({
      next: (k) => {
        console.log(k);
      },
      error: (err) => {
        this.toasterService.error('hiba kolcsonzottdvd', 'Hiba');
      }
    });
  }

}
