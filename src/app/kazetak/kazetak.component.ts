import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KazetakDTO, KolcsonzottkazetaDTO } from 'models';
import { KazetakService } from '../services/kazetak.service';
import { HitelesitService } from '../services/hitelesit.service';
import { KolcsonzottkazetaService } from '../services/kolcsonzottkazeta.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-kazetak',
  templateUrl: './kazetak.component.html',
  styleUrls: ['./kazetak.component.css']
})
export class KazetakComponent implements OnInit
{
  kazetaForm = this.formBuilder.group({
    id: this.formBuilder.control( 0 ),
    status: this.formBuilder.control('szabad')
  });

  kolcsonzottKazetakForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    kazetaid: this.formBuilder.control(0),
  });

  kazetaks: KazetakDTO[] = [];

  constructor(
    private router: Router, 
    public hitelesítService: HitelesitService, 
    private kazetakService: KazetakService, 
    private kolcsonzottkazetakServive: KolcsonzottkazetaService,
    private toasterService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  hit = this.hitelesítService;

  ngOnInit(): void
  {
    this.kazetakService.getAll().subscribe({
      next: (kazetaks) => {
        this.kazetaks = kazetaks
        console.log(kazetaks)
      },
      error: (err) => console.error(err)
    })
  }

  editMovie(id: Number)
  {
    this.router.navigate( [ '/szerkeztes', 'kazetak', id] );
  }

  vissahoz(id: number)
  {
    const dvd = this.kazetaForm.value as KazetakDTO;
    dvd.id = id;

    this.kazetakService.update(dvd).subscribe({
      next: (d) => {
        console.log(d);
      },
      error: (e) => {
        this.toasterService.error('hiba dvd', 'Hiba');
      }
    });

    const kolcskazet = this.kolcsonzottKazetakForm.value as KolcsonzottkazetaDTO;
    kolcskazet.kazetaid = id;

    console.log(kolcskazet);

    this.kolcsonzottkazetakServive.deletbyuiddid(kolcskazet.kazetaid).subscribe({
      next: (k) => {
        console.log(k);
      },
      error: (err) => {
        this.toasterService.error('hiba kolcsonzottdvd', 'Hiba');
      }
    });
  }

}
