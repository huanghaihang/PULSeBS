// Import deps
import React, { useEffect, useState } from "react";
import { LoginPage } from "./LoginPage";
// Import styles
import "./../styles/styles.css";

// Create App component
export const App = () => {
  return (
    <div className="app">
      <LoginPage></LoginPage>
    </div>
  );
};
