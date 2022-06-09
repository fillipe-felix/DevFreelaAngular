// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import {IListItem} from "./interfaces/IListItem";
import {ListService} from "./services/list.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService) { }

  list: IListItem[] = [];

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
        }
      );
  }

  goToEdit(id) {
    window.location.href = `project-create-edit.html?id=${id}`;
  }

  deleteProject(id) {
    fetch(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(response => {
        this.list = this.list.filter(project => project.id != id);

        this.buildTable();
      })
  }

  buildTable() {
    document.querySelector("#table-body").innerHTML = '';
    const idClient = localStorage.getItem('idClient');

    this.list = this.list.filter((listItem: IListItem) => listItem.idClient === idClient);

    this.list.forEach((listItem: IListItem) => {
      let template = `
            <div class="row">
                <div class="title-description">
                    <h6 class="title">${listItem.title}</h6>
                    <p class="description">${listItem.description}</p>
                </div>
                <div class="price">R$ ${listItem.totalCost}</div>
                <div class="actions">
                    <span class="edit material-icons" onclick="goToEdit(${listItem.id})">edit</span>
                    <span class="delete material-icons" onclick="deleteProject(${listItem.id})">delete_outline</span>
                </div>
            </div>
        `
      document.querySelector("#table-body").insertAdjacentHTML("beforeend", template)
    });
  }

}
