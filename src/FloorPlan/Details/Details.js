import React from "react";
import floorPlanData from "./floorPlanData";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      roomInfo: undefined
    };
  }

  setRoomInfo(roomInfo) {
    this.setState({ roomInfo: roomInfo });
  }
// Render component first time we click
  componentDidMount() {
    this.findRoom(this.props);
  }
// Re-render component every time we click again
  componentWillReceiveProps(props) {
    this.findRoom(props);
  }
// Match id from html area tag with studio number from collection of room information
  findRoom(roomProps) {
    this.setRoomInfo(
      floorPlanData().find(roomInfo => {
        return roomInfo.studioNo === roomProps.room.id;
      })
    );
  }

  render() {
    if (this.state.roomInfo) {
      return (
        <div>
          <div>Room {this.state.roomInfo.studioNo}</div>
          <div>Availability: {this.state.roomInfo.availability}</div>
          <div>Window: {this.state.roomInfo.window}</div>
          <div>Size: {this.state.roomInfo.sizeSqFt} sq ft</div>
          <div>Price: {this.state.roomInfo.priceIncVat}£</div>
          <div>Price per square feet: {this.state.roomInfo.pricePsfAnual}£</div>
        </div>
      );
    } else {
      return <div>Nothing</div>;
    }
  }
}
