import React, { ReactNode } from "react";
import { Item } from "../../models/Item";
import { ItemComponent } from "../item/Item";

interface Props extends React.Props<any> {
  items: Item[];
  toggleDone: (item: Item) => void;
}

export class ListComponent extends React.Component<Props> {
  public render(): ReactNode {
    return this.props.items.map(item => (
      <ItemComponent
        item={item}
        toggleDone={this.props.toggleDone}
      ></ItemComponent>
    ));
  }
}
