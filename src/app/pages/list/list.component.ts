// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import {IListItem} from "./interfaces/IListItem";
import {ListService} from "./services/list.service";
import {NavigationBehaviorOptions, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService,
              private router: Router) { }

  list: IListItem[] = [];
  isLoadingTable: boolean = false;

  ngOnInit(): void {
    console.log(this.getProjects())
    this.getProjects();
  }

  getProjects() {
    this.listService.getProjects()
      .subscribe(
        (response: IListItem[]) => {
          this.list = response;
          this.buildTable();
          this.isLoadingTable = true;
        }
      );
  }

  deleteProject(id) {
    this.listService.deleteProject(id)
      .subscribe(
        (response) => {
          this.list = this.list.filter(project => project.id != id);

          this.buildTable();
        }
      )
  }

  buildTable() {
    const idClient = localStorage.getItem('idClient');
    this.list = this.list.filter((listItem: IListItem) => listItem.idClient === idClient);
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
