import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<TicketControl />} />
        </Routes>
      </Header>
    </Router>
    
    // <React.Fragment>
    //   <Header />
    //   <TicketControl />
    // </React.Fragment>
  );
}

export default App;