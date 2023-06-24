import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quickLinks=['Home','Chi Siamo', 'S.I.R.E','SIRE Features','Why SIRE?','SIRE Product',
'How it Works?']

usefulLinks=['Help Center','Privacy Policy','Terms & Conditions','FAQ']

array1 = [{ icon: 'bi bi-geo-alt-fill', content: 'Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci' },
{ icon: 'bi bi-envelope-fill', content: 'email@email.com' },
{ icon: 'bi bi-telephone-fill', content: '+29 98595 8998' }]

}
