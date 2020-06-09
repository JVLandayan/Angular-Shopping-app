import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  itemName = ''
  itemAmount:number = 0

  constructor() { }

  ngOnInit(): void {
  }



  @Output() addData =  new EventEmitter <{itemName: string, itemAmount:number}>();
  @Output() deleteItem =  new EventEmitter <string>();
  /*@Output() addData =  new EventEmitter <{itemName: string, itemAmount:number}>(); */


  addItem() {
    this.addData.emit({
      itemName: this.itemName,
      itemAmount: this.itemAmount
    })
  }

  removeItem() {
    this.deleteItem.emit('delete')
  }





}
