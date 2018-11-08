import React from "react";
import floorPlanData from "./floorPlanData";
import "./Details.less";
import Modal from "../../Modal/Modal";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = { roomInfo: undefined, showModal: false };
  }
  toggleModal = () =>
    this.setState({
      showModal: !this.state.showModal
    });

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
      const {
        studioNo,
        availability,
        window,
        sizeSqFt,
        priceIncVat,
        pricePsfAnual
      } = this.state.roomInfo;
      return (
        <span>
          <h1>Room {studioNo}</h1>
          <div>Availability: {availability}</div>
          <div>Size: {sizeSqFt} sq ft</div>
          <div>Price: {priceIncVat}£</div>
          <button onClick={this.toggleModal}>
            More Info about room {studioNo}
          </button>
          {this.state.showModal ? (
            <Modal>
              <div>Availability: {availability}</div>
              <div>Natural Light: {window}</div>
              <div>Size: {sizeSqFt} sq ft</div>
              <div>Price: £{priceIncVat}</div>
              <div>Price per square foot: £{pricePsfAnual}</div>

              <button onClick={this.toggleModal}>Book</button>
            </Modal>
          ) : null}
        </span>
      );
    } else {
      return <div>Nothing</div>;
    }
  }
}
