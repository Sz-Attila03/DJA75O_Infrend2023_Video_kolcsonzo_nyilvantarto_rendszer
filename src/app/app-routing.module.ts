import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DvdComponent } from './dvd/dvd.component';
import { KazetakComponent } from './kazetak/kazetak.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { TermekformComponent } from './termekform/termekform.component';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { HitelesitService } from './services/hitelesit.service';
import { RegisztrationComponent } from './regisztration/regisztration.component';
import { SzerkeztComponent } from './szerkezt/szerkezt.component';
import { FellistComponent } from './fellist/fellist.component';
import { FelszerkeztComponent } from './felszerkezt/felszerkezt.component';
import { FelkeresComponent } from './felkeres/felkeres.component';

const routes: Routes = [
  {
    path: '',
    component: KezdolapComponent
  },
  {
    path: 'dvd',
    component: DvdComponent
  },
  {
    path: 'kazetak',
    component: KazetakComponent
  },
  {
    path: 'termekform',
    component: TermekformComponent,
    canActivate: [ () => inject(HitelesitService).vendegAkadalyozasa() ]
  },
  {
    path: 'termekform/:id',
    component: TermekformComponent,
    canActivate: [ () => inject(HitelesitService).vendegAkadalyozasa() ]
  },
  {
    path: 'bejelentkezes',
    component: BejelentkezesComponent
  },
  {
    path: 'regisztracio',
    component: RegisztrationComponent
  },
  {
    path: 'szerkeztes/:termek/:id',
    component: SzerkeztComponent
  },
  {
    path: 'felhasznalok',
    component: FellistComponent
  },
  {
    path: 'felhasznaloszerkezt/:id',
    component: FelszerkeztComponent
  },
  {
    path: 'felhasznalokeres',
    component : FelkeresComponent,
    canActivate: [ () => inject(HitelesitService).vendegAkadalyozasa() ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
