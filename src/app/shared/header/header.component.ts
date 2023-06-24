import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

navbarItems=['home','chi siamo', 'S.I.R.E', 'SIRE features', 'why SIRE?','SIRE product', 'How it works']


}
