import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { KazetakDTO } from "models";

@Injectable({
    providedIn: 'root'
})

export class KazetakService
{
    constructor(private http: HttpClient){}

    getAll()
    {
        return this.http.get<KazetakDTO[]>('api/kazetak');
    }

    getOne(id: number)
    {
        return this.http.get<KazetakDTO>('api/kazetak/' + id);
    }

    create(movie: KazetakDTO)
    {
        return this.http.post<KazetakDTO>('api/kazetak', movie);
    }

    update(movie: KazetakDTO)
    {
        return this.http.put<KazetakDTO>('api/kazetak', movie);
    }

    delete(id: number)
    {
        return this.http.delete<KazetakDTO>('api/kazetak' + id);
    }
}