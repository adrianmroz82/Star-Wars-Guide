import classes from "./AppHeader.module.scss";

export function AppHeader() {
  return (
    <header className={classes.headerContainer}>
      <h1 className={classes.header}>Star</h1>
      <h3>Visual guide</h3>
      <h1 className={classes.header}>Wars</h1>
    </header>
  );
}
