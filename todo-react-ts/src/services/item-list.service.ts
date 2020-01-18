// TODO: make it singleton late

import { Item } from "../models/Item";
import { BehaviorSubject, Observable } from "rxjs";

export default class ItemListService {
  private item1: Item = {
    id: 1,
    name: "My test task",
    isDone: false,
    isDeleted: false
  };

  private item2: Item = {
    id: 2,
    name: "My second task",
    isDone: false,
    isDeleted: false
  };

  private item3: Item = {
    id: 3,
    name: "My completed task",
    isDone: true,
    isDeleted: false
  };

  private item4: Item = {
    id: 4,
    name: "My deleted task",
    isDone: false,
    isDeleted: true
  };

  private items: Item[] = [this.item1, this.item2, this.item3, this.item4];

  private subject = new BehaviorSubject<Item[]>(this.items);

  public getItems(): Observable<Item[]> {
    return this.subject.asObservable();
  }

  public toggleDoneItem(itemToDone: Item): void {
    this.items = this.items.map(item =>
      item.id === itemToDone.id ? { ...item, isDone: !item.isDone } : item
    );
    this.broadcast();
  }

  public delete(itemToDelete: Item): void {
    this.items = this.items.map(item =>
      item.id === itemToDelete.id ? { ...item, isDeleted: true } : { ...item }
    );
    this.broadcast();
  }

  private broadcast() {
    this.subject.next(this.items);
  }
}
