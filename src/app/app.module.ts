import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DvdComponent } from './dvd/dvd.component';
import { KazetakComponent } from './kazetak/kazetak.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { TermekformComponent } from './termekform/termekform.component';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HozzaferesiTokenInterceptor } from './services/hozzaferesi-token.interceptor';
import { JogosulatlanInterceptor } from './services/jogosulatlan.interceptor';
import { RegisztrationComponent } from './regisztration/regisztration.component';
import { SzerkeztComponent } from './szerkezt/szerkezt.component';
import { CommonModule } from '@angular/common';
import { FelszerkeztComponent } from './felszerkezt/felszerkezt.component';
import { FellistComponent } from './fellist/fellist.component';
import { FelkeresComponent } from './felkeres/felkeres.component';
import { KeseslistComponent } from './keseslist/keseslist.component';

@NgModule({
  declarations: [
    AppComponent,
    DvdComponent,
    KazetakComponent,
    KezdolapComponent,
    TermekformComponent,
    BejelentkezesComponent,
    RegisztrationComponent,
    SzerkeztComponent,
    FelszerkeztComponent,
    FellistComponent,
    FelkeresComponent,
    KeseslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HozzaferesiTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JogosulatlanInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
