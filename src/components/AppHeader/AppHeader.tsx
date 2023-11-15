import classes from "./AppHeader.module.scss";

export function AppHeader() {
  return (
    <div className={classes.headerContainer}>
      <h1>Star</h1>
      <h3>A Visual guide</h3>
      <h1>Wars</h1>
    </div>
  );
}
