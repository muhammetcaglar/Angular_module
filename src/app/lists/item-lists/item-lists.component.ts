import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-item-lists',
  templateUrl: './item-lists.component.html',
  styleUrls: ['./item-lists.component.css']
})
export class ItemListsComponent {

  @Input () items=[];
  constructor(){}

  ngOnInit():void{}
}
