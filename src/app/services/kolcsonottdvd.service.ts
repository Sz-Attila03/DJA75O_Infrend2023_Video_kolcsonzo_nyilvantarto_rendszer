import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KolcdonzottDvdDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class KolcsonottdvdService {

  constructor( private http: HttpClient ) { }

    getAll()
    {
        return this.http.get<KolcdonzottDvdDTO[]>('api/kolcsonzottdvd');
    }

    getOne(id: number)
    {
        return this.http.get<KolcdonzottDvdDTO>('api/kolcsonzottdvd/' + id);
    }

    create(movie: KolcdonzottDvdDTO)
    {
        return this.http.post<KolcdonzottDvdDTO>('api/kolcsonzottdvd', movie);
    }

    update(movie: KolcdonzottDvdDTO)
    {
        return this.http.put<KolcdonzottDvdDTO>('api/kolcsonzottdvd', movie);
    }

    deletbyuiddid(movie: Number)
    {
        return this.http.delete('api/kolcsonzottdvd/deletbyuiddid/' + movie);
    }

    delete(id: number)
    {
        return this.http.delete('api/kolcsonzottdvd/' + id);
    }

    creatWithDate(movie: KolcdonzottDvdDTO)
    {
        return this.http.post<KolcdonzottDvdDTO>('api/kolcsonzottdvd/creatWithDate', movie);
    }

}
