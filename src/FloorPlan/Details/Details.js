import React from "react";
<<<<<<< HEAD
import floorPlanData from "./floorPlanData";

export default class Details extends React.Component {
  constructor() { 
    super();
    this.state = {
      roomInfo: undefined
    };
  }

setRoomInfo(roomInfo) {
    this.setState({ roomInfo: roomInfo })
  }

componentDidMount() {
  this.setRoomInfo (floorPlanData().find(roomInfo => {
    return roomInfo.studioNo == this.props.room.id;
  })
);

}

  render() {
    if (this.state.roomInfo) {return <div>{this.state.roomInfo.availability}</div>} else {
      return (<div>Nothing</div>)
    }
}
=======

export default class Details extends React.Component {
  render() {
    return <div>{this.props.room.id}</div>;
  }
>>>>>>> upstream/master
}
