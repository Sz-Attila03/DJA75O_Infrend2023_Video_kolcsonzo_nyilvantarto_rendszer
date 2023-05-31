import { Component, OnInit } from '@angular/core';
import { DvdDTO, KazetakDTO, KolcdonzottDvdDTO, KolcsonzottkazetaDTO, UserDTO, kesoDTO } from 'models';
import { DvdService } from '../services/dvd.service';
import { KolcsonottdvdService } from '../services/kolcsonottdvd.service';
import { KolcsonzottkazetaService } from '../services/kolcsonzottkazeta.service';
import { KazetakService } from '../services/kazetak.service';
import { UserService } from '../services/user.service';
import { KezdolapComponent } from '../kezdolap/kezdolap.component';

@Component({
  selector: 'app-keseslist',
  templateUrl: './keseslist.component.html',
  styleUrls: ['./keseslist.component.css']
})

export class KeseslistComponent implements OnInit
{
  dvd : DvdDTO[] = [];
  kazeta : KazetakDTO[] = [];
  user : UserDTO[] = [];
  kesetDvd : kesoDTO[] = [];
  kesetKazeta : kesoDTO[] = [];
  dvdVisible : boolean = false;
  kazetaVisible : boolean = false;
  isDvd : boolean | undefined;

  constructor(
    private dvdService: DvdService, 
    private kolcsonzottdvdService: KolcsonottdvdService,
    private kolcsonzottkazetaService: KolcsonzottkazetaService,
    private kazetaService: KazetakService,
    private userService: UserService
  ) 
  {
    this.isDvd = localStorage.getItem('isDvd') === 'true';
  }


  ngOnInit()
  {

    if(this.isDvd)
    {
      console.log('true')
    this.dvdService.getAll().subscribe({
      next: (d) => {

        this.kolcsonzottdvdService.getAll().subscribe({
          next: (kd) => {

            kd = kd.filter( x => new Date( x.varhatoVege ) < new Date() );

            this.userService.getAll().subscribe({
              next: (u) => {

                for (let i = 0; i < kd.length; i++)
                {
                  const userTemp = u.find( x=> x.id === kd[i].userid );

                  if(userTemp && this.user.findIndex( x => userTemp.id === x.id ) === -1 )
                  {
                    this.user.push(userTemp);

                    const ukd = kd.filter(x => x.userid === userTemp.id)
                    this.dvd.push( ...d.filter( x => ukd.findIndex( y => y.dvdid === x.id ) >= 0 ) ) 
                  }
                  
                }

                for (let i = 0; i < kd.length; i++)
                {
                  const ut = this.user.find( x => x.id === kd[i].userid);
                  const dt = this.dvd.find( x => x.id === kd[i].dvdid );

                  if(ut && dt)
                  {
                    const kesoTemp : kesoDTO = { id : dt?.id, title: dt.title, username: ut.username, email: ut.email, telszam: ut.telszam, kolcsKezdet: kd[i].kolcsKezdet, kesetnapok: this.kesetNapo(kd[i]) };
                    this.kesetDvd.push( kesoTemp )
                  }

                }

              },
              error: (err) => console.error(err)
            });

          },
          error: (er) => console.error(er)
        });

      },
      error: (err) => console.error(err)
    });
  }
  else{
    console.log(this.isDvd);
  
    this.kazetaService.getAll().subscribe({
      next: (d) => {

        this.kolcsonzottkazetaService.getAll().subscribe({
          next: (kd) => {

            kd = kd.filter( x => new Date( x.varhatoVege ) < new Date() );

            this.userService.getAll().subscribe({
              next: (u) => {

                for (let i = 0; i < kd.length; i++)
                {
                  const userTemp = u.find( x=> x.id === kd[i].userid );

                  if(userTemp && this.user.findIndex( x => userTemp.id === x.id ) === -1 )
                  {
                    this.user.push(userTemp);

                    const ukd = kd.filter(x => x.userid === userTemp.id)
                    this.kazeta.push( ...d.filter( x => ukd.findIndex( y => y.kazetaid === x.id ) >= 0 ) ) 
                  }
                  
                }

                for (let i = 0; i < kd.length; i++)
                {
                  const ut = this.user.find( x => x.id === kd[i].userid);
                  const dt = this.kazeta.find( x => x.id === kd[i].kazetaid );

                  if(ut && dt)
                  {
                    const kesoTemp : kesoDTO = { id : dt?.id, title: dt.title, username: ut.username, email: ut.email, telszam: ut.telszam, kolcsKezdet: kd[i].kolcsKezdet, kesetnapok: this.kesetKazetaNapo(kd[i]) };
                    this.kesetKazeta.push( kesoTemp )
                  }

                }

              },
              error: (err) => console.error(err)
            });

          },
          error: (er) => console.error(er)
        });

      },
      error: (err) => console.error(err)
    });
  }
    

  }

  kesetNapo(kolcsdvd : KolcdonzottDvdDTO)
  {
    const date1 : any = new Date(kolcsdvd.varhatoVege);
    const date2 : any = new Date();

    const dif = Math.abs( date1 - date2);

    return Math.ceil(dif / 1000 / 60 / 60 / 24);
  }

  kesetKazetaNapo(kolcsdvd : KolcsonzottkazetaDTO)
  {
    const date1 : any = new Date(kolcsdvd.varhatoVege);
    const date2 : any = new Date();

    const dif = Math.abs( date1 - date2);

    return Math.ceil(dif / 1000 / 60 / 60 / 24);
  }

  setIsDvd(state : boolean)
  {
    location.reload();
    localStorage.setItem('isDvd', state.toString());
  }

  /*
  getkesetDvd()
  {
    return KeseslistComponent.kesetDvd
  }

  getkesetKazeta()
  {
    return KeseslistComponent.kesetKazeta
  }
  */

  /*
  setDvdVisible()
  {
    this.dvdVisible = true;
    this.kazetaVisible = false;

    this.dvdService.getAll().subscribe({
      next: (d) => {

        this.kolcsonzottdvdService.getAll().subscribe({
          next: (kd) => {

            kd = kd.filter( x => new Date( x.varhatoVege ) < new Date() );

            this.userService.getAll().subscribe({
              next: (u) => {

                for (let i = 0; i < kd.length; i++)
                {
                  const userTemp = u.find( x=> x.id === kd[i].userid );

                  if(userTemp && this.user.findIndex( x => userTemp.id === x.id ) === -1 )
                  {
                    this.user.push(userTemp);

                    const ukd = kd.filter(x => x.userid === userTemp.id)
                    this.dvd.push( ...d.filter( x => ukd.findIndex( y => y.dvdid === x.id ) >= 0 ) ) 
                  }
                  
                }

                for (let i = 0; i < kd.length; i++)
                {
                  const ut = this.user.find( x => x.id === kd[i].userid);
                  const dt = this.dvd.find( x => x.id === kd[i].dvdid );

                  if(ut && dt)
                  {
                    const kesoTemp : kesoDTO = { id : dt?.id, title: dt.title, username: ut.username, email: ut.email, telszam: ut.telszam, kolcsKezdet: kd[i].kolcsKezdet, kesetnapok: this.kesetNapo(kd[i]) };
                    this.kesetDvd.push( kesoTemp )
                  }

                }

              },
              error: (err) => console.error(err)
            });

          },
          error: (er) => console.error(er)
        });

      },
      error: (err) => console.error(err)
    });

  }

  setKazetakVisible()
  {
    this.kazetaVisible = true;
    this.dvdVisible = false;

    console.log('áááááááááááááááááááááááááááááááá');

    this.kazetaService.getAll().subscribe({
      next: (d) => {

        this.kolcsonzottkazetaService.getAll().subscribe({
          next: (kd) => {

            kd = kd.filter( x => new Date( x.varhatoVege ) < new Date() );

            this.userService.getAll().subscribe({
              next: (u) => {

                for (let i = 0; i < kd.length; i++)
                {
                  const userTemp = u.find( x=> x.id === kd[i].userid );

                  if(userTemp && this.user.findIndex( x => userTemp.id === x.id ) === -1 )
                  {
                    this.user.push(userTemp);

                    const ukd = kd.filter(x => x.userid === userTemp.id)
                    this.kazeta.push( ...d.filter( x => ukd.findIndex( y => y.kazetaid === x.id ) >= 0 ) ) 
                  }
                  
                }

                for (let i = 0; i < kd.length; i++)
                {
                  const ut = this.user.find( x => x.id === kd[i].userid);
                  const dt = this.kazeta.find( x => x.id === kd[i].kazetaid );

                  if(ut && dt)
                  {
                    const kesoTemp : kesoDTO = { id : dt?.id, title: dt.title, username: ut.username, email: ut.email, telszam: ut.telszam, kolcsKezdet: kd[i].kolcsKezdet, kesetnapok: this.kesetKazetaNapo(kd[i]) };
                    this.kesetKazeta.push( kesoTemp )
                  }

                  console.log('áááááááááááááááábbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');

                }
                console.log('áááááááááááááááábbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');

              },
              error: (err) => console.error(err)
            });

          },
          error: (er) => console.error(er)
        });

      },
      error: (err) => console.error(err)
    });
    
  }
  */
}
