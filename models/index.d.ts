export interface DvdDTO
{
    id: number;
    title: string;
    date: string;
    status: string;
    imgUrl: string;
}

export interface KazetakDTO
{
    id: number;
    title: string;
    date: string;
    status: string;
    imgUrl: string;
}

export interface UserDTO
{
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    passwd: string;
    telszam: string;
    szemszam: string;
    lakcim: string;
    role: string;
    status: number;
}

export interface LoginDTO
{
    email: string;
    passwd: string;
}

export interface AccessTokenDTO
{
    accessToken: string;
    user: UserDTO;
}

export interface AllapotDTO
{
    id: number;
    status: string;
}

export interface KolcdonzottDvdDTO
{
    id: number;
    dvdid: number;
    userid: number;
}

export interface KolcsonzottkazetaDTO
{
    id: number;
    kazetaid: number;
    userid: number;
}