import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllapotDTO } from 'models';

@Injectable({
  providedIn: 'root'
})

export class AllapotService
{
  constructor(private http: HttpClient) { }

  getAll()
    {
        return this.http.get<AllapotDTO[]>('api/allapot');
    }

    getOne(id: number)
    {
        return this.http.get<AllapotDTO>('api/allapot/' + id);
    }

    create(status: AllapotDTO)
    {
        return this.http.post<AllapotDTO>('api/allapot', status);
    }

    update(status: AllapotDTO)
    {
        return this.http.put<AllapotDTO>('api/allapot', status);
    }

    delete(id: number)
    {
        return this.http.delete('api/allapot/' + id);
    }
}
