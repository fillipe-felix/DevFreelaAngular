import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ld-wrapper',
  templateUrl: './ld-wrapper.component.html',
  styleUrls: ['./ld-wrapper.component.scss']
})
export class LdWrapperComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @Input() type: 'one-col' | 'two-col' = 'two-col';
  @Input() back: string = '';

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
