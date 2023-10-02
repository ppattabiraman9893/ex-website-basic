import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Reports from "./pages/Reports";
import Models from "./pages/Models";
import Services from "./pages/Services";
import Insights from "./pages/Insights";
import Index from "./components/Navbar";
import ServiceRegistry from "./pages/ServiceRegistry";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Index />
        <div className="center-container">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/serviceRegistry" component={ServiceRegistry} />
            <Route path="/reports" component={Reports} />
            <Route path="/models" component={Models} />
            <Route path="/insights" component={Insights} />
            <Route path="/services" component={Services} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
