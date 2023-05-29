import { Component, OnInit } from '@angular/core';
import { DvdDTO, KazetakDTO } from 'models';
import { DvdService } from '../services/dvd.service';
import { KolcsonottdvdService } from '../services/kolcsonottdvd.service';
import { HitelesitService } from '../services/hitelesit.service';
import { KazetakService } from '../services/kazetak.service';
import { KolcsonzottkazetaService } from '../services/kolcsonzottkazeta.service';

@Component({
  selector: 'app-kezdolap',
  templateUrl: './kezdolap.component.html',
  styleUrls: ['./kezdolap.component.css']
})
export class KezdolapComponent implements OnInit
{
  dvd : DvdDTO[] = [];
  kazeta : KazetakDTO[] = [];


  constructor(
    public hitelesítService: HitelesitService, 
    private dvdService: DvdService, 
    private kolcsonzottdvdService: KolcsonottdvdService,
    private kolcsonzottkazetaService: KolcsonzottkazetaService,
    private kazetaService: KazetakService
  ) {}

  hit = this.hitelesítService;
  userI  =  this.hit.getUserId();

  ngOnInit()
  {
    const userIdI = this.userI?parseInt(this.userI):-1;

    this.dvdService.getAll().subscribe({
      next: (d) => {

        this.kolcsonzottdvdService.getAll().subscribe({
          next: (kd) => {
            const ukd = kd.filter(x => x.userid === userIdI)
            this.dvd = d.filter( x => ukd.findIndex( y => y.dvdid === x.id ) >= 0 )
          },
          error: (err) => console.error(err)
        });

      },
      error: (err) => console.error(err)
    });

    this.kazetaService.getAll().subscribe({
      next: (k) => {

        this.kolcsonzottkazetaService.getAll().subscribe({
          next: (kk) => {
            const ukk = kk.filter( x =>x.userid === userIdI )
            this.kazeta = k.filter( x => ukk.findIndex( y => y.kazetaid === x.id ) >= 0 )
          },
          error: (err) => console.error(err)
        });

      },
      error: (err) => console.error(err)
    });
    
  }
    
}
