import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {IListItem} from "../interfaces/IListItem";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get<IListItem[]>(environment.apiUrl + '/projects')
  }
}
