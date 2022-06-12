import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {IProject} from "../../../shared/interfaces/IProject";

@Injectable({
  providedIn: 'root'
})
export class CreateEditService {

  constructor(private http: HttpClient) { }

  postProject(project: IProject){
    return this.http.post<IProject>(`${environment.apiUrl}/projects`, project)
  }

  putProject(project: IProject, id: string){
    return this.http.put<IProject>(`${environment.apiUrl}/projects/${id}`, project)
  }
}
