// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import {ListService} from "./services/list.service";
import {NavigationBehaviorOptions, Router} from "@angular/router";
import {IProject} from "../../shared/interfaces/IProject";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService,
              private router: Router) { }

  list: IProject[] = [];
  isLoadingTable: boolean = false;

  ngOnInit(): void {
    console.log(this.getProjects())
    this.getProjects();
  }

  getProjects() {
    this.listService.getProjects()
      .subscribe(
        (response: IProject[]) => {
          this.list = response;
          this.buildTable();
          this.isLoadingTable = true;
        }
      );
  }

  buildTable() {
    const idClient = localStorage.getItem('idClient');
    this.list = this.list.filter((listItem: IProject) => listItem.idClient === idClient);
  }

  deleteProject(id: string | undefined) {
    this.listService.deleteProject(id)
      .subscribe(
        (response) => {
          this.list = this.list.filter(project => project.id != id);

          this.buildTable();
        }
      )
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  redirectToIfParams(url: string, id: string | undefined){
    console.log(id)
    const dataParams: NavigationBehaviorOptions = {
      state:{
        id: id
      }
    };

    this.router.navigate([`/${url}`], dataParams)
  }
}
