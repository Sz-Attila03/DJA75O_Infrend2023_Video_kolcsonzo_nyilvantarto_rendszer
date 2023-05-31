import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KolcsonzottkazetaDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class KolcsonzottkazetaService {

  constructor( private http: HttpClient ) { }

  getAll()
    {
        return this.http.get<KolcsonzottkazetaDTO[]>('api/kolcsonzottkazeta');
    }

    getOne(id: number)
    {
        return this.http.get<KolcsonzottkazetaDTO>('api/kolcsonzottkazeta/' + id);
    }

    create(movie: KolcsonzottkazetaDTO)
    {
        return this.http.post<KolcsonzottkazetaDTO>('api/kolcsonzottkazeta', movie);
    }

    update(movie: KolcsonzottkazetaDTO)
    {
        return this.http.put<KolcsonzottkazetaDTO>('api/kolcsonzottkazeta', movie);
    }

    deletbyuiddid(movie: Number)
    {
        return this.http.delete('api/kolcsonzottkazeta/deletbyuiddid/' + movie);
    }

    delete(id: number)
    {
        return this.http.delete('api/kolcsonzottkazeta/' + id);
    }

    creatWithDate(movie: KolcsonzottkazetaDTO)
    {
        return this.http.post<KolcsonzottkazetaDTO>('api/kolcsonzottkazeta/creatWithDate', movie);
    }
}
