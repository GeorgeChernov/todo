import { Injectable } from "@angular/core";
import { ToDoItem } from "src/app/models/todo-item";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ItemListService {
  constructor() {}

  private item1: ToDoItem = {
    id: 1,
    name: "My test task",
    isDone: false,
    isDeleted: false
  };

  private item2: ToDoItem = {
    id: 2,
    name: "My second task",
    isDone: false,
    isDeleted: false
  };

  private item3: ToDoItem = {
    id: 3,
    name: "My completed task",
    isDone: true,
    isDeleted: false
  };

  private item4: ToDoItem = {
    id: 4,
    name: "My deleted task",
    isDone: false,
    isDeleted: true
  };

  private items: ToDoItem[] = [this.item1, this.item2, this.item3, this.item4];

  private subject = new BehaviorSubject<ToDoItem[]>(this.items);

  public getItems(): Observable<ToDoItem[]> {
    return this.subject.asObservable();
  }

  public toggleDoneItem(itemToDone: ToDoItem): void {
    this.items = this.items.map(item =>
      item.id === itemToDone.id ? { ...item, isDone: !item.isDone } : item
    );
    this.broadcast();
  }

  public delete(itemToDelete: ToDoItem): void {
    this.items = this.items.map(item =>
      item.id === itemToDelete.id ? { ...item, isDeleted: true } : { ...item }
    );
    this.broadcast();
  }

  private broadcast() {
    this.subject.next(this.items);
  }
}
