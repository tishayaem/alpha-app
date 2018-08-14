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

  componentDidMount() {
    this.setRoomInfo(
      floorPlanData().find(roomInfo => {
        return roomInfo.studioNo == this.props.room.id;
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
          <div>Anual price: {this.state.roomInfo.pricePsfAnual}£</div>
          <div>Price excluding VAT: {this.state.roomInfo.priceExVat}£</div>
          <div>Price including VAT: {this.state.roomInfo.priceIncVat}£</div>
        </div>
      );
    } else {
      return <div>Nothing</div>;
    }
  }
}
