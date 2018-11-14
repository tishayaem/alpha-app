import React from "react";
import svgCoords from "./svgCoords";
import "./SVGFloorplan.less";
import Details from "./Details/Details";
import floorPlanData from "./Details/floorPlanData";

export default class FloorPlan extends React.Component {
  constructor() {
    super();
    this.state = {
      room: undefined
    };
  }
  // Setting room variable in our state to room object in collection of coordinates
  handleRoomClick = room => {
    this.setState({ room: room });
  };
  render() {
    return (
      <div>
        <svg
          version="1.1"
          id="NEW-floorplan"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="2048px"
          height="1536px"
          viewBox="0 0 2048 1536"
          enableBackground="new 0 0 2048 1536"
        >
          {svgCoords().map(room => {
            let currentRoom = floorPlanData().find(roomInfo => {
              return roomInfo.studioNo === room.id;
            });
            return (
              <polyline
                id={room.id}
                className={
                  currentRoom.availability === "available"
                    ? "available"
                    : "taken"
                }
                fill="#FF9F3F"
                onClick={() => this.handleRoomClick(room)}
                style={{ cursor: "pointer" }}
                stroke="#000000"
                strokeWidth="5"
                points={room.points}
              />
            );
          })}
        </svg>
        {this.state.room && (
          <div className="details">
            <Details room={this.state.room} />{" "}
          </div>
        )}
      </div>
    );
  }
}
