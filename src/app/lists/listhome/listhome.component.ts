import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listhome',
  templateUrl: './listhome.component.html',
  styleUrls: ['./listhome.component.css']
})
export class ListhomeComponent {

numbers=[
  {value:55, label:'Müşteri'},
  {value:'4000 TL', label:'Cire'},
  {value:75, label:'Yorumlar'}
];
images=[

  {
    image:'/assets/images/phone.jpg',
    title:'Phone',
    description:'İhtiyacınız olan akıllı telefon.'
  },
  {
    image:'/assets/images/tablet.jpg',
    title:'Tablet',
    description:'İhtiyacınız olan akıllı tablet.'
  }
];

  constructor(){}

  ngOnInit(): void{

  }
}
