import React from "react";
import svgCoords from "./svgCoords";
import Details from "./Details/Details";

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
    console.log(this.state);
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
            return (
              <polyline
                id={room.id}
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
