import "@/App.css"
import React from "react";
import { BrowserRouter } from "react-router-dom";
import WrapperRoutes from "@/router";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <WrapperRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
