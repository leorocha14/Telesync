import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../environments/environment.prod';
import { Cliente } from '../cliente/client.model'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = "/api";

  private currentUserSubject: BehaviorSubject<Cliente>
  public currentUser: Observable<Cliente>

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<Cliente>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Cliente {
    return this.currentUserSubject.getValue();
  }

  login(nome: string, senha: string){
    return this.http.post<any>(`${environment.apiUrl}/auth`, {nome, senha}).pipe(map(cliente =>{
      localStorage.setItem('currentUser', JSON.stringify(cliente));
      this.currentUserSubject.next(cliente);
      return cliente;
    }));
  }

  logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    this.currentUserSubject.next(null);
  }

  setUserName(username:string){

    localStorage.setItem('username', JSON.stringify(username));
  }

  getUserName(){

    return JSON.parse(localStorage.getItem('username'))
  }
}
