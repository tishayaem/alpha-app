import React, { Component } from 'react';
import logo from './images/logo.svg';
import FloorPlanImage from './images/AlphaAppFloor.png';
import GoogleMap from './GoogleMap.js';
import './App.css';
import FloorPlan from './FloorPlan/FloorPlan';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-01">
          <header className="header-content">
            <img src={logo} className="logo" alt="" />
            <h1>Alpha Real Estate is always with you!</h1>
          </header>
        </div>
        <div className="App-intro container-02">
          <div className="flex-item-01">
            <h2>Who are we?</h2>
            <p>
              Alpha Team is a group of passionate developers! We are located in the Biscuit factory, which is based in the Bermondsey area of London.
            </p>
            <br />
            <h2>What are we doing?</h2>
            <p>
              We are boosting our coding skills and we help the community to prosper. Currently, we are working on a project that can serve the clients whoe are interested to rent the spaces and facilities of the building. We offer them accurate information on an elegant interface.
            </p>
            <br />
            <h2>Are you looking for an office?</h2>
            <ul>
              <li>Use Google map to find our location.</li>
              <li>Use the floorplan below to explore the spaces that look nice to you.</li>
              <li>Finally, use the contact form to contact the manager of the Biscuit Factory bulding. Alpha Team is always with you!</li>
            </ul>
          </div>
          <div className="flex-item-02">
            <GoogleMap />
          </div>
        </div>
        <div className="container-03">
          <div className="flex-item-03">
            <FloorPlan />
          </div>
        </div>
        <div className="container-04">
          <div className="flex-item-04">
            Contact form
          </div>
        </div>
      </div>
    );
  }
}

export default App;
