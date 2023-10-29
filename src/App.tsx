import { BrowserRouter as Router } from "react-router-dom";
import { LinkedEntities } from "./components/LinkedEntities/LinkedEntities";
import { AppRouter } from "./components/AppRouter";

import classes from "./App.module.scss";

export function App() {
  return (
    <div className={classes.container}>
      <Router>
        <LinkedEntities />
        <AppRouter />
      </Router>
    </div>
  );
}
