import React from "react";
import "./FloorPlan.less";
import floorPlan from "./floorPlan.svg";
import Details from "./Details/Details";
import mapArea from "./mapArea";
export default class FloorPlan extends React.Component {
  constructor() {
    super();
    this.state = {
      room: undefined
    };
  }
  // Setting room variable in our state to room object in collection of coordinates
  roomClick(room) {
    this.setState({ room: room });
  }

  render() {
    return (
      <div className="flex-item-03">
        <img
          src={floorPlan}
          className="orientation"
          width="845"
          height="624"
          border="0"
          useMap="#map"
          alt="map"
        />
        <map name="map">
          {mapArea().map(room => {
            return (
              <area
                onClick={() => this.roomClick(room)}
                shape="rect"
                coords={room.coords}
                key={room.id}
                alt=""
              />
            );
          })}
        </map>
        {/* If state defined- render Details component */}
        {this.state.room && (
          <span className="details">
            <Details room={this.state.room} />{" "}
          </span>
        )}
      </div>
    );
  }
}
