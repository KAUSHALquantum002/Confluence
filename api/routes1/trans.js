import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components...
// import Post from "../Post";
import Post from "../"

import TransPage from "./pages/trans";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Other routes */}
        <Route path="/support">
          <TransPage />
        </Route>
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;

