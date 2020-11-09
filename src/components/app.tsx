// Import deps
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Container, Row } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Studentlist from "./studentlist"
 

// Import styles
import "./../styles/styles.css";


 
// Create App component
export const App = () => {

 return (
    <div className="app">
      <Row className="col-12 m-0 p-0" style={{ height: "10vh" }}>
        <Navbar expand="md" bg="light" className="col-12">
          <div className="d-flex justify-content-between align-items-center flex-wrap w-100">
            <h4 className="align-middle font-weight-bold ml-2 mb-0">
             Reservation System
             </h4>
          </div>
        </Navbar>
      </Row>  
      <Row className="col-12 m-0 p-0" style={{ height: "90vh" }}>
        <Switch>
          <Route path="/students">
            <Studentlist />
          </Route>
        
        </Switch>
      </Row>
    </div>
  );
};

