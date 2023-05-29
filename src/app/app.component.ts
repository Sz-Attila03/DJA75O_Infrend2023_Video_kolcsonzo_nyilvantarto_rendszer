import { Component } from '@angular/core';
import { HitelesitService } from './services/hitelesit.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  constructor( private router: Router, public hitelesítService: HitelesitService, private toastService: ToastrService) {}

  hit = this.hitelesítService;

  role = this.hit.getUserRole();

  kijelentkezes()
  {
    this.hitelesítService.removeToken();
    this.router.navigateByUrl('/');
    this.toastService.success('Sikeres kijelentkezes', 'Kijelentkezes');
  }

  title = 'video-kolcsonzo-nyilvantarto-rendszer';


}
