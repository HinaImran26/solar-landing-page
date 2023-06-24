import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array1 = [{ icon: 'bi bi-geo-alt-fill', content: 'Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci' },
  { icon: 'bi bi-envelope-fill', content: 'email@email.com' },
  { icon: 'bi bi-telephone-fill', content: '+29 98595 8998' }]

}
