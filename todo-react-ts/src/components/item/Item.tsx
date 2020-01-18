import React, { ReactNode } from "react";
import "./Item.css";
import { Item } from "../../models/Item";

interface Props extends React.Props<any> {
  item: Item;
  toggleDone: (item: Item) => void;
  delete: (item: Item) => void;
}

export class ItemComponent extends React.Component<Props> {
  public render(): ReactNode {
    return (
      <div className="item">
        <div className="item-name">{this.props.item.name}</div>
        <div className="actions">
          <button onClick={this.props.toggleDone.bind(this, this.props.item)}>
            {this.props.item.isDone ? "Undone" : "Done"}
          </button>
          <button onClick={this.props.delete.bind(this, this.props.item)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
