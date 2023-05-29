import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DvdService } from '../services/dvd.service';
import { ToastrService } from 'ngx-toastr';
import { KazetakService } from '../services/kazetak.service';
import { AllapotDTO, DvdDTO, KazetakDTO } from 'models';

@Component({
  selector: 'app-szerkezt',
  templateUrl: './szerkezt.component.html',
  styleUrls: ['./szerkezt.component.css']
})
export class SzerkeztComponent implements OnInit
{
  szerkeztesForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control(''),
    date: this.formBuilder.control(''),
    status: this.formBuilder.control(''),
    imgUrl: this.formBuilder.control('')
  });

  constructor(private formBuilder: FormBuilder, private aktivRoute: ActivatedRoute, private dvdService: DvdService, private toasterService: ToastrService, private kazetaService: KazetakService) {}

  ngOnInit(): void
  {
    const id = this.aktivRoute.snapshot.params['id'];
    const termek = this.aktivRoute.snapshot.params['termek'];

    if(termek == "dvd")
    {
      this.dvdService.getOne(id).subscribe({
        next: (d) => this.szerkeztesForm.setValue(d),
        error: (err) => {
          console.error(err);
          this.toasterService.error('Hiba a dvd adatok betöltése közben!', 'Hiba');
        }
      });
    }
    else if(termek == "kazetak")
    {
      this.kazetaService.getOne(id).subscribe({
        next: (k) => this.szerkeztesForm.setValue(k),
        error: (err) => {
          console.error(err);
          this.toasterService.error('Hiba a kazeta adatok betöltése közben!', 'Hiba');
        }
      });
    }
    else
    {
      this.toasterService.error('Hiba a termék azonosítása közben!', 'Hiba');
    }

  }

  updateMovie()
  {
    const dvd = this.szerkeztesForm.value as DvdDTO;
    const kazeta = this.szerkeztesForm.value as KazetakDTO;
    const termek = this.aktivRoute.snapshot.params['termek'];

    if(termek == "dvd")
    {
      this.dvdService.update(dvd).subscribe({
        next: (dvd) => {
          this.toasterService.success('A film frissítése sikeres volt!', 'Siker');
        },
        error: (err) => {
          this.toasterService.error('Hiba a film frisítése közben', 'Hiba');
        }
      });
    }
    else if(termek == "kazeta")
    {
      this.kazetaService.update(kazeta).subscribe({
        next: (kazeta) => {
          this.toasterService.success('A film frissítése sikeres volt!', 'Siker');
        },
        error: (err) => {
          this.toasterService.error('Hiba a film frisítése közben', 'Hiba');
        }
      });
    }
    else
    {
      this.toasterService.error('Hiba a termék adatainak frisitése közben!', 'Hiba');
    }
  }
}
