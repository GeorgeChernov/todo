import React from "react";
import "./App.css";
import { ListComponent } from "../list/List";
import { Item } from "../../models/Item";

interface State {
  items: Item[];
}

class App extends React.Component<{}, State> {
  private readonly initialItems: Item[] = [
    {
      id: "1",
      name: "test1",
      isDone: true
    },
    {
      id: "2",
      name: "test2",
      isDone: false
    }
  ];

  state = { items: this.initialItems }; // TODO: to find out how it works

  toggleDone = (item: Item) => {
    this.setState({
      ...this.state,
      items: this.state.items.map(i =>
        i.id === item.id ? { ...i, isDone: !i.isDone } : { ...i }
      )
    });
  };

  render() {
    return (
      <div className="App">
        <ListComponent items={this.state.items} toggleDone={this.toggleDone}></ListComponent>
      </div>
    );
  }
}

export default App;
