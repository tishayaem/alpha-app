import React from "react";
import floorPlan from "./floorPlan.png";
import Details from "./Details/Details";
import mapArea from "./mapArea";
export default class FloorPlan extends React.Component {
    constructor() {
        super();
        this.state = {
            room: undefined
        }
    }

  roomClick(room) {
    this.setState({ room: room })
  }

  render() {
<<<<<<< HEAD
    return ( <div>
        <img src={floorPlan} width="845" height="624" border="0" useMap="#map" />
        {this.state.room && <Details room={this.state.room} />}
        <map name="map">      
         { mapArea().map((room)=> {
          return <area 
            onClick={() => this.roomClick(room)} 
            shape="rect" 
            coords={room.coords}
            key={room.id} 
=======
    return <div>
        <img src={floorPlan} width="845" height="624" border="0" usemap="#map" alt='' />
        {this.state.room && <div> <Details room={this.state.room} /> </div>}
        <map name="map">      
         { mapArea().map((room)=> {
          return <area alt=''
            onClick={() => this.roomClick(room)} 
            shape="rect" 
            coords={room.coords} 
>>>>>>> upstream/master
           />
         }) 
          }
        </map>
<<<<<<< HEAD
      </div>
    )
=======
      </div>;
>>>>>>> upstream/master
  }
}
