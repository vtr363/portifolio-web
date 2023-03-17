import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  apiUrl = "http://localhost:5094/contacts"
  constructor(private http: HttpClient) { }

  addContact(contact: Contact) {
    return this.http.post(this.apiUrl, contact)
  }
}
