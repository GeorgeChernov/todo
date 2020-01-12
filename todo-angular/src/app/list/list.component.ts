import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ToDoItem } from "src/app/models/todo-item";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent {
  @Input() items: ToDoItem[];

  @Output() toggleDone = new EventEmitter<ToDoItem>();

  onToggleDone(item) {
    this.toggleDone.emit(item);
  }
}
