import React from "react";
import "./App.css";
import { ListComponent } from "../list/List";
import { Item } from "../../models/Item";
import ItemListService from "../../services/item-list.service";

interface State {
  itemsToDo: Item[];
  itemsDone: Item[];
  itemsDeleted: Item[];
}

class App extends React.Component<{}, State> {
  private service = new ItemListService();
  private readonly initialItems: Item[] = [];

  state = {
    itemsToDo: this.initialItems,
    itemsDone: this.initialItems,
    itemsDeleted: this.initialItems
  }; // TODO: to find out how it works

  componentDidMount() {
    this.service.getItems().subscribe(items =>
      this.setState({
        itemsToDo: [...items.filter(item => !item.isDeleted && !item.isDone)],
        itemsDone: [...items.filter(item => !item.isDeleted && item.isDone)],
        itemsDeleted: [...items.filter(item => item.isDeleted)]
      })
    );
  }

  toggleDone = (item: Item) => {
    this.service.toggleDoneItem(item);
  };

  render() {
    return (
      <div className="App">
        <h3>To Do</h3>
        <ListComponent
          items={this.state.itemsToDo}
          toggleDone={this.toggleDone}
        ></ListComponent>
        <h3>Done</h3>
        <ListComponent
          items={this.state.itemsDone}
          toggleDone={this.toggleDone}
        ></ListComponent>
        <h4>Deleted: {this.state.itemsDeleted.length}</h4>
      </div>
    );
  }
}

export default App;
