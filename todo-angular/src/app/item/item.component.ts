import { Component, Input, EventEmitter, Output } from "@angular/core";
import { ToDoItem } from "src/app/models/todo-item";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent {
  @Input() item: ToDoItem;

  @Output() toggleDone = new EventEmitter<ToDoItem>();
  @Output() delete = new EventEmitter<ToDoItem>();

  onToggleDone() {
    this.toggleDone.emit(this.item);
  }

  onDelete(){
    this.delete.emit(this.item);
  }
}
