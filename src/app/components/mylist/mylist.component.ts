import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  data: any = [];
  id: number = 0;
  itemName:any;
  constructor() { }

  ngOnInit(): void {
  }
  onAdd(item: any) {
    this.id = this.id + 1;
    if (item && item !== "" && item !== null) {
      let items = { id: this.id, item: item };
      this.data.push(items);
      this.itemName = "";

    }
  }
  delete(id: any) {
    this.data = this.data.filter((item: any) => item.id !== id);
  }

  update(id: any) {
    let data = this.data.filter((item:any, index:any, obj:any) => item.id === id);
    this.itemName = data[0].item;
  }

}
