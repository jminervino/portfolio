import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  infos: Object[] = [
    {
      name: "Ligue Me",
      info: "(81)98679-7955"
    },
    {
      name: "Email",
      info: "joaovictor_minervino@hotmail.com"
    },
    {
      name: "Endereço",
      info: "Rua Raul Pompeia 167, Arruda, Bloco E, Apt 401"
    }
  ]
  
}
