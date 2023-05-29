import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessTokenDTO, LoginDTO, UserDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get<UserDTO[]>('/api/user');
  }

  getOne(id: number)
  {
    return this.http.get<UserDTO>('/api/user/' + id);
  }

  update(user: UserDTO)
  {
    return this.http.put<UserDTO>( '/api/user', user );
  }

  login(data: LoginDTO)
  {
    return this.http.post<AccessTokenDTO>('/api/user/login', data);
  }

  userReg(data: UserDTO)
  {
    return this.http.post<UserDTO>('/api/user', data);
  }

  getkeresUsername(userN: string)
  {
    return this.http.get<UserDTO>('/api/user/keresUsername/' + userN);
  }

  getkeresSzemSzam(szemSzam: string)
  {
    return this.http.get<UserDTO>('/api/user/keresSzemSzam/' + szemSzam);
  }

  getkeresId(id: number)
  {
    return this.http.get<UserDTO>('/api/user/keresId/' + id);
  }
}
