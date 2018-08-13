import React from "react";
import floorPlan from "./floorPlan.png";

export default class FloorPlan extends React.Component {
  render() {
    return (
      <div>
        <img src={floorPlan} width="845" height="624" border="0" usemap="#map" />
        <map name="map">
          <area shape="rect" coords="23,103,129,137" href="58" />
          <area shape="rect" coords="23,137,130,169" href="59" />
          <area shape="rect" coords="23,169,130,207" href="60" />
          <area shape="rect" coords="23,207,106,235" href="61" />
          <area shape="rect" coords="23,235,106,275" href="62" />
          <area shape="rect" coords="23,274,106,297" href="63" />
          <area shape="rect" coords="23,297,107,323" href="64" />
          <area shape="rect" coords="23,323,107,356" href="65" />
          <area shape="rect" coords="23,356,107,384" href="66" />
          <area shape="rect" coords="23,384,107,410" href="67" />
          <area shape="rect" coords="23,410,107,438" href="68" />
          <area shape="rect" coords="23,438,108,476" href="70" />
          <area shape="rect" coords="144,142,181,165" href="57" />
          <area shape="rect" coords="144,165,181,187" href="56" />
          <area shape="rect" coords="144,187,182,208" href="55" />
        </map>
      </div>
    );
  }
}
