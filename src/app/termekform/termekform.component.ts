import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DvdService } from '../services/dvd.service';
import { AllapotDTO, DvdDTO, KazetakDTO } from 'models';
import { KazetakService } from '../services/kazetak.service';
import { AllapotService } from '../services/allapot.service';

@Component({
  selector: 'app-termekform',
  templateUrl: './termekform.component.html',
  styleUrls: ['./termekform.component.css']
})

export class TermekformComponent implements OnInit
{
  dvdForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control(''),
    date: this.formBuilder.control(''),
    status: this.formBuilder.control(''),
    imgUrl: this.formBuilder.control('')
  });

  kazetaForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control(''),
    date: this.formBuilder.control(''),
    status: this.formBuilder.control(''),
    imgUrl: this.formBuilder.control('')
  });

  isNewMovie = true;
  dvdVisible : boolean = false;
  kazetaVisible : boolean = false;
  allapot: AllapotDTO[] = [];

  constructor(private dvdServices: DvdService, private kazetaService: KazetakService, private toastrService: ToastrService, private aktivRoute: ActivatedRoute, private formBuilder: FormBuilder, private allapotService: AllapotService) {}

  ngOnInit(): void
  {
    this.allapotService.getAll().subscribe({
      next: (a) => this.allapot = this.allapot,
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba az állapotok betöltése közben!', 'Hiba')
      }
    })
  }

  saveDvdMovie()
  {
    const dvd = this.dvdForm.value as DvdDTO;

    if(this.isNewMovie)
    {
      this.dvdServices.create(dvd).subscribe({
        next: (beszurtMovie) =>{
          this.toastrService.success('A film sikeresen hozzadva.' + beszurtMovie.id , 'Siker!' )
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt a mentéskor!', 'Hiba!');
        }
      });
    }
  }

  saveKazetaMovie()
  {
    const kazeta = this.kazetaForm.value as unknown as KazetakDTO;

    if(this.isNewMovie)
    {
      this.kazetaService.create(kazeta).subscribe({
        next: (beszurtMovie) =>{
          this.toastrService.success('A film sikeresen hozzadva.' + beszurtMovie.id , 'Siker!' )
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt a mentéskor!', 'Hiba!');
        }
      });
    }
  }

  osszehasonlito(obj1: any, obj2: any): boolean 
  {
    return obj1 && obj2 && obj1.id == obj2.id;
  }

  setDvdVisible()
  {
    this.dvdVisible = true;
    this.kazetaVisible = false;
  }

  setKazetakVisible()
  {
    this.kazetaVisible = true;
    this.dvdVisible = false;
  }

}