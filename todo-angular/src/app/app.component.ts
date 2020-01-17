import { Component } from "@angular/core";
import { ToDoItem } from "src/app/models/todo-item";
import { Observable } from "rxjs";
import { ItemListService } from "src/app/services/item-list.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private itemListService: ItemListService) {}

  private items$: Observable<ToDoItem[]> = this.itemListService.getItems();

  activeItems$ = this.items$.pipe(map(items => items.filter(item => !item.isDeleted)));
  deletedItems$ = this.items$.pipe(map(items => items.filter(item => item.isDeleted)));
  todoItems$ = this.activeItems$.pipe(map(items => items.filter(item => !item.isDone)));
  doneItems$ = this.activeItems$.pipe(map(items => items.filter(item => item.isDone)));

  onToggleDone(item){
    this.itemListService.toggleDoneItem(item);
  }

  onDelete(item){
    this.itemListService.delete(item);
  }
}
