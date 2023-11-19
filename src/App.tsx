import { BrowserRouter as Router } from "react-router-dom";
import { LinkedEntities } from "./components/LinkedEntities/LinkedEntities";
import { AppRouter } from "./components/AppRouter";

import classes from "./App.module.scss";
import { AppHeader } from "./components/AppHeader/AppHeader";

export function App() {
  return (
    <>
      <AppHeader />
      <div className={classes.container}>
        <Router>
          <div className={classes.sidebar}>
            <LinkedEntities />
          </div>
          <div className={classes.content}>
            <AppRouter />
          </div>
        </Router>
      </div>
    </>
  );
}
