import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ld-wrapper',
  templateUrl: './ld-wrapper.component.html',
  styleUrls: ['./ld-wrapper.component.scss']
})
export class LdWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() type: 'one-col' | 'two-col' = 'two-col'

}
