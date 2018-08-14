import React from "react";

export default class Details extends React.Component {
  render() {
    return <div>{this.props.room.id}</div>;
  }
}
