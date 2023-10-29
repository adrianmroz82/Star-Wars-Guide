import { BrowserRouter as Router } from "react-router-dom";
import { LinkedEntities } from "./components/LinkedEntities/LinkedEntities";
import { AppRouter } from "./components/AppRouter";

import classes from "./App.module.scss";

export function App() {
  return (
    <>
      <header className={classes.header}>
        <h1>Star Wars Characters</h1>
      </header>
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
