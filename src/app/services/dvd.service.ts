import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DvdDTO } from "models";

@Injectable({
    providedIn: 'root'
})

export class DvdService
{
    constructor(private http: HttpClient){}

    getAll()
    {
        return this.http.get<DvdDTO[]>('api/dvd');
    }

    getOne(id: number)
    {
        return this.http.get<DvdDTO>('api/dvd/' + id);
    }

    create(movie: DvdDTO)
    {
        return this.http.post<DvdDTO>('api/dvd', movie);
    }

    update(movie: DvdDTO)
    {
        return this.http.put<DvdDTO>('api/dvd', movie);
    }

    delete(id: number)
    {
        return this.http.delete('api/dvd/' + id);
    }
}