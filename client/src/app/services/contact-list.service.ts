/*
Contact list service
Abirami Robert Kennedy
300934720
3/30/2019
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/contact';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private user: User;
  private authToken: any = null;

  private endpoint = 'https://comp308-w2019-asgnmnt2-abirami.herokuapp.com/api/contact-list/';
  //private endpoint = 'http://localhost:3000/api/contact-list/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
  }
//Get contact list
  public getList(): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public getContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'edit/' + contact._id, this.httpOptions);
  }
//Add contact list
  public addContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'add', contact, this.httpOptions);
  }
//Edit contact list
  public editContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'edit/' + contact._id, contact, this.httpOptions);
  }
//Delete contact list
  public deleteContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'delete/' + contact._id, this.httpOptions);
  }
//Tokens to authenticate user
  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }

}
