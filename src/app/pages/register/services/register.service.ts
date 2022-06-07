import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postUser(payload: IUser){
    return this.http.post(environment.apiUrl + "users", payload)
  }
}
